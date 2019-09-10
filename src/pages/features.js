import React from 'react';
import { graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import { useTranslation } from 'react-i18next';
import { css } from 'emotion';
import _ from 'lodash';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';

import {
  Anchor,
  Container,
  FramedTitle,
  SvgIcon,

  TopBanner,
  Section,

  PromptContactSection
} from '../components';
import Layout from "../components/layout";

import * as C from '../primitives';
import { styles } from '../utils';
import { useMedia } from '../hooks';
import { paths } from '../paths.js';

export default ({data}) => {
  const { t } = useTranslation(['common', 'features'])
  const mediaQuery = useMedia();

  const topImageFluid = data.topBannerImage.childImageSharp.fluid;

  return (
    <Layout>
      <TopBanner
        type='short'
        fluid={topImageFluid}
        children={<FramedTitle children="機能一覧" />}
      />
      <Container className={Styles.container}>
        <div className={Styles.colorBackdrop} />
        <div className={fcStyles.container}>
          {_.map(data.allFeature.edges, ({node: {id, name, icon}}) => (
            <FeatureCard
              key={id}
              level='h2'
              iconName={icon}
              title={t(`features:${name}.title`)}
              description={t(`features:${name}.description`)}
              link={t('common:learn-more')}
            />
          ))}
        </div>
      </Container>
      <PromptContactSection />
    </Layout>
  );
};

export const query = graphql`
  query {
    topBannerImage: file(
      relativePath: { eq: "Backgrounds/Background_Kuzen_Features.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allFeature {
      edges {
        node {
          id
          name
          icon
        }
      }
    }
  }
`;

const FeatureCard = ({
  level: TitleComponent = 'h1',
  iconName,
  title,
  description,
  link,
  to
}) => {
  return (
    <Anchor className={fcStyles.wrapper} to={to}>
      <article className={fcStyles.main}>
        <header className={fcStyles.header}>
          <SvgIcon className={fcStyles.icon}name={iconName} />
          <TitleComponent className={fcStyles.title} children={title} />
        </header>
        <p className={fcStyles.description}>
          {description}
        </p>
        <span className={fcStyles.link}>
          {link}
          <ChevronRightIcon />
        </span>
      </article>
    </Anchor>
  );
};

const fcStyles = {};
fcStyles.main = css`
  position: relative;
  width: 100%;
  padding: ${styles.scl(3)} ${styles.scl(3)} ${styles.scl(3.5)};
  background-color: ${C.COLORS.WHITE};
  box-shadow: 0 3px 12px rgba(0,0,0,0.16);
  border-radius: ${styles.scl(2.5)};
  transition: box-shadow 250ms;
  &__wrapper {
    display: flex;
  }
  &__header {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: ${styles.scl(1.25)};
  }
  &__icon {
    width: 30px;
    height: 30px;
    margin: 0 ${styles.scl(1)} 0 0;
    path {
      fill: ${C.COLORS.VERDIGRIS};
    }
  }
  &__title {
    ${styles.fonts.bold}
    font-size: ${styles.scl(2.25)};
    line-height: ${styles.scl(3)};
  }
  &__description {
    font-size: ${styles.scl(1.75)};
    line-height: ${styles.scl(3)};
  }
  &__link {
    display: inline-flex;
    align-items: center;
    position: absolute;
    bottom: ${styles.scl(1.5)};
    right: ${styles.scl(2)};
    font-size: ${styles.scl(1.75)};
    line-height: ${styles.scl(1.25)};
    color: ${C.COLORS.LAVENDER_INDIGO};
    opacity: 0;
    transition: opacity 250ms;
    svg {
      path: {
        fill: ${C.COLORS.LAVENDER_INDIGO};
      }
    }
  }
  &:hover {
    box-shadow: 0 3px 12px ${C.COLORS.LAVENDER_INDIGO_56};
  }
  &:hover &__link {
    opacity: 1;
  }

  ${styles.mq.tabletAndAbove} {
    width: 200px;
    min-height: 225px;
    padding: ${styles.scl(2.5)};
    &__header {
      padding: ${styles.scl(3.75)} 0 0;
      justify-content: flex-end;
    }
    &__icon {
      position: absolute;
      top: 0;
      left: 0;
      width: ${styles.scl(5)};
      height: ${styles.scl(5)};
      margin: 0;
    }
    &__title { }
  }

  ${styles.mq.pcAndAbove} {
    width: 310px;
    min-height: 300px;
    padding: ${styles.scl(4)};
    &__header {
      flex-direction: column;
      align-items: center;
      margin-bottom: ${styles.scl(2)};
      padding: 0;
    }
    &__icon {
      position: relative;
      width: 120px;
      height: 120px;
      margin-bottom: ${styles.scl(3)};
    }
    &__title {
      text-align: center;
    }
    &__description {
      text-align: center;
    }
  }
`;
fcStyles.wrapper = fcStyles.main + '__wrapper';
fcStyles.header = fcStyles.main + '__header';
fcStyles.icon = fcStyles.main + '__icon';
fcStyles.title = fcStyles.main + '__title';
fcStyles.description = fcStyles.main + '__description';
fcStyles.link = fcStyles.main + '__link';

fcStyles.container = css`
  display: flex;
  flex-direction: column;
  padding: 0 ${styles.scl(3.75)};
  & > *:not(:last-child) {
    margin-bottom: ${styles.scl(2.5)};
  }

  ${styles.mq.tabletAndAbove} {
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    & > *:not(:last-child) {
      margin-bottom: 0;
    }
    & > * {
      &:not(:nth-of-type(3n)) {
        margin-right: ${styles.scl(3.75)};
      }
      &:not(:nth-last-of-type(-n+3)) {
        margin-bottom: ${styles.scl(2.5)};
      }
    }
  }

  ${styles.mq.pcAndAbove} {
    & > * {
      &:not(:nth-of-type(3n)) {
        margin-right: ${styles.scl(5)};
      }
      &:not(:nth-last-of-type(-n+3)) {
        margin-bottom: ${styles.scl(5)};
      }
    }
  }
`;

const Styles = {};
Styles.container = css`
  position: relative;
  margin-bottom: ${styles.scl(7.5)};

  ${styles.mq.tabletAndAbove} {
    margin-bottom: ${styles.scl(10)};
  }

  ${styles.mq.pcAndAbove} {
    margin-bottom: ${styles.scl(15)};
  }
`;
Styles.colorBackdrop = css`
  display: none;
  ${styles.mq.pcAndAbove} {
    display: block;
    position: absolute;
    top: ${styles.scl(7)};
    bottom: ${styles.scl(7)};
    left: ${styles.scl(-5)};
    right: ${styles.scl(-5)};
    background-color: ${C.COLORS.GHOST_WHITE};
  }
`;
