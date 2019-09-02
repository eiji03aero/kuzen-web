import React from 'react';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { css } from 'emotion';
import _ from 'lodash';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
import PhoneIcon from 'mdi-react/PhoneIcon';
import EmailIcon from 'mdi-react/EmailIcon';

import { Anchor, Button, DropdownChoice, SvgIcon } from '../../atoms';
import { AnchorDropdown } from '../../molecules';

import * as C from '../../../primitives';
import { styles } from '../../../utils';
import { paths } from '../../../paths.js';

import { useCompositeState } from '../../../hooks';

export const Footer = ({

}) => {
  const { t } = useTranslation(['common']);

  return (
    <footer className={Styles.main}>
      <div className={Styles.content}>
        <div className={Styles.links}>
          <div>
            <Anchor
              className={Styles.anchor}
              invert
              children={t('services.kuzen-engage')}
            />
            <Anchor
              className={Styles.anchor}
              invert
              children={t('services.kuzen-support')}
            />
            <Anchor
              className={Styles.anchor}
              invert
              children={t('services.kuzen-work')}
            />
            <Anchor
              className={Styles.anchor}
              invert
              children={t('functions.title')}
            />
            <Anchor
              className={Styles.anchor}
              invert
              children={t('case-studies')}
            />
          </div>
          <div>
            <Anchor
              className={Styles.anchor}
              invert
              children={
                <>
                  {t('about-company')}
                  <OpenInNewIcon size={18} style={{marginLeft: styles.baseScale(1)}} />
                </>
              }
            />
            <Anchor
              className={Styles.anchor}
              invert
              children={t('recruit-reseller')}
            />
            <Anchor
              className={Styles.anchor}
              invert
              children={t('news')}
            />
            <Anchor
              className={Styles.anchor}
              invert
              to={paths.contact}
              children={t('contact')}
            />
          </div>
        </div>

        <address className={Styles.address}>
          <span className={Styles.companyName}>
            株式会社コンシェルジュ
          </span>

          <span>
            {'〒 101-0061'}
          </span>

          <span>
            {'東京都千代田区神田三崎町3-8-5 千代田JEBL 6F'}
          </span>

          <span>
            <PhoneIcon size={18} style={{marginRight: 8}} />
            {'03-6910-0470 受付 10:00~18:00(平日)'}
          </span>

          <span>
            <EmailIcon size={18} style={{marginRight: 8}} />
            {'info@conciergeu.com'}
          </span>

          <div className={Styles.sns}>
            <Button
              size='fit'
              icon={<SvgIcon name='SocialMedia_Facebook' />}
            />
            <Button
              size='fit'
              icon={<SvgIcon name='SocialMedia_Youtube' />}
            />
            <Button
              size='fit'
              icon={<SvgIcon name='SocialMedia_LinkedIn' />}
            />
          </div>
        </address>
      </div>

      <div className={Styles.bottom}>
        <span
          className={Styles.bottomSpan}
          children='Copyright 2019 by ConciergeU'
        />
        <span
          className={Styles.bottomSpan}
          children='|'
        />
        <Anchor
          className={Styles.bottomSpan}
          children='プライバシーポリシー'
        />
      </div>
    </footer>
  );
};

const Styles = {};
Styles.main = css`
  padding: ${styles.baseScale(5)} ${styles.baseScale(4)};
  background-color: ${C.COLORS.TAUPE};

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__links {
    display: flex;
    width: 100%;
    margin-bottom: ${styles.baseScale(6)};

    & > * {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 50%;
    }
  }

  &__anchor {
    padding: ${styles.baseScale(1.75)} 0;
    font-size: ${styles.baseScale(1.75)};
    path {
      fill: ${C.COLORS.MANATEE};
    }
  }

  &__address {
    margin-bottom: ${styles.baseScale(5)};
    font-size: ${styles.baseScale(1.75)};
    line-height: ${styles.baseScale(3)};
    color: ${C.COLORS.WHITE};

    span {
      display: flex;
      align-items: center;

      path {
        fill: ${C.COLORS.WHITE};
      }
    }
  }

  &__company-name {
    ${styles.fonts.bold}
  }

  &__sns {
    display: flex;
    margin-top: ${styles.baseScale(4)};
    & > * {
      margin-right: ${styles.baseScale(4)};
    }
    svg {
      width: ${styles.baseScale(4)};
      height: ${styles.baseScale(4)};
    }
  }

  &__bottom {
    display: flex;
    justify-content: center;
    padding: ${styles.baseScale(1)} 0;
    border-top: 1px solid ${C.COLORS.MANATEE};

    &__span {
      color: ${C.COLORS.MANATEE};
      font-size: ${styles.baseScale(1.5)};

      &:not(:last-child) {
        margin-right: ${styles.baseScale(2.5)};
      }
    }
  }


  ${styles.mq.tabletAndAbove} {
    padding: ${styles.baseScale(4.5)} ${styles.baseScale(7.5)};
    &__content {
      flex-direction: row;
      & > * {
        flex: 1;
      }
    }
    &__links {
      max-width: 320px;
    }
    &__address {
      max-width: 400px;
      margin-left: auto;
      line-height: ${styles.baseScale(3.5)};
    }
    &__company-name {
      line-height: ${styles.baseScale(4)};
    }
    &__bottom {
      justify-content: flex-start;
    }
  }
`;
Styles.content = Styles.main + '__content';
Styles.contentBox = Styles.main + '__content__box';
Styles.links = Styles.main + '__links';
Styles.anchor = Styles.main + '__anchor';
Styles.address = Styles.main + '__address';
Styles.companyName = Styles.main + '__company-name';
Styles.sns = Styles.main + '__sns';
Styles.bottom = Styles.main + '__bottom';
Styles.bottomSpan = Styles.main + '__bottom__span';
