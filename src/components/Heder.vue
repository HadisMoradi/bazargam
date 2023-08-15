<template>
  <div class="background">
    <!--header 1-->
    <select>
      <option value="">تهران</option>
      <option value="">یزد</option>
      <option value="">اصفهان</option>
      <option value="">شیراز</option>
      <option value="">تبریز</option>
      <option value="">کرمان</option>
      <option value="">مشهد</option>
      <option value="">گیلان</option>
      <option value="">رشت</option>
      <option value="">اردبیل</option>
      <option value="">قم</option>
      <option value="">همدان</option>
      <option value="">سیستان</option>
      <option value="">طبس</option>
    </select>
    
    <router-link to="/call" class="heder-base"> تماس با ما 021-2418 </router-link>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>

    <div class="row-1">
      <div><router-link to="/news" class="heder-base">اخبار</router-link></div>
      <div><router-link to="/blog" class="heder-base"> بلاگ</router-link></div>
      <div><router-link to="/link" class="heder-base"> دریافت لینک اپلیکیشن</router-link></div>
      <div><router-link to="/buy" class="heder-base"> درخواست خرید اقساطی</router-link></div>
      <div class="dropdown"><button class="dropbtn">راهنما و خدمات</button>
        <div class="dropdown-content">
          <router-link to="/fehrest">فهرست تولید کننده</router-link>
          <router-link to="/mahsol">اخرین محصولات مشاهده شده</router-link>
          <router-link to="/zargam">زرگام چیست؟</router-link>
          <router-link to="/porsesh">پرسش وپاسخ های متداول</router-link>
          <router-link to="/harim">حریم خصوصی مقررات</router-link>
        </div>
      </div>

    <div style="margin: 0px 30px"><router-link to="/login" class="heder-base"> ورودبه حساب کاربری </router-link></div>

    </div>
    <!-- heder 2 -->
    <div class="search">
      <img class="bi" style="width: 256px;" src="../../public/bazargam.jpg" alt="">
      <input style="height: 32px; width: 256px;" type="search" name="" id="" placeholder="جستوجو در فروشگاه" v-model="textSearch" @keyup="search(textSearch)">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart-dash-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/></svg></div>
    <!-- heder 3 -->
    <div class="all-product">
      
      <div><router-link to="/news" class="heder-base">کل محصولات</router-link></div>
      <div ><router-link to="/news" class="heder-base">تخفیفات ویژه</router-link></div>

      <div class="dropdown"><button class="dropbtn">کالای دیجیتال</button>
        <div class="dropdown-content">
          <router-link to="/new">تلفن</router-link>
          <router-link to="/new">موبایل</router-link>
          <router-link to="/new">هدفون</router-link>
          <router-link to="/new">ساعت هوشمند</router-link>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">اقلام غیر خوراکی</button>
        <div class="dropdown-content">
          <router-link to="/new">لوازم تحریر</router-link>
          <router-link to="/new">آرایشی وبهداشتی</router-link>
          <router-link to="/new">خانه و آشپزخانه</router-link>
          <router-link to="/new">شوینده</router-link>
        </div>
      </div>
    
      <div class="dropdown">
        <button class="dropbtn">نان</button>
        <div class="dropdown-content"><router-link to="/new">نان</router-link></div>
      </div>
      
      <div class="dropdown">
        <button class="dropbtn">محصولات تنظیم بازار</button>
        <div class="dropdown-content"><router-link to="/new">اقلام تنظیم بازار</router-link></div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">اقلام خوراکی</button>
        <div class="dropdown-content">
          <router-link to="/new">پروتئین</router-link>
          <router-link to="/new">نوشیدنی</router-link> 
          <router-link to="/new">لبنیات</router-link>
          <router-link to="/new">تنقلات</router-link>
          <router-link to="/new">خواربار</router-link>
          <router-link to="/new">کنسرو  و غذای آماده</router-link>
          <router-link to="/new">چاشنی و ادویه</router-link>
          <router-link to="/new">چای و دمنوش</router-link>
          <router-link to="/new">دسر شکلات و شیرینی جات </router-link>
        </div>
      </div>
    </div>
  </div>

  <div v-for="x in searchProduct" :key="x.id">
    <img style="width: 70px; height: 70px;" :src="x.src" alt="" >
    <h3 v-if="textSearch">{{ x.title }}</h3>
    <h4 v-if="textSearch">{{ x.weight }}</h4>
    <h5 v-if="textSearch">{{ x.price }}</h5>
  </div>

</template>

<script setup lang="ts">

import { type Ref, ref } from "vue";
import { productsStore } from "../../stores/product";
const ProductsStore = productsStore();
let textSearch = ref('');

let searchProduct: Ref<{
    id: number;
    title: string;
    weight: string;
    src: string;
    price: string;
}[]>

function search(text : string)  {searchProduct =  ProductsStore.products.filter( (p:any) => p.title.includes(text) );}

</script>

<style scoped>

*{direction: rtl;}
.background{
  background-color: rgb(243, 225, 254);
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 25px;
  border-radius: 20;
}
.heder-base{
  color: black;
  text-decoration: none;
  margin: 10px 20px 10px 20px;
  height: fit-content;
}
.heder-base:hover {
  color: red;
  transition: 0.10s;
}
/* Dropdown Button */
.dropbtn {
  background-color:  rgb(233, 222, 240);
  color: rgb(10, 2, 2);
  padding: 5px;
  font-size: 15px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  /* position: relative; */
  /* display: inline-block; */
  height: fit-content;
  width: fit-content;
  margin: 0px 10px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 130px;
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
  /* z-index: 70; */
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.search{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 30px;

}
.row-1{
  display: flex;
  justify-content: center;
}


/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #efe6ec;
}
.bi {
  margin: 90px;
}

.x {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.all-product {
  display: flex;
  justify-content: center;
}
</style>