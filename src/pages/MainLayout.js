import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function MainLayout() {
  return (
    <div className="App">
      <div className="title">
        <NavLink to="/">Pokedex</NavLink>
      </div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default MainLayout;
