<template>
    <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->
  <a href="/Dashboard" class="w3-bar-item w3-button w3-padding-large w3-black">
    <p>Inicio</p>
  </a>
  <a href="/listarcliente" class="w3-bar-item w3-button w3-padding-large w3-hover-black" style="background-color: #000; color: #fff; font-style: italic;">
    <p style="font-weight: bolder;">Listado clientes</p>
  </a>
  <a href="/listarempleado" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p>Listado empleados</p>
  </a>
  <a href="/listarusuario" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p>Listado usuarios</p>
  </a>
  <a href="/listardepartamento" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p>Listado departamentos</p>
  </a>
  <a href="/listarpuesto" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p>Listado puestos</p>
  </a>
  <a href="/listarrol" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p>Listado rols</p>
  </a>
  <a href="/listarfactura" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p>Listado factura</p>
  </a>
</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="/Dashboard" class="w3-bar-item w3-button" style="width:25% !important">Inicio</a>
    <a href="/listarcliente" class="w3-bar-item w3-button" style="width:25% !important">Listado clientes</a>
    <a href="/listarempleado" class="w3-bar-item w3-button" style="width:25% !important">Listado empleados</a>
    <a href="/listarusuario" class="w3-bar-item w3-button" style="width:25% !important">Listado usuarios</a>
    <a href="/listardepartamento" class="w3-bar-item w3-button" style="width:25% !important">Listado departamentos</a>
    <a href="/listarpuesto" class="w3-bar-item w3-button" style="width:25% !important">Listado puestos</a>
    <a href="/listarrol" class="w3-bar-item w3-button" style="width:25% !important">Listado rols</a>
    <a href="/listarfactura" class="w3-bar-item w3-button" style="width:25% !important">Listado facturas</a>
    <!-- <a href="/crearcliente" class="w3-bar-item w3-button" style="width:25% !important">Crear</a> -->
  </div>
</div>
<div class="w3-padding-large" id="main">
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Agregar cliente</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-control" name="nombre" aria-describedby="helpId" id="nombre"
                                    placeholder="Ingrese Nombre" v-model="Clientes.nombre" />
                                <!-- <small id="helpId" class="form-text" text-muted>Ingresa tu correo de usuario</small> -->
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="apellidos">Apellidos:</label>
                                <input type="text" class="form-control" name="apellidos" id="apellidos"
                                    aria-describedby="helpId" placeholder="Ingrese Apellidos" v-model="Clientes.apellidos" />
                                <!-- <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small> -->
                            </div>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="telefono" >Telefono:</label>
                                <input type="text" class="form-control" name="telefono" id="telefono"
                                    aria-describedby="helpId" placeholder="Ingrese Telefono" v-model="Clientes.telefono" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" name="email" id="email" aria-describedby="helpId"
                                    placeholder="Ingrese email" v-model="Clientes.email" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="direccion">Dirección:</label>
                                <input type="text" class="form-control" name="email" id="direccion" aria-describedby="helpId"
                                    placeholder="Ingrese dirección" v-model="Clientes.direccion" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'listarcliente' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'listarcliente' }" class="btn btn-outline-secundary" id="finaliza" style="display: none;">Regresar a dashboard</router-link>
                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                            {{ smg }}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
  
<script >
import axios from 'axios';
export default {
    name: "crearcliente",
    components: {

    },

    data() {
        return {
            Clientes: {},
            smg: "",
        };
    },
    methods: {
        formulario() {
            
            var cuerpo = {
                nombre: this.Clientes.nombre,
                apellidos: this.Clientes.apellidos,
                telefono: this.Clientes.telefono,
                email: this.Clientes.email,
                direccion: this.Clientes.direccion
            };

            axios.post('https://localhost:7289/Cliente', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display="none";
                    this.smg = "El cliente se agrego correctamente";
                    document.getElementById('finaliza').style.display="block";
                    console.log(result);
                }
                // window.location.href = "dashboard";

            })

            console.log(cuerpo)
        }
    }
}
</script>

<style scoped>
.card-header
{
    color: black;
    text-align: center;
}
label {
    font-weight: bold;
    color: black;
}
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
.w3-sidebar {width: 120px;background: #222;}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}

table {
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  height: 100%;
  color: #33ff00;
}

td:nth-child(even) {
  background-color: #33ff00;
}
</style>