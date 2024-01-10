function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
         getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
function loader(){

    var countdownElement = document.getElementById('countdown');
    var initialCountdownVal = countdownElement.innerHTML;
    
    setInterval(function () {
        initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0;
        countdownElement.innerHTML = initialCountdownVal;
    }, 500);
    
    gsap.to("#countdown",{
       top:"-100%",
       duration:1,
       delay:3
    })
    gsap.to("#loader",{
       opacity:0,
       duration:1,
       delay:4
    })
}
function page4(){

    var page4 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            scrub:3,
            start:"top top",
            end:"top -40%",
            // markers:true,
            pin:true
        }
    })
    page4.from("#page4 #p1",{
        left:"-15%",
        duration:1,
    
        rotate:"-4deg",
        
    },"anime")
    page4.from("#page4 #p3",{
        left:"119%",
        duration:1,
        rotate:"-10deg",
        
    },"anime")
    page4.from("#page4 #p2",{
        left:"-18%",
        rotate:"3deg",
        duration:1,
    },"-=.5")
    page4.from("#page4 #p4",{
        left:"119%",
    
        rotate:"4deg",
        duration:1,
    },"-=1")
    page4.to("#page4 p",{
        duration:5,
        stagger:5,
        opacity:1,
        delay:2,
        onStart: function(){
            $('#page4 p').textillate({ 
                in: {
                     effect: 'fadeInUp',
                      delayScale:.2,
                    } });
        }
    })
}
function page1(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            pin: true,
            start:"top 8%",
            // markers:true,
            end:"top -80%",
            scrub:true
        }
    })
    tl.to("#page1 #rec1",{
        top:"-55%",
        duration: 1
    },"hi")
    tl.to("#page1 #rec2",{
        top:"100%",
        duration:1
    },"hi")
    tl.from("#page1 #hi,#hk",{
        x:-300,
        duration:1,
    },"hi")
    tl.from("#page1 #hj",{
        x:300,
        duration:1,
    },"hi")
}
function page2(){
    var page2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"center center",
            end:"+=9000",
            // markers:true,
            pin:true,
            scrub:2
        }
    })
    page2.from("#pgp1 h1",{
        y:600,
        duration:1,
    })
    page2.to("#pgp1 h1 #s2",{
       opacity:0,
       delay:-.1
    
    })
    page2.to("#pgp1 h1 #s4",{
        opacity:0,
        delay:-.1
       
    })
    page2.to("#pgp1 h1 #s3",{
        opacity:0,
       delay:-.3
        
    })
    page2.to("#pgp1 h1 #s1",{
        opacity:0,
       delay:-.2  
    })
    page2.to("#page2",{
        duration:4,
        x:-window.innerWidth*2.8,
    },"scroll")
    page2.from("#pgp3 #s7",{
        x:300,
        duration:1
    },"hiii")
    page2.from("#pgp3 #s5,#s6",{
        x:300,
        duration:4,
        delay:-2
    },"hiii")
    page2.to("#pgp3 #over",{
        left:"0%",
        duration:2
    },"hiii")
}
function page3(){
    var page3 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            pin: true,
            start:"center center",
            // markers:true,
            end:"top -150%",
            scrub:3
        }
    })
    page3.to("#page3 #para",{
        top:"-300%",
        duration:5
    },"guys")
    page3.to("#page3 #image2",{
        left:"-260%",
        duration:5
    },"guys")
    page3.from("#image2 #img1",{
       rotate:"-2deg"
    },"guys")
    page3.from("#image2 #img2",{
       rotate:"-3deg"
    },"guys")
    page3.from("#image2 #img3",{
       rotate:"-2deg",
    },"guys")
    page3.from("#image2 #img4",{
       rotate:"-8deg"
    },"guys")
    page3.from("#image2 #img5",{
       rotate:"-1deg",
       delay:4
    },"guys")
    page3.from("#image2 #img5",{
       rotate:"3deg",
       delay:4
    },"guys")
    page3.to("#page3 #v2",{
        top:"0%",
        left:"0%",
        rotate:"0deg",
        duration:3,
        width:"100vw",
        delay:-1
    })
    
    
}
init();
  window.addEventListener("mousemove",(dets)=>{
    gsap.to("#cursor",{
        x:dets.clientX,
        y:dets.clientY,
    ease: Expo.easeOut

    })
})
loader();
gsap.from("#menu",{
    top:"-15%",
    duration:1,
    delay:5
})
page1();
page2();
page3();
page4();


