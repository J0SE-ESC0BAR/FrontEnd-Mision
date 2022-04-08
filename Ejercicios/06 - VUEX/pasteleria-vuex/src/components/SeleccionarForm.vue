<template>
    <!--Selecciona sabores-->
    <div class="formulario">
      <table >
        <caption>
          Selecciona los sabores
        </caption>
        <tr>
          <!--Chocolate-->
          <td class="check"><input type="checkbox" id="topping1" name="topping1" value="Chocolate" /></td>
          <td><label for="topping1">Chocolate</label></td>
        </tr>
        <tr>
          <!--Vainilla-->
          <td class="check"><input type="checkbox" id="topping2" name="topping2" value="Vainilla" /></td>
          <td><label for="topping2">Vainilla</label></td>
        </tr>
        <tr>
          <!--Limon-->
          <td class="check"><input type="checkbox" id="topping3" name="topping3" value="Limón" /></td>
          <td><label for="topping3">Limón</label></td>
        </tr>
        <tr>
          <!--Naranja-->
          <td class="check"><input type="checkbox" id="topping4" name="topping4" value="Naranja" /></td>
          <td><label for="topping4">Naranja</label></td>
        </tr>
        <tr>
          <!--Fresas-->
          <td class="check"><input type="checkbox" id="topping5" name="tooping5" value="Fresas" /></td>
          <td><label for="topping5">Fresas</label></td>
        </tr>
        <tr>
          <!--Galleta-->
          <td class="check"><input type="checkbox" id="topping6" name="topping6" value="Galleta" /></td>
          <td><label for="topping6">Galleta</label></td>
        </tr>
      </table>
      <br><br>
      <!--Selecciona adornos-->
      <table >
        <caption>
          Selecciona los adornos
        </caption>
        <tr>
          <!--Fresas con mermelada-->
          <td class="check"><input type="checkbox" id="adornos1" name="adornos1" value="Fresas con mermelada"/></td>
          <td><label for="adornos1">Fresas con mermelada</label></td>
        </tr>
        <tr>
          <!--Piña picada-->
          <td class="check"><input type="checkbox" id="adornos2" name="adornos2" value="Piña picada" /></td>
          <td><label for="adornos2">Piña picada</label></td>
        </tr>
        <tr>
          <!--Chocolate-->
          <td class="check"><input type="checkbox" id="adornos3" name="adornos3" value="Chocolate" /></td>
          <td><label for="adornos3">Chocolate</label></td>
        </tr>
        <tr>
          <!--Decoración con chantilly-->
          <td class="check"><input type="checkbox" id="adornos4" name="adornos4" value="Decoración con chantilly" /></td>
          <td><label for="adornos4">Decoración con chantilly</label></td>
        </tr>
        <tr>
          <!--Vela de cumpleaños-->
          <td class="check"><input type="checkbox" id="adornos5" name="adornos5" value="Vela de cumpleaños" /></td>
          <td><label for="adornos5">Vela de cumpleaños</label></td>
        </tr>
        <tr>
          <!--Muñeco de superhéroe-->
          <td class="check"><input type="checkbox" id="adornos6" name="adornos6" value="Muñeco de superhéroe" /></td>
          <td><label for="adornos6">Muñeco de superhéroe</label></td>
        </tr>
        <tr>
          <!--Muñeco de superhéroe-->
          <td class="check"><input type="checkbox" id="adornos7" name="adornos7" value="Muñeco de superhéroe" /></td>
          <td><label for="adornos7">Novio y novia para bodas</label></td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: "SeleccionarForm",
};
</script>

<style scoped>
input {
  margin: 10px 0 0 30px;
  width: 20px;
  height: 20px;
}
.check {
  width: 25px;
  height: 20px;
}
form td {
  color: darkslateblue;
}
h1 {
  display: inline-block;
}
label {
  margin: 10px 0 0 10px;
  font-size: 22px;
}
caption {
  font-family: "Roboto Slab", sans-serif;
  color: #264653;
  font-size: 25px;
  width: 400px;
}
</style>