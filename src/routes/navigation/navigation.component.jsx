import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div classname="navigation">
        <Link classname="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div classname="nav-links-container">
          <Link classname="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
