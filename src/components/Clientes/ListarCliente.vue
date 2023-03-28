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
    <a href="/listarfactura" class="w3-bar-item w3-button" style="width:25% !important">Listado facturas</a>
    <!-- <a href="/crearcliente" class="w3-bar-item w3-button" style="width:25% !important">Crear</a> -->
  </div>
</div>
  <div class="w3-padding-large" id="main">

    <div class="card">
      <div class="card-header" style="font-weight: bold; color: black;">Clientes</div>

      <div class="card_body">
        <button class="button button1" style="margin-left: 55%; width: 15%; position: fixed;"><RouterLink to="/crearcliente" class="btn btn-outline-success" style="width: 100%;">Crear</RouterLink></button>
        <!-- <button class="button button1" style="margin-left: 82%; width: 15%;">
          <router-link :to="{ path: '/editarcliente' }" class="btn btn-outline-info" style="width: 100%;">Editar</router-link>
        </button> -->
        <button type="button" v-on:click="editarCliente(cliente.pkCliente)" class="btn btn-warning">Editar</button>
        
        <table class="table">
          <thead>
            <tr>
              <th style="font-weight: bold; font-size: 24px;">Identificador</th>
              <th style="font-weight: bold; font-size: 24px;">Nombre</th>
              <th style="font-weight: bold; font-size: 24px;">Apellidos</th>
              <th style="font-weight: bold; font-size: 24px;">Telefono</th>
              <th style="font-weight: bold; font-size: 24px;">Email</th>
              <th style="font-weight: bold; font-size: 24px;">Dirección</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cli in cliente" :key="cli.pkcliente">
              <td style="font-weight: bolder; font-size: 24px; color: #FF7474;">{{ cli.pkCliente }}</td>
              <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ cli.nombre }}</td>
              <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ cli.apellidos }}</td>
              <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ cli.telefono }}</td>
              <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ cli.email }}</td>
              <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ cli.direccion }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <button type="button" v-on:click="borrarCliente(cli.pkCliente)"  class="btn btn-danger">Eliminar</button>  
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      cliente: [],
    };
  },
  created: function () {
    this.consultarClientes();
    
  },
  methods: {
    consultarClientes() {
      axios.get("https://localhost:7289/Cliente").then((result) => {
        console.log(result.data.result);
        this.cliente = result.data.result;
      });
    },
    borrarCliente(id) {
        var pregunta=window.confirm('Desea Eliminar el Cliente?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7289/Cliente?id=" + id);
          window.location.href = "listarcliente";
          
        }else{
          
        }  
  
      },
      
    editarCliente(pkCliente){
      console.log(pkCliente);
      this.$router.push("/EditarCliente/" + pkCliente)
    },
  },
};
</script>


<style>
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

.button {
  background-color: #33ff00; /* Green */
  border: none;
  color: #33ff00;
  padding: 5px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 5px;
  margin: 2px 1px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white; 
  color: black; 
}

</style>