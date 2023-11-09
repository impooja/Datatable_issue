<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log(import.meta.env.MODE);
  console.log(import.meta.env.VITE_BACKEND_API);
});


</script>

<template>
  


  <div class="wrapper">
    
      <router-view></router-view>
   
  </div>
  
</template>
