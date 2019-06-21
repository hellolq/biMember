<!-- 消费段分布 -->
<template>
  <div>
    <header class="header_a">
      <i class="i_flag"></i>
      <span class="span_a">会员消费段分布</span>

      <span class="span_b" @click="toSevenMemberList()">
<!--
        <router-link to="/zbld/sevenMemberList">近7天消费金额最多<font style="color: red;">{{maxSale}}元</font><b class="b_b">▶</b></router-link>
-->
        近7天消费金额最多<font style="color: red;">{{maxSale}}元</font><b class="b_b">▶</b>
      </span>

    </header>
    <div id="myChartXfd"></div>
    <DetailTable
      :res="res"
    ></DetailTable>

  </div>
</template>

<script>
  import global_ from '../components/tools/Global'
  import DetailTable from '../components/DetailTable'
  export default {
    name: 'Xfd',
    props:['ty'],
    data(){
      return {
        res:[],
        tagList:[],
        manList:[],
        womanList:[],
        maxSale:0
      }
    },
    components:{
      DetailTable
    },
    watch:{
      ty(){
        this.getDetialTable();
        this.getXfdMap();
      }
    },
    mounted(){

      this.getDetialTable();
      this.getXfdMap();
      this.ajax_seventDayMaxSale();
    },
    methods:{
      toSevenMemberList(){
        this.$router.push({ path: '/zbld/sevenMemberList', query: { ty: this.ty }});
      },
      ajax_seventDayMaxSale(){
        var formData = new FormData();
        formData.append('ty', this.ty);
        formData.append('shopId',this.$store.state.activeShopId);
        let vm = this;
        this.$axios.post('/ajax_seventDayMaxSale.action', formData).then(function (res) {
          let resultBck = res.data.rsData;
          vm.maxSale = resultBck.xsje;
        }, function (res) {
          console.log('error');
        });
      },
      getXfdMap(){
        var formData = new FormData();
        formData.append('ty', this.ty);
        formData.append('shopId',this.$store.state.activeShopId);
        let vm = this;
        this.$axios.post('/ajax_getXfdMap.action', formData).then(function (res) {
          let resultBck = res.data.rsData;
          //vm.tagList = resultBck.tagList;
          let manList = [resultBck.man.one,resultBck.man.two,resultBck.man.thr,resultBck.man.four,resultBck.man.five,resultBck.man.six];
          let womanList = [resultBck.woman.one,resultBck.woman.two,resultBck.woman.thr,resultBck.woman.four,resultBck.woman.five,resultBck.woman.six];

          vm.manList = manList;
          vm.womanList = womanList;

          vm.drawEchart();
        }, function (res) {
          console.log('error');
        });
      },
      getDetialTable(){
        var formData = new FormData();
        formData.append('ty', this.ty);
        formData.append('shopId',this.$store.state.activeShopId);
        let vm = this;
        this.$axios.post('/ajax_getDetailTable.action', formData).then(function (res) {
          let resultBck = res.data.rsData;
          vm.res = resultBck;
        }, function (res) {
          console.log('error');
        });
      },
      drawEchart(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartXfd'))
        // 绘制图表
        myChart.setOption({
          title: {},
          grid: {
            top: 25,
            bottom: 60,
            right:30,
            tooltip: {
              trigger: 'axis',
              axisPointer: {}
            }
          },
          tooltip: {},
          xAxis: {
            'axisLabel':{'interval':0,rotate:-40},
            data: ["0-199元","200-499元","500-799元","800-1000元","1000-4999元","5000元以上"]
            //data:this.tagList
          },
          yAxis: [
            {
              type: 'value',
              name: '人'
            }
          ],
          series: [{
            name: '男',
            type: 'bar',
            barWidth : 18,
            itemStyle:{
              normal:{
                color:global_.member_level_color.man
              }
            },
            //data: [5, 20, 36, 10, 10, 20]
            data:this.manList
          },{
            name: '女',
            type: 'bar',
            barWidth : 18,
            itemStyle:{
              normal:{
                color:global_.member_level_color.woman
              }
            },
            //data: [5, 20, 36, 10, 10, 20]
            data:this.womanList
          }]
        });
      }
    }
  }
</script>

<style scoped>
  .router-link-active,a {
    text-decoration: none;
    color: #6F6F6F;
  }
  .b_b{
    font-size: 12px;
  }
  .i_flag {
    height: .6rem;
    width: 5px;
    background-color: #00A0E8;
    border-radius: 10px;
    margin: auto 0;
  }
  .span_b{
    font-size: 12px;
    font-weight: normal;
    right: 5px;
    position: absolute;
  }
  .span_a{
    margin-left: 10px;
  }
  .header_a{
    display: flex;
    line-height: .8rem;
    font-size: 16px;
    padding: .3rem;
    font-weight: bold;
    position: relative;
  }
  #myChartXfd{
    height: 300px;
  }
</style>
