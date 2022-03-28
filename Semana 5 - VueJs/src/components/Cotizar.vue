<template>
   <div class="contenedor-secundario cotizar" id="cotizar">
       <div class="form-v10-content">
            <form class="form-detail" id="formulario-datos">
                <div class="form-center">
                    <h2>Cotiza tu pedido personalizado!</h2>
                    <div class="form-group">
                    <div class="form-row form-row-1">
                        <select name="tamaño">
                            <option class="option" selected>Tamaño del pastel</option>
                            <option value="option" name="chicho">Chico</option>
                            <option value="option" name="mediano">Mediano</option>
                            <option value="option" name="grande">Grande</option>
                        </select>
                        <span class="select-btn">
                        <i class="zmdi zmdi-chevron-down"></i>
                        </span>
                    </div>
                    <div class="form-row form-row-1">
                        <select name="forma">
                            <option class="option" selected>Forma del pastel</option>
                            <option value="option" name="redondo">Redondo</option>
                            <option value="option" name="cuadrado">Cuadrado</option>
                            <option value="option" name="personalizado"> Personalizado </option>
                        </select>
                        <span class="select-btn">
                        <i class="zmdi zmdi-chevron-down"></i>
                        </span>
                    </div>
                    </div>
                    <div class="form-group">
                    <div class="form-row form-row-1">
                        <input type="number" class="input-text" min="0" max="99" 
                            onKeyUp="if(this.value>99){this.value='99';}else if(this.value<0){this.value='0';}" placeholder="Número de personas" required />
                    </div>
                    <div class="form-row form-row-1">
                        <select name="forma">
                            <option class="option" selected>Sabor</option>
                            <option value="option" name="vainilla">Vainilla</option>
                            <option value="option" name="chocolate">Chocolate</option>
                            <option value="option" name="fresa">Fresa</option>
                            <option value="option" name="mazapan">Mazapán</option>
                        </select>
                        <span class="select-btn">
                        <i class="zmdi zmdi-chevron-down"></i>
                        </span>
                    </div>
                    </div>
                    <div class="form-group">
                    <div class="form-row form-row-1">
                        <input type="text" maxlength="100" class="input-text" placeholder="Nombre" required />
                    </div>
                    <div class="form-row form-row-1">
                        <input type="text" maxlength="150" class="input-text" placeholder="Apellido" required />
                    </div>
                    </div>
                    <div class="form-row">
                    <input type="text" maxlength="150" name="street" class="street" id="street" placeholder="Mensaje personalizado" required />
                    </div>
                    <div class="form-group">
                    <div class="form-row form-row-1">
                        <input type="email" minlength="3" maxlength="64" name="street" class="street" id="street" placeholder="Correo electrónico" required />
                    </div>
                    <div class="form-row form-row-1">
                        <input type="number" min="0" max="9" name="phone" pattern=".+@beststartupever.com" class="phone" id="phone" placeholder="Teléfono" required />
                    </div>
                    </div>
                    <div class="form-row-last pull-right">
                    <input type="submit" name="register" style="margin-right: 30px;" class="register" value="Enviar cotización" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cotizar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
