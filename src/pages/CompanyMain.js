import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCompanyStories } from "../redux/actions/adminActions";
import classes from "../css/Group1.module.css";

export default function CompanyMain() {
  const dispatch = useDispatch();
  const companyId = window.location.pathname.split("/")[3];
  useEffect(() => {
    dispatch(getCompanyStories(companyId));
  }, [dispatch, companyId]);
  const { notes } = useSelector((state) => state.adminReducer);
  console.log(notes);

  return (
    <div style={{ marginBottom: 90 }}>
      <div className={classes.groupWrap}>
        <div className={classes.item_head}>
          <div className={classes.name}>
            <h3>Sana</h3>
          </div>
          <div className={classes.karta}>Izoh</div>
          <div className={classes.founderPayment}>Debit</div>
          <div className={classes.founderDate}>Kredit</div>
          <div className={classes.founderDate}>Qoldiq</div>
        </div>
        <div className={classes.data}>
          {notes && notes.length > 0
            ? notes.map((item) => (
                <div className={classes.item} key={item._id}>
                  <div className={classes.name}>
                    <h3>{item.date}</h3>
                  </div>
                  <div className={classes.karta}>{item.description}</div>
                  <div className={classes.founderPayment}>{item.debit}</div>
                  <div className={classes.founderDate}>{item.credit}</div>
                  <div
                    className={classes.founderDate}
                    style={{
                      color: `${
                        item.debit - item.credit > 0 ? "green" : "red"
                      }`,
                    }}
                  >
                    {item.debit - item.credit}
                  </div>
                </div>
              ))
            : "Iltimos qaydnoma qo'shing"}
        </div>
      </div>
    </div>
  );
}
