
// // page loader start as DOM::begin //

var tl = gsap. timeline () ;


document.addEventListener('DOMContentLoaded', () =>{

    var tl = gsap. timeline () ;

    tl.from("#sp_h1,#sp_h2",{
        opacity:0, 
        y:120, 
        stagger:0.1,
        ease: "bounce",
        duration:1.5,
    })
    tl.to("#sp_h1,#sp_h2",{
      opacity:0, 
      y:-160, 
      stagger:0.1,
      ease: "power4.out",
      duration:1,
      delay:1
  })
    tl.from(".revealer",{
        opacity:0, 
        y:370,
        ease: "power4.out",
        duration:1,

    })
    tl.to(".revealer",{
   scale:50,
   rotate:150,
   duration:1.4,
   opacity:1
    })
    tl.to(".pg_loader",{
        display:'none'
         })
        
})
// page loader start as DOM::End //

tl.from(".logo-nav ",{
    opacity:0, 
    ease: "power4.out",
    delay:6,
})
let bg_name = document.querySelectorAll('.bg-name');
    
    tl.from('.bg-name',{
        opacity:0, 
        y:90, 
        stagger:0.1,
        duration:0.8,
        ease: "bounce",
    })
    tl.from(".bg-name1 ",{
        opacity:0, 
    })
tl.from(".nav_menu ",{
    opacity:0, 
    scale:0, 
    ease: "power4.out",
    rotate:360,
    duration:1.6
})

// nav_menu animation::start //
let nav_menu = document.querySelector('.nav_menu');
nav_menu.addEventListener('click', function(){
    tl.from(".nav_menu",{
                    rotate:360,
                    duration:0.7
                })
})
// nav_menu animation::End //





window.addEventListener('mousemove', function (e){
    var cursor = document.querySelector('.cursor');
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.top = y+'px';
    cursor.style.left = x+'px';
})

window.onmousemove = function (e) {
var img = document.getElementById('For_paralex');
var img_head = document.querySelector('.bg-name1');

   let x = (window.innerWidth - e.pageX)/80;
   let y = (window.innerHeight - e.pageY)/80;
   let xx = (window.innerWidth - e.pageX)/30;
   let yy = (window.innerHeight - e.pageY)/30;
    img.style.transform = `translateX(${x}px) translatey(${y}px)`;
    img_head.style.transform = `translateX(${xx}px) translatey(${yy}px)`;
};

function contact_popup(){
    var contact = document.getElementById('contact_popup');
    var contact_popup = document.querySelector('.contact');
    var icon_cross = document.querySelector('.icon-cross i');

    contact.addEventListener('click', function (){
        contact_popup.style.display = 'block';
    });
    icon_cross.addEventListener('click', function (){
        contact_popup.style.display = 'none';  
    });
}
contact_popup();

function Clicksound(){
    var audio = document.createElement("audio");
audio.src = "mouse-click-153941.mp3";
audio.play();
}


function reveal_sec(){
    
let inside_curve = document.querySelectorAll('.inside-curve');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  } );
});

inside_curve.forEach((inside_curve)=> {  
observer.observe(inside_curve);
})
}
reveal_sec();

function reveal_elements(){
    
    let inside_curve = document.querySelectorAll('.inside-curve');
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
  var tl = gsap. timeline ();

tl.from('.img',{
            opacity:0,
            y:180, 
            delay:0.7
        })

let text = document.querySelectorAll('.text-h1');

    tl.from(text,{
        opacity:0, 
        y:60, 
    })
entry.target.classList.add('.active');
 } 
      });
    });
    inside_curve.forEach((inside_curve)=> {  
    observer.observe(inside_curve);
    });
    }
    reveal_elements();


    function work_pop_ups(){

function work_1(){
let work01 = document.querySelector('.work-1');
let work01_close = document.querySelector('.icon-cross-2 i');
let line_1 = document.querySelector('.line-1');
let line_2 = document.querySelector('.line-2');
let pop_img = document.querySelector('.pop-img');
let work01_pop = document.getElementById('work--1');

work01.addEventListener('click', function (){
  work01_pop.style.height = '100%';
  line_1.style.width = '100%';
  line_2.style.width = '100%';
})

work01_close.addEventListener('click', function (){
  work01_pop.style.height = '0';
  line_1.style.width = '0';
  line_2.style.width = '0';
})
}
work_1();

function work_2(){
  let work01 = document.querySelector('.work-2');
  let work01_close = document.querySelector('.icon-cross-2-2 i');
  let line_1 = document.querySelector('.line-1-2');
  let line_2 = document.querySelector('.line-2-2');
  let pop_img = document.querySelector('.pop-img-2');
  let work01_pop = document.getElementById('work--2');
  
  work01.addEventListener('click', function (){
    work01_pop.style.height = '100%';
    line_1.style.width = '100%';
    line_2.style.width = '100%';
  })
  
  work01_close.addEventListener('click', function (){
    work01_pop.style.height = '0';
    line_1.style.width = '0';
    line_2.style.width = '0';
  })
  }
  work_2();


  function work_3(){
    let work01 = document.querySelector('.work-3');
    let work01_close = document.querySelector('.icon-cross-2-3 i');
    let line_1 = document.querySelector('.line-1-3');
    let line_2 = document.querySelector('.line-2-3');
    let pop_img = document.querySelector('.pop-img-3');
    let work01_pop = document.getElementById('work--3');
    
    work01.addEventListener('click', function (){
      work01_pop.style.height = '100%';
      line_1.style.width = '100%';
      line_2.style.width = '100%';
    })
    
    work01_close.addEventListener('click', function (){
      work01_pop.style.height = '0';
      line_1.style.width = '0';
      line_2.style.width = '0';
    })
    }
    work_3();
  }
  work_pop_ups();

setTimeout(() => {
  alert('If you feel any difficulty with animations, just refresh the webPage - Thank you :)');
}, 32000);


function scroll_text_items(){

  let about =document.querySelector('.about');

  about.addEventListener('scroll', () => {

    let text =document.querySelector('.text--1 h1');
    let ContentPostion = text.getBoundingClientRect().top;
    let windowPostion  = window.innerHeight;

    if(windowPostion > ContentPostion){
      text.classList.add('active1');
    }else{
      text.classList.remove('active1');
    }
  })
}
scroll_text_items();


function about_open(){

let about_btn = document.querySelector('.about_btn');
let about_close = document.querySelector('.about');
let about_close_btn = document.querySelector('.close_about');
let border_bg = document.querySelector('.border-bg');
let body = document.querySelector('.container');


about_btn.addEventListener('click',() =>{
  about_close.style.display = 'block';
  border_bg.style.transform = 'scale(90)';
  body.style.opacity = '0';
})


about_close_btn .addEventListener('click',() =>{
  about_close.style.display = 'none';
  border_bg.style.transform = 'scale(0)';
  body.style.opacity = '1';
})


}
about_open();