<template>
    <router-link :to="{name: to}" class="button-plus"><IconSquareRoundedPlusFilled color="white" :size="20" stroke-width="2.2"/></router-link>
</template>

<script setup>

import { IconSquareRoundedPlusFilled } from '@tabler/icons-vue'
import { defineProps } from 'vue'
defineProps({
    to: {
        type: String,
        required: true
    }
})

</script>

<style scoped>
.button-plus {
    background-color: var(--brown);
    border: none;
    border-radius: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
}
</style>