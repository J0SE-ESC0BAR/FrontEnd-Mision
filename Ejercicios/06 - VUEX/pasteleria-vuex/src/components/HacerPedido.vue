<template>
  <router-link to="/nuevo-pedido" class="nav-link">
    <input class="boton" type="button" value="Hacer pedido"
  /></router-link>
</template>
<script>
export default {
  name: "HacerPedido",
};
</script>

<style scoped>
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