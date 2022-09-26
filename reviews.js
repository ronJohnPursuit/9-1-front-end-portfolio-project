const url = "https://api.openbrewerydb.org/breweries/";
const about = document.querySelector("#about");
const home = document.querySelector("#home");
const beerForm = document.querySelector("form");
const dropDown = document.querySelector("#beerSelect");
const mainInfo = document.querySelector("#content");
const inputReview = document.querySelector("#review");

let mainContent = document.querySelector(".mainContent");
let berweryH3 = document.createElement("h3");
let titleYear = document.createElement("p");
let TitleDesc = document.createElement("p");

// home.addEventListener("click",(eve) =>{

// })

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
        mainContent.innerHTML = "<p id='brewery'>Brewery reviews</p>";
        fetch(url)
          .then((res) => res.json())
          .then((res) =>
            res.forEach((element) => {
              let berweryH3 = document.createElement("h3");
              let reviewform = document.createElement("form");
              let 
              if (
                dropDown.value === element.state ||
                dropDown.value === element.country
              ) {
                // create a tag:option att :innertext value:

                berweryH3.innerHTML = `${element.name}<br/> Brewery Type - ${element.brewery_type}  <br/> ${element.street}<br/> ${element.city}, ${dropDown.value} <br/>${element.postal_code}<br/>${element.phone}`;
                // titleNames.H3value = `${element.title}`;
                // console.log(titleNames);  << option tag info
                //append to #titles which is the id for select

                mainContent.append(berweryH3);
                berweryH3.append(reviewform);
              }
            })
          );
      } else if (!dropDown.value) {
        console.log(false);
        alert("Please select a Location 🍻");
        mainContent.innerHTML = "<p id='brewery'>Brewery reviews</p>";
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });


  
// reviewform.addEventListener("submit", (eve) => {
//   eve.preventDefault();
//   console.log("submit button", inputReview);
//   if (inputReview.value && movieTitle && dropDown.value) {
//     const reviewList = document.createElement("li");
//     reviewList.innerHTML = `<strong>${movieTitle}</strong>: ${inputReview.value}`;
//     reviews.append(reviewList);
//   }
//   if (!(inputReview.value && movieTitle && dropDown.value)) {
//     console.error("Movie selection and review is required");
//     alert("Movie selection and review is required");
//   }
//   inputReview.value = "";
// });

// reviewDelete.addEventListener("click", (eve) => {
//   console.log("working");
//   eve.preventDefault();
//   // const reviewClass = document.querySelectorAll(".singleReview");
//   reviews.innerHTML = ``;
// });
