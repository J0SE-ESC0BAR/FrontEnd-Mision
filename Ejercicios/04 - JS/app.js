const fetchPokemon = () => {
  const inputPokeName = document.getElementById("inputPokeName");
  let pokeInput = inputPokeName.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage("./Pikachu.png");
        document.getElementById("pokeNamess").innerText = "Sin nombre";
        document.getElementById("pokeTipo").innerText = "Sin tipo";
        document.getElementById("pokeMovimientos").innerText = "Sin movimientos";
        document.getElementById("pokePeso").innerText = "Sin peso";
        document.getElementById("pokeAltura").innerText = "Sin altura";
      } else {
        return res.json();
      }
    })
    .then((data) => {
      /*Creacion de las variables con su contenido*/
      let pokeImg = data.sprites.other.dream_world.front_default;
      let pokeNames = data.forms[0].name;
      let pokeTipo = data.types[0].type.name;
      let pokemov1 = data.moves[0].move.name;
      let pokemov2 = data.moves[1].move.name;
      let pokePeso = data.weight.toString();
      let pokeAltura = data.height.toString();
      /*llamo a las funciones para asignarlo al html*/
      pokeImage(pokeImg);
      imprimirName(pokeNames);
      imprimirTipo(pokeTipo);
      imprimirMovimientos(pokemov1, pokemov2);
      imprimirPeso(pokePeso);
      imprimirAltura(pokeAltura);
    });
};

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};
const imprimirName = (name) => {
  const pokeNames = document.getElementById("pokeNamess");
  pokeNames.innerText = "Nombre: " + InicialMayuscula(name);
};
const imprimirTipo = (name) => {
  const pokeTipo = document.getElementById("pokeTipo");
  pokeTipo.innerText = "Tipo: " + InicialMayuscula(name);
};
const imprimirMovimientos = (mov1, mov2) => {
  const pokeMovimientos = document.getElementById("pokeMovimientos");
  pokeMovimientos.innerText =
    "Movimientos: " +
    InicialMayuscula(mov1) +
    ", " +
    InicialMayuscula(mov2) +
    ", ...";
};
const imprimirPeso = (name) => {
  const pokePeso = document.getElementById("pokePeso");
  pokePeso.innerText = "Peso: " + name + "gramos";
};
const imprimirAltura = (name) => {
  const pokeAltura = document.getElementById("pokeAltura");
  pokeAltura.innerText = "Altura: " + name + "0 cm";
};

const InicialMayuscula = (text) => {
  const string1 = text;
  const Nombres = string1.charAt(0).toUpperCase() + string1.slice(1);
  return Nombres;
};
