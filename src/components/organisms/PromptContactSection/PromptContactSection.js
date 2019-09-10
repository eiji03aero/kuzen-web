import React from 'react';
import { useTranslation } from 'react-i18next';
import { css } from 'emotion';

import { Container, Button } from '../../atoms';
import { Section } from '../../molecules';

import { styles } from '../../../utils';
import { useMedia } from '../../../hooks';

export const PromptContactSection = ({
  className,
  level: TitleComponent,
  ...rest
}) => {
  const mediaQuery = useMedia();
  const { t } = useTranslation('common');
  const mainClassName = styles.cn([
    className,
    Styles.main
  ]);
  return (
    <Section className={mainClassName} type='primary'>
      <Container className={Styles.content}>
        <TitleComponent
          className={Styles.sentence}
          children={
            <>
              {t('common:prompt-contact-section.title-1')}
              <br className={styles.show.mobileOnly} />
              {t('common:prompt-contact-section.title-2')}
              <br className={styles.show.tabletOnly} />
              {t('common:prompt-contact-section.title-3')}
            </>
          }
        />
        <Button
          type='white-outline'
          size={mediaQuery.mobile
            ? 'default'
            : 'medium'}
          label={t('common:prompt-contact-section.contact-us')}
        />
      </Container>
    </Section>
  );
};

PromptContactSection.defaultProps = {
  level: 'h1'
};

const Styles = {};
Styles.main = css`
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__sentence {
    ${styles.fonts.bold}
    font-size: ${styles.scl(2.25)};
    line-height: ${styles.scl(4)};
    margin-bottom: ${styles.scl(2.5)};
    text-align: center;
  }

  ${styles.mq.tabletAndAbove} {
    &__content {
      flex-direction: row;
      flex-flow: row-reverse;
      justify-content: center;
    }

    &__sentence {
      font-size: ${styles.scl(2.75)};
      line-height: ${styles.scl(4)};
      margin-bottom: 0;
      margin-left: ${styles.scl(5)};
      text-align: left;
    }
  }

  ${styles.mq.pcAndAbove} {
    &__sentence {
      font-size: ${styles.scl(3.5)};
    }
  }
`;
Styles.content = Styles.main + '__content';
Styles.sentence = Styles.main + '__sentence';
Styles.span = Styles.main + '__span';
