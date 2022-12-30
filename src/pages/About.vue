<script lang="ts" setup>
import { ref } from "vue"
import { useTextStore } from "@/stores/text"

const store = useTextStore()
const text = ref(store.text)

function saveStore() {
  store.text = text.value
}
</script>

<template>
  <h1>About</h1>
  <p>Default about page</p>
  <fieldset>
    <input v-model="text" />
    <button @click="saveStore">Save</button>
    <button @click="store.toDefault">Reset</button>
    <br />
    {{ store.text }}
  </fieldset>
  <p>
    Dignissimos eum sed aut et reiciendis. Odio inventore aut doloribus sint qui
    et ea. Magni hic sequi illum vero accusamus at. Sunt reiciendis vel eum
    veritatis. Velit ullam consequatur unde incidunt.
  </p>
  <p>
    Qui sed et facere eum qui corporis magnam consequatur. Odit molestiae ab
    doloremque esse. Sint quo optio numquam commodi totam quis commodi quos. Ut
    cumque rem quo commodi. Velit aut autem tenetur sit consequatur temporibus
    quia. Maxie amet quidem voluptatibus et corporis et.
  </p>
  <p>
    Soluta voluptas a itaque eos et. Occaecati itaque quod quibusdam. At maiores
    modi eius sint. Dolorem voluptas et ut enim voluptas. Esse consectetur ut
    eum consequatur ipsam fugit ratione.
  </p>
</template>
