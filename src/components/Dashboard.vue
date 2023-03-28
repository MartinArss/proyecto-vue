<template>
<body class="w3-black">
<!-- Icon Bar (Sidebar - hidden on small screens) -->
<nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" style="width: 180px; background: #222">
  <!-- Avatar image in top left corner -->
  <a href="/Dashboard" class="w3-bar-item w3-button w3-padding-large w3-black">
    <p style="font-size: 24px;">Inicio</p>
  </a>
  <a href="/listarcliente" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p style="font-style: italic; font-size: 22px; font-weight: lighter;">Listado clientes</p>
  </a>
  <a href="/listarempleado" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p style="font-style: italic; font-size: 22px; font-weight: lighter;">Listado empleados</p>
  </a>
  <a href="/listarusuario" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p style="font-style: italic; font-size: 22px; font-weight: lighter;">Listado usuarios</p>
  </a>
  <a href="/listardepartamento" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p style="font-style: italic; font-size: 22px; font-weight: lighter;">Listado departamentos</p>
  </a>
  <a href="/listarpuesto" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p style="font-style: italic; font-size: 22px; font-weight: lighter;">Listado puestos</p>
  </a>
  <a href="/listarrol" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p style="font-style: italic; font-size: 22px; font-weight: lighter;">Listado rols</p>
  </a>
  <a href="/listarfactura" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p style="font-style: italic; font-size: 22px; font-weight: lighter;">Listado facturas</p>
  </a>
  <!-- <a href="/crearcliente" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <p>Crear cliente</p>
  </a> -->
</nav>

