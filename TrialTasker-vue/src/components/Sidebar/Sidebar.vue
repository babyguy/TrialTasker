<template>
        <div class="logo">
        <Logo :fill="'--white'" />
    </div>
    <div class="links" v-if="auth.user">
        <ButtonLink to="Dashboard" text="Dashboard" v-if="auth.user.is_admin">
            <IconDashboard :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="TypePersonDashboard" text="Tipo de personas" v-if="auth.user.is_admin">
            <IconUsers :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="UserDashboard" text="Usuarios" v-if="auth.user.is_admin">
            <IconUsers :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="TypeStageDashboard" text="Tipo de etapas" v-if="auth.user.is_admin">
            <IconClipboard :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="StageDashboard" text="Etapas" v-if="auth.user.is_admin">
            <IconClipboard :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="FileDashboard" text="Archivos" v-if="auth.user.is_admin">
            <IconFileText :size="20" stroke-width="2.2" />
        </ButtonLink>
        
        <ButtonLink to="Home" text="Inicio" v-if="!auth.user.is_admin">
            <IconHome :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="CasosActivos" text="Casos Activos" v-if="!auth.user.is_admin">
            <IconDashboard :size="20" stroke-width="2.2" />
        </ButtonLink>
        <ButtonLink to="CasosInactivos" text="Casos Inactivos" v-if="!auth.user.is_admin">
            <IconDashboard :size="20" stroke-width="2.2" />
        </ButtonLink>
    </div>
   
    <div class="user">
        <div class="user__name" v-if="auth.user">
            <span>{{ auth.user.name }} {{ auth.user.lastname }}</span>
        </div>
        <ButtonLink to="Login" text="Salir" @click="auth.handleLogout()"> <IconLogout :size="20" stroke-width="2.2" /> </ButtonLink>
    </div>

</template>

<script setup>
import Logo from '@/components/logo/Logo.vue';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import ButtonLink from '../buttons/ButtonLink.vue';
import { IconHome, IconDashboard, IconLogout, IconUsers, IconClipboard, IconGavel, IconFileText } from '@tabler/icons-vue';

const auth = useAuthStore();

onMounted(() => {
    auth.getUser();
})

</script>

<style scoped>
.logo {
    width: 100%;
    border-bottom: 2px solid var(--my-hover-ligth);


}

.links {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow: auto;
    height: 100%;
}

.links::-webkit-scrollbar {
    width: 0;
}

.user {
    width: 100%;
    border-top: 2px solid var(--white);
    display: flex;
    flex-direction: column;
    padding: 1rem 0;

}

.user__name {
    font-size: 1rem;
    padding: 0.5rem 1rem;
}
</style>