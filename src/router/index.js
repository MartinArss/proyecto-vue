import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
// - - - Apartado cliente - - -
import ListarCliente from '../components/Clientes/ListarCliente.vue'
import CrearCliente from '../components/Clientes/CrearCliente.vue'
import EditarCliente from '../components/Clientes/EditarCliente.vue'
// - - - Apartado empleado - - -
import ListarEmpleado from '../components/Empleados/ListarEmpleado.vue'
import CrearEmpleado from '../components/Empleados/CrearEmpleado.vue'
import EditarEmpleado from '../components/Empleados/EditarEmpleado.vue'
// - - - Apartado usuario - - -
import ListarUsuario from '../components/Usuarios/ListarUsuario.vue'
import CrearUsuario from '../components/Usuarios/CrearUsuario.vue'
import EditarUsuario from '../components/Usuarios/EditarUsuario.vue'
// - - - Apartado departamento - - -
import ListarDepartamento from '../components/Departamentos/ListarDepartamento.vue'
import CrearDepartamento from '../components/Departamentos/CrearDepartamento.vue'
import EditarDepartamento from '../components/Departamentos/EditarDepartamento.vue'
// - - - Apartado puesto - - -
import ListarPuesto from '../components/Puestos/ListarPuesto.vue'
import CrearPuesto from '../components/Puestos/CrearPuesto.vue'
import EditarPuesto from '../components/Puestos/EditarPuesto.vue'
// - - - Apartado rol - - -
import ListarRol from '../components/Roles/ListarRol.vue'
import CrearRol from '../components/Roles/CrearRol.vue'
import EditarRol from '../components/Roles/EditarRol.vue'
// - - - Apartado factura - - -
import ListarFactura from '../components/Facturas/ListarFactura.vue'
import CrearFactura from '../components/Facturas/CrearFactura.vue'
import EditarFactura from '../components/Facturas/EditarFactura.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    // - - - CLIENTE - - -
    {
      path: '/listarcliente',
      name: 'listarcliente',
      component: ListarCliente
    },
    {
      path: '/crearcliente',
      name: 'crearcliente',
      component: CrearCliente
    },
    {
      path: '/editarcliente/:pkCliente',
      name: 'editarcliente',
      component: EditarCliente
    },
    // - - - EMPLEADO - - -
    {
      path: '/listarempleado',
      name: 'listarempleado',
      component: ListarEmpleado
    },
    {
      path: '/crearempleado',
      name: 'crearempleado',
      component: CrearEmpleado
    },
    {
      path: '/editarempleado/:pkCliente',
      name: 'editarempleado',
      component: EditarEmpleado
    },
    // - - - USUARIO - - -
    {
      path: '/listarusuario',
      name: 'listarusuario',
      component: ListarUsuario
    },
    {
      path: '/crearusuario',
      name: 'crearusuario',
      component: CrearUsuario
    },
    {
      path: '/editarusuario',
      name: 'editarusuario',
      component:EditarUsuario
    },
    // - - - DEPARTAMENTO - - -
    {
      path: '/listardepartamento',
      name: 'listardepartamento',
      component: ListarDepartamento
    },
    {
      path: '/creardepartamento',
      name: 'creardepartamento',
      component: CrearDepartamento
    },
    {
      path: '/editardepartamento',
      name: 'editardepartamento',
      component: EditarDepartamento
    },
    // - - - PUESTO - - -
    {
      path: '/listarpuesto',
      name: 'listarpuesto',
      component: ListarPuesto
    },
    {
      path: '/crearpuesto',
      name: 'crearpuesto',
      component: CrearPuesto
    },
    {
      path: '/editarpuesto',
      name: 'editarpuesto',
      component: EditarPuesto
    },
    // - - - ROL - - -
    {
      path: '/listarrol',
      name: 'listarrol',
      component: ListarRol
    },
    {
      path: '/crearrol',
      name: 'crearrol',
      component: CrearRol
    },
    {
      path: '/editarrol',
      name: 'editarrol',
      component: EditarRol
    },
    // - - - FACTURA - - -
    {
      path: '/listarfactura',
      name: 'listarfactura',
      component: ListarFactura
    },
    {
      path: '/crearfactura',
      name: 'crearfactura',
      component: CrearFactura
    },
    {
      path: '/editarfactura',
      name: 'editarfactura',
      component: EditarFactura
    }
  ]
})

export default router
