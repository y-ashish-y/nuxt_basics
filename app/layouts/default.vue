<script setup lang="ts"></script>

<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div>
        <NuxtLink to="/" class="text-2xl font-semibold p-2 hover:bg-amber-50">
          My Nuxt App
        </NuxtLink>
      </div>
      <Menu />
    </header>
    <main class="p-2 mt-10"><slot /></main>
  </div>
</template>
