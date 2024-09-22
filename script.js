const lenis = new Lenis();

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll(".aspect-square").forEach(elem => {

    let image = elem.querySelector("img");
    let tl = gsap.timeline();

    let xTransform = gsap.utils.random(-100, 100);

    tl.set(image, {
        transformOrigin: `${xTransform < 0 ? 0 : "100%"}`
    }, "start")
        .to(image, {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        }, "start")
        .to(elem, {
            xPercent: xTransform,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }

        }, "start")

})