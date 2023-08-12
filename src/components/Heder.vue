<template>

  <div class="background">

    <div class="right-side">

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

    </div>

    <div style="margin-right: 30px ">
      <router-link to="/call" class="a"> تماس با ما 021-2418 </router-link>
    </div>
    <div style="margin: 0px 30px;height: 100px"><router-link to="/news" class="a">اخبار</router-link></div>
    <div style="margin: 0px 30px"><router-link to="/blog" class="a"> بلاگ</router-link></div>
    <div style="margin: 0px 30px">
      <router-link to="/link" class="a"> دریافت لینک اپلیکیشن</router-link>
    </div>
    <div style="margin: 0px 30px">
      <router-link to="/buy" class="a"> درخواست خرید اقساطی</router-link>
    </div>
    <div style="margin: 0px 30px">
      <router-link to="/login" class="a"> ورودبه حساب کاربری </router-link>
    </div>
    <div class="dropdown">
      <button class="dropbtn">راهنما و خدمات</button>
      <div class="dropdown-content">
        <router-link to="/new">فهرست تولید کننده</router-link>
        <router-link to="/new">اخرین محصولات مشاهده شده</router-link>
        <router-link to="/new">زرگام چیست؟</router-link>
        <router-link to="/new">پرسش وپاسخ های متداول</router-link>
        <router-link to="/new">حریم خصوصی مقررات</router-link>
      </div>
    </div>

    <div class="x" style="position: relative; top: 50px; left: 550px">
      <img src="../../public/bazargam.png" alt="" class="aks" />
      <input class="search" placeholder="جستجو در فروشگاه" type="text" />
    </div>
<div class="all-product"><router-link to="/news" class="a">کل محصولات</router-link></div>
    <div class="all-product"><router-link to="/news" class="a">تخفیفات ویژه</router-link></div>
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

      <div class="dropdown">
      <button class="dropbtn">کالای دیجیتال</button>
      <div class="dropdown-content">
        <router-link to="/new">تلفن</router-link>
        <router-link to="/new">lموبایل</router-link>
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
      <div class="dropdown-content">
        <router-link to="/new">نان</router-link>
        </div>
        </div>

    <div class="dropdown">
      <button class="dropbtn">محصولات تنظیم بازار</button>
      <div class="dropdown-content">
        <router-link to="/new">اقلام تنظیم بازار</router-link>
     
     </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style>
.background {
  display: inline-flex;
  direction: rtl;
  /* background-image: url('../../public/backg.jpg'); */
  /* background-color: rgb(rgb(198, 55, 55), rgb(68, 196, 68), rgb(85, 85, 217)); */
  background-color: rgb(250, 224, 224);
  /* background-repeat: no-repeat; */
  background-size: 100%;
  padding: 30px;
  /* width: max-content; */
  height: 200px;
}
.right-side {
    align-items: center;
    /* display: flex; */
}
.a {
  /* background-color: rgb(215, 189, 239); */
  /* padding: 50px; */
  /* text-decoration: none; */
  /* border-radius:20px ; */

  /* align-items: center;
  align-content: center; */
  color: black;
  text-decoration: none;
  /* margin: 10px 20px 10px 20px; */
  height: fit-content;
  /* font-size: 10%; */
}

.a:hover {
  color: red;
  transition: 0.16s;
}
/* Dropdown Button */
.dropbtn {
  background-color: #b88bbe;
  color: rgb(10, 2, 2);
  padding: 5px;
  font-size: 17px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative; 
  display: inline-block;
  height: fit-content;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #4aede2;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
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
.aks {
  height: 130px;
  width: 200px;
  /* margin: 50px; */
}
.search {
  display: flex;
  width: 400px;
  height: 30px;
  margin: 100px 20px;
}
.x {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.all-product {
  position: relative;
  top: 70%;
  margin-left: 10px;

}
</style>