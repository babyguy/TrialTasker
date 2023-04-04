<template>
    <div class="entry">
        <div class="card__entry">
            <div class="entry__logo">
                <Logo fill="--verde"/>
            </div>
            <slot></slot>
        </div>
        
    </div>
    
</template>

<script setup>
import Logo from '@/components/logo/Logo.vue'
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

onMounted(() => {
    authStore.authMessage = null;
    authStore.authErrors = {};
});
</script>

<style scoped>
.entry {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  
}






</style>
