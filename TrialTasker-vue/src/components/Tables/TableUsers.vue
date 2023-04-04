<template>
    <div class="table">
        <table class="table__content">
            <thead>
                <tr>
                    <th v-for="item in thead" :key="item" class="table__content__header">{{ item.name }}</th>
                    <th class="table__content__header">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.id">
                    <td class="table__content__data" v-for="key in thead" :key="key.key">
                        <span v-if="!key.key_2">{{ item[key.key] }}</span><span v-else>{{ item[key.key][key.key_2] }}</span>
                    </td>
                    <td class="table__content__data">
                        <router-link :to="{ name: edit, params: { id: item.id } }">Ver mas</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    thead: {
        type: Array,
        required: true,
    },
    /* data recibe un json */
    data: {
        type: Array,
        required: true,
    },
    edit: {
        type: Text,
        required: true,
    },
});
</script>

<style scoped>
.table {
    margin-top: 20px;
    width: 100%;
    overflow-x: auto;
}

.table__content {
    width: 100%;
    border-collapse: collapse;
}

.table__content thead {
    background-color: #4f5d60;
    color: white;
    text-align: center;
}


.table__content tbody tr:nth-child(odd) {
    background-color: var(--my-hover-ligth);
}

.table__content tbody tr:nth-child(even) {
    background-color: var(--white);
}

.table__content__header {
    padding: 0.4rem 0.8rem;
}

.table__content__data {
    padding: 0.5rem 1rem;
    text-align: center;
}

.table__content__data button {
    background-color: #4f5d60;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 3px
}

.table__content__data a {
    text-decoration: none;
    background-color: #4f5d60;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 3px;
}
</style>