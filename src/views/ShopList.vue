<template>
 <div>
    <div v-bind:style="{height:boxHeight+'px'}" style="overflow-y:scroll;margin-bottom: 200px;">
      <div class="shopDiv">
        <ul class="shopUl">
          <li class="shop_item" shopid="000000"
              v-bind:class="{active:activeShop.shopid == '000000'}"
              v-on:click="selectShop({shopid:'000000',shopname:'全司'})">全司</li>
        </ul>
      </div>

      <div class="shopDiv" v-for="(temp,index) in allShop.shopList" v-bind:key="index">
        <label class="ytName">{{index}}</label>
        <ul class="shopUl">
          <li class="shop_item" v-for="(item ,index) in temp"
              v-bind:key="item.shopid"
              v-bind:shopid="item.shopid"
              v-bind:class="{active:activeShop.shopid == item.shopid}"
              v-on:click="selectShop(item)">{{item.shopname}}
          </li>
        </ul>
      </div>



    </div>
   <div class="selectShopButton"><span class="selectShopButton_span"
                                       v-on:click="sureSelectShop()"
   >确定</span></div>
 </div>
</template>

<script>

  export default {
    name: 'ShopList',
    data(){
      return {
        boxHeight:0,
        activeShop:{shopid:'000000',shopname:'全司'},
        allShop:{}
        //allShop:[{shopYt:'广场',shopList:[{shopId:'012813',shopName:'广场长沙'},{shopId:'012823',shopName:'广场长沙'},{shopId:'012833',shopName:'广场长沙'},{shopId:'012843',shopName:'广场长沙'},{shopId:'012853',shopName:'广场长沙'},{shopId:'012863',shopName:'广场长沙'}]}]
      }
    },
    mounted(){
      this.calBoxHeight();
      this.ajax_getShopList();
      let shopid = this.$store.state.activeShopId;
      let shopname = this.$store.state.activeShopName;
      this.activeShop = {shopid:shopid,shopname:shopname};
    },
    methods:{
      sureSelectShop(){
        var data = {activeShopId:this.activeShop.shopid,activeShopName:this.activeShop.shopname};
        this.$store.dispatch("change_activeShopId",data);
        let shopid = this.$store.state.activeShopId;
        let shopname = this.$store.state.activeShopName;
        this.activeShop = {shopid:shopid,shopname:shopname};
      },
      ajax_getShopList(){
        var formData = new FormData();
        //formData.append('empId', this.empId);
        let vm = this;
        this.$axios.post('/ajax_getShopList.action', formData).then(function (res) {
          let resultBck = res.data.rsData;
          vm.allShop = resultBck;
        }, function (res) {
          console.log('error');
        });
      },
      selectShop:function (item) {
        this.activeShop = item;
      },
      calBoxHeight(){
        const v_heigth = document.documentElement.clientHeight || document.body.clientHeight;
        const html = document.getElementById("html");
        const header_height = parseFloat(html.style.fontSize)*1.4;
        this.boxHeight = v_heigth - header_height;
      }
    }

  }
</script>

<style scoped>
  .selectShopButton {
    position: fixed;
    bottom: 0;
    height: 2rem;
    background-color: white;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    border-top: 1px solid #CCCCCC;
  }
  .selectShopButton_span {
    padding: 8px 1.4rem;
    border-radius: 5px;
    background-color: #4cd964;
    color: white;
    border: 1px solid #4cd964;
  }
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
