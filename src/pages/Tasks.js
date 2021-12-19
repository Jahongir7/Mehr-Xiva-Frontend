import swal from 'sweetalert';
import { TasksData } from '../_mocks_/TasksData';
import { AppTasks } from '../components/_dashboard/app';
import classes from '../css/Tasks.module.css';

const DailyTasks = () => {
  function myFunction1() {
    swal('Shartnoma bajarilganini tasdiqlaysizmi ?', {
      buttons: ["Yo'q", 'Ha']
    });
  }
  return (
    <div>
      <AppTasks />
      <div className={classes.FounderMain}>
        <div className={classes.founderMainWrap}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            {'  '}
          </div>
          <div className={classes.itemWrap}>
            <h2 style={{ paddingTop: 60 }}>Topshirilgan Shartnomalar</h2>
            {TasksData && TasksData.length ? (
              <div className={classes.item_head}>
                <div className={classes.name}>
                  <h3>Shartnoma</h3>
                </div>
                <div className={classes.karta}>Tayinlangan vaqti</div>
                <div className={classes.founderPayment}>Ohirgi muddat</div>
              </div>
            ) : (
              ''
            )}
            <div className={classes.data}>
              {TasksData && TasksData.length
                ? TasksData.map((item) => (
                    <div className={classes.item} key={item._id}>
                      <div className={classes.name}>
                        <h3>{item.contract}</h3>
                      </div>
                      <div className={classes.karta}>{item.submit_date}</div>
                      <div className={classes.founderPayment}>{item.final_date}</div>
                      <button type="button" className={classes.button} onClick={myFunction1}>
                        Tugatish
                      </button>
                    </div>
                  ))
                : "Hozircha Shartnomalar yo'q!"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTasks;
