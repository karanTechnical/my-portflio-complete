// creating a responsive nabbar component ===========>>>>




// creating a responsive nabbar component ===========>>>>


const heroSection = document.querySelector('.section-hero')
 
const mobile_nav = document.querySelector('.mobile-navbar-btn')
const headerElem = document.querySelector('.header');

mobile_nav.addEventListener("click",()=>{
  headerElem.classList.toggle("active")
})
// creating a responsive nabbar component ===========>>>>
const observer =new IntersectionObserver((entries)=>{
  const ent = entries[0];
  // console.log(ent);
  !ent.isIntersecting ? document.body.classList.add("sticky") :  document.body.classList.remove("sticky")
},{root: null, threshold: 0})

observer.observe(heroSection)

// creating a responsive nabbar component ===========>>>>

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  if(!p_btn_clicked.classList.contains('p-btn')) return;



  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

//   to find the Number in data arr 

const btn_num =  p_btn_clicked.dataset.btnNum;
console.log(btn_num);

const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));



  
});

// swiper js code -------------------===============================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay:{
    display: 2500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  },
);

// Responsive Js Happy client mobile device 
const myJsmedia = (wdithSize)=>{
  if(wdithSize.matches){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,

    
      },
    );
  }else{
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
 
    
      },
    );

  }
}

 const wdithSize = window.matchMedia("(max-width: 780px)");
  
 myJsmedia(wdithSize)

 wdithSize.addEventListener('change',myJsmedia);




// Scroll to top button -----------------=>



const footerElement = document.querySelector('.section-footer')

const scrollElement = document.createElement('div');
scrollElement.classList.add('scrollTop-style');

scrollElement.innerHTML= `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElement.after(scrollElement);

const scrollTop = ()=>{
  heroSection.scrollIntoView({behavior:"smooth"});

}


scrollElement.addEventListener('click',scrollTop);

// smooth scrolling effect --=====>

const protfolioSec = document.querySelector('.section-portfolio')
const contactSec = document.querySelector('.section-contact')

document.querySelector('.portfolio-link').addEventListener('click', ()=>{
  protfolioSec.scrollIntoView({behavior:"smooth"})
})

document.querySelector('.hireme-btn').addEventListener('click',(e)=>{
  e.preventDefault();
  contactSec.scrollIntoView({behavior:"smooth"})
})

  // Animated Number start ==============================>


  const workSection = document.querySelector('.section-work-data');
  const workObserver = new IntersectionObserver(
    (entries, observer)=>{
      const [entry] = entries;
      console.log(entry);

      if(!entry.isIntersecting) return;
      const counterNum = document.querySelectorAll(".counter-numbers");
  
      const speed = 200;
    
      counterNum.forEach((curNumber) => {
          const updateNumber = () => {
              const targetNumber = parseInt(curNumber.dataset.number);
              // console.log(targetNumber);
           
              const initialNumber = parseInt(curNumber.innerText);
         
              const incrementNumber = Math.trunc(targetNumber / speed);
          
    
              if (initialNumber < targetNumber) {
                  curNumber.innerText = `${initialNumber + incrementNumber}+`;
                  setTimeout(updateNumber, 10);
              } else {
                  curNumber.innerText = `${targetNumber}+`;
              }
    
          };
          updateNumber();
      });

      observer.unobserve(workSection)
    
    },{
      root:null,
      threshold:0,
    }
  );

  workObserver.observe(workSection);
