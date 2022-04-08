<template>
  <table class="bodyIndex">
    <tr>
      <td>
        <h2>Menu de sabores</h2>
        <ul>
          <li>Pastel de Chocolate ......... $280.00</li>
          <li>Pastel de Vainilla .............. $200.00</li>
          <li>Pastel de Limón ............... $260.00</li>
          <li>Pastel de Naranja ............. $250.00</li>
          <li>Pastel de Fresas ............... $100.00</li>
          <li>Pastel de Galleta .............. $225.00</li>
        </ul>
        <h2>Adornos</h2>
        <ol>
          <li>Frutas</li>
          <ul>
            <li>- Fresas con mermelada ................ $30.00</li>
            <li>- Piña picada .................................. $20.00</li>
          </ul>
          <li>Artificiales</li>
          <ul>
            <li>- Chocolate ..................................... $40.00</li>
            <li>- Decoración con chantilly ............. $25.00</li>
          </ul>
          <li>No comestibles</li>
          <ul>
            <li>- Vela de cumpleaños .................... $20.00</li>
            <li>- Muñeco de superhéroe ............... $15.00</li>
            <li>- Novio y novia para bodas ............ $30.00</li>
          </ul>
        </ol>
      </td>
      <td>
        <img class="imagen" src="../assets/imagen.png" alt="pastel" />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "Inicio",
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.imagen {
  margin-left: 100px;
  background-color: #7f97d652;
  border-radius: 3%;
  width: 500px;
  height: 650px;
}
.bodyIndex {
  font-size: 25px;
  margin:2% 0 4% 3%;
}
</style>
