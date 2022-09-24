const url = "https://api.openbrewerydb.org/breweries/";
const about = document.querySelector("#about");
const home = document.querySelector("#home");
const beerForm = document.querySelector("form");
const dropDown = document.querySelector("#beerSelect");
const mainInfo = document.querySelector("#content");
let mainContent = document.querySelector(".mainContent");
let titleNamesH3 = document.createElement("h3");
let titleYear = document.createElement("p");
let TitleDesc = document.createElement("p");
// const weatherForm = document.querySelector("form");
// const postTitle = document.querySelector("#post-title");
// const prevSearch = document.querySelector("#prev-search");
// const mainContent = document.querySelector("main");
// const h2 = document.querySelector("h2");
// const searchHistory = document.querySelector(".history");

// weatherForm.addEventListener("submit", (eve) => {
//   eve.preventDefault();
//   if (postTitle.value) {
//     // weatherForm.textContent
//     const url = `https://wttr.in/${postTitle.value}?format=j1`;

//     console.log(url);
//     //   console.log(postTitle.value);
//     // mainWeather = document.createElement("p");
//     mainContent.innerHTML = `<h2 style="color: blue">${postTitle.value}</h2>`;
//     //   mainContent.style.fontSize = "30px";
//     mainContent.style.fontWeight = "700";
//     //   mainContent.style.verticalAlign = "bottom";

console.log(url);
fetch(url)
  .then((res) => res.json())
  .then((resJson) => {
    console.log(resJson);
    console.log(url);

    function removeDup(resJson) {
      let result = [];
      resJson.forEach((item, index) => {
        if (item.state === null) result.push(item.country);
        if (result.indexOf(item.state) === -1 && !(item.state === null))
          result.push(item.state);
      });
      return result;
    }
    const noDup = removeDup(resJson);
    noDup.forEach((element) => {
      let titleNames = document.createElement("option");
      // console.log(element.title);
      // create a tag:option att :innertext value:
      titleNames.innerText = `${element}`;
      titleNames.value = `${element}`;
      // console.log(titleNames);  << option tag info

      //append to #titles which is the id for select
      dropDown.append(titleNames);
      //
    });

    dropDown.addEventListener("change", (eve) => {
      eve.preventDefault();
      console.log(dropDown.value);
      if (dropDown.value) {
        console.log(true);
        mainContent.innerHTML = "<p id='brewery'>Brewery Info</p>";
        fetch(url)
          .then((res) => res.json())
          .then((res) =>
            res.forEach((element) => {
              let titleNamesH3 = document.createElement("h3");
              let titleYear = document.createElement("p");
              let TitleDesc = document.createElement("p");
              if (
                dropDown.value === element.state ||
                dropDown.value === element.country
              ) {
                // create a tag:option att :innertext value:

                titleNamesH3.innerHTML = `${element.name}<br/> Brewery Type - ${element.brewery_type}  <br/> ${element.street}<br/> ${element.city}, ${dropDown.value} <br/>${element.postal_code}<br/>${element.phone}`;
                // titleNames.H3value = `${element.title}`;
                // console.log(titleNames);  << option tag info
                //append to #titles which is the id for select

                mainContent.append(titleNamesH3, titleYear, TitleDesc);
              }
            })
          );
      } else if (!dropDown.value) {
        console.log(false);
        alert("Please select a Location 😃");
        mainContent.innerHTML = "<p id='brewery'>Brewery Info</p>";
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
