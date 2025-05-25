<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
const id = route.params.id;
</script>

<template>
  <div>we are inside a blog {{ id }}</div>
</template>
