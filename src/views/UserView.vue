<template>
  <v-loader v-if="Object.keys(users.getUser).length == 0"></v-loader>
  <div v-else>
    <h2>{{ users.getUser.address.city }}</h2>
    <p>{{ users.getUser.address.description }}</p>
    <button class="btn__back" @click="$router.go(-1)">Back</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { userStore } from "@/stores/users";
import vLoader from "@/components/v-loader.vue";
const users = userStore();
const route = useRoute();

users.fetchUser(route.params.id as string);
</script>

<style lang="less" scoped>
.btn__back {
  margin-top: 50px;
}
</style>
