<template>
  <div>
    <p>sds</p>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      checked1: ref(true),
      checked2: ref(false)
    }
  }
})
</script>
