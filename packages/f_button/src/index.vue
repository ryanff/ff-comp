<template>
  <button :class="btnStyle">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

export interface MyButtonProps {
  type: 'primary' | 'danger';
}

const props = withDefaults(defineProps<MyButtonProps>(), {
  type: "primary",
});


const btnStyle = computed(() => {
  return props.type === 'primary' ? 'primary' : 'danger';
});

</script>

<style lang="scss" scoped>
.base {
    padding: 4px 8px;
    color: white;
}

.primary {
    @extend .base;
    background-color: blue;
}

.danger {
    @extend .base;
    background-color: red;
}
</style>

