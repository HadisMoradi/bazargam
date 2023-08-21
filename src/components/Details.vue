<template>

    <!-- <div class="back">
      <h1>{{ props.id }}</h1>
      <h1>{{ product }}</h1>
    </div> -->
  <div>
    <h1>{{ ProductsStore.object }}</h1>
  </div>
    
  </template>
  
  <!-- <script setup lang="ts">
 
  import { productsStore } from "../../stores/product";
  const ProductsStore = productsStore();
  const props = defineProps<{id: number}>();

  import { onMounted, ref } from "vue";
  onMounted(() => {
  console.log("samle")
   ProductsStore.readproductById(props.id)
      // product = res
   })
  // const product = ProductsStore.object.filter(item => item.id == props.id)[0]
  </script> -->

  <script setup lang="ts">
import { onMounted, ref } from "vue";
import { productsStore } from "../../stores/product";
const ProductsStore = productsStore();



const props = defineProps<{id: number}>();
onMounted(() => {
  console.log("samle")
   ProductsStore.readproductById(props.id)
 
   })
</script>