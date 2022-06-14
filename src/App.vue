<template>
  <pre>{{ flags }}</pre>
  <Navigation />
  <router-view />
</template>

<script>
import { useFeatureFlags } from "@/features/useFeatureFlags";
import Navigation from "@/components/Navigation";
import features from "./../flags.js";

export default {
  components: { Navigation },
  setup() {
    const { flags } = useFeatureFlags(features);
    return { flags };
  },
};
</script>
