<template>
<form action="#" id="form1" method="post"> 
  <div class="contenido">
<Formulario/>
<SeleccionarForm/>
<BtnForm/>
  </div>
</form>
  <FooterPage/>

</template>

<script>
// @ is an alias to /src
import Formulario from "../components/Formulario.vue";
import SeleccionarForm from "../components/SeleccionarForm.vue";
import BtnForm from "../components/BtnForm.vue";
import FooterPage from "../components/FooterPage.vue";

export default {
  name: "Nuevo",
  components: {
    FooterPage,
    Formulario,
    SeleccionarForm,
    BtnForm,
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