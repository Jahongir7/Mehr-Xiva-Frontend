/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prefer-const */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import _ from 'lodash';
import NumberFormat from 'react-number-format';
import dateFormat from 'dateformat';
import swal from 'sweetalert';
import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';
import { getCompanyById, getCompanyStories, deleteStory } from '../redux/actions/adminActions';
import classes from '../css/Group1.module.css';

export default function CompanyStory({ handleEdit }) {
  const role = useSelector((state) => state.authReducer.role);
  function myFunction1(id) {
    swal("Haqiqatdan ham ushbu hisobotni o'chirasizmi ?", {
      buttons: ["Yo'q", 'Ha']
    }).then((value) => {
      if (value) {
        dispatch(deleteStory(id));
      }
    });
  }
  const dispatch = useDispatch();
  const companyId = window.location.pathname.split('/')[3];
  useEffect(() => {
    dispatch(getCompanyStories(companyId));
    dispatch(getCompanyById(companyId));
  }, [dispatch, companyId]);
  const { company, notes } = useSelector((state) => state.adminReducer);
  let arr = [];
  arr.push(notes && notes.map((item) => parseInt(item.debit, 10) - parseInt(item.credit, 10)));
  return (
    <div style={{ marginBottom: 250 }}>
      <h2>"{company && company.name}" hisobotlari</h2>
      <div className={classes.myflex}>
        <p>
          Directori : {company && company.director} ({company && company.companyPhone})
        </p>
        <p>
          Buxgalteri : {company && company.accountant} ({company && company.accountantPhone})
        </p>
      </div>
      <div style={{ display: 'flex' }}>
        <p>Umumiy qoldiq </p>{' '}
        <div
          className={classes.bolddd}
          style={{
            color: `${_.sum(arr[0]) > -1 ? 'green' : 'red'}`,
            marginLeft: '10px',
            fontWeight: 'bolder'
          }}
        >
          <NumberFormat value={_.sum(arr[0])} displayType="text" thousandSeparator={true} /> so'm
        </div>
      </div>
      <div className={classes.groupWrap} style={{ marginTop: '20px' }}>
        <div className={classes.item_head}>
          <div className={classes.name}>
            <h3>Sana</h3>
          </div>
          <div className={classes.karta}>Izoh</div>
          <div className={classes.founderPayment}>Debit</div>
          <div className={classes.founderDate}>Kredit</div>
          <div className={classes.founderDate}>Qoldiq</div>
          <div className={classes.founderDate}> </div>
        </div>
        <div className={classes.data}>
          {notes && notes.length > 0
            ? notes.map((item) => (
                <div className={classes.item} key={item._id}>
                  <div className={classes.name}>
                    <h3>{dateFormat(item.date, 'dd, mmm, yyyy')}</h3>
                  </div>
                  <div className={classes.karta}>{item.description}</div>
                  <div className={classes.founderPayment}>
                    <NumberFormat value={item.debit} displayType="text" thousandSeparator={true} />
                  </div>
                  <div className={classes.founderDate}>
                    <NumberFormat value={item.credit} displayType="text" thousandSeparator={true} />
                  </div>
                  <div
                    className={classes.founderDate}
                    style={{
                      color: `${item.debit - item.credit > 0 ? 'green' : 'red'}`
                    }}
                  >
                    <NumberFormat
                      value={item.debit - item.credit}
                      displayType="text"
                      thousandSeparator={true}
                    />
                  </div>
                  <div className={classes.founderDate}>
                    {role ? (
                      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <LoadingButton onClick={() => handleEdit(item, companyId)}>
                          <Icon icon="bi:pencil" width={24} height={24} />
                        </LoadingButton>
                        <LoadingButton onClick={() => myFunction1(item._id)}>
                          <Icon icon="bi:trash" width={24} height={24} />
                        </LoadingButton>
                      </div>
                    ) : (
                      <LoadingButton style={{ cursor: 'not-allowed' }}>
                        <Icon icon="bi:trash" width={24} height={24} />
                      </LoadingButton>
                    )}
                  </div>
                </div>
              ))
            : "Iltimos qaydnoma qo'shing"}
        </div>
      </div>
    </div>
  );
}
