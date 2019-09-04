import React from 'react';
import { css, keyframes } from 'emotion';
import _ from 'lodash';

export const TypeEffect = ({
  texts: textsProp,
  showWordMS,
  deleteCharMS,
  addCharMS
}) => {
  const currentIndex = React.useRef(0);
  const texts = React.useRef(textsProp);
  const spanRef = React.useRef(null);
  const barRef = React.useRef(null);
  const abortFlag = React.useRef(false);

  const createPromise = (func) => {
    return new Promise((resolve, reject) => {
      if (abortFlag.current) {
        return reject();
      }
      return func(resolve, reject);
    });
  };

  const showWord = () => {
    return createPromise((resolve) => {
      barRef.current.classList.add(Styles.blink);
      setTimeout(() => {
        barRef.current.classList.remove(Styles.blink);
        return resolve();
      }, showWordMS);
    });
  };

  const deleteCharacters = () => {
    return createPromise((resolve) => {
      const handler = () => {
        const text = spanRef.current.textContent;
        if (text === '') {
          return resolve();
        }

        spanRef.current.textContent = text.slice(0, -1);
        setTimeout(handler, deleteCharMS);
      };

      handler();
    });
  };

  const changeIndex = () => {
    return createPromise((resolve) => {
      const idx = currentIndex.current;
      currentIndex.current = idx === texts.current.length - 1
        ? 0
        : idx + 1;
      resolve();
    });
  };

  const addCharacters = () => {
    return createPromise((resolve) => {
      const handler = () => {
        const text = spanRef.current.textContent;
        const nextWord = texts.current[currentIndex.current];
        if (text === nextWord) {
          return resolve();
        }

        spanRef.current.textContent = nextWord.slice(0, text.length + 1);
        setTimeout(handler, addCharMS);
      };

      handler();
    });
  };

  const handleType = () => {
    showWord()
      .then(deleteCharacters)
      .then(changeIndex)
      .then(addCharacters)
      .then(handleType)
      .catch(() => {
        abortFlag.current = false;
      });
  };

  const startTyping = () => {
    spanRef.current.textContent = texts.current[0];
    handleType();
  };

  React.useEffect(() => {
    if (_.isEqual(textsProp, texts.current)) return;

    abortFlag.current = true;
    texts.current = textsProp;
    currentIndex.current = 0;
    startTyping();
  }, [textsProp]);

  React.useEffect(() => {
    startTyping();
  }, []);

  return (
    <React.Fragment>
      <span ref={spanRef} />
      <span ref={barRef} className={Styles.blink}>|</span>
    </React.Fragment>
  )
};

TypeEffect.defaultProps = {
  showWordMS: 4000,
  deleteCharMS: 80,
  addCharMS: 160
};

const blinkAnimation = keyframes`
  0%, 49%, 100% {
    opacity: 1;
  }
  50%, 99% {
    opacity: 0;
  }
`;

const Styles = {};
Styles.blink = css`
  animation: ${blinkAnimation} 1s linear .5s infinite;
`;
