import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <NavLink to="/types/fire">Fire</NavLink>
      <NavLink to="/types/water">Water</NavLink>
      <NavLink to="/types/grass">Grass</NavLink>
      <NavLink to="/types/electric">Electric</NavLink>
      <NavLink to="/types/ice">Ice</NavLink>
      <NavLink to="/types/fighting">Fighting</NavLink>
      <NavLink to="/types/poison">Poison</NavLink>
      <NavLink to="/types/ground">Ground</NavLink>
      <NavLink to="/types/flying">Flying</NavLink>
      <NavLink to="/types/psychic">Psychic</NavLink>
      <NavLink to="/types/bug">Bug</NavLink>
      <NavLink to="/types/rock">Rock</NavLink>
      <NavLink to="/types/ghost">Ghost</NavLink>
      <NavLink to="/types/dragon">Dragon</NavLink>
      <NavLink to="/types/dark">Dark</NavLink>
      <NavLink to="/types/steel">Steel</NavLink>
      <NavLink to="/types/fairy">Fairy</NavLink>
    </div>
  );
}

export default Navigation;
