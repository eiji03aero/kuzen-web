import React from 'react';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { css } from 'emotion';

import { Anchor, Button, Modal } from '../../atoms';
import { ElasticDropdown } from '../../molecules';

import { styles } from '../../../utils';
import { paths } from '../../../paths.js';

export const ModalMenu = ({
  shown,
  onClose
}) => {
  const { t } = useTranslation(['common']);
  const anchorClassName = styles.cn([
    Styles.anchor,
    Styles.item,
  ]);
  const buttonClassName = styles.cn([
    Styles.button,
    Styles.item,
  ]);
  return (
    <Modal type='primary' shown={shown} onClose={onClose}>
      <div className={Styles.main}>
        <div className={Styles.content}>
          <Anchor
            className={anchorClassName}
            to={paths.root}
            invert
            children={t('top')}
          />
          <ElasticDropdown
            label={t('services.title')}
            className={Styles.item}
            invert
            anchorProps={{
              className: Styles.anchor
            }}
            extraButtonProps={{
              label: 'ALL'
            }}
            children={
              <div className={Styles.dropdownColumn}>
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('services.kuzen-engage')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('services.kuzen-support')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('services.kuzen-work')}
                />
              </div>
            }
          />
          <ElasticDropdown
            label={t('functions.title')}
            className={Styles.item}
            invert
            anchorProps={{
              className: Styles.anchor
            }}
            extraButtonProps={{
              label: 'ALL'
            }}
            children={
              <div className={Styles.dropdownColumn}>
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions.intuitive-ui')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions.scenario')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions.customizable-contents')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions.data-analytics')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions.nlp')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions.machine-learning')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions.multilingual-support')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions--short.operator')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions.notifications')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions.custom-db')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions--short.integration-with-chat-platforms')}
                />
                <Anchor
                  className={Styles.subAnchor}
                  invert
                  children={t('functions.integration-with-external-systems')}
                />
              </div>
            }
          />
          <Anchor
            className={anchorClassName}
            to={paths.root}
            invert
            children={t('case-studies')}
          />
          <Anchor
            className={anchorClassName}
            to={paths.root}
            invert
            children={t('news')}
          />
          <Button
            className={buttonClassName}
            type='white'
            size='medium'
            label={t('contact')}
            onClick={() => navigate(paths.contact)}
          />
          <Button
            className={buttonClassName}
            type='white-outline'
            size='medium'
            label={t('download-documents')}
          />
        </div>
      </div>
    </Modal>
  );
};

const Styles = {};
Styles.main = css`
  width: 100%;
  height: 100%;
  overflow: scroll;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 275px;
    margin: 0 auto;
    padding: ${styles.scl(8)} 0;
  }

  &__anchor {
    font-size: ${styles.scl(3)};
  }

  &__sub-anchor {
    font-size: ${styles.scl(2)};
  }

  &__button {
    width: 262px;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: ${styles.scl(4)};
    }
  }

  &__dropdown-column {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 380px;
    padding: ${styles.scl(1.5)} 0;
    & > * {
      padding: ${styles.scl(1.5)} 0;
    }
  }

  ${styles.mq.tabletAndAbove} {
    &__content {
      width: 480px;
    }

    &__dropdown-column {
      max-height: 250px;
    }
  }
`;
Styles.content = Styles.main + '__content';
Styles.anchor = Styles.main + '__anchor';
Styles.subAnchor = Styles.main + '__sub-anchor';
Styles.button = Styles.main + '__button';
Styles.item = Styles.main + '__item';
Styles.dropdownColumn = Styles.main + '__dropdown-column';
