/* eslint-disable prettier/prettier */
import { alpha, styled } from '@mui/material/styles';
import CountUp from 'react-countup';
import { UniversitiesData } from '../_mocks_/Universities';
import classes from '../css/Groups.module.css';

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

export default function MinistryGroups() {
  return (
    <div>
      <h2 style={{ paddingLeft: '10px' }}>Universitetlar</h2>
      <div className={classes.group_lists}>
        {UniversitiesData.map((item) => (
          <div className={classes.group_list} key={item.id}>
            <div className={classes.num}>
              <IconWrapperStyle>
                <h2>
                  <CountUp end={item.num} duration={1} />
                </h2>
              </IconWrapperStyle>{' '}
              <p>Fakultetlar soni</p>
            </div>
            <div className={classes.name}>
              <h1>{item.name}</h1>
              <p>Universitet nomi</p>
            </div>{' '}
          </div>
        ))}
      </div>
    </div>
  );
}
