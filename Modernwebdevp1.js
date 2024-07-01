const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
    let tl=gsap.timeline();
    tl.from("#nav",{
        y:-10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        duration: 1.5,
        ease: Expo.easeInOut,
        stagger:.2,
        delay:-1,
    })
    .from("#herofooter",{
        y:-10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut
    })
}

function circlechptakro(){
    //define default scale
    let xscale=1;
    let yscale=1;
    let xprevious=0;
    let yprevious=0;
    window.addEventListener("mousemove",function(dets){
        // clearTimeout(timeout);
        let xdiff=dets.clientX-xprevious;
        let ydiff=dets.clientX-yprevious; 
        xscale=gsap.utils.clamp(.8,1.2,xdiff);
        yscale=gsap.utils.clamp(.8,1.2,ydiff);
        xprevious=dets.clientX;
        yprevious=dets.clientY;
        circleMousefollower(xscale,yscale);
        timeout=setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`

        },100);
    });
}

function circleMousefollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})` ;
    })
}

document.querySelectorAll(".elem").forEach(function(elem){
    let rotate=0;
    let diffrot=0;
elem.addEventListener("mousemove",function(dets){
    let diff=dets.clientY-elem.getBoundingClientRect().top;
    diffrot=dets.clientX-rotate;
    rotate=dets.clientX;
    
    gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease:Power3,
        top:diff,
        left:dets.clientX,
        rotate:gsap.utils.clamp(-20,20,diffrot*0.2),
    })
});
});

document.querySelectorAll(".elem").forEach(function(elem){
    let rotate=0;
    let diffrot=0;
elem.addEventListener("mouseleave",function(dets){
    gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease:Power3,
       duration:0.5,
    })
});
});



circleMousefollower();
firstPageAnim();
circlechptakro();                       