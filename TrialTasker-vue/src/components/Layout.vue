<template>
    <main>
        <div class="sidebar"
            v-if="$route.name != 'Login' && $route.name != 'Register' && $route.name != 'ForgotPassword' && $route.name != 'ResetPassword' && $route.name != 'VerifyEmail' && $route.name != 'LandingPage'">
            <Sidebar />
        </div>
        <div class="container"

            :class="{ 'container-padding': $route.name != 'Login' && $route.name != 'Register' && $route.name != 'ForgotPassword' && $route.name != 'ResetPassword' && $route.name != 'VerifyEmail' && $route.name != 'LandingPage' }">
            

            <slot></slot>

        </div>
    </main>
</template>

<script setup>
import Sidebar from './Sidebar/Sidebar.vue';
    

</script>

<style scoped>
main {
    display: flex;
    height: 100vh;
    background-color: var(--white);
}





.sidebar {
    width: 250px;
    height: 100%;
    position: fixed;

    background-color: var(--brown);

    color: var(--azulito);
    padding: 1.5rem 1.5rem 0 1.5rem;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
}

/* Media query for mobile screens */
@media screen and (max-width: 768px) {
    .sidebar {
        left: -100%;
        width: 100%;
        height: 100%;
        display: block;
    }

    

}

.container {
    flex: 1;
    width: 100%;
    background-color: var(--white);
}

.container-padding {
    padding: 1.5rem;
    margin: 0 0 0 250px;
}

/* Media query for mobile screens */
@media screen and (max-width: 768px) {
    .container-padding {
        margin: 0;
    }
}



</style>