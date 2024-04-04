let tl = gsap.timeline();

tl.from("nav img, nav div ul li, nav div a, nav div button", {
    y: -100,
    duration: 1,
    dely:1,
    opacity:0,
    stagger:0.2
})

tl.from(".txt div", {
    y:100,

    opacity:0,
    duration:1,
    stagger:.3
})

tl.from(".img > img", {
    opacity:0,
    duration:1.5,
    stagger:.3,
    width:0,
    height:0
})
tl.from(".bottom", {
    scale:0,
    opacity:0
})
tl.to(".bottom", {
    y:10,
    repeat: -1,
    yoyo: true,
    ease: "power2.in"
})

tl.to("span", {
    background: "red",
    duration: 1,
    repeat: -1, 
    yoyo: true
})