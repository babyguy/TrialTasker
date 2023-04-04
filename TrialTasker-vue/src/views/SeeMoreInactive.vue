<template>
    <h1>Detalles del caso</h1>
    <div class="container">
        <RouterLink :to="{ name: 'CasosInactivos' }" class="title">
            <button class='atras'>Atras</button>
        </RouterLink>
        <div class="contenido">
            <div class="cliente" >
                <h2 class="seccion">CLIENTE:</h2>
                <h2 class="titulos">Name:</h2>
                <p class="informacion">{{ cases.caseStore.case_name }}</p>
                <h2 class="titulos">Radicado:</h2>
                <p class="informacion">{{ cases.caseStore.case_radicate }}</p>
            </div>
            <div class="personas">
                <div class="izquierda">
                    <div class="info">
                        <h3 class="titulos">Name:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_name }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Last Name:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_lastname }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Phone:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_phone }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Address:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_address }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Email:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_email }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">CC:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_nit }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Issue:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_issue_nit }}</p>
                    </div>
                </div>
                <div class="derecha">
                    <div class="info">
                        <h3 class="titulos">Number Ministry:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_num_ministry }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Number Dispaych:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_num_dispaych }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Radicate:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_radicated }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Authority:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_authority }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Number:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_number }}</p>
                    </div>
                    <div class="info">
                        <h3 class="titulos">Type Person:</h3>
                        <p class="informacion">{{ cases.caseStore.case_person.per_authority }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCaseStore } from '@/stores/caseStore';

const cases = useCaseStore();
onMounted(() => {
    cases.casesInactive()
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto+Condensed:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&family=Roboto+Condensed:wght@700&display=swap');

.atras {
    border: none;
    border-radius: 5px;
    width: 50px;
    height: 30px;
    background-color: #664200;
    color: white;
    cursor: pointer;
}

.contenido {
    margin-top: 20px;
    margin-bottom: 30px;
    border: solid 1px;
    text-align: center;
}

.cliente {
    margin-top: 40px;
}

.usuario {
    margin-top: 40px;
}

.personas {
    margin-top: 40px;
    margin-bottom: 40px;
}

.titulos {
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
}

.informacion {
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
}
</style>