
let mainDiv=document.createElement("div")
let Div1=document.createElement("div")
 Div1.classList.add("row",'warp')
 let title=document.createElement("h1")
 title.classList.add("text-center")
 title.setAttribute("id","title")
 title.innerHTML=`RestContries Weather`
 mainDiv.append(title)
 document.body.classList.add("alert-primary")
 document.body.append(mainDiv)
 document.body.append(Div1)
//------------------------------restCountry------------------------------
let restCountry= async()=>{
 (await (await fetch("https://restcountries.com/v3.1/all")).json() ).map((e)=>{
    Div1.innerHTML +=`
    <div class=" card p-2 my-4 mx-4 col-sm-3 container alert-dark col-md-2">
    <div class="text-center"><p class="bg-dark h4 text-white">${e.name.common}</p><div>
    <div class="t-img" ><img src="${e.flags.png}" class="card-img-top"></div>
    <p>Capital : <span class="h5">${e.capital && e.capital[0] ? e.capital[0] : 'N/A'}</span></p>
    <p>Region : <span class="h5">${e.region}</span></p>
    <p>Country code : <span class="h5">${e.cca3}</span></p>
    <button class="btn btn-primary" onclick="wget('${e.name.common}')" >Click for Weather</button>
    <div id="`+`${e.name.common}`+`" ></div>
   </div>`
});
};
//------------------------------------weatherapi----------------------------   
         let  wget= async (ele)=>{
            let wCard = document.getElementById(ele);
            let res= await ( await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ele}&appid=88fbab9a5047f7d4ca320e2bac15e2d1`)).json();
            wCard.innerHTML=`<div class="card mt-3">
            <div class="card-body alert-seconday ">
              <p >Temperature : ${res.main.temp}</p>
              <p >Windspeed : ${res.wind.speed}</p>
              <p >Humidity : ${res.main.humidity}</p>
             </div>
             </div>`
              }

restCountry();