<!-- Navbar on small screens (Hidden on medium and large screens) -->
<div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="/Dashboard" class="w3-bar-item w3-button" style="width:25% !important;">Inicio</a>
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
<!-- Page Content -->
<div class="w3-padding-large" id="main">
  <!-- Header/Home -->
  <header class="w3-container w3-padding-32 w3-center w3-black" id="home">
    <h1 class="w3-jumbo" style="width: 25%; margin: 0 auto;">
      <p style="font-size: 15px; text-align: left;">[Intro: Playboi Carti]<br>
                          Racecars outside, I got<br>
                          Hoes tryna ride out<br>
                          Make 'em wanna find out, everything on my body<br>
                          Shawty gotta find out, I ain't tryna hide nun'<br>
                          Everything I do is different (Oh, yeah)<br>
                          I am, lost in the Matrix<br>
                          I need a face-lift, drive in my spaceship<br>
                          Get out my space, bitch, get out my face, bitch<br>
                          I can't believe we made it this far<br>
                          I can't believe we made it this far<br>
                          I can't believe we made it this far<br>
                          I can't believe we made it this far<br>
                          Hand in the sky (Hand in thе— ahh)<br>
                          I can't believe I madе it this far<br><br>
                          [Verse 1: Playboi Carti]<br>
                          (I'm just tryna tell you how I feel, tell you how I feel)<br>
                          I'm just tryna tell you how I feel, tell you how I feel<br>
                          I been on tour, yeah, I been on all that<br>
                          Uh, too much money, turned down a deal, turned down a deal<br>
                          Too much money, turned down a deal, turned down a deal<br>
                          We riding Bronco’s right through the hills<br>
                          We riding Bronco’s right through the hills<br>
                          She fuck me pronto, when I call her, yeah<br>
                          Ain't no stoppin' us, we goin' out of here<br>
                          They know we poppin' now, they can't control none<br>
                          I got that thing on me, I'm really blowin' smoke<br>
                          You know this ain't no motherfuckin' joke<br>
                          Everything on go-oh<br>
                          This that type of—, uh<br>
                          Let the real speak, uh, let the fake get gone<br>
                          Let the fake go home, tell 'em niggas go, leave my ass alone<br>
                          I been on my own, I been all alone<br>
                          I fell on my face, I got up my own<br>
                          I fell on my face, I got up on my own<br>
                          I fell on my face, got up on my own<br>
                          I just left the studio, did—, uh<br>
                          I just left the studio, did twenty-four songs<br>
                          I been on my shit, I been off the grid<br>
                          I can't disappear, I gotta watch my kid<br>
                          I gotta watch my shit, I gotta watch my sis'<br>
                          Everything gettin’ bigger, shit don't make no sense, shit don't make no—, uh<br>
                          I didn't answer the phone, niggas always mad<br>
                          I don't give a fuck at all, I don't give a fuck at all<br>
                          Real nigga, I ball, told these niggas, yeah<br>
                          They ain't believe nun' at all, they ain't believe us at all<br>
                          They ain't believe us at all, they ain't believe us at all<br>
                          Believe us at all, believe us at all (Uh-uh-uh-uh)<br><br>
                          [Verse 2: Vory & Playboi Carti]<br>
                          Can't believe that we made it this far (Uh, uh)<br>
                          Can't believe that we made it this far<br>
                          Look, mama, now your son is a star (Uh, uh)<br>
                          Can't believe that we made it this far<br>
                          Standin' on your shoulders, in God<br>
                          When life get too hard, I think about everybody I been scarred from<br>
                          I even broke bread even though I should've starved them<br>
                          I'm goin' out a hero, baby<br>
                          Comma, comma, zero, baby<br>
                          Angels callin', demons callin'<br>
                          I put them on threeway, baby<br>
                          I've been keeping them shooters with me on payroll lately</p>
    </h1>
  </header>
  <!-- About Section -->
  <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
    <!--
    Testimonials
    <h3 class="w3-padding-24 w3-text-light-grey">My Reputation</h3>  
    <img src="/w3images/bandmember.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:80px">
    <p><span class="w3-large w3-margin-right">Chris Fox.</span> CEO at Mighty Schools.</p>
    <p>John Doe saved us from a web disaster.</p><br>
    
    <img src="/w3images/avatar_g2.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:80px">
    <p><span class="w3-large w3-margin-right">Rebecca Flex.</span> CEO at Company.</p>
    <p>No one is better than John Doe.</p>
   End About Section 
  </div>
  
   Portfolio Section 
  <div class="w3-padding-64 w3-content" id="photos">
    <h2 class="w3-text-light-grey">My Photos</h2>
    <hr style="width:200px" class="w3-opacity">

    <-- Grid for photos 
    <div class="w3-row-padding" style="margin:0 -16px">
      <div class="w3-half">
        <img src="/w3images/wedding.jpg" style="width:100%">
        <img src="/w3images/rocks.jpg" style="width:100%">
        <img src="/w3images/sailboat.jpg" style="width:100%">
      </div>

      <div class="w3-half">
        <img src="/w3images/underwater.jpg" style="width:100%">
        <img src="/w3images/chef.jpg" style="width:100%">
        <img src="/w3images/wedding.jpg" style="width:100%">
        <img src="/w3images/p6.jpg" style="width:100%">
      </div>
    <-- End photo grid 
    </div>
  <-- End Portfolio Section --
  </div>

  <-- Contact Section --
  <div class="w3-padding-64 w3-content w3-text-grey" id="contact">
    <h2 class="w3-text-light-grey">Contact Me</h2>
    <hr style="width:200px" class="w3-opacity">

    <div class="w3-section">
      <p><i class="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Chicago, US</p>
      <p><i class="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
      <p><i class="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
    </div><br>
    <p>Let's get in touch. Send me a message:</p>

    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"></p>
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"></p>
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"></p>
      <p><input class="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"></p>
      <p>
        <button class="w3-button w3-light-grey w3-padding-large" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
  End Contact Section-->
  </div>
  <br>
  <br>
  <br>
 

    <!-- Footer -->
  <footer class="w3-content w3-padding-64 w3-text-grey w3-xlarge">
    <!-- <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
    <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>
   -->
    <!-- End footer -->
  </footer>

<!-- END PAGE CONTENT -->
</div>

</body>
  </template>
  
  <script >
  export default {
    name: 'Dashboard',
    data(){
        return{
            
        }
    }
  }
  </script>
  
  <style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
/* Set the width of the sidebar to 120px */
/* .w3-sidebar {width: 160px;background: #222;} */
.w3-sidebar:hover {
  display: block;
}
/* Add a left margin to the "page content" that matches the width of the sidebar (120px) */
#main {margin-left: 120px}
/* Remove margins from "page content" on small screens */
@media only screen and (max-width: 600px) {#main {margin-left: 0}}

table {
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  height: 100%;
}

tr {
  border-bottom: 1px solid #ddd;
}

/* th:nth-child(even),td:nth-child(even) {
  background-color: rgba(18, 48, 48, 0.4);
} */
</style>