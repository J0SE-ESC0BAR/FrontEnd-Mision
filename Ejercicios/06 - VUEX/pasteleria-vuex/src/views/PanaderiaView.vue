<template>
  <div class="contenido">
    <Inicio />
    <HacerPedido/>
  </div>
  <FooterPage/>
</template>

<script>
// @ is an alias to /src
import Inicio from "../components/Inicio.vue";
import HacerPedido from "../components/HacerPedido.vue";
import FooterPage from "../components/FooterPage.vue";

export default {
  name: "Panaderia",
  components: {
    Inicio,
    HacerPedido,
    FooterPage,
  },
};
</script>
<style scoped>

.contenido {
  background-color: #94d2bd;
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
}
</style>