/* eslint-disable prettier/prettier */
import { alpha, styled } from '@mui/material/styles';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import classes from '../css/Groups.module.css';
import { data } from '../_mocks_/Groups';

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: 'white',
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

export default function DeanGroups() {
  return (
    <div>
      <h2 style={{ paddingLeft: '10px' }}>Guruhlar</h2>
      <div className={classes.group_lists}>
        {data.map((item) => (
          <Link to={item.link} style={{ textDecoration: 'none', cursor: 'pointer' }} key={item.id}>
            <div className={classes.group_list} key={item.id}>
              <div className={classes.num}>
                <IconWrapperStyle>
                  <h2>
                    <CountUp end={item.num} duration={3} />
                  </h2>
                </IconWrapperStyle>{' '}
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
