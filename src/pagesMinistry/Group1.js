import classes from '../css/Group1.module.css';
import { Group } from '../_mocks_/Group1';

export default function Group1() {
  return (
    <div>
      <h2>Guruhdagi o'quvchilar</h2>
      <div className={classes.groupWrap}>
        <div className={classes.item_head}>
          <div className={classes.name}>
            <h3>O'quvchi ismi</h3>
          </div>
          <div className={classes.karta}>Familiyasi</div>
          <div className={classes.founderPayment}>Telefon raqami</div>
          <div className={classes.founderDate}>Ijaraga turgan vaqti</div>
          <div className={classes.founderDate}>Imtiyoz</div>
          <div className={classes.founderDate}>Hozirgi yashash joyi</div>
          <div className={classes.founderDate}>To'lov</div>
        </div>
        <div className={classes.data}>
          {Group.map((item) => (
            <div className={classes.item} key={item.id}>
              <div className={classes.name}>
                <h3>{item.name}</h3>
              </div>
              <div className={classes.karta}>{item.surname}</div>
              <div className={classes.founderPayment}>{item.tel}</div>
              <div className={classes.founderDate}>{item.date}</div>

              <div className={classes.founderDate}>{item.imtiyoz}</div>
              <div className={classes.founderDate}>{item.type}</div>
              <div className={classes.founderButtons}>
                <div
                  style={{
                    backgroundColor: `${item.isPay ? '#C8FACD' : '#FFE7D9'}`,
                    color: `${item.isPay ? `green` : `red`}`,
                    borderRadius: '8px',
                    padding: 5
                  }}
                  id={classes.btn7}
                  className={classes.button}
                >
                  {item.isPay ? "To'langan" : "To'lanmagan"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
