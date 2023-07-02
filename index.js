// search bar

let search = document.getElementById('search');
let input = document.getElementById('input')
search.addEventListener('click',()=>{
    input.classList.toggle('nav-active')
})
// scroll change color-header bar

function scrollHeader(){
    const header= document.querySelector('#header');
 
    if (this.scrollY >=50) {
    header.classList.add('scroll-header');

    }
else{
    header.classList.remove('scroll-header')
  
}
}
window.addEventListener('scroll',scrollHeader)



// scroll menu


// let sections = document.querySelectorAll('section[id]')
// let navLinks= document.querySelectorAll('.nav-link')
// window.onscroll = () =>{
//     sections.forEach(sec=>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id= sec.getAttribute('id');
//         if(top>=offset && top<offset+height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active_nav_link');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active_nav_link');
//             })
//         }
//     })
// }



// sliders
let slide_index =0;
let slide_play = true;
let slide = document.querySelectorAll('.slide')
hideAllSlide=()=>{
    slide.forEach(e=>{
e.classList.remove('active-slide')
    })
}

showSlide=()=>{
hideAllSlide()
slide[slide_index].classList.add('active-slide')
}
nextslide=()=> slide_index = slide_index + 1 === slide.length ? 0 :slide_index+1 
prevslide=()=> slide_index = slide_index - 1 < 0  ? slide.length  -1 :slide_index-1 
document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)
document.querySelector('.slide-next').addEventListener('click', () => {
    nextslide()
    showSlide()
})


document.querySelector('.slide-prev').addEventListener('click', () => {
    prevslide()
    showSlide()
})

showSlide()

setInterval(() => {
    if (!slide_play) return
    nextslide()
    showSlide() 
}, 3000);




// testimonals
let testimonal = document.getElementById('testimonal_prof');

let test = [

{
    img: "team1.jpg",
    name:"Dennis wilson",
    testimonal: "Lorem ipsum dolor sit amet int consectetur Quas minima sunt natus tempore, maiores aliquid modi felis vita facere aperiam sequi optio lacinia id ipsum non velit, culpa.voluptate rem ullam dolore nisi est quasi, doloribus tempora."
},
{
    img: "team2.jpg",
    name:"Tommy Sakura",
    testimonal: "Lorem ipsum dolor sit amet int consectetu Quas minima liquid modi felis vita facere aperiam sequi optio lacinia id ipsum non velit, culpa.voluptate rem ullam dolore nisi est quasi, doloribus tempora."
},
{
    img: "team3.jpg",
    name:"Roy Linderson",
    testimonal: "Lorem ipsum dolor sit amet int consectetu maiores aliquid modi felis vita facere aperiam sequi optio lacinia id ipsum non velit, culpa.voluptate rem ullam dolore nisi est quasi, doloribus tempora."
},
{
    img: "team4.jpg",
    name:"Mike Thyson",
    testimonal: "Lorem ipsum dolor sit amet int Quas minima sunt natus tempore, maiores aliquid modi felis vita facere aperiam sequi optio lacinia id ipsum non velit, culpa.voluptate rem ullam dolore nisi est quasi, doloribus tempora."
}
]

let i=0;
let j = test.length;
let Nextbtn = document.getElementById("previous_btn")
let prebtn = document.getElementById("next_btn")

displaytestimonal()
function displaytestimonal(){
testimonal.innerHTML = `
<div class= "t-img">
<img src= "${test[i].img}" alt=""/>
</div>
<div class="t-heading"><h2>${test[i].name}</h2></div>
<div class="t-text">
<blockquote>
<q>
${test[i].testimonal}
</q>
</blockquote>

`
}

window.onload = displaytestimonal;
Nextbtn.addEventListener("click",()=>{
i= (j+i+1)%j;
displaytestimonal()
})
prebtn.addEventListener("click",()=>{
i= (j+i-1)%j;
displaytestimonal()
})






