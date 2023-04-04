<template>
    <Entry class="entryforgot">
        <p class="text__entry">¿Olvidaste tu contraseña?</p>
        <p class="text__entry">No hay problema. Simplemente háganos saber su dirección de correo electrónico y le enviaremos un enlace de restablecimiento de contraseña que le permitirá elegir una nueva.</p>
        <form class="form-entry"  @submit.prevent="authStore.handleForgotPassword(form)">
            <div class="form-group-entry">
                <input type="email" class="form-control" id="email" v-model="form.email" placeholder="Correo Electronico" :class="{error_input:authStore.errors.email}">
            </div>
            <div v-if="authStore.errors.email">
                    <p class="error">{{ authStore.errors.email[0] }}</p>
            </div>
            <button type="submit" class="btn">Enviar</button>
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
import { onMounted, ref } from 'vue'
import { useAuthStore} from '@/stores/authStore'
import Entry from '@/components/Entry.vue'

const authStore = useAuthStore();


const form = ref({
    email: ''
});

</script>

<style>
.entryforgot{
   opacity: 0.9999999;
}

    



.circles{
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 101vh;
    overflow: hidden;
    z-index: -1;
    background-color: var(--brown);
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background-color: var(--azulito);
    animation: animate 25s linear infinite;
    bottom: -150px;
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>