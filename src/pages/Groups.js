/* eslint-disable prettier/prettier */
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import classes from '../css/Groups.module.css';
import { data } from '../_mocks_/Groups';

export default function Groups() {
  return (
    <div>
      <h2 style={{ paddingLeft: '10px' }}>Guruhlar</h2>
      <div className={classes.group_lists}>
        {data.map((item) => (
          <Link to={item.link} style={{ textDecoration: 'none', cursor: 'pointer' }} key={item.id}>
            <div className={classes.group_list} key={item.id}>
              <div className={classes.num}>
                <div className={classes.hh2}>
                  <h2>
                    <CountUp end={item.num} duration={3} />
                  </h2>
                </div>
                <p>O'quvchilar soni</p>
              </div>
              <div className={classes.name}>
                <h1>{item.name}</h1>
                <p>Guruh nomi</p>
              </div>{' '}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
