function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <span>Everything</span>
        <span>Happens For</span>
        <span>A Reason</span>
      </h1>
      <p className="header__subtitle">
        LOCOMOTIVE SCROLL<br /> & GREENSOCK 3
      </p>
      <div className="header__decor-circle"></div>
      <div className="header__gallery">
        <div className="header__gallery--left">
          <div className="header__gallery-image header__gallery-image--l">
            <img src="/images/14.jpg" />
          </div>
          <div className="header__gallery-image header__gallery-image--m">
            <img src="/images/13.jpg" />
          </div>
          <div className="header__gallery-image header__gallery-image--s">
            <img src="/images/12.jpg" />
          </div>
        </div>
        <div className="header__gallery--right">
          <div className="header__gallery-image header__gallery-image--l">
            <img src="/images/11.jpg" />
          </div>
          <div className="header__gallery-image header__gallery-image--m">
            <img src="/images/9.jpg" />
          </div>
          <div className="header__gallery-image header__gallery-image--l">
            <img src="/images/8.jpg" />
          </div>
        </div>
      </div>
      <div className="header__cta-circle">
        <div className="header__cta-circle--logo"></div>
      </div>
    </header>
  );
}

export default Header;
