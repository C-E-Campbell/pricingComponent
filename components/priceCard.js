import React, { useState, useEffect } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import styles from '../styles/priceCard.module.scss';
export default function priceCard() {
  const [price, setPrice] = useState(16);
  const [cycle, setCycle] = useState('monthly');

  const changeBillingCycle = () => {
    if (cycle === 'monthly') {
      setCycle('annual');
    } else {
      setCycle('monthly');
    }
  };
  return (
    <main className={styles.card_body}>
      <section className={styles.billing_section}>
        <h3>100k views</h3>
        <div className={styles.billing_slider}></div>
        <p>{`$${price}.00/month`}</p>
        <div onClick={changeBillingCycle} className={styles.billing_cycle}>
          <p>Monthly Billing</p>
          <div
            style={
              cycle === 'monthly'
                ? { justifyContent: 'flex-end' }
                : { justifyContent: 'flex-start' }
            }
            className={styles.billing_cycle_selector}
          >
            <div
              onClick={changeBillingCycle}
              className={styles.billing_cycle_selector_toggle}
            ></div>
          </div>
          <p>Yearly Billing</p>
          <div className={styles.billing_cycle_selector}>-25%</div>
        </div>
      </section>
      <section className={styles.signup_section}>
        <div>
          <div>
            <div>
              <CheckIcon style={{ color: '#fff' }} />
              <h3>Unlimted websites</h3>
            </div>
            <div>
              <CheckIcon style={{ color: '#fff' }} />
              <h3>100% data ownership</h3>
            </div>
            <div>
              <CheckIcon style={{ color: '#fff' }} />
              <h3>Email reports</h3>
            </div>
          </div>
          <div>
            <button className={styles.signup_btn}>Start my trial</button>
          </div>
        </div>
      </section>
    </main>
  );
}
