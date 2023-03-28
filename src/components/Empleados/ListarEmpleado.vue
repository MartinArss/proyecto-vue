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
    </div>
  </div>
    <div class="w3-padding-large" id="main">
  
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: black;">Empleados</div>
  
        <div class="card_body">
          <button class="button button1" style="margin-left: 55%; width: 15%; position: fixed;"><RouterLink to="/crearempleado" class="btn btn-outline-success" style="width: 100%;">Crear</RouterLink></button>
          <!-- <button class="button button1" style="margin-left: 82%; width: 15%;">
            <router-link :to="{ path: '/editarempleado' }" class="btn btn-outline-info" style="width: 100%;">Editar</router-link>
          </button> -->
          <button type="button" v-on:click="editarEmpleado(empleado.pkEmpleado)" class="btn btn-warning">Editar</button>
          <table class="table">
            <thead>
              <tr>
                <th style="font-weight: bold; font-size: 24px;">Identificador</th>
                <th style="font-weight: bold; font-size: 24px;">Nombre</th>
                <th style="font-weight: bold; font-size: 24px;">Apellidos</th>
                <th style="font-weight: bold; font-size: 24px;">Dirección</th>
                <th style="font-weight: bold; font-size: 24px;">Ciudad</th>
                <th style="font-weight: bold; font-size: 24px;">Puesto</th>
                <th style="font-weight: bold; font-size: 24px;">Departamento</th>
              </tr>
            </thead>
       <!-- "pkEmpleado": 1,
      "nombre": "Martin",
      "apellido": "Martinez Arias",
      "direccion": "SM238 M11 L6 CD",
      "ciudad": "Cancun",
      "fkPuesto": 1,
      "fkDepartamento": 1,
      "puesto": null,
      "departamento": null -->
            <tbody>
              <tr v-for="emp in empleado" :key="emp.pkEmpleado">
                <td style="font-weight: bolder; font-size: 24px; color: #FF7474;">{{ emp.pkEmpleado }}</td>
                <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ emp.nombre }}</td>
                <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ emp.apellido }}</td>
                <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ emp.direccion }}</td>
                <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ emp.ciudad }}</td>
                <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ emp.puesto.nombre }}</td>
                <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ emp.departamento.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="borrarEmpleado(emp.pkEmpleado)"  class="btn btn-danger">Eliminar</button>  
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
        empleado: [],
      };
    },
    created: function () {
      this.consultarEmpleados();
      
    },
    methods: {
      consultarEmpleados() {
        axios.get("https://localhost:7289/Empleado").then((result) => {
          console.log(result.data.result);
          this.empleado = result.data.result;
        });
      },
      borrarEmpleado(id) {
          var pregunta=window.confirm('Desea Eliminar al Empleado?');
    
          if(pregunta===true){
            axios.delete("https://localhost:7289/Empleado?id=" + id);
            window.location.href = "listarempleado";
            
          }else{
            
          }  
      },
      editarEmpleado(pkEmpleado){
        console.log(pkEmpleado);
        this.$router.push("/EditarEmpleado/" + pkEmpleado)
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