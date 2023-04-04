<template>
  <div class="header">
    <h2 class="header__title">{{ title }}</h2>
  </div>
</template>

<script setup>
import { IconSquareRoundedPlusFilled } from '@tabler/icons-vue'
import ButtonPlus from '@/components/buttons/ButtonPlus.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 2px solid var(--my-hover-ligth);
}


</style>