import swal from 'sweetalert';
import Select from 'react-select';
import { ContractsList } from '../_mocks_/Contracts';
import classes from '../css/Contract.module.css';

const Contracts = () => {
  function myFunction1() {
    swal("Haqiqatdan ham shartnomani o'chirmoqchimisiz ?", {
      buttons: ["Yo'q", 'Ha']
    });
  }

  const options = [
    { value: 'chocolate', label: 'Bajarilyapti' },
    { value: 'strawberry', label: 'Bajarilgan' },
    { value: 'vanilla', label: 'Bajarilmagan' }
  ];
  return (
    <>
      <div className={classes.FounderMain}>
        <div className={classes.founderMainWrap}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            <h2>Shartnomalar</h2>
            {'  '}
          </div>
          <div className={classes.itemWrap}>
            {ContractsList && ContractsList.length ? (
              <div className={classes.item_head}>
                <div className={classes.name}>
                  <h3>Kompaniya</h3>
                </div>
                <div className={classes.karta}>Shartnoma raqami</div>
                <div className={classes.founderPayment}>Bahosi</div>
                <div className={classes.founderDate}>Masul shaxs</div>
                <div className={classes.founderDate}>Masul shaxs raqami</div>
                <div className={classes.founderDate}>Status</div>
                <div className={classes.founderDate}>To'lov</div>
              </div>
            ) : (
              ''
            )}
            <div className={classes.data}>
              {ContractsList && ContractsList.length
                ? ContractsList.map((item) => (
                    <div className={classes.item} key={item._id}>
                      <div className={classes.name}>
                        <h3>{item.name_company}</h3>
                      </div>
                      <div className={classes.karta}>{item.number}</div>
                      <div className={classes.founderPayment}>{item.price}</div>
                      <div className={classes.founderDate}>{item.name_responsible}</div>
                      <div className={classes.founderDate}>{item.phone_responsible}</div>
                      <div className={classes.founderStatus}>
                        <Select options={options} defaultValue={options[0]} />
                      </div>
                      <div className={classes.founderButtons}>
                        <button
                          type="button"
                          style={{
                            backgroundColor: `${
                              item.payment ? 'rgb(200, 250, 205)' : 'rgb(255, 231, 217)'
                            }`,
                            color: `${item.payment ? 'green' : 'red'}`
                          }}
                          id={classes.btn7}
                          className={classes.button}
                        >
                          {item.payment ? "To'langan" : "To'lanmagan"}
                        </button>
                      </div>
                      <div className={classes.founderButtons}>
                        <button
                          type="button"
                          className={classes.button}
                          onClick={() => myFunction1(item._id)}
                        >
                          <i className="fas fa-trash-alt" />
                        </button>
                      </div>
                    </div>
                  ))
                : "Hozircha Shartnomalar yo'q!"}
            </div>
          </div>
          {ContractsList && ContractsList.length ? (
            <div className={classes.submitBtn}>
              <button type="button" className={classes.button}>
                O'zgarishlarni saqlash
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default Contracts;
