<template>
    <div class="qdfxDiv">
      <ul class="qdfxDivUl">
        <li @click="changeTy('qdfx')" class="qdfxDivUlLi" ty="qdfx" v-bind:class="{active:activeTy == 'qdfx'}">全店分析</li>
        <li @click="changeTy('xxq')" class="qdfxDivUlLi" ty="xxq" v-bind:class="{active:activeTy == 'xxq'}">新鲜期</li>
        <li @click="changeTy('wdq')" class="qdfxDivUlLi" ty="wdq" v-bind:class="{active:activeTy == 'wdq'}">稳定期</li>
        <li @click="changeTy('wxq')" class="qdfxDivUlLi" ty="wxq" v-bind:class="{active:activeTy == 'wxq'}">危险期</li>
        <li @click="changeTy('smq')" class="qdfxDivUlLi" ty="smq" v-bind:class="{active:activeTy == 'smq'}">睡眠期</li>
        <li @click="changeTy('yls')" class="qdfxDivUlLi" ty="yls" v-bind:class="{active:activeTy == 'yls'}">已流失</li>
      </ul>

      <Nld></Nld>
      <Xfd></Xfd>
      <Hyfgl></Hyfgl>

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
    data(){
      return {
        activeTy:'qdfx'
      }

    },
    methods:{
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
