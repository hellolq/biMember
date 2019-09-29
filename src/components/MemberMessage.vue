<template>
    <div>
      <ul class="mm_ul">
        <!--♂-->
        <li class="mm_ul_name">
          <i v-if="man.sex == '0'" class="mm_ul_xb">♀</i>
          <i v-if="man.sex == '1'"  class="mm_ul_xb">♂</i>
          {{man.name}}</li>
        <li class="mm_ul_age">{{man.age}}岁</li>
        <li class="mm_ul_bri">
          <span class="mm_ul_tel_span">出生日期</span>
          <span>{{man.brithday}}</span>
        </li>
        <li class="mm_ul_tel">
          <span class="mm_ul_tel_span">手机</span>
          <!--<span>{{man.tel}}</span>-->
          <span><a :href="'tel:' + man.tel">{{man.tel}}</a></span>
        </li>
        <li class="mm_ul_time">
          <span class="mm_ul_tel_span">最后消费时间</span>
          <span>{{man.time}}</span>
        </li>
      </ul>

      <DetailTable
        :res="res"
      ></DetailTable>

    </div>
</template>

<script>
  import DetailTable from '../components/DetailTable'
  export default {
    name: 'MemberMessage',
    props:['man'],
    data(){
      return {
        res:[]
      }
    },
    components:{
      DetailTable
    },
    mounted(){
      this.ajax_getHyidDetalTable();
    },
    methods:{
      ajax_getHyidDetalTable(){
        var formData = new FormData();
        formData.append('hyid', this.man.hyid);
        let vm = this;
        this.$axios.post('/ajax_selectBhhyDetailTable.action', formData).then(res => {
          var resultBck = res.data.rsData;
          console.log(resultBck);
          vm.res = resultBck;
        }, function (res) {
          console.log('error');
        });
      }
    }
  }
</script>

<style scoped>
  .mm_ul_xb{
    display: flex;
    height: 20px;
    width: 20px;
    color: white;
    background-color: #666665;
    border-radius: 30px;
    font-size: 12px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    font-style: normal;
    margin-right: 5px;
  }
  .mm_ul>li > .mm_ul_tel_span:nth-child(1){
    color: #9B9B9B;
  }
.mm_ul{
  display: flex;
  flex: 1;
  background-color: #EEEEEE;
  padding: 5px;
}
.mm_ul_name,.mm_ul_age,
.mm_ul_bri,.mm_ul_time,.mm_ul_tel{
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
}
  .mm_ul_name{
    flex: 1.5;
  }
  .mm_ul_age{
    flex: 1;
  }
  .mm_ul_bri,.mm_ul_time,.mm_ul_tel{
    flex: 2;
    flex-direction: column;
  }
</style>
