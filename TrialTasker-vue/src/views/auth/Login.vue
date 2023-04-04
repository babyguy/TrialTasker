<template>
    <Entry class="entrylogin">
        <form @submit.prevent="authStore.handleLogin(form)" class="form-entry login">
            <div >
                <input class="inp" type="email" id="email" v-model="form.email" placeholder="Correo Electronico">
            </div>
            <div>
                <input class="inp" type="password" id="password" v-model="form.password" placeholder="Contraseña">
            </div>
            <div v-if="authStore.message">
                <p class="error">{{ authStore.message }}</p>
            </div>
            <button type="submit" class="btn">Iniciar sesión</button>
        </form>
        <RouterLink :to="{ name: 'ForgotPassword' }">¿Olvidaste tu contraseña?</RouterLink>
        <RouterLink :to="{ name: 'Register' }">Registrarse</RouterLink>
        <RouterLink :to="{ name: 'LandingPage' }">Atras</RouterLink>

        <div class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </div>
    </Entry>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import Entry from '@/components/Entry.vue'
const authStore = useAuthStore()
const form = ref({
    email: '',
    password: ''
});

</script>

<style scoped>
.entrylogin {
    opacity: 0.9999999;
}

.form-entry{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input{
    border-radius: 12px;
    height: 40px;
    width: 100%;
    border: none;
    padding-left: 10px;
    background-color: #e8e8e8;
}

.circles {

    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
    background-color: var(--brown);
}

.circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background-color: var(--azulito);
    animation: animate 25s linear infinite;
    bottom: -150px;
}

.circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>