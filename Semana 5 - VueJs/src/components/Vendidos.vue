<template>
   <div class="contenedor vendidos" id="vendidos">
      <div class="column-xs-12">
          <h3 class="pull-left">Vendidos hoy!</h3>
      </div>
      <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Maxi Sacristán Esteve</td>
                <td>5</td>
                <td>Cupcake Chocofresa con Vanilla</td>
                <td>$125.00</td>
                <td id="fecha1"></td>
            </tr>
            <tr>
                <td>Delfina Rueda</td>
                <td>15</td>
                <td>Cupcake de Vainilla con Fresas</td>
                <td>$300.00</td>
                <td id="fecha2"></td>
            </tr>
            <tr>
                <td>Itziar Mayol Aramburu</td>
                <td>2</td>
                <td>Cupcake de Chocolate</td>
                <td>$46.00</td>
                <td id="fecha3"></td>
            </tr>
            <tr>
                <td>Tere Ríos Carrasco</td>
                <td>1</td>
                <td>Pastel de Vainilla</td>
                <td>$250.00</td>
                <td id="fecha4"></td>
            </tr>
            <tr>
                <td>Ani Graciana Bárcena Giner</td>
                <td>2</td>
                <td>Pastel de Frutillas</td>
                <td>$400.00</td>
                <td id="fecha5"></td>
            </tr>
            <tr>
                <td>Flor Falcó</td>
                <td>1</td>
                <td>Pastel de Vanilla con Fresas</td>
                <td>$280.00</td>
                <td id="fecha6"></td>
            </tr>
            <tr>
                <td>Primitiva del Villegas</td>
                <td>15</td>
                <td>Cupcake de Chocolate</td>
                <td>$345.00</td>
                <td id="fecha7"></td>
            </tr>
            <tr>
                <td>Valentín Andrés</td>
                <td>8</td>
                <td>Cupcake Chocofresa con Vanilla</td>
                <td>$200.00</td>
                <td id="fecha8"></td>
            </tr>
          </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'Vendidos'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
