<template>
    <div class="qdfxDiv">
      <ul class="qdfxDivUl">
        <!--<li @click="changeTy('qdfx')" class="qdfxDivUlLi" ty="qdfx" v-bind:class="{active:activeTy == 'qdfx'}">全店分析</li>-->
        <li @click="changeTy('1')" class="qdfxDivUlLi" ty="1" v-bind:class="{active:activeTy == '1'}">新鲜期</li>
        <li @click="changeTy('2')" class="qdfxDivUlLi" ty="2" v-bind:class="{active:activeTy == '2'}">稳定期</li>
        <li @click="changeTy('3')" class="qdfxDivUlLi" ty="3" v-bind:class="{active:activeTy == '3'}">危险期</li>
        <li @click="changeTy('4')" class="qdfxDivUlLi" ty="4" v-bind:class="{active:activeTy == '4'}">睡眠期</li>
        <li @click="changeTy('0')" class="qdfxDivUlLi" ty="0" v-bind:class="{active:activeTy == '0'}">已流失</li>
      </ul>

      <Nld :ty="activeTy"></Nld>
      <Xfd :ty="activeTy"></Xfd>
      <Hyfgl :res="fglData" :message="message"></Hyfgl>

    </div>
</template>

<script>
  import Nld from '../components/Nld'
  import Xfd from '../components/Xfd'
  import Hyfgl from  '../components/Hyfgl'
  export default {
    name: 'QdFx',
    components:{
      Nld,Xfd,Hyfgl
    },
    mounted(){
      this.getFglData();
    },
    data(){
      return {
        activeTy:'1',
        fglData:[],
        message:''
      }

    },
    methods:{
      getFglData(){
        var formData = new FormData();
        formData.append('rq', '20190101');
        let vm = this;
        this.$axios.post('/ajax_getFglMap.action', formData).then(res => {
          var resultBck = res.data.rsData;
          vm.fglData = resultBck;
          vm.message = this.getMessage(resultBck[0]);
        }, function (res) {
          console.log('error');
        });
      },
      getMessage(item){
        let preMonth = new Date().getMonth();
        if(preMonth == 0){
          preMonth = 1;
        }
        let thisMonth = preMonth + 1;

        let result = "";
        if(item.age > item.srhyrs){
          result = thisMonth+'月对比'+preMonth+'月复购人数占比有所上升'
        }else{
          result = thisMonth+'月对比'+preMonth+'月复购人数占比有所下滑'
        }
        return result;
      },
      changeTy(ty){
        this.activeTy = ty;
      }
    }
  }
</script>

<style scoped>
.qdfxDivUl{
  display: flex;
  background-color: #EDEDED;
}
  .qdfxDivUlLi{
    flex: 1;
    display: flex;
    line-height: 1rem;
    justify-content: center;
    color: #B6B6B6;
  }
  .active{
    border-bottom: 3px solid #00A0E8;
    font-size: 14px;
    color: black;
  }
</style>
