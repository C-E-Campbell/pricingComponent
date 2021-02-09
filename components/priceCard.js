import React, { useState, useEffect } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import styles from '../styles/priceCard.module.scss';
export default function priceCard() {
  const [price, setPrice] = useState(16);
  const [cycle, setCycle] = useState('monthly');
  const [toggleState, setToggleState] = useState(false);
  const [bundle, setBundle] = useState({ views: '100K', price: 16.0 });

  const changePrice = (e) => {
    const val = e.target.valueAsNumber;
    const packages = [
      { views: '10K', price: 8 },
      { views: '50K', price: 12 },
      { views: '100K', price: 16 },
      { views: '500K', price: 24 },
      { views: '1M', price: 36 },
    ];
    if (val <= 20) {
      setBundle(packages[0]);
    } else if (val <= 40) {
      setBundle(packages[1]);
    } else if (val <= 60) {
      setBundle(packages[2]);
    } else if (val <= 80) {
      setBundle(packages[3]);
    } else {
      setBundle(packages[4]);
    }
  };

  const changeBillingCycle = () => {
    if (cycle === 'monthly') {
      setCycle('annual');
    } else {
      setCycle('monthly');
    }
  };

  const changeToggleState = () => {
    setToggleState(true);
  };

  return (
    <main className={styles.card_body}>
      <section className={styles.billing_section}>
        <h3 className={styles.billing_section_heading}>
          {bundle.views} PAGEVIEWS
        </h3>

        <input
          className={styles.billing_slider}
          type="range"
          min="20"
          max="100"
          id="myRange"
          step="20"
          onChange={(e) => changePrice(e)}
        />

        <p className={styles.billing_slider_price}>
          <span>{` $${bundle.price}.00`}</span>
          /month
        </p>
        <div className={styles.billing_cycle}>
          <p>Monthly Billing</p>
          <div
            onClick={() => {
              changeBillingCycle();
              changeToggleState();
            }}
            style={
              cycle === 'monthly'
                ? { justifyContent: 'flex-start' }
                : cycle === 'annual'
                ? { justifyContent: 'flex-end' }
                : null
            }
            className={`${styles.billing_cycle_selector} ${
              toggleState ? styles.billing_toggle_background : ''
            }`}
          >
            <div
              onClick={() => {
                changeBillingCycle();
                changeToggleState();
              }}
              className={styles.billing_cycle_selector_toggle}
            ></div>
          </div>
          <p>Yearly Billing</p>
          <div
            className={
              (styles.billing_cycle_selector,
              styles.billing_cycle_selector_discount)
            }
          >
            -25%
          </div>
        </div>
      </section>
      <section className={styles.signup_section}>
        <div>
          <div>
            <div className={styles.signup_detail}>
              <CheckIcon
                style={{ color: 'hsl(174, 86%, 45%)', fontSize: '15px' }}
              />
              <h3>Unlimited websites</h3>
            </div>
            <div className={styles.signup_detail}>
              <CheckIcon
                style={{ color: 'hsl(174, 86%, 45%)', fontSize: '15px' }}
              />
              <h3>100% data ownership</h3>
            </div>
            <div className={styles.signup_detail}>
              <CheckIcon
                style={{ color: 'hsl(174, 86%, 45%)', fontSize: '15px' }}
              />
              <h3>Email reports</h3>
            </div>
          </div>
          <div className={styles.trial_btn_box}>
            <button
              onClick={() => alert('visit www.charlescampbell.dev  🌮')}
              className={styles.signup_btn}
            >
              Start my trial
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
