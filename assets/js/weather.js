/////////////////////////////////////////////////////////////////////////////////
const resfulldata = async () => {
  try {
    let res = await fetch("https://restcountries.com/v3.1/all");
    let res2 = await res.json();

    for (let i = 0; i < res2.length; i++) {
      col.innerHTML += `
			<div class="card text-center">
			<div class="card-body">
			<h3>${res2[i].name.common}</h3>
			<img src="${res2[i].flags.png}">
			<h4>${res2[i].region}</h4>
			<p class=temp></p>
			<button type="button" id="getbtn" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Get Weather Details
			</button>
			</div></div>

			`;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    let wdata = document.querySelectorAll("#getbtn");
    //console.log(wdata);
    for (let i = 0; i < wdata.length; i++) {
      wdata[i].addEventListener("click", async () => {
        try {
          let lat = res2[i].latlng[0];
          let lng = res2[i].latlng[1];
          lat = lat.toFixed(2);
          lng = lng.toFixed(2);
          //console.log(res2[i].name.common, lat, lng);
          let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=78d12f57a2437960183db4e483ee6d6a`;

          let wetdata = await fetch(url);
          let wresult = await wetdata.json();

          //console.log(wresult);

          let temparature = wresult.main.temp - 273;
          temparature = temparature.toFixed(2);
          console.log(temparature);
          let dis = document.querySelectorAll(".temp");
          dis[i].innerHTML = `${temparature}<sup>o</sup> C`;
        } catch {
          alert("Something went wrong in Weather Data");
        }
      });
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////
  } catch {
    alert("Something went wrong in Rest Countries Data");
  }
};
resfulldata();
////////////////////////////////////////////////////////////////

let container = document.createElement("div");
container.setAttribute("class", "container");

//Create Row
let row = document.createElement("div");
row.setAttribute("class", "row");

//Create Column
let col = document.createElement("div");
col.setAttribute("class", "col");

//Create Card
//Card
let card = document.createElement("div");
card.setAttribute("class", "card");

//Card Body
let cardBody = document.createElement("div");
cardBody.setAttribute("class", "card-body");

//Card
let cardTitle = document.createElement("h5");
cardTitle.setAttribute("class", "card-title");

//Image
let img = document.createElement("img");

img.setAttribute("class", "card");

//Region
let region = document.createElement("p");
region.setAttribute("class", "card-title");

let lat = document.createElement("p");
lat.setAttribute("class", "card-title");

let lng = document.createElement("p");
lng.setAttribute("class", "card-title");

document.body.append(container);
container.append(row);
row.append(col);
