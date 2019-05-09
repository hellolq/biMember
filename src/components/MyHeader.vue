<template>
    <div class="myHeaderDiv">
      <div class="myHeaderDivOne myHeaderDivCom" @click="clickShopList">
        <span class="spanCom" style="font-size: .6rem;padding-left: .3rem;">▦</span>
        <span class="spanCom" >{{shopName}}</span>
        <span class="spanCom">ⅴ</span>
      </div>

      <div class="myHeaderDivTwo myHeaderDivCom">
        <ul>
          <li>
            <span class="liSpanCom">当前月份:</span>
            <span class="liSpanCom" style="text-align: center">{{yearMonth}}</span>
          </li>
          <li>
            <span class="liSpanCom">对比月份:</span>
            <span class="liSpanCom" style="text-align: center" >
              <b id="dateCom">{{yearMonthCom}}</b>
            </span>
          </li>
        </ul>
      </div>

    </div>
</template>

<script>
  export default {
    name: 'MyHeader',
    data(){
      return {
        shopName:'广场长沙',
        yearMonth:'2019-04',
        yearMonthCom:'2018-04'
      }
    },
    methods:{
      clickShopList(){
        var pushPath = '';
        if(this.$route.path === '/zbld/shoplist'){
          pushPath = '/zbld';
        }else{
          pushPath = '/zbld/shoplist';
        }
        this.$router.push(pushPath);
      }
    }
  }
</script>

<style scoped>
  ul,li,span{
    margin: 0px;
    padding: 0px;
  }
  .liSpanCom{
    flex: 1;
    margin: auto;
  }
  ul{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: .2rem;
    text-align: right;
  }
  li{
    display: flex;
    flex: 1;
  }
 .myHeaderDiv {
   display: flex;
  height: 1.4rem;
  width: 100%;
  background-color: #00A0E8;
}
 .myHeaderDivCom{
   display: flex;
   flex: 1;
   color: white;
   font-size: .28rem;
 }
 .spanCom{
   margin-right: .1rem;
   margin: auto 0;
   margin-right: .12rem;
 }
#dateCom{
  border: 1px solid #ffffff;
  padding: 1px .4rem;
  border-radius: 3px;
}
</style>
