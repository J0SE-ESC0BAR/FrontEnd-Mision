<template>
<header>

  <router-link to="/" class="logo">
      <img alt="Pasteleria logo" src="../src/assets/logo.png"><!-- Resolver imagen-->
      <h1>Pasteleria</h1>
    </router-link>
  <nav>
    <router-link to="/nuevo-pedido" class="nav-link">Nuevo pedido</router-link> |
    <router-link to="/panadero" class="nav-link">Panadero</router-link> |
    <router-link to="/contacto" class="nav-link">Contacto</router-link>
  </nav>
</header>
  <router-view/>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,700;1,400;1,700&family=Roboto+Slab:wght@200;300;500;700&family=Source+Sans+Pro:wght@200;400&family=Ubuntu:wght@300;400;500;700&display=swap");
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; 
  background-color: #caf0f8;
  margin: 0;
}

header {
  display: flex;
  height: 100px;
  background-color: #ffb9e4;
  justify-content: space-between;
  align-items: center;
}
nav a , .nav-link h1{
  font-family: "Ubuntu", "Lora", sans-serif;
  font-size: 20px;
  color: blueviolet;
  text-decoration: none;
  padding-right: 15px;
}
nav a:hover {
  color: fuchsia;
}
nav a.router-link-exact-active {
  color: #42b991;
}
.logo {
  display: flex;
  align-items: center;
  font-family: "Ubuntu", "Lora", sans-serif;
  color: blueviolet;
  font-size: 20px;
  text-decoration: none;
}
.logo img {
  height: 100px;
  margin-right: 15px;
  margin-left: 10px;
}
</style>
