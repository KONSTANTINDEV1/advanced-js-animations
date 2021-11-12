function Portfolio() {
  return (
    <section className="section max-w-container portfolio">
      <h2 className="chapter">
        <span>002 -</span> Selected Works
      </h2>
      {/* PORTFOLIO NAVIGATION */}
      <div className="portfolio__fixed-nav">
        <ul>
          <li className="is-active">
            <a href="#portfolio1">Saving Forests </a>
          </li>
          <li>
            <a href="#portfolio2">Entering Winter</a>
          </li>
          <li>
            <a href="#portfolio3">Wildlife Exploration</a>
          </li>
          <li>
            <a href="#portfolio4">Holiday Resorts</a>
          </li>
        </ul>
      </div>
      <div className="portfolio__items">
        {/* PORTFOLIO ITEM */}
        <div
          id="portfolio1"
          className="portfolio-item with-parallax"
          data-color="#8c8480"
        >
          <div className="portfolio-item__image">
            <img data-scroll src="/images/img_landscape-01-large.jpg" />
          </div>
          <div className="portfolio-item__heading">
            <p>01</p>
            <h3>Saving Forests</h3>
          </div>
          <div className="portfolio-item__text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
              dignissimos sed ipsa.
            </p>
          </div>
        </div>
        {/* PORTFOLIO ITEM */}
        <div
          id="portfolio2"
          className="portfolio-item with-parallax"
          data-color="#8c8480"
        >
          <div className="portfolio-item__image">
            <img data-scroll src="/images/img_landscape-02-large.jpg" />
          </div>
          <div className="portfolio-item__heading">
            <p>02</p>
            <h3>Entering Winter</h3>
          </div>
          <div className="portfolio-item__text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
              dignissimos sed ipsa.
            </p>
          </div>
        </div>
        {/* PORTFOLIO ITEM */}
        <div
          id="portfolio3"
          className="portfolio-item with-parallax"
          data-color="#8c8480"
        >
          <div className="portfolio-item__image">
            <img data-scroll src="/images/15.jpg" />
          </div>
          <div className="portfolio-item__heading">
            <p>03</p>
            <h3>Wildlife Exploration</h3>
          </div>
          <div className="portfolio-item__text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
              dignissimos sed ipsa.
            </p>
          </div>
        </div>
        {/* PORTFOLIO ITEM */}
        <div
          id="portfolio4"
          className="portfolio-item with-parallax"
          data-color="#8c8480"
        >
          <div className="portfolio-item__image">
            <img data-scroll src="/images/11.jpg" />
          </div>
          <div className="portfolio-item__heading">
            <p>04</p>
            <h3>Holiday Resorts</h3>
          </div>
          <div className="portfolio-item__text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
              dignissimos sed ipsa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
