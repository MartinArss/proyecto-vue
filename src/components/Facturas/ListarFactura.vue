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
  
      <div class="card">
        <div class="card-header" style="font-weight: bold; color: black;">Empleados</div>
  
        <div class="card_body">
          <button class="button button1" style="margin-left: 55%; width: 15%; position: fixed;"><RouterLink to="/crearfactura" class="btn btn-outline-success" style="width: 100%;">Crear</RouterLink></button>
          <button class="button button1" style="margin-left: 82%; width: 15%;">
            <router-link :to="{ path: '/editarfactura' }" class="btn btn-outline-info" style="width: 100%;">Editar</router-link>
          </button>
          <table class="table">
            <thead>
              <tr>
                <th style="font-weight: bold; font-size: 24px;">Identificador</th>
                <th style="font-weight: bold; font-size: 24px;">Razón social</th>
                <th style="font-weight: bold; font-size: 24px;">Fecha facturada</th>
                <th style="font-weight: bold; font-size: 24px;">RFC</th>
                <th style="font-weight: bold; font-size: 24px;">Cliente</th>
              </tr>
            </thead>
      <!-- "pkFactura": 1,
      "razonSocial": "UPQROO",
      "fecha": "Sun,26 Mar 2023",
      "rfc": "Encriptado",
      "fkCliente": 1, -->
            <tbody>
              <tr v-for="facturas in factura" :key="facturas.pkFactura">
                <td style="font-weight: bolder; font-size: 24px; color: #FF7474;">{{ facturas.pkFactura }}</td>
                <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ facturas.razonSocial }}</td>
                <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ facturas.fecha }}</td>
                <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ facturas.rfc }}</td>
                <td style="font-weight: bolder; font-size: 16px; color: #534873;">{{ facturas.cliente.nombre + ' ' + facturas.cliente.apellidos }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <button type="button" v-on:click="borrarFactura(facturas.pkFactura)"  class="btn btn-danger">Eliminar</button>  
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
        factura: [],
      };
    },
    created: function () {
      this.consultarFacturas();
      
    },
    methods: {
      consultarFacturas() {
        axios.get("https://localhost:7289/Factura").then((result) => {
          console.log(result.data.result);
          this.factura = result.data.result;
        });
      },
      borrarFactura(id) {
          var pregunta=window.confirm('Desea Eliminar la factura?');
    
          if(pregunta===true){
            axios.delete("https://localhost:7289/Factura?id=" + id);
            window.location.href = "listarfactura";
            
          }else{
            
          }  
    
        }
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