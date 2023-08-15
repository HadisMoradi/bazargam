<script setup lang="ts">

import Products from '../components/Products.vue'
import Call from '../components/Call.vue'

</script>

<template>
  <main> 
     <div class="image-back">

      <img  src="../../public/noroz.png" alt="">
      <img src="../../public/ghest.png" alt="">
    
    </div> 
  </main>
   
  <Products/>
</template>

<style>
.image-back{
  padding: 10px 170px;
  border-radius: 10px;
  margin: 10px;
}
</style>