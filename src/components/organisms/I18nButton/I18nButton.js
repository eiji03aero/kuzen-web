import React from 'react';
import { css } from 'emotion';
import { useTranslation } from 'react-i18next';

import { Button } from '../../atoms';

import { styles } from '../../../utils';

export const I18nButton = ({
  children
}) => {
  const { i18n } = useTranslation();
  const iconSrc = i18n.language === 'ja'
    ? 'Icons/Flag_USA.svg'
    : 'Icons/Flag_Japan.svg';

  const handleClick = (e) => {
    const nextLanguage = i18n.language === 'ja'
      ? 'en'
      : 'ja';
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <Button
      size='fit'
      icon={
        <img className={Styles.main} src={iconSrc} alt='language flag' />
      }
      onClick={handleClick}
    />
  );
};

const Styles = {};
Styles.main = css`
  width: ${styles.baseScale(4)};
  height: ${styles.baseScale(4)};
`;
