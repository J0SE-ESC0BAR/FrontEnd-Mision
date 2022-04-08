<template>
    <div class="formulario">
      <table >
        <caption>
          Ingresa tus datos en el formulario
        </caption>
        <tr>
          <!--Ingresa nombre-->
          <td><label for="nombre">Nombres:</label></td>
          <td><input class="text" type="text" id="nombre" name="nombre" form="form1" placeholder="José Alfonso" /></td>
        </tr>
        <tr>
          <!--Ingresa apellido-->
          <td><label for="apellido">Apellidos:</label></td>
          <td><input class="text" type="text" id="apellido" name="apellido" form="form1" placeholder="Escobar Mejía" /></td>
        </tr>
        <tr>
          <!--Ingresa telefono-->
          <td><label for="telefono">Telefono:</label></td>
          <td><input class="text" type="tel" id="telefono" name="telefono" form="form1" placeholder="9632520429" /></td>
        </tr>
        <tr>
        <!--Ingrese correo-->
        <td><label for="correo">Correo electrónico:</label></td>
        <td><input class="text" type="email" id="correo" name="correo" form="form1" placeholder="josealfonsoescobarmejia@gmail.com"></td>
      </tr>
      <tr>
      <!--Descripción-->
      <td ><label for="descripcion">Descripción general:</label></td>
      <td><input class="text" type="text" id="descripcion" name="descripcion" form="form1" placeholder="Quiero un pastel rosa para niña"></td>
      </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: "Formulario",
};
</script>

<style scoped>
.formulario{
  margin-bottom: 20px;
}
form td {
  padding: 4px;
  color: darkslateblue;
}
h1 {
  display: inline-block;
}
label {
  font-size: 22px;
}
ul,
ol {
  text-align: left;
  display: inline-block;
}
li {
  font-family: "Source Sans Pro", sans-serif;
  color: black;
  font-size: 20px;
}
caption {
  font-family: "Roboto Slab", sans-serif;
  color: #264653;
  font-size: 25px;
  width: 400px;
}
.text {
  width: 300px;
  font-size: 18px;
}
tr{
  margin-top: 20px;
}
</style>