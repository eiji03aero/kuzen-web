import React from 'react';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { css } from 'emotion';
import _ from 'lodash';
import MenuIcon from 'mdi-react/MenuIcon';

import { FunctionsDropdown } from './FunctionsDropdown.js';
import { I18nButton } from '../I18nButton';
import { ModalMenu } from './ModalMenu.js';
import { Anchor, Button, DropdownChoice } from '../../atoms';
import { AnchorDropdown } from '../../molecules';

import * as C from '../../../primitives';
import { styles } from '../../../utils';
import { paths } from '../../../paths.js';
import { useCompositeState } from '../../../hooks';

export const Header = ({
  fixed
}) => {
  const [state, setState] = useCompositeState({
    isScrolled: false,
    isModalMenuOpen: false,
  });
  const { t } = useTranslation(['common']);

  const isFloated = !fixed && !state.isScrolled;

  const mainClassName = styles.cn([
    Styles.main,
    isFloated && `${Styles.main}--is-floated`
  ]);
  const tabletAndBelowItemClassName = styles.cn([
    Styles.item,
    styles.hide.pcAndAbove
  ]);
  const pcOnlyItemClassName = styles.cn([
    Styles.item,
    styles.hide.tabletAndBelow
  ]);

  const handleOpenMenu = (e) => setState({isModalMenuOpen: true});
  const handleCloseMenu = (e) => setState({isModalMenuOpen: false});

  const handleWindowScroll = _.throttle((e) => {
    const nextIsScrolled = window.scrollY > 5;
    if (nextIsScrolled !== state.isScrolled) {
      setState({ isScrolled: nextIsScrolled });
    }
  }, 200);

  React.useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  });

  return (
    <div className={Styles.wrapper}>
      <header className={mainClassName}>
        <div className={Styles.left}>
          <div className={Styles.item}>
            <Anchor
              to={paths.root}
              children={
                <img className={Styles.companyLogo} alt='kuzen logo' />
              }
            />
          </div>
        </div>
        <div className={Styles.right}>
          <div className={pcOnlyItemClassName}>
            <AnchorDropdown
              label={t('services.title')}
              invert={isFloated}
              portalPositionProps={{
                edgeMargin: 32
              }}
              children={
                <>
                  <DropdownChoice label={t('services.kuzen-engage')} />
                  <DropdownChoice label={t('services.kuzen-support')} />
                  <DropdownChoice label={t('services.kuzen-work')} />
                </>
              }
            />
          </div>
          <div className={pcOnlyItemClassName}>
            <FunctionsDropdown
              label={t('functions.title')}
              invert={isFloated}
              portalPositionProps={{
                edgeMargin: 32,
                position: 'bottom-edge-left'
              }}
              bodyCaretProps={{
                style: {left: 40, transform: ''}
              }}
            />
          </div>
          <div className={pcOnlyItemClassName}>
            <Anchor
              to={paths.root}
              invert={isFloated}
              children={t('case-studies')}
            />
          </div>
          <div className={pcOnlyItemClassName}>
            <Anchor
              to={paths.root}
              invert={isFloated}
              children={t('news')}
            />
          </div>

          <div className={Styles.item}>
            <I18nButton />
          </div>

          <div className={tabletAndBelowItemClassName}>
            <Button
              size='fit'
              icon={<MenuIcon className={Styles.menuIcon} />}
              onClick={handleOpenMenu}
            />
          </div>

          <div className={pcOnlyItemClassName}>
            <Button
              type={isFloated
                ? 'white-outline'
                : 'black-outline'}
              label={t('contact')}
              onClick={() => navigate(paths.root)}
            />
          </div>
        </div>
      </header>

      <ModalMenu shown={state.isModalMenuOpen} onClose={handleCloseMenu} />
    </div>
  );
};

Header.defaultProps = {
  fixed: false
};

const Styles = {};
Styles.main = css`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${C.HEADER_HEIGHT.MOBILE}px;
  padding: 0 ${styles.baseScale(3)};
  background-color: ${C.COLORS.WHITE};
  box-shadow: 0 2px 12px ${C.COLORS.DIM_GREY};
  transition: background-color 250ms, height 250ms;

  &__left {
  }

  &__right {
    display: flex;
    margin-left: auto;

    & > * {
      margin-left: ${styles.baseScale(3)};
    }
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__company-logo {
    content: url("Icons/Kuzen_Logo_Standard_Color.svg");
    width: ${styles.baseScale(8)};
    height: ${styles.baseScale(2.25)};
  }

  &__menu-icon {
    width: ${styles.baseScale(4)};
    height: ${styles.baseScale(4)};
    path {
      fill: ${C.COLORS.TAUPE};
    }
  }

  &--is-floated {
    box-shadow: none;
  }


  ${styles.mq.tabletAndAbove} {
    height: ${C.HEADER_HEIGHT.TABLET}px;
    padding: 0 ${styles.baseScale(4)};

    &__company-logo { }

    &__menu-icon { }

    &--is-floated {
      height: ${C.HEADER_HEIGHT.TABLET}px;
      background-color: transparent;
      color: ${C.COLORS.WHITE};
    }
    &--is-floated &__company-logo {
      content: url("Icons/Kuzen_Logo_White.svg");
    }
    &--is-floated &__menu-icon {
      path {
        fill: ${C.COLORS.WHITE};
      }
    }
  }


  ${styles.mq.pcAndAbove} {
    padding: 0 ${styles.baseScale(10)};
    &__right {
      padding-top: ${styles.baseScale(1.5)};
      & > * {
        margin-left: ${styles.baseScale(5)};
      }
    }

    &__company-logo {
      width: ${styles.baseScale(10.5)};
      height: ${styles.baseScale(3)};
    }

    &__menu-icon { }

    &--is-floated {
      height: ${C.HEADER_HEIGHT.PC}px;
    }
  }
`;
Styles.left = Styles.main + '__left';
Styles.right = Styles.main + '__right';
Styles.item = Styles.main + '__item';
Styles.companyLogo = Styles.main + '__company-logo';
Styles.menuIcon = Styles.main + '__menu-icon';

Styles.wrapper = css`
  height: ${C.HEADER_HEIGHT.MOBILE}px;

  ${styles.mq.tabletAndAbove} {
    height: 0px;
  }
`;
