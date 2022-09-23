const url = "https://api.openbrewerydb.org/breweries/";
const about = document.querySelector("#about");
const home = document.querySelector("#home");

console.log(url);
fetch(url)
  .then((res) => res.json())
  .then((resJson) => console.log(resJson))
  .catch((err) => {
    console.log(err);
  });
