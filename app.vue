<script setup>
import { onMounted } from 'vue'
import { initFlowbite, initModals } from 'flowbite'
import '../HRIS-PTGR/assets/css/style.css'
import '../HRIS-PTGR/assets/css/main.css'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
    initModals();
})
</script>

<template>
  <div>
    <NuxtLayout>
      <!-- <Router-view> -->
        <NuxtPage/>
      <!-- </Router-view> -->
    </NuxtLayout>
  </div>
</template>

<style>

</style>
