import { WaitersData } from '../../../_mocks_/Waiters';
import classes from '../../../css/Waiters.module.css';

export default function Waiters() {
  return (
    <div style={{ marginTop: 60 }}>
      <h2>Ariza yozib kutayotgan talabalar</h2>
      <div className={classes.groupWrap}>
        <div className={classes.item_head}>
          <div className={classes.name}>
            <h3>Talaba ismi</h3>
          </div>
          <div className={classes.karta}>Familiyasi</div>
          <div className={classes.founderDate}>Ariza yozgan vaqti</div>
          <div className={classes.founderDate}>Imtiyoz</div>
        </div>
        <div className={classes.data}>
          {WaitersData.map((item) => (
            <div className={classes.item} key={item.id}>
              <div className={classes.name}>
                <h3>{item.name}</h3>
              </div>
              <div className={classes.karta}>{item.surname}</div>
              <div className={classes.founderDate}>{item.date}</div>
              <div className={classes.founderDate}>{item.imtiyoz}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
