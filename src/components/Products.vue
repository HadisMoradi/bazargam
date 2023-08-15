<template>
<!-- shelf 1   -->
  <div class="background">
    <div v-for="product in ProductsStore.products" :key="product.id">

      <div class="product" v-if="product.grooh === 'ggg'">
        <img class="img" :src="product.src" alt="">
        <h3>{{ product.title }}</h3>
        <h4>{{ product.weight }}</h4>
        <h4 style="color: rgb(35, 243, 80);">{{ product.price }}</h4>
      <button class="basket"> افزودن به سبد خرید</button>
      </div>

    </div>
  </div>
<!-- shelf 2 -->
<div class="background">
    <div   v-for="product in ProductsStore.products" :key="product.id">

      <div class="product" v-if="product.grooh === 'bbb'">
        <img class="img" :src="product.src" alt="">
        <h3>{{ product.title }}</h3>
        <h4>{{ product.weight }}</h4>
        <h4 style="color: rgb(35, 243, 80);">{{ product.price }}</h4>
      <button class="basket"> افزودن به سبد خرید</button>
      </div>

    </div>
</div>
</template>

<script setup lang="ts">

  import { METHODS } from "http";
import { productsStore } from "../../stores/product";
  const ProductsStore = productsStore();

      
</script>


<style scoped>
.background{
  display: flex;
  justify-content: center;
}
.product{
  border: 2px solid rgb(235, 235, 235);
  text-align: center;
  margin: 10px 20px;
  border-radius: 30px;
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