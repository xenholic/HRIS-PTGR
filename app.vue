<script setup>
import { onMounted } from 'vue'
import {  
    // initAccordions, 
    initFlowbite,
    // initCarousels, 
    // initCollapses, 
    // initDials, 
    // initDismisses, 
    // initDrawers, 
    // initDropdowns, 
    // initModals, 
    // initPopovers, 
    // initTabs,  
    initModals } from 'flowbite'
import '../HRIS-PTGR/assets/css/style.css'
import '../HRIS-PTGR/assets/css/main.css'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
    // initAccordions();
    // initCarousels();
    // initCollapses();
    // initDials();
    // initDismisses();
    // initDrawers();
    // initDropdowns();
    initModals();
    // initPopovers();
    // initTabs();
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
