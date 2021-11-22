const movieData=[{
  name:"6Underground",
  genre:"action",
  img:"img\\posterM_6Underground.jpg"
},

{
  name:"Coco",
  genre:"animation",
  img:"img\\posterM_Coco.jpg"
},

{
  name:"Deadpool",
  genre:"action",
  img:"img\\posterM_Deadpool_.png"
},

{
  name:"Everest",
  genre:"adventure",
  img:"img\\posterM_Everest.jpg"
},

{
  name:"Extraction",
  genre:"action",
  img:"img\\posterM_Extraction.png"
},

{
  name:"Godzilla",
  genre:"fantasy",
  img:"img\\posterM_Godzilla.jpg"
},

{
  name:"Inception",
  genre:"action",
  img:"img\\posterM_Inception.jpg"
},

{
  name:"Jumanji",
  genre:"fantasy",
  img:"img\\posterM_Jumanji.png"
},

{
  name:"Asur",
  genre:"fantasy",
  img:"img\\posterS_asur.jpg"
},

{
  name:"Dark",
  genre:"fantasy",
  img:"img\\posterS_Dark.jpg"
},

{
  name:"Loki",
  genre:"fantasy",
  img:"img\\posterS_loki.jpg"
},

{
  name:"Money Heist",
  genre:"action",
  img:"img\\posterS_money-heist.jpg"
},

{
  name:"Squid games",
  genre:"action",
  img:"img\\posterS_squid-games.jpg"
},

{
  name:"Start up",
  genre:"action",
  img:"img\\posterS_Start-Up_2020.jpg"
},

{
  name:"Wanda vision",
  genre:"fantasy",
  img:"img\\posterS_wanda-vision.jpg"
},

{
  name:"Witcher",
  genre:"fantasy",
  img:"img\\posterS_witcher.jpg"
},

]

document.addEventListener('DOMContentLoaded', () => {
let selectedGenre=""
let innerMovie=[]
  // let innerMovie=movieData.filter(item=> selectedGenre?item.genre===selectedGenre:true).map(item=>createFxn(item))
 
  // document.querySelector(".flex-container").innerHTML=innerMovie.join("\n")
  fetchData(selectedGenre)

  document.querySelector("#myInput").addEventListener('keyup',(e)=>{
    innerMovie=movieData.filter(item=>   selectedGenre ? (item.name.toLowerCase().includes(e.target.value)&& item.genre===selectedGenre ) : item.name.toLowerCase().includes(e.target.value)).map(item=>createFxn(item))
   
   if(innerMovie.length>0){
    document.querySelector(".flex-container").innerHTML=innerMovie.join("\n")
   }else{
    document.querySelector(".flex-container").innerHTML="<p class='noResult'>Sorry, No result Found!!</p>"
   }
   
    
  })

  document.querySelector("select").addEventListener('change',(e)=>{
    selectedGenre=e.target.value
    document.querySelector("#myInput").value=""
    fetchData(selectedGenre)
 })
// const innerMovie=movieData.map(item=>createFxn(item))




// document.querySelector("select").addEventListener('change',(e)=>{
//   const searchFilter=movieData.filter(item=>item.genre.toLowerCase()===e.target.value).map(item=>createFxn(item))
//   document.querySelector(".flex-container").innerHTML=searchFilter.join("\n")
// })

// movieData.filter(item=>item.name.toLowerCase().includes(e.target.value) && item.genre===selectedGenre)





});



const createFxn=(item)=> `       
<div class="column">
<div class="top-left">${item.name} </div> 
<img src=${item.img} alt=${item.name}>                 
 </div>`

const fetchData=(selectedGenre)=>{ 
  innerMovie=movieData.filter(item=> selectedGenre?item.genre===selectedGenre:true).map(item=>createFxn(item))
  document.querySelector(".flex-container").innerHTML=innerMovie.join("\n")
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}















// <script>
//         function myFunction() {
//             var input, filter, ul, li, a, i, txtValue;
//             input = document.getElementById("myInput");
//             filter = input.value.toUpperCase();
//             ul = document.getElementById("myUL");
//             li = ul.getElementsByTagName("li");
//             for (i = 0; i < li.length; i++) {
//                 a = li[i].getElementsByTagName("a")[0];
//                 txtValue = a.textContent || a.innerText;
//                 if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                     li[i].style.display = "";
//                 } else {
//                     li[i].style.display = "none";
//                 }
//             }
//         }
// </script>







