import Head from 'next/head';
import PriceCard from '../components/priceCard';
import styles from '../styles/index.module.scss';
export default function Home() {
  return (
    <div>
      <Head>
        <title>React Pricing Component</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className={styles.heading_container}>
        <h1>Simple, traffic-based pricing</h1>
        <h2>Sign-up for our 30-day trial</h2>
        <h2>No credit card required.</h2>
      </section>
      <PriceCard />
    </div>
  );
}
