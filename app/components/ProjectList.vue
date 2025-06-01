<script lang="ts" setup>
interface GithubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
}

const { error, pending, data } = await useFetch<GithubRepo[]>(
  "https://api.github.com/users/y-ashish-y/repos"
);

/**
 * Filters the repositories array to only include items with a name property.
 * Using computed creates a reactive dependency that will automatically update
 * whenever the source data changes. This is more efficient than running the
 * filter operation directly in the template.
 *
 * @returns {Array} Array of repositories filtered by name
 */
const repos = computed(() => data.value?.filter((repo) => repo.name));
</script>

<template>
  <div>Projects</div>
  <section v-if="pending">Loading..</section>
  <section v-else-if="error">Something went wrong</section>
  <section v-else>
    <ul class="grid-cols-1 gap-4 grid">
      <li
        v-for="repos in data"
        class="border border-amber-100 rounded-sm p-4 hover:bg-amber-300"
      >
        <a :href="repos.html_url" target="_blank">
          <div class="font-semibold">{{ repos.name }}</div>
        </a>
      </li>
    </ul>
  </section>
</template>
