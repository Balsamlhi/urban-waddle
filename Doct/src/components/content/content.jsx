import React from 'react';
import styles from '../content/content.module.css';
import Rate from '../rate/rate';

const Content = () => {
  const [rate1, setRate1] = React.useState(0);
  const [rate2, setRate2] = React.useState(0);
  const [rate3, setRate3] = React.useState(0);

  return (
    <div>
      <div className={styles.part1}> waywa</div>
      <div className={styles.part2}>
        <div className={styles.box1}>
          <div className={styles.img}>box1</div>
          <div className={styles.desc}>description</div>
          <div className={styles.rate}>
            <Rate value={rate1} onChange={setRate1} />
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.img}>box1</div>
          <div className={styles.desc}>description</div>
          <div className={styles.rate}>
            <Rate value={rate2} onChange={setRate2} />
          </div>
        </div>
        <div className={styles.box3}>
          <div className={styles.img}>box1</div>
          <div className={styles.desc}>description</div>
          <div className={styles.rate}>
            <Rate value={rate3} onChange={setRate3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
