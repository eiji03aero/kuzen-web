import React from 'react';
import { graphql, navigate } from 'gatsby';
import Img from 'gatsby-image';
import { useTranslation } from 'react-i18next';
import { css } from 'emotion';
import _ from 'lodash';

import {
  SvgIcon,
  Button,
  Container,
  TopBanner,
  TypeEffect,
  Anchor
} from '../components';
import Layout from "../components/layout";

import * as C from '../primitives';
import { styles } from '../utils';
import { useMedia } from '../hooks';
import { paths } from '../paths.js';

export default ({data}) => {
  const { t, i18n } = useTranslation(['common', 'index']);
  const mediaQuery = useMedia();

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: styles.mqCond.tabletAndAbove
    }
  ];

  const clientLogosMobileFluid = data.clientLogosMobile.childImageSharp.fluid;
  const clientLogosWebFluid = data.clientLogosWeb.childImageSharp.fluid;

  const implementationProcess_Mobile = i18n.language === 'ja'
    ?  data.implementationProcessMobile_ja.childImageSharp.fluid
    :  data.implementationProcessMobile_en.childImageSharp.fluid;

  const implementationProcess_Web = i18n.language === 'ja'
    ?  data.implementationProcessWeb_ja.childImageSharp.fluid
    :  data.implementationProcessWeb_en.childImageSharp.fluid;

  console.log(data);

  return (
    <Layout>
      <TopBanner
        fluid={sources}
        children={
          <Top
            title={
              <TypeEffect texts={t('index:top.phrases', {returnObjects: true})} />
            }
            subTitle={t('index:top.sub-title')}
            buttonLabel={t('common:download-documents')}
            onClick={() => navigate(paths.contact)}
          />
        }
      />

      <Section>
        <Container>
          <Section.Title component='h2'>
            {t('index:usecases.title')}
          </Section.Title>
          <div className={bgStyles.main}>
            <Button
              label='ENGAGE'
              type='secondary'
              size='small'
              rectangle
            />
            <Button
              label='SUPPORT'
              type='default'
              size='small'
              rectangle
            />
            <Button
              label='WORK'
              type='default'
              size='small'
              rectangle
            />
          </div>
          <div className={Styles.icGrid}>
            <IntroductionCard
              level='h3'
              catchphrase={t('index:usecases.kuzen-engage.catchphrase')}
              imageUrl={data.introKuzenEngageImage.publicURL}
              title={t('common:services.kuzen-engage')}
              points={t('index:usecases.kuzen-engage.points', {returnObjects: true})}
              buttonLabel={t('index:usecases.read-more')}
            />
            <IntroductionCard
              level='h3'
              catchphrase={t('index:usecases.kuzen-support.catchphrase')}
              imageUrl={data.introKuzenSupportImage.publicURL}
              title={t('common:services.kuzen-support')}
              points={t('index:usecases.kuzen-support.points', {returnObjects: true})}
              buttonLabel={t('index:usecases.read-more')}
            />
            <IntroductionCard
              level='h3'
              catchphrase={t('index:usecases.kuzen-work.catchphrase')}
              imageUrl={data.introKuzenWorkImage.publicURL}
              title={t('common:services.kuzen-work')}
              points={t('index:usecases.kuzen-work.points', {returnObjects: true})}
              buttonLabel={t('index:usecases.read-more')}
            />
          </div>
        </Container>
      </Section>

      <PromptContactSection className={styles.show.mobileOnly} level='h2' />

      <Section>
        <Container>
          <Section.TitleLogo />
          <Section.Title className={atStyles.main} component='h2'>
            <Html
              compoennt='span'
              className={atStyles.breakable}
              children={t('index:case-studies.title-1', {
                numberOfCompanies: t('index:case-studies.number-of-companies')
              })}
            />
            <Html
              compoennt='span'
              className={atStyles.breakable}
              children={t('index:case-studies.title-2')}
            />
          </Section.Title>
          <Img className={styles.show.mobileOnly} imgStyle={{objectFit: 'fit'}} fluid={clientLogosMobileFluid} />
          <Img className={styles.show.tabletAndAbove} imgStyle={{objectFit: 'fit'}} fluid={clientLogosWebFluid} />
        </Container>
      </Section>

      <Section type={mediaQuery.mobile ? 'white' : 'default'}>
        <Container>
          <Section.TitleLogo />
          <Section.Title className={atStyles.main} component='h2'>
            {t('index:why-kuzen.title')}
          </Section.Title>
          <div className={ecGridStyles.main}>
            <ExplanationCard
              level='h3'
              imageUrl={data.whyKuzen1.publicURL}
              title={t('index:why-kuzen.1.title')}
              description={t('index:why-kuzen.1.description')}
            />
            <ExplanationCard
              level='h3'
              imageUrl={data.whyKuzen2.publicURL}
              title={t('index:why-kuzen.2.title')}
              description={t('index:why-kuzen.2.description')}
            />
            <ExplanationCard
              level='h3'
              imageUrl={data.whyKuzen3.publicURL}
              title={t('index:why-kuzen.3.title')}
              description={t('index:why-kuzen.3.description')}
            />
            <ExplanationCard
              level='h3'
              imageUrl={data.whyKuzen4.publicURL}
              title={t('index:why-kuzen.4.title')}
              description={t('index:why-kuzen.4.description')}
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Section.TitleLogo />
          <Section.Title component='h2'>
            {t('index:implementation-process.title')}
          </Section.Title>
          <div className={ipStyles.main}>
            <Img className={styles.show.mobileOnly} fluid={implementationProcess_Mobile} />
            <Img className={styles.show.tabletAndAbove} fluid={implementationProcess_Web} />
          </div>
        </Container>
      </Section>

      <PromptContactSection level='h2' />

      <Section>
        <Container>
          <Section.TitleLogo />
          <Section.Title component='h2'>
            {t('index:best-feature.title')}
          </Section.Title>
          <div className={fcStyles.container}>
            <div className={fcStyles.containerGrid}>
              <FeatureCard
                level='h3'
                iconName='Mini_Best_Feature_1_Intuitive_UI'
                title={t('index:best-feature.intuitive-ui.title')}
                description={t('index:best-feature.intuitive-ui.description')}
                to={paths.root}
              />
              <FeatureCard
                level='h3'
                iconName='Mini_Best_Feature_2_NLP'
                title={t('index:best-feature.nlp.title')}
                description={t('index:best-feature.nlp.description')}
                to={paths.root}
              />
              <FeatureCard
                level='h3'
                iconName='Mini_Best_Feature_3_Machine_Learning'
                title={t('index:best-feature.machine-learning.title')}
                description={t('index:best-feature.machine-learning.description')}
                to={paths.root}
              />
              <FeatureCard
                level='h3'
                iconName='Mini_Best_Feature_4_External_API'
                title={t('index:best-feature.external-api.title')}
                description={t('index:best-feature.external-api.description')}
                to={paths.root}
              />
            </div>
            <div className={fcStyles.containerFooter}>
              <Button
                className={fcStyles.containerFooterButton}
                type='secondary-outline'
                label={'機能一覧へ'}
              />
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query {
    mobileImage: file(
      relativePath: { eq: "Backgrounds/Phone/Background_TopPage_Phone.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 768, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopImage: file(
      relativePath: { eq: "Backgrounds/Background_TopPage.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    introKuzenEngageImage: file(relativePath: { eq: "Graphics/TopPage/Scenario_Kuzen-Engage.png"}) {
      publicURL
    }
    introKuzenSupportImage: file(relativePath: { eq: "Graphics/TopPage/Scenario_Kuzen-Support.png"}) {
      publicURL
    }
    introKuzenWorkImage: file(relativePath: { eq: "Graphics/TopPage/Scenario_Kuzen-Work.png"}) {
      publicURL
    }

    clientLogosMobile: file(
      relativePath: { eq: "Client Logos/Client-Logos-All-in-One/ClientLogos_Phone.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 768, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clientLogosWeb: file(
      relativePath: { eq: "Client Logos/Client-Logos-All-in-One/ClientLogos_Web.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    whyKuzen1: file(
      relativePath: { eq: "Graphics/TopPage/Why-Kuzen_Reason 1.png"}
    ) {
      publicURL
    }
    whyKuzen2: file(
      relativePath: { eq: "Graphics/TopPage/Why-Kuzen_Reason 2.png"}
    ) {
      publicURL
    }
    whyKuzen3: file(
      relativePath: { eq: "Graphics/TopPage/Why-Kuzen_Reason 3.png"}
    ) {
      publicURL
    }
    whyKuzen4: file(
      relativePath: { eq: "Graphics/TopPage/Why-Kuzen_Reason 4.png"}
    ) {
      publicURL
    }

    implementationProcessMobile_ja: file(
      relativePath: { regex: "/Kuzen_Implementation-Process2_Phone.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 320, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    implementationProcessMobile_en: file(
      relativePath: { regex: "/Kuzen_Implementation-Process2_Phone_EN.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 320, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    implementationProcessWeb_ja: file(
      relativePath: { regex: "/Kuzen_Implementation-Process2.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    implementationProcessWeb_en: file(
      relativePath: { regex: "/Kuzen_Implementation-Process2_EN.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Styles = {};
Styles.main = css`
  &__ic-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
      margin: 0 0 ${styles.scl(5.5)};
    }
  }

  ${styles.mq.tabletAndAbove} {
    &__ic-grid {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      & > *:not(:last-child) {
        margin: 0;
      }
    }
  }


  ${styles.mq.pcAndAbove} {
  }
`;
Styles.icGrid = Styles.main + '__ic-grid';
Styles.clientLogos = Styles.main + '__client-logos';

const atStyles = {};
atStyles.main = css`
  ${styles.fonts.bold}
  font-size: ${styles.scl(2.75)};
  line-height: ${styles.scl(4)};
  &__breakable {
    display: block;
  }
  strong {
    margin-right: ${styles.scl(1)};
    color: ${C.COLORS.VERDIGRIS};
    font-size: ${styles.scl(3.25)};
    line-height: ${styles.scl(4)};
  }

  ${styles.mq.tabletAndAbove} {
    font-size: ${styles.scl(3)};
    line-height: ${styles.scl(4.5)};
    &__breakable {
      display: inline;
    }
    strong {
      color: ${C.COLORS.VERDIGRIS};
      font-size: ${styles.scl(4.5)};
      line-height: ${styles.scl(4.5)};
    }
  }

  ${styles.mq.pcAndAbove} {
    font-size: ${styles.scl(3.25)};
    line-height: ${styles.scl(4.5)};
    strong {
      font-size: ${styles.scl(5.25)};
      line-height: ${styles.scl(4.5)};
    }
  }
`;
atStyles.breakable = atStyles.main + '__breakable';
atStyles.accent = atStyles.main + '__accent';

const ipStyles = {};
ipStyles.main = css`
  max-width: 320px;
  margin: 0 auto;

  ${styles.mq.tabletAndAbove} {
    max-width: 100%;
  }
`;

/* -------------------- Top -------------------- */
const Top = ({
  title,
  subTitle,
  buttonLabel,
  onClick
}) => {
  return (
    <div className={tStyles.main}>
      <h1 className={tStyles.title}>
        {title}
      </h1>
      <p className={tStyles.subTitle}>
        {subTitle}
      </p>
      <Button
        className={tStyles.button}
        type='white-outline'
        label={buttonLabel}
        onClick={onClick}
      />
    </div>
  );
};

const tStyles = {};
tStyles.main = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    ${styles.fonts.bold}
    font-size: ${styles.scl(4)};
  }
  &__sub-title {
    font-size: ${styles.scl(2)};
  }
  &__title, &__sub-title {
    margin-bottom: ${styles.scl(4)};
    color: ${C.COLORS.WHITE};
  }
  &__button {
    height: ${styles.scl(5)};
    padding: 0 ${styles.scl(4)};
    font-size: ${styles.scl(2)};
    border-radius: ${styles.scl(2.5)};
  }

  ${styles.mq.tabletAndAbove} {
    &__title {
      font-size: ${styles.scl(5.5)};
    }
    &__sub-title {
      font-size: ${styles.scl(2.25)};
    }
  }

  ${styles.mq.pcAndAbove} {
    &__title {
      font-size: ${styles.scl(7.5)};
    }
    &__sub-title {
      font-size: ${styles.scl(3.25)};
    }
    &__title, &__sub-title {
      margin-bottom: ${styles.scl(5)};
    }
    &__button {
      height: ${styles.scl(9)};
      padding: 0 ${styles.scl(5)};
      font-size: ${styles.scl(2.75)};
      border-radius: ${styles.scl(4.5)};
    }
  }
`;
tStyles.title = tStyles.main + '__title';
tStyles.subTitle = tStyles.main + '__sub-title';
tStyles.button = tStyles.main + '__button';

const bgStyles = {};
bgStyles.main = css`
  display: flex;
  justify-content: center;
  margin-bottom: ${styles.scl(3.5)};

  & > * {
    flex: 1;
    max-width: 100px;
    &:not(:last-child) {
      margin-right: ${styles.scl(3)};
    }
  }

  ${styles.mq.tabletAndAbove} {
    display: none;
  }
`;


/* -------------------- Section -------------------- */
const Section = ({
  className = '',
  type = 'default',
  ...rest
}) => {
  const mainClassName = styles.cn([
    className,
    sStyles.main,
    type && `${sStyles.main}--type-${type}`
  ]);
  return (
    <section className={mainClassName} {...rest}/>
  );
};

Section.TitleLogo = ({
  className = '',
  children,
  ...rest
}) => {
  return (
    <div className={styles.cn([className, sStyles.titleLogo])} {...rest}>
      <img src='Icons/Title-Icon.png' alt='title icon' />
    </div>
  );
};

Section.Title = ({
  component: Component = 'h1',
  className = '',
  ...rest
}) => {
  return (
    <Component className={styles.cn([className, sStyles.title])} {...rest} />
  );
};

const sStyles = {};
sStyles.main = css`
  padding: ${styles.scl(5)} 0;

  &__title-logo {
    display: none;
  }

  &__title {
    ${styles.fonts.bold}
    margin: 0 auto ${styles.scl(2)};
    font-size: ${styles.scl(2.5)};
    line-height: ${styles.scl(4.75)};
    color: ${C.COLORS.TAUPE};
    text-align: center;
  }

  &--type-default { }
  &--type-white {
    background-color: ${C.COLORS.GHOST_WHITE};
  }
  &--type-primary {
    background-color: ${C.COLORS.VERDIGRIS};
    color: ${C.COLORS.WHITE};
  }


  ${styles.mq.tabletAndAbove} {
    padding: ${styles.scl(8)} 0;
    &__title {
      margin: 0 auto ${styles.scl(5)};
      font-size: ${styles.scl(3.5)};
    }
  }

  ${styles.mq.pcAndAbove} {
    padding: ${styles.scl(9)} 0;
    &__title-logo {
      display: flex;
      justify-content: center;
      margin: 0 auto ${styles.scl(5)};
      img {
        width: ${styles.scl(8.5)};
        height: ${styles.scl(8.75)};
      }
    }
    &__title {
      margin: 0 auto ${styles.scl(5)};
      font-size: ${styles.scl(4)};
    }
  }
`;
sStyles.titleLogo = sStyles.main + '__title-logo';
sStyles.title = sStyles.main + '__title';


/* -------------------- IntroductionCard -------------------- */
const IntroductionCard = ({
  level: TitleComponent = 'h1',
  catchphrase,
  imageUrl,
  title,
  points,
  buttonLabel,
  to,
}) => {
  const mediaQuery = useMedia();
  return (
    <article className={icStyles.main}>
      <TitleComponent
        className={icStyles.catchphrase}
        children={catchphrase}
      />
      <div className={icStyles.img}>
        <img src={imageUrl} />
      </div>
      <div className={icStyles.pointsWrapper}>
        <dl className={icStyles.points}>
          <dt
            className={icStyles.title}
            children={title}
          />
          {_.map(points, (p, i) => (
            <dd key={i}>
              <SvgIcon name='Tick'/>
              <span>{p}</span>
            </dd>
          ))}
        </dl>
      </div>
      <Button
        type={mediaQuery.mobile
          ? 'secondary'
          : 'secondary-outline'}
        label={buttonLabel}
        block
        className={icStyles.button}
        onClick={() => navigate(to)}
      />
    </article>
  );
};

const icStyles = {};
icStyles.main = css`
  width: 280px;

  &__catchphrase {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: ${styles.scl(8.5)};
    margin-bottom: ${styles.scl(5)};
    border: 3px solid ${C.COLORS.LAVENDER_INDIGO};
    color: ${C.COLORS.LAVENDER_INDIGO};
    font-size: ${styles.scl(2)};
    text-align: center;
    white-space: pre;
    &:before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      border-top: ${styles.scl(1.5)} solid ${C.COLORS.LAVENDER_INDIGO};
      border-left: ${styles.scl(1.5)} solid transparent;
      border-right: ${styles.scl(1.5)} solid transparent;
      transform: translateX(-50%);
    }
  }
  &__img {
    display: flex;
    padding: 0 ${styles.scl(3.5)};
    margin-bottom: ${styles.scl(2.25)};
    img {
      width: 100%;
      height: auto;
    }
  }
  &__title {
    ${styles.fonts.bold}
    display: flex;
    justify-content: center;
    margin-bottom: ${styles.scl(1.25)};
    font-size: ${styles.scl(2.75)};
    line-height: ${styles.scl(4)};
  }
  &__points-wrapper {
    display: flex;
    justify-content: center;
  }
  &__points {
    margin-bottom: ${styles.scl(2.5)};
    & > * {
      display: flex;
      align-items: center;
      span {
        margin-left: ${styles.scl(1.5)};
        font-size: ${styles.scl(2)};
        line-height: ${styles.scl(3.75)};
      }
      svg {
        width: ${styles.scl(2)};
        height: ${styles.scl(2)};
        path {
          fill: ${C.COLORS.LAVENDER_INDIGO};
        }
      }
    }
  }
  &__button {
    font-size: ${styles.scl(1.75)};
  }


  ${styles.mq.tabletAndAbove} {
    width: 210px;
    &__catchphrase {
      height: ${styles.scl(9.5)};
      font-size: ${styles.scl(1.75)};
      line-height: ${styles.scl(3)};
      margin-bottom: ${styles.scl(1.75)};
    }
    &__img {
      height: 146px;
      padding: 0;
    }
    &__title {
      margin-bottom: ${styles.scl(1)};
      font-size: ${styles.scl(2.25)};
      line-height: ${styles.scl(4)};
    }
    &__points {
      margin-bottom: ${styles.scl(3)};
      & > * {
        span {
          font-size: ${styles.scl(1.5)};
          line-height: ${styles.scl(2.75)};
        }
      }
    }
    &__button {
      height: ${styles.scl(3)};
      font-size: ${styles.scl(1.75)};
    }
  }

  ${styles.mq.pcAndAbove} {
    width: 314px;
    &__catchphrase {
      height: ${styles.scl(14)};
      font-size: ${styles.scl(2.75)};
      line-height: ${styles.scl(3.5)};
      margin-bottom: ${styles.scl(4)};
    }
    &__img {
      height: 230px;
      padding: 0;
    }
    &__title {
      margin-bottom: ${styles.scl(1.5)};
      font-size: ${styles.scl(3.25)};
    }
    &__points {
      margin-bottom: ${styles.scl(5)};
      & > * {
        span {
          font-size: ${styles.scl(2.25)};
          line-height: ${styles.scl(3.75)};
        }
      }
    }
    &__button {
      height: ${styles.scl(5)};
      font-size: ${styles.scl(2.25)};
    }
  }
`;
icStyles.catchphrase = icStyles.main + '__catchphrase';
icStyles.img = icStyles.main + '__img';
icStyles.title = icStyles.main + '__title';
icStyles.pointsWrapper = icStyles.main + '__points-wrapper';
icStyles.points = icStyles.main + '__points';
icStyles.button = icStyles.main + '__button';

/* -------------------- ExplanationCard -------------------- */
const ExplanationCard = ({
  level: TitleComponent = 'h1',
  imageUrl,
  title,
  description
}) => {
  return (
    <article className={ecStyles.main}>
      <img src={imageUrl} className={ecStyles.img} />
      <TitleComponent
        className={ecStyles.title}
        children={title}
      />
      <p
        className={ecStyles.description}
        children={description}
      />
    </article>
  );
};
const ecStyles = {};
ecStyles.main = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  &__img {
    width 270px;
    margin-bottom: ${styles.scl(3)};
  }
  &__title {
    ${styles.fonts.bold};
    font-size: ${styles.scl(2.25)};
    line-height: ${styles.scl(4)};
    margin-bottom: ${styles.scl(1.25)};
  }
  &__description {
    ${styles.fonts.regular}
    font-size: ${styles.scl(1.75)};
    line-height: ${styles.scl(3.5)};
    text-align: left;
  }

  ${styles.mq.tabletAndAbove} {
    width: 290px;
    &__img {
      width: 100%;
    }
    &__title {
      margin-bottom: ${styles.scl(0.5)};
    }
  }

  ${styles.mq.pcAndAbove} {
    width: 440px;
    &__img {
      margin-bottom: ${styles.scl(4.5)};
    }
    &__title {
      font-size: ${styles.scl(3.25)};
      margin-bottom: ${styles.scl(1.5)};
    }
    &__description {
      font-size: ${styles.scl(2.25)};
      line-height: ${styles.scl(4)};
    }
  }
`;
ecStyles.img = ecStyles.main + '__img';
ecStyles.title = ecStyles.main + '__title';
ecStyles.description = ecStyles.main + '__description';

const ecGridStyles = {};
ecGridStyles.main = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin-bottom: ${styles.scl(5)};
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${styles.mq.tabletAndAbove} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    & > * {
      margin-right: ${styles.scl(5)};
      margin-bottom: ${styles.scl(5)};
      &:nth-of-type(2n) {
        margin-right: 0;
      }
      &:not(:nth-of-type(-n+2)) {
        margin-bottom: 0;
      }
    }
  }

  ${styles.mq.pcAndAbove} {
    & > * {
      margin-right: ${styles.scl(7.5)};
      margin-bottom: ${styles.scl(6)};
    }
  }
`;

/* -------------------- PromptContactSection -------------------- */
const PromptContactSection = ({
  className,
  level: TitleComponent = 'h1',
  ...rest
}) => {
  const mediaQuery = useMedia();
  const { t } = useTranslation('common');
  const mainClassName = styles.cn([
    className,
    pcsStyles.main
  ]);
  return (
    <Section className={mainClassName} type='primary'>
      <Container className={pcsStyles.content}>
        <TitleComponent
          className={pcsStyles.sentence}
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

const pcsStyles = {};
pcsStyles.main = css`
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
pcsStyles.content = pcsStyles.main + '__content';
pcsStyles.sentence = pcsStyles.main + '__sentence';
pcsStyles.span = pcsStyles.main + '__span';


/* -------------------- FeatureCard -------------------- */
const FeatureCard = ({
  level: TitleComponent = 'h1',
  iconName,
  title,
  description,
  to
}) => {
  return (
    <div className={fcStyles.main}>
      <div className={fcStyles.catch}>
        <SvgIcon className={fcStyles.catchIcon} name={iconName} />
        <p className={fcStyles.catchTitle} children={title} />

      </div>
      <article className={fcStyles.content}>
        <header className={fcStyles.top}>
          <SvgIcon className={fcStyles.topIcon} name={iconName} />
          <TitleComponent className={fcStyles.topTitle} children={title} />
        </header>
        <p className={fcStyles.description}>
          {description}
        </p>
        <footer className={fcStyles.footer}>
          <Anchor className={fcStyles.footerAnchor}
            to={to}
            active
            children={'Learn more' + ' >'}
          />
        </footer>
      </article>
    </div>
  );
};

const fcStyles = {};
fcStyles.main = css`
  max-width: 350px;
  position: relative;

  &__content {
    position: relative;
    margin: 0 ${styles.scl(3.75)};
    padding: ${styles.scl(2.5)};
    border: 2px solid ${C.COLORS.GAINSBORO};
    border-radius: ${styles.scl(2.5)};
  }
  &__top {
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: ${styles.scl(1.25)};
    &__icon {
      position: absolute;
      top: 0;
      left: 0;
      width: ${styles.scl(3)};
      height: ${styles.scl(3)};
      path {
        fill: ${C.COLORS.VERDIGRIS};
      }
    }
    &__title {
      ${styles.fonts.bold}
      font-size: ${styles.scl(2.25)};
      line-height: ${styles.scl(3.75)};
    }
  }
  &__description {
    font-size: ${styles.scl(1.75)};
    line-height: ${styles.scl(3.5)};
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    &__anchor {
      font-size: ${styles.scl(1.5)};
      line-height: ${styles.scl(1.25)};
    }
  }
  &__catch {
    display: none;
    position: relative;
  }

  ${styles.mq.tabletAndAbove} {
    max-width: 280px;
    &__content {
      margin: 0;
      padding: ${styles.scl(3.75)};
    }
    &__top {
      margin-bottom: ${styles.scl(2)};
      &__title {
      }
      &__icon {
        width: ${styles.scl(4.25)};
        height: ${styles.scl(4.25)};
      }
    }
    &__description {
      margin-bottom: ${styles.scl(1)};
    }
    &__footer {
      &__anchor{ }
    }
    &__catch { }
  }

  ${styles.mq.pcAndAbove} {
    max-width: 240px;
    & > * {
      transition: opacity 250ms;
    }

    &__content {
      opacity: 0;
      box-shadow: 0 3px 12px rgba(0,0,0,0.16);
    }
    &__top {
      margin-bottom: ${styles.scl(1.25)};
      padding-top: ${styles.scl(2.5)};
      &__title { }
      &__icon {
        width: ${styles.scl(3)};
        height: ${styles.scl(3)};
      }
    }
    &__description {
      margin-bottom: ${styles.scl(3)};
    }
    &__footer {
      &__anchor{ }
    }
    &__catch {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      opacity: 1;
      &__icon {
        width: ${styles.scl(10)};
        height: ${styles.scl(10)};
        margin-bottom: ${styles.scl(3)};
        path {
          fill: ${C.COLORS.LAVENDER_INDIGO};
        }
      }
      &__title {
        ${styles.fonts.bold}
        font-size: ${styles.scl(3)};
        line-height: ${styles.scl(4)};
      }
    }

    &:hover { }
    &:hover &__content {
      opacity: 1;
    }
    &:hover &__catch {
      opacity: 0;
    }
  }
`;
fcStyles.content = fcStyles.main + '__content';
fcStyles.top = fcStyles.main + '__top';
fcStyles.topIcon = fcStyles.main + '__top__icon';
fcStyles.topTitle = fcStyles.main + '__top__title';
fcStyles.description = fcStyles.main + '__description';
fcStyles.footer = fcStyles.main + '__footer';
fcStyles.footerAnchor = fcStyles.main + '__footer__anchor';
fcStyles.catch = fcStyles.main + '__catch';
fcStyles.catchIcon = fcStyles.main + '__catch__icon';
fcStyles.catchTitle = fcStyles.main + '__catch__title';

fcStyles.container = css`
  &__grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: ${styles.scl(5)};
    & > * {
      margin-bottom: ${styles.scl(2.5)};
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: center;
    &__button {
      height: ${styles.scl(5)};
      font-size: ${styles.scl(1.75)};
      padding: 0 ${styles.scl(4)};
      border-radius: ${styles.scl(2.5)};
    }
  }

  ${styles.mq.tabletAndAbove} {
    &__grid {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: ${styles.scl(7)};
    }
    &__footer {
      &__button {
        padding: 0 ${styles.scl(5.5)};
      }
    }
  }
  ${styles.mq.tabletOnly} {
    &__grid {
      & > * {
        margin: 0;
        margin-bottom: ${styles.scl(3.75)};
        margin-right: ${styles.scl(3.75)};
        &:nth-of-type(2n) {
          margin-right: 0;
        }
        &:not(:nth-of-type(-n+2)) {
          margin-bottom: 0;
        }
      }
    }
  }

  ${styles.mq.pcAndAbove} {
    &__grid {
      margin-bottom: ${styles.scl(7)};
      justify-content: space-between;
      & > * {
        margin: 0;
      }
    }
    &__footer {
      &__button {
        height: ${styles.scl(7.5)};
        padding: 0 ${styles.scl(6.5)};
        font-size: ${styles.scl(2.75)};
        line-height: ${styles.scl(3.25)};
        border-radius: ${styles.scl(3.75)};
      }
    }
  }
`;
fcStyles.containerGrid = fcStyles.container + '__grid';
fcStyles.containerFooter = fcStyles.container + '__footer';
fcStyles.containerFooterButton = fcStyles.container + '__footer__button';


/* -------------------- Components -------------------- */
const Html = ({
  component: Component = 'div',
  children,
  ...rest
}) => {
  return <Component dangerouslySetInnerHTML={{__html: children}} { ...rest } />;
};
