import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clinician">Clinician</Link>
          </li>
          <li>
            <Link to="/wardmanager">Ward Manager</Link>
          </li>
          <li>
            <Link to="/porter">Porter</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;
