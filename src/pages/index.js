import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Anywhere Access",
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        สามารถเข้าถึงและตรวจสอบสถานการณ์จองได้ง่ายผ่านอินเตอร์เน็ตและโทรศัพท์มือถือ
        ไม่จำเป็นต้องเข้าผ่านคอมพิวเตอร์เพียงอย่างเดียว
      </>
    ),
  },
  {
    title: "One Sale System",
    //  imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>ตัดห้องที่เดียวกันไม่ว่าจะจองโดยเจ้าหน้าที่และจองผ่านออนไลน์</>
    ),
  },
  {
    title: "Own Website",
    //  imageUrl: 'img/undraw_docusaurus_react.svg',
    description: <>สร้างเว็บไซต์อย่างมืออาชีพได้ด้วยตนเอง ไม่ต้องจ้างเพิ่ม</>,
  },
  {
    title: "Work Reduce",
    //  imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        ลดขั้นตอนการทำงาน สู่การเช็คอินแบบ Paperless
        ลูกค้าสามารถกรอกแบบเช็คอินได้จากโทรศัพท์ของตนเอง
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
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
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              วิธีการใช้งาน
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
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
