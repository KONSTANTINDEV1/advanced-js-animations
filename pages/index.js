import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import SplitText from "../utils/splittext.js";
import { useEffect, useState } from "react";
import useLocoScroll from "../hooks/useLocoScroll.js";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import Preloader from "../components/Preloader.js";
import Blog from "../components/Blog.js";
import Portfolio from "../components/Portfolio.js";
import Contact from "../components/Contact.js";

export default function Home() {
  const [preLoader, setPreLoader] = useState(true);

  useLocoScroll(preLoader);
  useEffect(() => {
    setTimeout(() => {
      // DEFINE SCROLL CONTAINER FOR ALL GSAP ANIMATIONS
      const scrollContainer = document.querySelector(".scroll-container");

      // TEXT SPLITTING
      const contactTitle = new SplitText(".contact__title", {
        type: "lines",
        linesClass: "contact__title-parent",
      });

      gsap.from(".contact__title-span", {
        y: 80,
        stagger: 0.2,
        ease: "power2.ease",
        scrollTrigger: {
          trigger: ".contact",
          start: "top center",
          toggleActions: "play none none reverse",
          scroller: scrollContainer,
        },
      });

      // NAVLINK ANIMATION ::AFTER
      const animNavLinks = () => {
        const navLinks = gsap.utils.toArray(".navbar a");
        navLinks.forEach((link) => {
          link.addEventListener("mouseleave", (e) => {
            link.classList.add("animate-out");
            setTimeout(() => {
              link.classList.remove("animate-out");
            }, 500);
          });
        });
      };
      animNavLinks();

      gsap.to(".navbar__link ", {
        yPercent: 20,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".navbar",
          start: "10%,10%",
          scrub: 0.8,
          scroller: scrollContainer,
        },
      });

      gsap.from(".navbar__mobile", {
        opacity: 0,
        xPercent: 40,
        duration: 1,
        scrollTrigger: {
          trigger: ".hero",
          start: "5% top",
          end: "15%",
          scrub: 1,
          scroller: scrollContainer,
        },
      });

      // HEADER ANIMATIONS
      const animHeaderTilt = () => {
        // ATTACH EVENT LISTENER TO HEADER TO GET CLIENT DETAILS
        const header = document.querySelector(".header");
        header.addEventListener("mousemove", moveImages);
      };

      // CREATE FUNCTION TO GET EVENT VALUES FOR ANIM-HEADER
      function moveImages(e) {
        console.log(e);
        // GET THE VALUES FROM THE EVENT
        const { offsetX, offsetY, target } = e;

        // FIND THE CURRENT SIZE OF THE HEADER
        const { clientWidth, clientHeight } = target;

        // GET 0 0 IN THE CENTER OF THE SCREEN
        const xPos = offsetX / clientWidth - 0.5;
        const yPos = offsetY / clientHeight - 0.5;

        // GET ALL IMAGES LEFT AND RIGHT
        const leftImages = gsap.utils.toArray(
          ".header__gallery--left .header__gallery-image"
        );

        const rightImages = gsap.utils.toArray(
          ".header__gallery--right .header__gallery-image"
        );

        // CREATE MODIFIER TO INCREASE HEADER IMAGE MOVEMENT
        const modifier = (index) => index * 2 + 0.6;

        // ATTACH GSAP TO ALL IMAGES ON LEFT TO MOVE
        leftImages.forEach((image, index) => {
          gsap.to(image, {
            duration: 1.2,
            x: xPos * 20 * modifier(index),
            y: yPos * 30 * modifier(index),
            rotationX: yPos * 10,
            rotationY: xPos * 40,
            scroller: scrollContainer,
          });
        });

        rightImages.forEach((image, index) => {
          gsap.to(image, {
            duration: 1.2,
            x: xPos * 20 * modifier(index),
            y: -yPos * 30 * modifier(index),
            rotationX: yPos * 10,
            rotationY: xPos * 40,
            scroller: scrollContainer,
          });
        });

        gsap.to(".header__decor-circle", {
          duration: 1.7,
          x: 100 * xPos,
          y: 120 * yPos,
          ease: "power4.out",
          scroller: scrollContainer,
        });
      }

      animHeaderTilt();

      // PARALLAX GSAP ANIMTAIONS

      gsap.utils.toArray(".with-parallax").forEach((section) => {
        const image = section.querySelector("img");
        const blogImage = section.querySelector(".blog__image");
        const imageMask = section.querySelector(".blog__image-mask");
        gsap.to(image, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            scrub: true,
            // markers: true,
            scroller: scrollContainer,
          },
        });

        gsap.from(imageMask, {
          height: "100%",
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            scroller: scrollContainer,
          },
        });

        gsap.from(blogImage, {
          duration: 3,
          scale: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".blog",
            start: "top center",
            scroller: scrollContainer,
          },
        });
      });

      // PORTFOLIO ANIMATIONS
      gsap.to(".portfolio__fixed-nav", {
        scrollTrigger: {
          trigger: ".portfolio__fixed-nav",
          start: "top center",
          endTrigger: "#portfolio4",
          end: "center center",
          pin: true,
          scroller: scrollContainer,
          ease: "power2",
        },
      });

      // PRELOADER ANIMATION
      let tl = gsap
        .timeline()
        .from(".preloader__title-container", {
          opacity: 0,
          x: 40,
          stagger: 1.8,
          ease: "power2.ease",
        })
        .from(".preloader__title-container-last", {
          opacity: 0,
          x: 40,
          stagger: 1.3,
          delay: 1.2,
          ease: "power2.easeInOut",
        })
        .to(
          ".preloader__title-container",
          {
            opacity: 0,
            x: -60,
            stagger: 1.7,
            ease: "power2.easeInOut",
          },
          "-=4.4"
        )
        .to(".preloader", {
          height: 0,
          ease: "Expo.easeInOut",
          duration: 1.5,
        })
        .from(
          ".navbar__logo",
          {
            x: -30,
            autoAlpha: 0,
            duration: 1.5,
          },
          "-=0.9"
        )
        .from(
          ".navbar__link",
          {
            x: 30,
            autoAlpha: 0,
            duration: 1.5,
            stagger: 0.2,
          },
          "-=1"
        )
        .from(
          ".header__gallery-image",
          {
            autoAlpha: 0,
            stagger: 0.2,
          },
          "-=1.5"
        );

      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <main>
      {/* PRELOADER */}
      {/* <Preloader /> */}
      {/* NAVIGATION MENU */}
      <Navbar />

      <div data-scroll-container className="scroll-container">
        {/* HERO SECTION */}
        <Header />

        {/* BLOG SECTION */}
        <Blog />

        {/* PORTFOLIO */}
        <Portfolio />

        {/* CONTACT */}

        <Contact />
      </div>
      <aside className="fill-background"></aside>
    </main>
  );
}
