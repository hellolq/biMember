<template>
    <div class="qdfxDiv">
      <ul class="qdfxDivUl">
        <!--<li @click="changeTy('qdfx')" class="qdfxDivUlLi" ty="qdfx" v-bind:class="{active:activeTy == 'qdfx'}">全店分析</li>-->
        <li @click="changeTy('00')" class="qdfxDivUlLi" ty="00" v-bind:class="{active:activeTy == '00'}">全店分析</li>
        <li @click="changeTy('1')" class="qdfxDivUlLi" ty="1" v-bind:class="{active:activeTy == '1'}">新鲜期</li>
        <li @click="changeTy('2')" class="qdfxDivUlLi" ty="2" v-bind:class="{active:activeTy == '2'}">稳定期</li>
        <li @click="changeTy('3')" class="qdfxDivUlLi" ty="3" v-bind:class="{active:activeTy == '3'}">危险期</li>
        <li @click="changeTy('4')" class="qdfxDivUlLi" ty="4" v-bind:class="{active:activeTy == '4'}">睡眠期</li>
        <li @click="changeTy('0')" class="qdfxDivUlLi" ty="0" v-bind:class="{active:activeTy == '0'}">已流失</li>
      </ul>

      <div class="selectListDiv">
        <ul class="selectList">
          <li @click="clickMan" :class="{'active':man}">男</li>
          <li @click="clickWoman" :class="{'active':woman}">女</li>
          <li @click="clicknld18" :class="{'active':nld18}">18岁以下</li>
          <li @click="clicknld24" :class="{'active':nld24}">18-24岁</li>
          <li @click="clicknld34" :class="{'active':nld34}">25-34岁</li>
          <li @click="clicknld44" :class="{'active':nld44}">35-44岁</li>
          <li @click="clicknld55" :class="{'active':nld55}">45-55岁</li>
          <li @click="clicknldMax" :class="{'active':nldMax}">55岁以上</li>
        </ul>
      </div>

      <Nld :ty="activeTy" :sex="sex" :nld="nld"></Nld>
      <Xfd :ty="activeTy" :sex="sex" :nld="nld"></Xfd>
      <!--<Hyfgl :res="fglData" :message="message"></Hyfgl>-->
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
    watch:{
      '$store.state.dl'(){
        //this.getFglData();
      }
    },
    mounted(){
      //this.getFglData();
    },
    data(){
      return {
        activeTy:'00',
        fglData:[],
        man:false,
        woman:false,
        nld18:false,
        nld24:false,
        nld34:false,
        nld44:false,
        nld55:false,
        nldMax:false,
        //nld:'',
        //sex:'',
        message:''
      }

    },
    computed: {
      nld: function () {
        let temp = '';
        if(this.nld18){
          temp = temp+','  + 7;
        }
        if(this.nld24){
          temp = temp + ','  + 8;
        }
        if(this.nld34){
          temp = temp +','  + 9;
        }
        if(this.nld44){
          temp = temp+','  + 10;
        }
        if(this.nld55){
          temp = temp+',' + 11;
        }
        if(this.nldMax){
          temp = temp+','  + 12;
        }
        return temp;
      },
      sex: function () {
        let temp = '';
        if(this.man){
          temp = temp+','  + 5;
        }
        if(this.woman){
          temp = temp+',' + 6;
        }
        return temp;
      }
      },
    methods:{
      clickMan(){
        this.man = !this.man;
      },
      clickWoman(){
        this.woman = !this.woman;
      },
      clicknld18(){
        this.nld18 = !this.nld18;
      },
      clicknld24(){
        this.nld24 = !this.nld24;
      },
      clicknld34(){
        this.nld34 = !this.nld34;
      },
      clicknld44(){
        this.nld44 = !this.nld44;
      },
      clicknld55(){
        this.nld55 = !this.nld55;
      },
      clicknldMax(){
        this.nldMax = !this.nldMax;
      },
      getFglData(){
        var formData = new FormData();
        formData.append('shopId',this.$store.state.activeShopId);
        formData.append('dl',this.$store.state.dl);
        let vm = this;
        this.$axios.post('/ajax_getBhhyFgl.action', formData).then(res => {
          var resultBck = res.data.rsData;
          let resList = JSON.parse(resultBck[0].value);
          vm.fglData = resList;
          //vm.message = this.getMessage(resultBck[0]);
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
.selectListDiv{
  width: 100%;
  overflow-y: hidden;
}
.selectList{
  display: flex;
  padding: .2rem;
  width: 20rem;
  height: 1rem;
  align-items: center;
}
.selectList > li{
  display: flex;
  border: 1px solid #EDEDED;
  padding: .1rem .3rem;
  border-radius: 10px;
  margin-left: .3rem;
  color: #B6B6B6;
  height: 1rem;
  height: .3rem;
  justify-content: center;
  align-items: center;
}

.selectList > li.active{
  background: #00A0E8;
  color: white;
}

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
