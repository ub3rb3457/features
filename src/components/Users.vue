<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        Single Feature Toggle
        <Feature name="bestandeskunden">
          <template #on> on </template>
          <template #off> off </template>
        </Feature>
      </li>
    </ul>
  </div>
</template>

<script>
import { useFeature } from "@/features/useFeature";
import Feature from "@/components/Feature";

import { ref, onMounted } from "vue";

export default {
  components: {
    Feature,
  },
  setup() {
    const search = useFeature("search");

    const users = ref([]);

    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      users.value = await response.json();
    };

    onMounted(() => {
      getUsers();
    });

    return { users, search };
  },
};
</script>
