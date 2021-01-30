import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Aprašymai',
    imageUrl: 'img/renders/bigsmoke.png',
    description: (
      <>
        Išsamius serverio sistemų aprašymus su vaizdais iš serverio.
      </>
    ),
  },
  {
    title: 'Gidai',
    imageUrl: 'img/renders/squatting.png',
    description: (
      <>
        Oficialius ir bendruomenės narių parašytus gidus, skirtus pradedantiesiems žaidėjams ir ne tik.
      </>
    ),
  },
  {
    title: 'Paslaugos',
    imageUrl: 'img/renders/tenpenny.png',
    description: (
      <>
        Visus projekto pirkinius ir jų įkainius. Sužinok ką žaidėjas galės įsigyti serveryje ir kas bus suteikiama.
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
      description="RealState projekto Wiki dokumentacijos saugykla"
    >
      <main>
        <div className={styles.videoBackground}>
          <iframe frameborder="0" height="100%" width="100%"
            src="https://youtube.com/embed/x6a6DeLVMJU?autoplay=1&controls=0&showinfo=0&autohide=1&autoplay=1">
          </iframe>
        </div>

        <div className={styles.content}>
          <div className={styles.headline}>
            <h5>Sveiki atvykę į</h5>
            <h1>{siteConfig.title}!</h1>
            <h5 className={styles.subtext}>Čia rasite:</h5>
          </div>
          
          

          {features && features.length > 0 && (
            <section className={styles.features}>
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </section>
          )}
          
          

        </div>
      </main>

  
    </Layout>
  );
}

export default Home;
