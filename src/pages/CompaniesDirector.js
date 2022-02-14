/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
// material
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography, Grid } from "@mui/material";
// utils
import { OrganizationsData } from "../_mocks_/OrganizationsData";
// ----------------------------------------------------------------------
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(5, 0),
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.primary.dark,
    0
  )} 0%, ${alpha(theme.palette.primary.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------

export default function CompaniesDirector() {
  return (
    <>
      <div className="orgWrap">
        <Grid container spacing={3}>
          {OrganizationsData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Link to="/director/company" style={{ textDecoration: "none" }}>
                <RootStyle
                  style={{
                    backgroundColor: `${
                      item.num < 10 ? "#C8FACD" : "rgba(0,171,85,.8)"
                    }`,
                    color: "rgb(4, 41, 122)",
                  }}
                >
                  <IconWrapperStyle
                    style={{
                      backgroundColor: "#C8FACD",
                      color: "rgb(4, 41, 122)",
                    }}
                  >
                    <Icon icon="fa-solid:university" width={24} height={24} />
                  </IconWrapperStyle>
                  <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                    {item.title}
                  </Typography>
                </RootStyle>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
