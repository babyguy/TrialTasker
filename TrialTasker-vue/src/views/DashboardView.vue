<template>
    <div class="dashboard">
        <h1>Dashboard</h1>
        <Bar :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { useDashboardStore } from '../stores/dashboardStore';
import { Bar }  from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { computed, onMounted, ref } from 'vue';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
const dashboardStore = useDashboardStore();
onMounted(() => {
    dashboardStore.getUsersForWeek();
    dashboardStore.getUsersSessions();
})

const chartData = computed(() => {
    return {
        labels: dashboardStore.usersForWeek.map(item => {
            const date = new Date(item.date);
            return date.getDate()+1;
        }),
        datasets: [
            {
                label: 'Numero de usuarios',
                data: dashboardStore.usersForWeek.map(item => item.users_count),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            },
        ],
    }
})


const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Usuarios que usan la plataforma por día'
        },
    }

}


</script>

<style>

</style>