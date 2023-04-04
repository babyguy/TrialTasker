<template>
    <button class="btn" :type="type">
        {{ text }}
    </button>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: 'Enviar',
    },
    type: {
        type: String,
        default: 'button',
    },
})
</script>

<style scoped>
:root {
    --background: #edecec;
    --brown: #4f5d60;
    --beige: #fff2bf;
    --my-hover-dark: #473800;
    --my-hover-ligth: #e8e8e8;
    --white: #fff;
    --black: #000;
    --verde: #4f5d60;
}

.btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 10px;
    background-color: var(--brown);
    color: var(--white);
}
</style>