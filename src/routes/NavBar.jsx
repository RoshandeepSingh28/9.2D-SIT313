import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header>
        <div className="nav_div">
          <p>DEV@Deakin</p>
          <input type="search" placeholder="Search..." />
          
          <div className="nav_but">
            <Link to="/">
              <img src="./images/home.png" alt="Home icon" />
            </Link>
            <Link to="/find-question">
              <button>Find Question</button>
            </Link>
            <Link to="/post">
              <button>Post</button>
            </Link>
            <Link to="/plans">
              <button>Plans</button>
            </Link>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default NavBar;
