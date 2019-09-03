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
} from '../components';
import Layout from "../components/layout";

import * as C from '../primitives';
import { styles } from '../utils';
import { useMedia } from '../hooks';
import { paths } from '../paths.js';

export default ({data}) => {
  const { t } = useTranslation(['common', 'index']);
  const mediaQuery = useMedia();

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: styles.mqCond.tabletAndAbove
    }
  ];

  const clientLogosMobileFluid = _.assign({}, data.clientLogosMobile.childImageSharp.fluid, {
    presentationWidth: '100%',
    presentationHeight: 'auto'
  });
  const clientLogosWebFluid = _.assign({}, data.clientLogosWeb.childImageSharp.fluid, {
    presentationWidth: '100%',
    presentationHeight: 'auto'
  });

  return (
    <Layout>
      <TopBanner
        fluid={sources}
        children={
          <Top
            title={t('index:top.title')}
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
              isMobile={mediaQuery.mobile}
            />
            <IntroductionCard
              level='h3'
              catchphrase={t('index:usecases.kuzen-support.catchphrase')}
              imageUrl={data.introKuzenSupportImage.publicURL}
              title={t('common:services.kuzen-support')}
              points={t('index:usecases.kuzen-support.points', {returnObjects: true})}
              buttonLabel={t('index:usecases.read-more')}
              isMobile={mediaQuery.mobile}
            />
            <IntroductionCard
              level='h3'
              catchphrase={t('index:usecases.kuzen-work.catchphrase')}
              imageUrl={data.introKuzenWorkImage.publicURL}
              title={t('common:services.kuzen-work')}
              points={t('index:usecases.kuzen-work.points', {returnObjects: true})}
              buttonLabel={t('index:usecases.read-more')}
              isMobile={mediaQuery.mobile}
            />
          </div>
        </Container>
      </Section>

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
            KUZENが選ばれる理由
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
        fluid(maxWidth: 2000, quality: 100) {
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
  }
`;

const Styles = {};
Styles.main = css`
  &__ic-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
      margin: 0 0 ${styles.baseScale(5.5)};
    }
  }

  &__client-logos {
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
  font-size: ${styles.baseScale(2.75)};
  line-height: ${styles.baseScale(4)};
  &__breakable {
    display: block;
  }
  strong {
    margin-right: ${styles.baseScale(1)};
    color: ${C.COLORS.VERDIGRIS};
    font-size: ${styles.baseScale(3.25)};
    line-height: ${styles.baseScale(4)};
  }

  ${styles.mq.tabletAndAbove} {
    font-size: ${styles.baseScale(3)};
    line-height: ${styles.baseScale(4.5)};
    &__breakable {
      display: inline;
    }
    strong {
      color: ${C.COLORS.VERDIGRIS};
      font-size: ${styles.baseScale(4.5)};
      line-height: ${styles.baseScale(4.5)};
    }
  }

  ${styles.mq.pcAndAbove} {
    font-size: ${styles.baseScale(3.25)};
    line-height: ${styles.baseScale(4.5)};
    strong {
      font-size: ${styles.baseScale(5.25)};
      line-height: ${styles.baseScale(4.5)};
    }
  }
`;
atStyles.breakable = atStyles.main + '__breakable';
atStyles.accent = atStyles.main + '__accent';

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
    font-size: ${styles.baseScale(4)};
  }
  &__sub-title {
    font-size: ${styles.baseScale(2)};
  }
  &__title, &__sub-title {
    margin-bottom: ${styles.baseScale(4)};
    color: ${C.COLORS.WHITE};
  }
  &__button {
    height: ${styles.baseScale(5)};
    padding: 0 ${styles.baseScale(4)};
    font-size: ${styles.baseScale(2)};
    border-radius: ${styles.baseScale(2.5)};
  }

  ${styles.mq.tabletAndAbove} {
    &__title {
      font-size: ${styles.baseScale(5.5)};
    }
    &__sub-title {
      font-size: ${styles.baseScale(2.25)};
    }
  }

  ${styles.mq.pcAndAbove} {
    &__title {
      font-size: ${styles.baseScale(7.5)};
    }
    &__sub-title {
      font-size: ${styles.baseScale(3.25)};
    }
    &__title, &__sub-title {
      margin-bottom: ${styles.baseScale(5)};
    }
    &__button {
      height: ${styles.baseScale(9)};
      padding: 0 ${styles.baseScale(5)};
      font-size: ${styles.baseScale(2.75)};
      border-radius: ${styles.baseScale(4.5)};
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
  padding: ${styles.baseScale(5)} 0;
  &__title-logo {
    display: none;
  }
  &__title {
    ${styles.fonts.bold}
    margin: 0 auto ${styles.baseScale(2)};
    font-size: ${styles.baseScale(2.5)};
    line-height: ${styles.baseScale(4.75)};
    color: ${C.COLORS.TAUPE};
    text-align: center;
  }
  &--type-default { }
  &--type-white {
    background-color: ${C.COLORS.GHOST_WHITE}
  }


  ${styles.mq.tabletAndAbove} {
    padding: ${styles.baseScale(8)} 0;
    &__title {
      margin: 0 auto ${styles.baseScale(5)};
      font-size: ${styles.baseScale(3.5)};
    }
  }

  ${styles.mq.pcAndAbove} {
    padding: ${styles.baseScale(10)} 0;
    &__title-logo {
      display: flex;
      justify-content: center;
      margin: 0 auto ${styles.baseScale(5)};
      img {
        width: ${styles.baseScale(8.5)};
        height: ${styles.baseScale(8.75)};
      }
    }
    &__title {
      margin: 0 auto ${styles.baseScale(5)};
      font-size: ${styles.baseScale(4)};
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
  isMobile
}) => {
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
        type={isMobile
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
    height: ${styles.baseScale(8.5)};
    margin-bottom: ${styles.baseScale(5)};
    border: 3px solid ${C.COLORS.LAVENDER_INDIGO};
    color: ${C.COLORS.LAVENDER_INDIGO};
    font-size: ${styles.baseScale(2)};
    text-align: center;
    white-space: pre;
    &:before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      border-top: ${styles.baseScale(1.5)} solid ${C.COLORS.LAVENDER_INDIGO};
      border-left: ${styles.baseScale(1.5)} solid transparent;
      border-right: ${styles.baseScale(1.5)} solid transparent;
      transform: translateX(-50%);
    }
  }
  &__img {
    display: flex;
    padding: 0 ${styles.baseScale(3.5)};
    margin-bottom: ${styles.baseScale(2.25)};
    img {
      width: 100%;
      height: auto;
    }
  }
  &__title {
    ${styles.fonts.bold}
    display: flex;
    justify-content: center;
    margin-bottom: ${styles.baseScale(1.25)};
    font-size: ${styles.baseScale(2.75)};
    line-height: ${styles.baseScale(4)};
  }
  &__points-wrapper {
    display: flex;
    justify-content: center;
  }
  &__points {
    margin-bottom: ${styles.baseScale(2.5)};
    & > * {
      display: flex;
      align-items: center;
      span {
        margin-left: ${styles.baseScale(1.5)};
        font-size: ${styles.baseScale(2)};
        line-height: ${styles.baseScale(3.75)};
      }
      svg {
        width: ${styles.baseScale(2)};
        height: ${styles.baseScale(2)};
        path {
          fill: ${C.COLORS.LAVENDER_INDIGO};
        }
      }
    }
  }
  &__button {
    font-size: ${styles.baseScale(1.75)};
  }


  ${styles.mq.tabletAndAbove} {
    width: 210px;
    &__catchphrase {
      height: ${styles.baseScale(9.5)};
      font-size: ${styles.baseScale(1.75)};
      line-height: ${styles.baseScale(3)};
      margin-bottom: ${styles.baseScale(1.75)};
    }
    &__img {
      height: 146px;
      padding: 0;
    }
    &__title {
      margin-bottom: ${styles.baseScale(1)};
      font-size: ${styles.baseScale(2.25)};
      line-height: ${styles.baseScale(4)};
    }
    &__points {
      margin-bottom: ${styles.baseScale(3)};
      & > * {
        span {
          font-size: ${styles.baseScale(1.5)};
          line-height: ${styles.baseScale(2.75)};
        }
      }
    }
    &__button {
      height: ${styles.baseScale(3)};
      font-size: ${styles.baseScale(1.75)};
    }
  }

  ${styles.mq.pcAndAbove} {
    width: 314px;
    &__catchphrase {
      height: ${styles.baseScale(14)};
      font-size: ${styles.baseScale(2.75)};
      line-height: ${styles.baseScale(3.5)};
      margin-bottom: ${styles.baseScale(4)};
    }
    &__img {
      height: 230px;
      padding: 0;
    }
    &__title {
      margin-bottom: ${styles.baseScale(1.5)};
      font-size: ${styles.baseScale(3.25)};
    }
    &__points {
      margin-bottom: ${styles.baseScale(5)};
      & > * {
        span {
          font-size: ${styles.baseScale(2.25)};
          line-height: ${styles.baseScale(3.75)};
        }
      }
    }
    &__button {
      height: ${styles.baseScale(5)};
      font-size: ${styles.baseScale(2.25)};
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



const Html = ({
  component: Component = 'div',
  children,
  ...rest
}) => {
  return <Component dangerouslySetInnerHTML={{__html: children}} { ...rest } />;
};
