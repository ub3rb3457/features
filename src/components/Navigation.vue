<template>
  <router-link to="/">Home</router-link>
  <router-link v-if="search.enabled" to="/search">search</router-link>
  {{ search }}
</template>

<script>
import { useFeature } from "@/features/useFeature";

export default {
  setup() {
    const search = useFeature("search");

    return { search };
  },
};
</script>

<style>
</style>