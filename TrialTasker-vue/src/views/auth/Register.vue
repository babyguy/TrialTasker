<template>
    <Entry class="entryregister">
        <h2>Registro</h2>
        <form class="form-entry" @submit.prevent="authStore.handleRegister(form)">
            <div class="form-group-entry">
                <input type="text" id="name" placeholder="Nombre" v-model="form.name"
                    :class="{ error_input: authStore.errors.name }">
                <div v-if="authStore.errors.name">
                    <p class="error">{{ authStore.errors.name[0] }}</p>
                </div>
            </div>
            <div class="form-group-entry">
                <input type="text" id="lastname" placeholder="Apellido" v-model="form.lastname"
                    :class="{ error_input: authStore.errors.lastname }">
                <div v-if="authStore.errors.lastname">
                    <p class="error">{{ authStore.errors.lastname[0] }}</p>
                </div>
            </div>
            <div class="form-group-entry">
                <input type="text" id="address" placeholder="Direccion" v-model="form.address"
                    :class="{ error_input: authStore.errors.address }">
                <div v-if="authStore.errors.address">
                    <p class="error">{{ authStore.errors.address[0] }}</p>
                </div>
            </div>
            <div class="form-group-entry">
                <input type="text" id="phone" placeholder="Telefono" v-model="form.phone"
                    :class="{ error_input: authStore.errors.phone }">
                <div v-if="authStore.errors.phone">
                    <p class="error">{{ authStore.errors.phone[0] }}</p>
                </div>
            </div>
            <div class="form-group-entry">
                <input type="text" id="email" placeholder="Correo Electronico" v-model="form.email"
                    :class="{ error_input: authStore.errors.email }">
                <div v-if="authStore.errors.email">
                    <p class="error">{{ authStore.errors.email[0] }}</p>
                </div>
            </div>

            <div class="form-group-entry">
                <input type="password" id="password" placeholder="Contraseña" v-model="form.password"
                    :class="{ error_input: authStore.errors.password }">
                <div v-if="authStore.errors.password">
                    <p class="error">{{ authStore.errors.password[0] }}</p>
                </div>
            </div>
            <div class="form-group-entry">
                <input type="password" id="password_confirmation" placeholder="Confirmar Contraseña"
                    v-model="form.password_confirmation">
            </div>
            <button class="btn" type="submit">Registrar</button>
            <div class="botonAtras">
                <RouterLink :to="{ name: 'LandingPage' }" class="atras">Atras</RouterLink>
            </div>
        </form>

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
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import Entry from '@/components/Entry.vue'

const authStore = useAuthStore();

const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    lastname: '',
    address: '',
    phone: '',
});

</script>

<style scoped>
.entryregister {
    opacity: 0.9999999;
    height: 100vh;
}

.botonAtras {
    display: flex;
    width: 100%;
    justify-content: center;
}

input {
    height: 10px;
}

.circles {

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 145vh;
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