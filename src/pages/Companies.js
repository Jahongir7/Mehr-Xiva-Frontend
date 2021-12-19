import { CompaniesData } from '../_mocks_/Companies';
import classes from '../css/Companies.module.css';

const Companies = () => (
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
          <h2>Kompaniyalar</h2>
          {'  '}
        </div>
        <div className={classes.itemWrap}>
          {CompaniesData && CompaniesData.length ? (
            <div className={classes.item_head}>
              <div className={classes.name}>
                <h3>Kompaniya</h3>
              </div>
              <div className={classes.karta}>Tumani</div>
              <div className={classes.founderPayment}>Direktor</div>
              <div className={classes.founderDate}>Direktor raqami</div>
              <div className={classes.founderDate}>Buxgalter</div>
              <div className={classes.founderDate}>Buxgalter raqami</div>
              <div className={classes.founderDate}>INN</div>
              <div className={classes.founderDate}>Veb sayti</div>
              <div className={classes.founderDate}>E-pochtasi</div>
            </div>
          ) : (
            ''
          )}
          <div className={classes.data}>
            {CompaniesData && CompaniesData.length
              ? CompaniesData.map((item) => (
                  <div className={classes.item} key={item._id}>
                    <div className={classes.name}>
                      <h3>{item.name}</h3>
                    </div>
                    <div className={classes.karta}>{item.district}</div>
                    <div className={classes.founderPayment}>{item.director}</div>
                    <div className={classes.founderDate}>{item.director_phone}</div>
                    <div className={classes.founderDate}>{item.accountant}</div>
                    <div className={classes.founderDate}>{item.accountant_phone}</div>
                    <div className={classes.founderDate}>{item.website}</div>
                    <div className={classes.founderDate}>{item.inn}</div>
                    <div className={classes.founderDate}>{item.email}</div>
                  </div>
                ))
              : "Hozircha Kompaniyalar yo'q!"}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Companies;
