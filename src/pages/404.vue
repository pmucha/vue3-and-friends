<template>
  <h1>404</h1>
  <button @click="goHome">Go Home</button>
  <p>
    {{ route.params }}
  </p>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()

function goHome() {
  router.push({
    name: "Home",
    replace: true,
  })
}
</script>
