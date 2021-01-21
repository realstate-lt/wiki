import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Kolaboracija',
    imageUrl: 'img/renders/bigsmoke.png',
    description: (
      <>
        Docosaurus Wikipedia suteikia galimybę itin greitai ir patogiai daugeliui
        žmonių pildyti serverio dokumentaciją per GitHub. Tuo tarpu Vercel pasirūpina,
        kad visi naujausi pakeitimai minučių bėgyje atsiranda puslapyje.
      </>
    ),
  },
  {
    title: 'Sistemos',
    imageUrl: 'img/renders/squatting.png',
    description: (
      <>
        Visa pagrindinė veikla, darbai ir kitos sistemos bei jų svarbiausi aspektai 
        bus pažymėti itin maloniu akiai formatu. Itin maloni navigacija bus kaip meilė
        iš pirmo žvilgsnio
      </>
    ),
  },
  {
    title: 'RealState',
    imageUrl: 'img/renders/tenpenny.png',
    description: (
      <>
        RealState vieta kur jūsų svajonės išsipildo. Nesugalvoju ką čia rašyt. 
        Reik normalaus index page, kad fainai atrodytų.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="RealState projekto Wiki dokumentacijos saugykla">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Skaityti
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
