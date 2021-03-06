import React, { useState, useEffect } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import styles from '../styles/priceCard.module.scss';
export default function priceCard() {
  const [price, setPrice] = useState(16);
  const [cycle, setCycle] = useState('monthly');
  const [toggleState, setToggleState] = useState(false);
  const [sliderVal, setSliderVal] = useState(50);
  const [bundle, setBundle] = useState({
    views: '100K',
    price: 16.0,
    discount: 12,
  });

  const changePrice = (e) => {
    const val = e.target.valueAsNumber;
    const packages = [
      { views: '10K', price: 8, discount: 6 },
      { views: '50K', price: 12, discount: 9 },
      { views: '100K', price: 16, discount: 12 },
      { views: '500K', price: 24, discount: 18 },
      { views: '1M', price: 36, discount: 27 },
    ];

    if (val <= 20) {
      setSliderVal(0);
      setBundle(packages[0]);
    } else if (val <= 40) {
      setSliderVal(25);
      setBundle(packages[1]);
    } else if (val <= 60) {
      setSliderVal(50);
      setBundle(packages[2]);
    } else if (val <= 80) {
      setSliderVal(75);
      setBundle(packages[3]);
    } else {
      setSliderVal(100);
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
        <div className={styles.test}>
          <div
            style={{ width: sliderVal + '%' }}
            className={styles.test1}
          ></div>
          <input
            className={styles.billing_slider}
            type="range"
            min="20"
            max="100"
            id="myRange"
            step="20"
            onChange={(e) => changePrice(e)}
          />
        </div>

        <p className={styles.billing_slider_price}>
          {cycle === 'monthly' ? (
            <span>{` $${bundle.price}.00`}</span>
          ) : (
            <span>{` $${bundle.discount}.00`}</span>
          )}
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
      <hr className={styles.hr} />
      <section className={styles.signup_section}>
        <div className={styles.signup_info}>
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
