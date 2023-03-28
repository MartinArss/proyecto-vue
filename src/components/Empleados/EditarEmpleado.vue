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
    <!-- <a href="/crearcliente" class="w3-bar-item w3-button" style="width:25% !important">Crear</a> -->
  </div>
</div>
<div class="w3-padding-large" id="main">
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar empleado</div>
            <small id="helpId" class="form-text" text-muted>Modifique lo correspondiente</small>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="user">Ingrese el identificador a modificar:</label>
                                <input type="number" class="form-control" name="user" aria-describedby="helpId"
                                    id="pkEmpleado" placeholder="ID" v-model="pkEmpleado" />
                                <small id="peticion" class="form-text" text-muted>Ingresa id del registro que desea
                                    actualizar</small>
                                <br>
                                <br>
                                <div id="botonbusca">
                                    <button type="button" class="btn btn-outline-primary"
                                        v-on:click="Buscar(pkEmpleado)">Buscar</button>

                                    <router-link :to="{ name: 'listarempleado' }" class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                        <div id="user-apellidos" style="display: none;">

                            <div class="col">

                                <div class="form-group">
                                    <label for="nombre">Nombre:</label>
                                    <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                        id="nombre" placeholder="Ingrese un nuevo nombre" value="" />
                                </div>
                            </div>

                            <div class="col">
                                <div class="form-group">
                                    <label for="apellidos">Apellidos:</label>
                                    <input type="text" class="form-control" name="apellidos" id="apellidos"
                                        aria-describedby="helpId" placeholder="Ingrese nuevos apellidos" value="" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div id="fk-empleado-rol" class="row" style="display: none;">
                        
                        <div class="col">

                            <div class="form-group">
                                <label for="direccion">Direccion:</label>
                                <input type="text" class="form-control" name="direccion" id="direccion" aria-describedby="helpId"
                                    placeholder="Ingrese una nueva direccion" value="" />
                            </div>
                        </div>

                        <div class="col">
                            <div class="form-group">
                                <label for="ciudad">Ciudad:</label>
                                <input type="text" class="form-control" name="ciudad" id="ciudad"
                                    aria-describedby="helpId" placeholder="Ingrese una nueva ciudad" value="" />
                            </div>
                        </div>
                        
                        <div class="col">
                            <div class="form-group">
                                <label for="puesto" >Puesto:</label>
                                <!-- <input type="number" class="form-control" name="fkPuesto" id="fkPuesto"
                                    aria-describedby="helpId" placeholder="Ingrese un nuevo puesto" value="" /> -->
                                <select class="form-control" name="fkPuesto" id="fkPuesto"
                                    aria-describedby="helpId" placeholder="Ingrese su nuevo puesto" value="">
                                    <option v-for="puestos in puesto" v-bind:value="puestos.pkPuesto" v-bind:key="puestos.pkPuesto">{{ puestos.nombre }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="col">
                            <div class="form-group">
                                <label for="puesto" >Departamento:</label>
                                <!-- <input type="number" class="form-control" name="fkDepartamento" id="fkDepartamento"
                                    aria-describedby="helpId" placeholder="Ingrese un nuevo departamento" value="" /> -->
                                <select class="form-control" name="fkDepartamento" id="fkDepartamento"
                                    aria-describedby="helpId" placeholder="Ingrese su nuevo departamento" value="">
                                    <option v-for="departamentos in departamento" v-bind:value="departamentos.pkDepartamento" v-bind:key="departamentos.pkDepartamento">{{ departamentos.nombre }}</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div id="botoncerrar" style="display: none;">|<router-link :to="{name:'listarempleado'}" type="button" class="btn btn-outline-primary">Volver</router-link>|</div>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            <button type="submit" class="btn btn-outline-primary">Actualizar</button>
                            <router-link :to="{ name: 'listarempleado' }" class="btn btn-outline-danger">Cancelar</router-link>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                            {{ smg }}
                        </div>
                        <div id="alert2" class="alert alert-warning" role="alert" style="display:none;">{{ bad }}</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<style>
.card-header
{
    color: black;
    text-align: center;
}
label {
    font-weight: bold;
    color: rgb(0, 0, 0);
}

</style>
<script>
import axios from 'axios'
export default {
    name: 'editarempleado',
    components: {

    },

    data() {
        return {
            empleado: [],
            smg: "",
            pkEmpleado: 0,
            bad: "",
            puesto: [],
            departamento: []
        };
    },
    created: function () {
        this.consultarDepartamentos();
        this.consultarPuestos();
    },
    methods: {
        formulario() {
            var cuerpo = {
                pkEmpleado: this.pkEmpleado,
                nombre: document.getElementById('nombre').value,
                apellido: document.getElementById('apellidos').value,
                direccion: document.getElementById('direccion').value,
                ciudad: document.getElementById('ciudad').value,
                fkPuesto: document.getElementById('fkPuesto').value,
                fkDepartamento: document.getElementById('fkDepartamento').value
                
            };

            console.log(cuerpo);
            axios.put('https://localhost:7289/Empleado?id=' + this.pkEmpleado, cuerpo).then((result) => {
                console.log(result.data.result);
                document.getElementById("alert").style.display = "block";
                document.getElementById('botones').style.display = "none";
                this.smg = "Se guardaron los cambios";
                document.getElementById('botoncerrar').style.display="block";
            })
        },
        Buscar(id) {
            if (id > 0) {
                axios.get('https://localhost:7289/Empleado?id=' + id).then((response) => {

                    this.empleado = response.data.result
                    if (this.empleado != null) {

                        document.getElementById('botonbusca').style.display = "none";
                        document.getElementById('peticion').style.display = "none";
                        document.getElementById('user-apellidos', 'fk-empleado-rol').style.display = "block";
                        document.getElementById('fk-empleado-rol').style.display = "block";
                        document.getElementById('botones').style.display = "block";
                        document.getElementById('alert2').style.display = "none";


                        document.getElementById('nombre').value = this.empleado[0].nombre;
                        document.getElementById('apellidos').value = this.empleado[0].apellido;
                        document.getElementById('direccion').value = this.empleado[0].direccion;
                        document.getElementById('ciudad').value =  this.empleado[0].ciudad;
                        document.getElementById('fkPuesto').value =  this.empleado[0].fkPuesto;
                        document.getElementById('fkDepartamento').value =  this.empleado[0].fkDepartamento;
                        
                    } else {
                        
                        document.getElementById('alert2').style.display = "block";
                        this.bad = "No hay ningun registro de ese ID"
                    }
                })
            } else {
                document.getElementById('alert2').style.display = "block";
                this.bad = "No hay valor de ID"
            }
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