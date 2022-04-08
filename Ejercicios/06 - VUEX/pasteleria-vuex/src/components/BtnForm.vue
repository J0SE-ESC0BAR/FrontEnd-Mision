<template>
  <table class="botons">
    <!--botones para resetear y enviar-->
    <tr>
      <td><input class="boton" type="reset" /></td>
      <td><input class="boton" type="submit" /></td>
    </tr>
  </table>
</template>


<script>
export default {
  name: "BtnForm",
};
</script>

<style scoped>
.botons {
  margin-left: auto;
  margin-right: auto;
}
.boton {
  width: 200px;
  height: 40px;
  color: #264653;
  background-color: bisque;
  border-radius: 6px;
  font-size: large;
  font-family: "Ubuntu", "Lora", sans-serif;
}

</style>
