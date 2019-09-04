import React from 'react';
import { css } from 'emotion';
import { useTranslation } from 'react-i18next';

import { DropdownChoice, SvgIcon } from '../../atoms';
import { AnchorDropdown } from '../../molecules';

import { styles } from '../../../utils';

export const FunctionsDropdown = ({
  ...rest
}) => {
  const { t } = useTranslation(['common']);
  return (
    <AnchorDropdown
      {...rest}
      children={
        <div className={Styles.body}>
          <div style={{marginRight: styles.scl(2)}}>
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_1_Intuitive_UI' />} label={t('functions.intuitive-ui')} />
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_2_Scenario' />} label={t('functions.scenario')} />
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_3_Customizable_Contents' />} label={t('functions.customizable-contents')} />
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_4_Data_Analytics' />} label={t('functions.data-analytics')} />
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_5_NLP' />} label={t('functions.nlp')} />
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_6_Machine_Learning' />} label={t('functions.machine-learning')} />
          </div>
          <div>
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_7_Multilingual_Support' />} label={t('functions.multilingual-support')} />
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_8_Operator'/>} label={t('functions.operator')} />
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_9_Notifications' />} label={t('functions.notifications')} />
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_10_Custom_DB'/>} label={t('functions.custom-db')} />
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_11_Integration_with_Chat_Platforms'/>} label={t('functions.integration-with-chat-platforms')} />
            <DropdownChoice size='wide' leading={<SvgIcon name='Feature_Mini_12_Integration_with_External_Systems'/>} label={t('functions.integration-with-external-systems')} />
          </div>
        </div>
      }
    />
  );
};

const Styles = {};
Styles.body = css`
  display: flex;
  padding: 0 ${styles.scl(.5)};
`;
