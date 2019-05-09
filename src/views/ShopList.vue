<template>
    <div>
      <div class="shopDiv">
        <ul class="shopUl">
          <li class="shop_item" shopid="000000"
              v-bind:class="{active:activeShopId == '000000'}"
              v-on:click="selectShop({shopId:'000000',shopName:'全司'})">全司</li>
        </ul>
      </div>

      <div class="shopDiv" v-for="(temp,index) in allShop" v-bind:key="temp.shopYt">
        <label class="ytName">{{temp.shopYt}}</label>
        <ul class="shopUl">
          <li class="shop_item" v-for="(item ,index) in temp.shopList"
              v-bind:key="item.shopId"
              v-bind:shopid="item.shopId"
              v-bind:class="{active:activeShopId == item.shopId}"
              v-on:click="selectShop(item)">{{item.shopName}}
          </li>
        </ul>
      </div>

    </div>
</template>

<script>

  export default {
    name: 'ShopList',
    data(){
      return {
        activeShopId:'000000',
        allShop:[{shopYt:'广场',shopList:[{shopId:'012813',shopName:'广场长沙'},{shopId:'012823',shopName:'广场长沙'},{shopId:'012833',shopName:'广场长沙'},{shopId:'012843',shopName:'广场长沙'},{shopId:'012853',shopName:'广场长沙'},{shopId:'012863',shopName:'广场长沙'}]}]
      }
    },
    methods:{
      selectShop:function (item) {
        this.activeShopId = item.shopId;
      }
    }

  }
</script>

<style scoped>
 .active{
   color: white;
   background-color: #00A0E8 !important;
 }
 .shopUl{
   padding: .3rem;
   border-bottom: 1px solid #ccc;
 }
 .ytName{
   line-height:.6rem;
 }
 .shopDiv{
   display: flex;
   padding: .3rem;
   flex-direction: column;
 }
 .shop_item{
   display: flex;
   float: left;
   margin: 3px;
   font-size: 12px;
   padding: 4px 8px;
   border-radius: 3px;
   background-color: white;
   border: 1px solid #CCCCCC;
   align-items: center;
   justify-content: center;
 }
</style>
