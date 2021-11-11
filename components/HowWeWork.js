function HowWeWork() {
  return (
    <section id="footer" className="section max-w-container how-we-work">
      <h2 className="chapter">
        <span>004 -</span> How We Work
      </h2>
      <div className="fixed-nav">
        <ul>
          <li className="is-active">
            <a href="#stage1">Amet Consectetur </a>
          </li>
          <li>
            <a href="#stage2">Eum Similique</a>
          </li>
          <li>
            <a href="#stage3">Cupiditate Vel</a>
          </li>
          <li>
            <a href="#stage4">Dignissimos Sed</a>
          </li>
        </ul>
      </div>
      <div className='how-we-work__stages'>
        <div id="stage1" className="stage with-parallax" data-color="#8c8480">
          <div className="stage__image">
            <img data-scroll src="/images/img_landscape-01-large.jpg" />
          </div>
          <div className="stage__heading">
            <p>01</p>
            <h3>Amet Consectetur</h3>
          </div>
          <div className="stage__text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
              dignissimos sed ipsa.
            </p>
          </div>
        </div>
        <div id="stage2" className="stage with-parallax" data-color="#505156">
          <div className="stage__image">
            <img data-scroll src="/images/img_landscape-02-large.jpg" />
          </div>
          <div className="stage__heading">
            <p>02</p>
            <h3>Eum Similique</h3>
          </div>
          <div className="stage__text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
              dignissimos sed ipsa.
            </p>
          </div>
        </div>
        <div id="stage3" className="stage with-parallax" data-color="#717872">
          <div className="stage__image">
            <img data-scroll src="/images/img_landscape-01-large.jpg" />
          </div>
          <div className="stage__heading">
            <p>03</p>
            <h3>Cupiditate Vel</h3>
          </div>
          <div className="stage__text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate, vel. Vel qui ipsum eum similique reiciendis dicta
              dignissimos sed ipsa.
            </p>
          </div>
        </div>
        <div id="stage4" className="stage with-parallax" data-color="#ccb28b">
          <div className="stage__image">
            <img data-scroll src="/images/img_landscape-02-large.jpg" />
          </div>
          <div className="stage__heading">
            <p>04</p>
            <h3>Dignissimos Sed</h3>
          </div>
          <div className="stage__text">
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

export default HowWeWork;
