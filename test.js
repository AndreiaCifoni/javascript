//   //**** EXERCICIO COM MEIA RESOLUÇÃO FEITA PELA GENTE...
//const form = document.querySelector("#searchForm");
// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   const searchTerm = form.elements.query.value;
//   const res = await axios.get(
//     `https://api.tvmaze.com/search/shows?q=${searchTerm}`
//   );

//   const img = document.createElement("IMG");
//   const p = document.createElement("P");
//   if (!!res.data[0].show?.image?.medium) {
//     //***esses dois pontos de exclamação !! sao pra retornar um bullean ( ! - se nao existir, prossiga ...  !! - se existir, prossiga)
//     //***esse ponto de interrogação ? serve pra checar se a key de um object existe, se nao existir retorna undefined
//     img.src = res.data[0].show.image.medium;
//     document.body.append(img);
//   } else {
//     p.innerText = "Sorry";
//     document.body.append(p);
//   }
// });

const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
