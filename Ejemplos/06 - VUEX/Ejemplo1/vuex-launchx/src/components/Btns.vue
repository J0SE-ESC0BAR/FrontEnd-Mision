<template>
    <div class="botones">
    <!--Subir y bajar contador con .commit de mutation (mutacion) no api 
    <button @click="$store.commit('bajarContador')">-</button>
    <button @click="$store.commit('subirContador')">+</button>-->
    <!--Subir y bajar contador com .dispatch de acctions (acciones) de una api-->
    <button @click="$store.dispatch('bajarContador')">-</button>
    <button @click="$store.dispatch('subirContador')">+</button>
    </div>
</template>

<script>
export default {
    name: "Botones",
}
</script>
