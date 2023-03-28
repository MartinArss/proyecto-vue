<template>
    <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
  <!-- Avatar image in top left corner -->
  <a href="/Dashboard" class="w3-bar-item w3-button w3-padding-large w3-black">
    <p>Inicio</p>
  </a>
  <a href="/listarcliente" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p>Listado clientes</p>
  </a>
  <a href="/listarempleado" class="w3-bar-item w3-button w3-padding-large w3-hover-black" style="background-color: #000; color: #fff; font-style: italic;">
    <p style="font-weight: bolder;">Listado empleados</p>
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
    <p>Listado facturas</p>
  </a>
  <!-- <a href="/crearcliente" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p>Crear cliente</p>
  </a> -->
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
    <!-- <a href="/listarfacturas" class="w3-bar-item w3-button" style="width:25% !important">Listado facturas</a> -->
    <!-- <a href="/crearcliente" class="w3-bar-item w3-button" style="width:25% !important">Crear</a> -->
  </div>
</div>
<div class="w3-padding-large" id="main">
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Agregar empleado</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-control" name="nombre" aria-describedby="helpId" id="nombre"
                                    placeholder="Ingrese Nombre" v-model="empleado.nombre" />
                                <!-- <small id="helpId" class="form-text" text-muted>Ingresa tu correo de usuario</small> -->
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="apellidos">Apellidos:</label>
                                <input type="text" class="form-control" name="apellidos" id="apellidos"
                                    aria-describedby="helpId" placeholder="Ingrese Apellidos" v-model="empleado.apellido" />
                                <!-- <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small> -->
                            </div>
                        </div>

                    </div>
                    <br>
                    <div class="row">

                        <div class="col">
                            <div class="form-group">
                                <label for="direccion">Dirección:</label>
                                <input type="text" class="form-control" name="direccion" id="direccion" aria-describedby="helpId"
                                    placeholder="Ingrese dirección" v-model="empleado.direccion" />
                            </div>
                        </div>

                        <div class="col">
                            <div class="form-group">
                                <label for="ciudad" >Ciudad:</label>
                                <input type="text" class="form-control" name="ciudad" id="ciudad"
                                    aria-describedby="helpId" placeholder="Ingrese su ciudad" v-model="empleado.ciudad" />
                            </div>
                        </div>
                        
                        <div class="col">
                            <div class="form-group">
                                <label for="puesto">Puesto:</label>
                                <select class="form-control" name="fkPuesto" id="fkPuesto"
                                    aria-describedby="helpId" placeholder="Ingrese su puesto" v-model="empleado.fkPuesto">
                                    <option v-for="puestos in puesto" v-bind:value="puestos.pkPuesto" v-bind:key="puestos.pkPuesto">{{ puestos.nombre }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="col">
                            <div class="form-group">
                                <label for="departamento" >Departamento:</label>
                                <select class="form-control" name="fkDepartamento" id="fkDepartamento"
                                    aria-describedby="helpId" placeholder="Ingrese su puesto" v-model="empleado.fkDepartamento">
                                    <option v-for="departamentos in departamento" v-bind:value="departamentos.pkDepartamento" v-bind:key="departamentos.pkDepartamento">{{ departamentos.nombre }}</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'listarempleado' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'listarempleado' }" class="btn btn-outline-secundary" id="finaliza" style="display: none;">Regresar</router-link>
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
    name: "crearempleado",
    components: {

    },

    data() {
        return {
            empleado: {},
            smg: "",
            departamento: [],
            puesto: []
        };
    },
    created: function () {
        this.consultarDepartamentos();
        this.consultarPuestos();
    },
    methods: {
        formulario() {
            
            var cuerpo = {
                nombre: this.empleado.nombre,
                apellido: this.empleado.apellido,
                direccion: this.empleado.direccion,
                ciudad: this.empleado.ciudad,
                fkPuesto: this.empleado.fkPuesto,
                fkDepartamento: this.empleado.fkDepartamento
            };

            axios.post('https://localhost:7289/Empleado', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display="none";
                    this.smg = "El empleado se agrego correctamente";
                    document.getElementById('finaliza').style.display="block";
                    console.log(result);
                }
                // window.location.href = "dashboard";
            })
                console.log(cuerpo);
        },
        consultarDepartamentos() {
            axios.get("https://localhost:7289/Departamento").then((result) => {
                console.log(result.data.result);
                this.departamento = result.data.result;
            });
        },
        consultarPuestos() {
            axios.get("https://localhost:7289/Puesto").then((result) => {
                console.log(result.data.result);
                this.puesto = result.data.result;
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