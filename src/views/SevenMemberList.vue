<!-- 年龄段分布 -->
<template>
  <div v-bind:style="{height:boxHeight+'px'}" style="overflow-y:scroll">
    <header class="header_a">
      <i class="i_flag"></i>
      <span class="span_a">近7日生日会员</span>
      <span class="span_b">共 {{count}} 人</span>
    </header>
    <MemberMessage v-for="(temp,index) in manList" v-bind:key="temp.hyid"
    :man="temp"></MemberMessage>
    <div class="get-more-div">
      <span class="get-more" @click="getMore()">点击加载更多</span>
    </div>
  </div>
</template>

<script>
  import MemberMessage from '../components/MemberMessage'
  export default {
    name: 'SevenMemberList',
    data(){
      return{
        boxHeight:0,
        num:0,
        count:0,
        ty:'',
        sex:'',
        nld:'',
        manList:[]
      }
    },
    watch:{
      '$store.state.activeShopId'(n,o){
        this.getSevenData();
        this.getSevenCount();
      }
    },
    mounted(){
      this.ty = this.$route.query.ty;
      this.sex = this.$route.query.sex;
      this.nld = this.$route.query.nld;
      this.calBoxHeight();
      this.getSevenData();
      this.getSevenCount();
    },
    methods:{
      getMore(){
        let num = this.num;
        this.num = num + 5;
        this.getSevenData();
      },
      getSevenCount(){
        var formData = new FormData();
        //formData.append('rq', '20190101');
        formData.append('shopId', this.$store.state.activeShopId);
        formData.append('smzq', this.ty);
        formData.append('dl',this.$store.state.dl);
        formData.append('sex',this.sex.substr(1));
        formData.append('nld',this.nld.substr(1));
        let vm = this;
        this.$axios.post('/ajax_getSevenManCount.action', formData).then(res => {
          let resultBck = res.data.rsData;
          vm.count = resultBck;
        }, function (res) {
          console.log('error');
        });
      },
      getSevenData(){
        var formData = new FormData();
        formData.append('shopId', this.$store.state.activeShopId);
        formData.append('num', this.num);
        formData.append('smzq', this.ty);
        formData.append('dl',this.$store.state.dl);
        formData.append('sex',this.sex.substr(1));
        formData.append('nld',this.nld.substr(1));
        let vm = this;
        this.$axios.post('/ajax_getSevenBriMap.action', formData).then(res => {
          var resultBck = res.data.rsData;
          let now = vm.manList;
          vm.manList = now.concat(resultBck);
        }, function (res) {
          console.log('error');
        });
      },
      calBoxHeight(){
        const v_heigth = document.documentElement.clientHeight || document.body.clientHeight;
        const html = document.getElementById("html");
        const header_height = parseFloat(html.style.fontSize)*1.4;
        this.boxHeight = v_heigth - header_height;
      }
    },
    components:{
      MemberMessage
    }
  }
</script>

<style scoped>
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
    right: 10px;
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
  .get-more-div {
    text-align: center;
    padding: 8px;
  }
  .get-more{
    text-align: center;
  }
</style>
