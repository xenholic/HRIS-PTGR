<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../HRIS-PTGR/assets/css/style.css'
import '../HRIS-PTGR/assets/css/bootstrap.min.css'
import '../HRIS-PTGR/assets/css/main.css'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
