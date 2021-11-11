function Navbar() {
  return (
    <nav id="navbar" className="navbar section max-w-container">
      <div className="navbar__logo">PAPAFAM</div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="">Our Values</a>
        </li>
        <li className="navbar__link">
          <a href="">Projects</a>
        </li>
        <li className="navbar__link">
          <a href="">Blog</a>
        </li>
        <li className="navbar__link">
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="navbar__mobile">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
