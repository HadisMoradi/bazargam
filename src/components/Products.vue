<template>
<!-- shelf 1   -->
  <div class="background">
    <div v-for="product in ProductsStore.products" :key="product.id">

     <router-link :to="{name :'details' , params:{id : product.id}}" 
     class="product" v-if="product.group === 'row-1'" >
        <img class="img" :src="product.src" alt="">
        <h3 style="color: black;">{{ product.title }}</h3>
        <h4>{{ product.weight }}</h4>
        <h4 style="color: rgb(35, 243, 80);">{{ product.price }}</h4>
      <button class="basket"> افزودن به سبد خرید</button>
     </router-link>

    </div>
  </div>
<!-- shelf 2 -->
<div class="background">
    <div v-for="product in ProductsStore.products" :key="product.id">

     <router-link :to="{name :'details' , params:{id:product.id}}" 
     class="product" v-if="product.group === 'row-2'" >
        <img class="img" :src="product.src" alt="">
        <h3>{{ product.title }}</h3>
        <h4>{{ product.weight }}</h4>
        <h4 style="color: rgb(35, 243, 80);">{{ product.price }}</h4>
      <button class="basket"> افزودن به سبد خرید</button>
     </router-link>

    </div>
  </div>



</template>

<script setup lang="ts">

import { productsStore } from "../../stores/product";
  const ProductsStore = productsStore();

</script>

<style scoped>
.background{
  display: flex;
  justify-content: center;
  margin: 20px 0px;
}
.product{
  border: 2px solid rgb(235, 235, 235);
  text-align: center;
  margin: 10px 20px;
  border-radius: 30px;
  text-decoration: none;

}
.basket{
  color: rgb(255, 255, 255);
  background-color: blue;
  width: 160px;
  height: 30px;
  border-radius: 8px;
  border: none;
}
.img{
  box-shadow: 0px 10px 10px 20px rgb(235, 235, 235);
  border-radius: 20px;
  width: 250px;
}
</style>