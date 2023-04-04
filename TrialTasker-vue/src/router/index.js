import { createRouter, createWebHistory, useRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import axios from "axios";
import authRoutes from "./auth";
import typePersonRoutes from "./typePerson";
import userRoutes from "./user";
import personRoutes from "./person";
import caseRoutes from "./case";
import typeStageRoutes from "./typeStage";
import stageRoutes from "./stage";
import fileRoutes from "./files";
import personStageRoutes from "./personStage";

import Cookies from "js-cookie";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "LandingPage",
    },
    {
      path: "/home",
      name: "Home",
      component: HomeView,
      meta: {
        title: "Inicio",
      },
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: {
        title: "Dashboard",
      },
    },
    {
      path: "/LandingPage",
      name: "LandingPage",
      component: () => import("../views/LandingPage.vue"),
      meta: {
        title: "Bienvenido",
      },
    },
    {
      path: "/actualizarcaso",
      name: "ActualizarCaso",
      component: () => import("../views/ActualizarCaso.vue"),
      meta: {
        title: "Actualizar Caso",
      },
    },
    {
      path: "/actualizarcasorepresentante",
      name: "ActualizarCasoRepresentante",
      component: () => import("../views/ActualizarCasoRepresentante.vue"),
      meta: {
        title: "Actualizar Caso",
      },
    },
    {
      path: "/createperson",
      name: "CreatePerson",
      component: () => import("../views/CreatePerson.vue"),
      meta: {
        title: "Crear Persona",
      },
    },
    {
      path: "/createcasePRUEBA",
      name: "CreateCasePRUEBAS",
      component: () => import("../views/CreateCasePRUEBAS.vue"),
      meta: {
        title: "Crear Caso 2",
      },
    },
    {
      path: "/casosactivos",
      name: "CasosActivos",
      component: () => import("../views/CasosActivos.vue"),
      meta: {
        title: "Casos Activos",
      },
    },
    {
      path: "/casosinactivos",
      name: "CasosInactivos",
      component: () => import("../views/CasosInactivos.vue"),
      meta: {
        title: "Casos Inactivos",
      },
    },
    {
      path: "/casosinactivos",
      name: "CasosInactivos",
      component: () => import("../views/CasosInactivos.vue"),
      meta: {
        title: "Casos Inactivos",
      },
    },
    {
      path: "/cambiarestatus",
      name: "CambiarEstatus",
      component: () => import("../views/CambiarEstatus.vue"),
      meta: {
        title: "Cambiar Estatus del Caso",
      },
    },
    {
      path: "/vermasactivos",
      name: "SeeMoreActive",
      component: () => import("../views/SeeMoreActive.vue"),
      meta: {
        title: "Detalles del caso",
      },
    },
    {
      path: "/vermasinactivos",
      name: "SeeMoreInactive",
      component: () => import("../views/SeeMoreInactive.vue"),
      meta: {
        title: "Detalles del caso",
      },
    },
    {
      children: [
        ...authRoutes,
        ...typePersonRoutes,
        ...userRoutes,
        ...personRoutes,
        ...caseRoutes,
        ...typeStageRoutes,
        ...stageRoutes,
        ...fileRoutes,
        ...personStageRoutes,
      ],
    },
  ],
});

let user = [];

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  const redirect = () => {
    if (from.name === "Register" && to.name === "VerifyEmail") {
      next();
    } else if (user.email_verified_at === null && to.name !== "VerifyEmail") {
      next({ name: "VerifyEmail" });
    } else if (
      to.name === "Login" ||
      to.name === "Register" ||
      to.name === "ForgotPassword" ||
      to.name === "ResetPassword" ||
      to.name === "LandingPage"
    ) {
      if (user.is_admin) {
        next({ name: "Dashboard" });
      } else {
        next({ name: "Home" });
      }
    } else if (to.path.includes("/dashboard") && !user.is_admin) {
      next({ name: "Home" });
    } else {
      next();
    }
  };
  if (Cookies.get("auth_token")) {
    if (user.length === 0) {
      axios.get("/api/user").then((response) => {
        user = response.data;
        redirect();
      });
    } else {
      redirect();
    }
  } else {
    user = [];
    if (
      to.name === "Login" ||
      to.name === "Register" ||
      to.name === "ForgotPassword" ||
      to.name === "ResetPassword" ||
      to.name === "LandingPage"
    ) {
      next();
    } else {
      next({ name: "Login" });
    }
  }
});

export default router;
