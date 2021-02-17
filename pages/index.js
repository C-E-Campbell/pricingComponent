import Head from 'next/head';
import PriceCard from '../components/priceCard';
import styles from '../styles/index.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Pricing Component</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.topContainer}>
        <img
          className={styles.svg}
          src="/bg-pattern.svg"
          alt="Picture of the author"
        />
        <section className={styles.heading_container}>
          <div className={styles.heading_img}>
            <Image
              src="/pattern-circles.svg"
              alt="Picture of the author"
              width={120}
              height={120}
            />
          </div>

          <h1>Simple, traffic-based pricing</h1>
          <h2>Sign-up for our 30-day trial.</h2>
          <h2>No credit card required.</h2>
        </section>
        <PriceCard />
      </div>
    </div>
  );
}
