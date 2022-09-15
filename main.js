const url =
  "https://api.spoonacular.com/recipes/random?apiKey=76adec42384e4af4a3a56a2375fc3631";

console.log(url);
fetch(url)
  .then((res) => res.json())
  .then((resJson) => console.log(resJson))
  .catch((err) => {
    console.log(err);
  });
