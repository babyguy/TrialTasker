<template>
  <div class="main">
    <div class="CasosActivos" >
      <h2>Casos Activos</h2>
      <h2>{{ cases.activos }}</h2>
    </div>
    <div class="InformacionUsuario">
      <h2>Casos Inactivos</h2>
      <h2>{{ cases.inactivos }}</h2>
    </div>
  </div>
</template>

<script setup>
// import { useAuthStore } from "@/stores/authStore";
import { onMounted } from 'vue';
import { useCaseStore } from '@/stores/caseStore';

// const authStore = useAuthStore();
// const auth = useAuthStore();
const cases = useCaseStore();

onMounted(() => {
  cases.casesActive();
  cases.casesInactive();
})



</script>

<style scoped>
.main {
  box-shadow: 0px 0px 10px 0.1px rgba(0, 0, 0, 0.288);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
  gap: 5%;
}

.CasosActivos {
  height: 100px;
  width: 250px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--azulito);
  border-radius: 12px;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.404);

}

.InformacionUsuario {
  height: 100px;
  width: 250px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background-color: var(--azulito);
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.404);

}




</style>