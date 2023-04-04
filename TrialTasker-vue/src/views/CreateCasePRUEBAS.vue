<template>
    <HeaderAccions title="Crear Caso" to="CasosActivos" />
    <Form :create="cases.createCase" :form="form" button-text="Crear">
        <FormGroup label="Nombre" :error="cases.errors ? cases.errors.case_name : []">
            <input type="text" id="case_name" v-model="form.case_name">
        </FormGroup>
        <FormGroup label="Radicado" :error="cases.errors ? cases.errors.case_radicate : []">
            <input type="text" id="case_radicate" v-model="form.case_radicate">
        </FormGroup>
        <FormGroup label="Persona" :error="cases.errors ? cases.errors.case_person_id : []">
            <select id="case_person_id" v-model="form.case_person_id">
                <option value="">Juez...</option>
                <option v-for="person in persons.personsAll" :value="person.id">{{ person.per_name }} {{
                    person.per_lastname }}</option>
            </select>
        </FormGroup>
        <FormGroup label="Abogado" :error="cases.errors ? cases.errors.case_user_id : []">
            <select id="case_user_id" v-model="form.case_user_id">
                <option value="">Seleccione un abogado</option>
                <option :value="auth.user.id">{{ auth.user.name }} {{ auth.user.lastname }}</option>
            </select>
        </FormGroup>
    </Form>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '@/components/headers/HeaderAccions.vue';
import Form from '@/components/forms/Form.vue';
import FormGroup from '@/components/forms/FormGroup.vue';
import { useCaseStore } from '@/stores/caseStore';
import { usePersonStore } from '@/stores/personStore';
import { useAuthStore } from "@/stores/authStore";


const cases = useCaseStore();
const persons = usePersonStore();
const auth = useAuthStore();

const form = ref({
    case_name: '',
    case_radicate: '',
    case_person_id: '',
    case_user_id: auth.user.id,
    case_status: true,
});

onMounted(() => {
    persons.getPersonsAll();
    auth.getUser();
});

</script>


<style scoped>
.title {
    display: flex;
    justify-content: space-between;
    background-color: var(--verde);
    color: white;
    border-radius: 8px;
    text-decoration: none;
    padding: 10px;
}

main {
    color: #473800;
    background-color: var(--my-hover-ligth);
    height: auto;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

button {
    font-size: 20px;
}

section {
    display: flex;
    justify-content: center;
    gap: 5%;
}

.izquierda {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 45%;
}

.derecha {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

}

input {
    height: 30px;
    width: 100%;
    border-radius: 7px;
    border: 1px var(--verde) solid;
    cursor: pointer;
    padding-left: 10px;


}

.selects {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

select {
    border-radius: 5px;
    border: none;
    background-color: white;
}

.atras {
    border: none;
    border-radius: 5px;
    width: 50px;
    background-color: var(--verde);
    color: white;
    cursor: pointer;
}

.enviar {
    width: 100%;
    display: flex;
    justify-content: center;
    border: none;
    background-color: var(--my-hover-ligth);

}

.btnenviar {
    background-color: var(--verde);
    border-radius: 7px;
    height: 30px;
    width: 200px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    padding: 5px;
}

.btnaccion {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

.infodefensor {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5%;
}

.info {
    width: 45%;
    display: flex;
    gap: 10px;
    flex-direction: column;

}

.btna {
    background-color: var(--verde);
    border: none;
    border-radius: 7px;
    height: 30px;
    width: 45%;
    cursor: pointer;
    color: white;
}
</style>