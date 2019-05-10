<!-- 消费段分布 -->
<template>
  <div>
    <header class="header_a">
      <i class="i_flag"></i>
      <span class="span_a">会员消费段分布</span>
      <span class="span_b"><router-link to="/zbld/sevenMemberList">近7天消费金额最多<font style="color: red;">5247元</font><b class="b_b">▶</b></router-link></span>
    </header>
    <div id="myChartXfd"></div>
    <DetailTable></DetailTable>

  </div>
</template>

<script>
  import global_ from '../components/tools/Global'
  import DetailTable from '../components/DetailTable'
  export default {
    name: 'Xfd',
    components:{
      DetailTable
    },
    mounted(){
      this.drawEchart();
    },
    methods:{
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
            data: [5, 20, 36, 10, 10, 20]
          },{
          name: '女',
            type: 'bar',
            barWidth : 18,
            itemStyle:{
            normal:{
              color:global_.member_level_color.woman
            }
          },
          data: [5, 20, 36, 10, 10, 20]
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
