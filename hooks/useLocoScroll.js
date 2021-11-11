import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
gsap.registerPlugin(ScrollTrigger);

function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    let locoScroll = null;
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const scrollContainer = document.querySelector(".scroll-container");
        const locoScroll = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
          multiplier: 1,
          getSpeed: true,
          getDirection: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy(scrollContainer, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          }, // we don't have to define a scrollLeft because we're only scrolling vertically.
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
          pinType: scrollContainer.style.transform ? "transform" : "fixed",
        });
        const lsUpdate = () => {
          if (locoScroll) {
            locoScroll.update();
          }
        };

        ScrollTrigger.addEventListener("refresh", lsUpdate);

        ScrollTrigger.refresh();
      } catch (error) {
        throw Error(`[SmoothScrollProvider]: ${error}`);
      }
    })();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", lsUpdate);
    };
  }, [start]);
}

export default useLocoScroll;
