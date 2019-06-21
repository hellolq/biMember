<template>
    <div class="myHeaderDiv" id="myHeaderDiv">
      <div class="myHeaderDivOne myHeaderDivCom" @click="clickShopList">
        <span class="spanCom" style="font-size: .6rem;padding-left: .3rem;">▦</span>
        <span class="spanCom" >{{shopName}}</span>
        <span class="spanCom">ⅴ</span>
      </div>

      <div class="myHeaderDivTwo myHeaderDivCom">
        <ul>
          <li>
            <span class="liSpanCom">当前月份:</span>
            <span class="liSpanCom" style="text-align: center;flex:1.5;">{{yearMonth}}</span>
          </li>
          <li>
            <span class="liSpanCom">对比月份:</span>
            <span class="liSpanCom" style="text-align: center;flex:1.5;" >
            <b @click="setDate" id="dateCom">{{yearMonthCom}} ▼</b>
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
        shopName:'-',
        yearMonth:'-',
        yearMonthCom:'-'
      }
    },
    mounted(){
      this.shopName = this.$store.state.activeShopName;
      let time = new Date();
      let year = time.getFullYear();
      let month = (time.getMonth()+1);
      this.yearMonth = year+'-'+month;
      this.yearMonthCom = (year-1)+'-'+month;
    },
    watch:{
      '$store.state.activeShopId'(n,o){
        this.shopName = this.$store.state.activeShopName;
        this.$router.push('/zbld');
      }
    },
    methods:{
      clickShopList(){
        var pushPath = '';
        if(this.$route.path === '/zbld/shoplist'){
          this.$router.go(-1);
        }else{
          pushPath = '/zbld/shoplist';
        }
        this.$router.push(pushPath);
      },
      setDate(){
        this.$picker.show({
          type:'datePicker',
          onOk: (date) =>{
            this.yearMonthCom = date.substr(0,7);
          }
        });
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
  padding: 1px .3rem;
  border-radius: 3px;
}
</style>
