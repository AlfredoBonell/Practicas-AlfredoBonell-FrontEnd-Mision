<template>
  <div class="navegacion">
      <div class="column-xs-8 column-md-12" style="margin-left: 50px;">
         <img src="../assets/Mr_cakes_logo.png" alt="Mr. Cakes!" width="150">
      </div>
      <nav class="navegacion" id="navbar">
         <div class="contenedor">
            <div class="grid menu">
               <div class="column-xs-8 column-md-12"></div>
               <div class="column-xs-4 column-md-12">
                  <a href="#" class="toggle-nav">Menu <i class="ion-navicon-round"></i>
                  </a>
                  <ul>
                     <li class="nav-item">
                        <router-link to="/productos">Productos</router-link>
                     </li>
                     <li class="nav-item">
                        <router-link to="/cotizar">Cotizar</router-link>
                     </li>
                     <li class="nav-item">
                        <router-link to="/vendidos">Vendidos</router-link>
                     </li>
                     <li class="nav-item">
                        <router-link to="/Horarios">Horarios</router-link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Navegacion'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
