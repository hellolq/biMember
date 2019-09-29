<!-- 年龄段分布 -->
<template>
  <div>
    <header class="header_a">
      <i class="i_flag"></i>
      <span class="span_a">会员复购率</span>
      <span class="span_b">
         <span class="liSpanCom" style="text-align: center;flex:1.5;" >
            <b @click="setDate" id="dateCom">{{yearMonthCom}} ▼</b>
         </span>
        </span>
    </header>

    <ul class="hyfgl_ul">
      <li class="hyfgl_ul_li_tittle">
        <span class="hyfgl_ul_li_span">月购次数</span>
        <span class="hyfgl_ul_li_span">人数</span>
        <span class="hyfgl_ul_li_span">占当月购买人数</span>
        <span class="hyfgl_ul_li_span">上月占比</span>
      </li>
      <li class="hyfgl_ul_li" v-for="(temp,inex) in resList" v-bind:key="temp.name">
        <span class="hyfgl_ul_li_span">{{temp.name}}</span>
        <span class="hyfgl_ul_li_span">{{temp.hyrs}}</span>
        <span class="hyfgl_ul_li_span">{{temp.zb}}</span>
        <span class="hyfgl_ul_li_span">{{temp.szb}}</span>
      </li>

    </ul>

  </div>
</template>

<script>
  export default {
    name: 'Hyfgl',
    data(){
      return {
        yearMonthCom:'-',
        resList:[]
      }
    },
    mounted(){
      let time = new Date();
      let year = time.getFullYear();
      let month = (time.getMonth()+1);
      if(month < 10){
        month = '0'+month;
      }
      this.yearMonthCom = (year-1)+'-'+month;

      this.getFglData();
    },
    watch:{
      yearMonthCom(){
        this.getFglData();
      },
      '$store.state.dl'(){
        this.getFglData();
      }/*,
      '$store.state.activeShopId'(){
        this.getFglData();
      }*/
    },
    methods:{
      getFglData(){
        var formData = new FormData();
        formData.append('shopId',this.$store.state.activeShopId);
        formData.append('dl',this.$store.state.dl);
        formData.append('month',this.yearMonthCom.replace("-",""));
        let vm = this;
        let resList = [{ "hyrs": 0, "name": "1", "szb": "0", "zb": "0", "zrs": 0 },{ "hyrs": 0, "name": "2", "szb": "0", "zb": "0", "zrs": 0 },{ "hyrs": 0, "name": "3", "szb": "0", "zb": "0", "zrs": 0 },{ "hyrs": 0, "name": "4", "szb": "0", "zb": "0", "zrs": 0 }];
        vm.resList = resList;
        this.$axios.post('/ajax_selectFgl.action', formData).then(res => {
          resList = res.data.rsData;
          if(resList != null){
            vm.resList = resList;
          }

        }, function (res) {
          console.log('error');
        });
      },
      setDate(){
        this.$picker.show({
          type:'datePicker',
          onOk: (date) =>{
            this.yearMonthCom = date.substr(0,7);
          }
        });
      }
    },
    props:['res','message']

  }
</script>

<style scoped>
  .hyfgl_ul_li_tittle{
    background-color: #159DEB;
    line-height: .8rem;
    color: white;
    display: flex;
    flex: 1;
  }
  .hyfgl_ul{
    display: flex;
    flex-direction: column;
    padding: 5px;

  }
  .hyfgl_ul_li:nth-child(odd){
    background-color: #EDF8FE;
  }
  .hyfgl_ul_li:nth-last-child(1){
    border-bottom: 1px solid #EFEFEF;
  }
  .hyfgl_ul_li{
    display: flex;
    flex: 1;
    border-left: 1px solid #EFEFEF;
    border-right: 1px solid #EFEFEF;
    line-height: 1.2rem;
  }
  .hyfgl_ul_li_span{
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: center;
  }
  .i_flag {
    height: .6rem;
    width: 5px;
    background-color: #00A0E8;
    border-radius: 10px;
    margin: auto 0;
  }
  .span_a{
    margin-left: 10px;
  }
  .span_b{
    font-size: 12px;
    font-weight: normal;
    right: 5px;
    position: absolute;
    color: #6F6F6F;
  }
  .header_a{
    display: flex;
    line-height: .8rem;
    font-size: 16px;
    padding: .3rem;
    font-weight: bold;
    position: relative;
  }
  .liSpanCom{
    flex: 1;
    margin: auto;
    border: 1px solid #00A0E8;
    padding: 1px .3rem;
    border-radius: 3px;
    color: #00A0E8;
    font-weight: bold;
    padding: 6px 12px;
  }
</style>
