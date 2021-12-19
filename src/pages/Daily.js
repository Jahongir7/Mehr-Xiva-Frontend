import { TextField } from '@mui/material';
import { DailyData } from '../_mocks_/DailyData';
import classes from '../css/Daily.module.css';

const Daily = () => {
  const name = 'Kundalik';
  return (
    <div>
      <h1 style={{ padding: '20px 0' }}>{name}</h1>
      <div className={classes.daily_form}>
        <div className={classes.input_wrap}>
          <TextField
            fullWidth
            autoComplete="current-password"
            type="text"
            label="Kunlik qilingan ish"
            style={{ paddingBottom: 30 }}
          />
          <TextField fullWidth autoComplete="current-password" type="file" />
        </div>
        <button type="button" className={classes.daily_btn}>
          <i className="fas fa-plus" />
        </button>
      </div>
      <div className={classes.itemWrap}>
        <h2 style={{ paddingTop: 60 }}>Qilingan ishlar</h2>
        {DailyData && DailyData.length ? (
          <div className={classes.item_head}>
            <div className={classes.karta}>Bajarilgan ish</div>
            <div className={classes.founderPayment}>Sana</div>
            <div className={classes.founderPayment}>Fayl</div>
          </div>
        ) : (
          ''
        )}
        <div className={classes.data}>
          {DailyData && DailyData.length
            ? DailyData.map((item) => (
                <div className={classes.item} key={item._id}>
                  <div className={classes.karta}>{item.text}</div>
                  <div className={classes.founderPayment}>{item.date}</div>
                  <div className={classes.founderPayment}>{item.file}</div>
                </div>
              ))
            : "Hozircha Shartnomalar yo'q!"}
        </div>
      </div>
    </div>
  );
};

export default Daily;
