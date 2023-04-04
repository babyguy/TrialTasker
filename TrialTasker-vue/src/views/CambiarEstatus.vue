<template>
    <HeaderAccions title="Editar Caso" to="CasosActivos" />
    <Form :create="cases.updateCase" :form="form" button-text="Actualizar">
        <FormGroup label="Nombre del Cliente" :error="cases.errors ? cases.errors.case_name : []">
            <select id="case_name" v-model="form.case_name">
                <option value="">Seleccione un cliente</option>
                <option v-for="active in cases.activeCases" :value="active.id">{{ active.case_name }}</option>
            </select>
        </FormGroup>
        <FormGroup label="Estado" :error="cases.errors ? cases.errors.case_status : []">
            <select id="case_status" v-model="form.case_status">
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
            </select>
        </FormGroup>
    </Form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import HeaderAccions from '@/components/headers/HeaderAccions.vue';
import Form from '@/components/forms/Form.vue';
import FormGroup from '@/components/forms/FormGroup.vue';
import { useRoute } from 'vue-router';
import { useCaseStore } from '@/stores/caseStore';


const route = useRoute();
const cases = useCaseStore();

const form = ref({
    id: '',
    case_name: '',
    case_status: 0,
});

onMounted(async () => {
    cases.casesActive(route.params.id);
    form.value = {
        id: route.params.id,
        case_name: cases.case.case_name,
        case_status: cases.case.case_status,
    }
});

</script>

<style></style>