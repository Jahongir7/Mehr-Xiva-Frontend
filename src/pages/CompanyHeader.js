import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCompanyById } from "../redux/actions/adminActions";
import classes from "../css/Group1.module.css";

const CompanyHeader = () => {
  const dispatch = useDispatch();
  const companyId = window.location.pathname.split("/")[3];
  const { company } = useSelector((state) => state.adminReducer);
  useEffect(() => {
    dispatch(getCompanyById(companyId));
  }, [dispatch, companyId]);
  let arr = [];
  arr = company;
  return (
    <div>
      <h2>"{arr && arr.name}" hisobotlari</h2>
      <div className={classes.myflex}>
        <p>
          Directori :{arr && arr.director} ({arr && arr.companyPhone})
        </p>
        <p>
          Buxgalteri :{arr && arr.accountant} ({arr && arr.accountantPhone})
        </p>
      </div>
      <div className={classes.myflex}>
        <p>Umumiy qoldiq </p>
      </div>
    </div>
  );
};

export default CompanyHeader;
