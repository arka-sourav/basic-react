import airBnbLogo from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <nav>
      <img src={airBnbLogo} className="nav--logo" />
    </nav>
  );
}

export default Navbar;
