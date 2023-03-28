<template>
    <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->
  <a href="/Dashboard" class="w3-bar-item w3-button w3-padding-large w3-black">
    <p>Inicio</p>
  </a>
  <a href="/listarcliente" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p>Listado clientes</p>
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
    <a href="/listarfactura" class="w3-bar-item w3-button w3-padding-large w3-hover-black" style="background-color: #000; color: #fff; font-style: italic;">
        <p style="font-weight: bolder;">Listado facturas</p>
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
            <div class="card-header">Agregar factura</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="razon">Nombre de razón social:</label>
                                <input type="text" class="form-control" name="razon" aria-describedby="helpId" id="razon"
                                    placeholder="Ingrese nombre de razón social" v-model="factura.razonSocial" />
                                <!-- <small id="helpId" class="form-text" text-muted>Ingresa tu correo de usuario</small> -->
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="fecha">Fecha facturada:</label>
                                <input type="date" class="form-control" name="fecha" id="fecha"
                                    aria-describedby="helpId" placeholder="Ingrese fecha de facturación" v-model="factura.fecha" />
                                <!-- <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small> -->
                            </div>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="rfc" >Apartado RFC:</label>
                                <input type="text" class="form-control" name="rfc" id="rfc"
                                    aria-describedby="helpId" placeholder="Ingrese su rfc" v-model="factura.rfc" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="cliente">Nombre del cliente:</label>
                                <select class="form-control" name="fkCliente" id="fkCliente"
                                    aria-describedby="helpId" placeholder="Ingrese el nombre del cliente" v-model="factura.fkCliente">
                                    <option v-for="cli in cliente" v-bind:value="cli.pkCliente" v-bind:key="cli.pkCliente">{{ cli.nombre + ' ' + cli.apellidos }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            <button type="submit" class="btn btn-outline-primary">Agregar</button>
                            <router-link :to="{ name: 'listarfactura' }" class="btn btn-outline-danger">Cancelar</router-link>
                        </div>
                        <router-link :to="{ name: 'listarfactura' }" class="btn btn-outline-secundary" id="finaliza" style="display: none;">Regresar a dashboard</router-link>
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
    name: "crearfactura",
    components: {

    },

    data() {
        return {
            factura: {},
            smg: "",
            cliente: []
        };
    },
    created: function() {
        this.consultarClientes();
    },
    methods: {
        formulario() {
            
            var cuerpo = {
                razonSocial: this.factura.razonSocial,
                fecha: this.factura.fecha,
                rfc: this.factura.rfc,
                fkCliente: this.factura.fkCliente
            };

            axios.post('https://localhost:7289/Factura', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display="none";
                    this.smg = "La factura se agrego correctamente";
                    document.getElementById('finaliza').style.display="block";
                    console.log(result);
                }
                // window.location.href = "dashboard";

            })

            console.log(cuerpo)
        },
        consultarClientes() {
            axios.get("https://localhost:7289/Cliente").then((result) => {
                console.log(result.data.result);
                this.cliente = result.data.result;
            });
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