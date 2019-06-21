<template>
    <div style="padding: 5px;">

      <div style="position: relative;">
        <canvas id="canvas"></canvas>
        <ul class="canvas_note">
          <li>会员人数</li>
          <li style="font-size: 18px;">{{item.hyrs}}</li>
          <li>数字会员占比:--%</li>
          <li>数字会员人数:--人</li>
        </ul>
      </div>

      <ul class="memberDescUl">
        <li class="memberDescUlLi">
          <span>平均客单价</span>
          <span>{{item.pjkdj}}元</span>
        </li>
        <li class="memberDescUlLi">
          <span>花费占比</span>
          <span>{{item.hfzb}}</span>
        </li>
        <li class="memberDescUlLi">
          <span>购物频次</span>
          <span>{{item.pc}}次</span>
        </li>
        <li class="memberDescUlLi">
          <span>新增会员</span>
          <span>{{item.xzhyrs}}人</span>
        </li>
        <li class="memberDescUlLi" style="flex: 1.6">
          <span>近7日生日会员</span>
          <span>{{item.srhyrs}}人</span>
        </li>
      </ul>

      <ul class="memberDescUlTwo">
        <li class="memberDescUlTwoLi">
          <span class="memberDescUlTwoLiSpan header first" style="background-color: #159DEB;">项目</span>
          <span class="memberDescUlTwoLiSpan header" style="background-color: #6CC751;">新鲜期</span>
          <span class="memberDescUlTwoLiSpan header" style="background-color: #1CC7D0;">稳定期</span>
          <span class="memberDescUlTwoLiSpan header" style="background-color: #FFC845;">危险期</span>
          <span class="memberDescUlTwoLiSpan header" style="background-color: #F48924;">睡眠期</span>
          <span class="memberDescUlTwoLiSpan header last" style="background-color: #F85A40;">已流失</span>
        </li>

        <li class="memberDescUlTwoLi" style="background-color: #EDF8FE;">
          <span class="memberDescUlTwoLiSpan  first" >会员人数</span>
          <span class="memberDescUlTwoLiSpan " >{{item1.hyrs}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item2.hyrs}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item3.hyrs}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item4.hyrs}}</span>
          <span class="memberDescUlTwoLiSpan last" >{{item0.hyrs}}</span>
        </li>

        <li class="memberDescUlTwoLi" >
          <span class="memberDescUlTwoLiSpan  first" >数字会员人数</span>
          <span class="memberDescUlTwoLiSpan " >-</span>
          <span class="memberDescUlTwoLiSpan " >-</span>
          <span class="memberDescUlTwoLiSpan " >-</span>
          <span class="memberDescUlTwoLiSpan " >-</span>
          <span class="memberDescUlTwoLiSpan last" >-</span>
        </li>

        <li class="memberDescUlTwoLi" style="background-color: #EDF8FE;">
          <span class="memberDescUlTwoLiSpan  first" >平均客单价</span>
          <span class="memberDescUlTwoLiSpan " >{{item1.pjkdj}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item2.pjkdj}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item3.pjkdj}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item4.pjkdj}}</span>
          <span class="memberDescUlTwoLiSpan last" >{{item0.pjkdj}}</span>
        </li>

        <li class="memberDescUlTwoLi" >
          <span class="memberDescUlTwoLiSpan  first" >花费占比</span>
          <span class="memberDescUlTwoLiSpan " >{{item1.hfzb}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item2.hfzb}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item3.hfzb}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item4.hfzb}}</span>
          <span class="memberDescUlTwoLiSpan last" >{{item0.hfzb}}</span>
        </li>

        <li class="memberDescUlTwoLi" style="background-color: #EDF8FE;">
          <span class="memberDescUlTwoLiSpan  first" >购物频次</span>
          <span class="memberDescUlTwoLiSpan " >{{item1.pc}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item2.pc}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item3.pc}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item4.pc}}</span>
          <span class="memberDescUlTwoLiSpan last" >{{item0.pc}}</span>
        </li>

        <!--<li class="memberDescUlTwoLi" >
          <span class="memberDescUlTwoLiSpan  first" >新增会员</span>
          <span class="memberDescUlTwoLiSpan " >{{item1.xzhyrs}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item2.xzhyrs}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item3.xzhyrs}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item4.xzhyrs}}</span>
          <span class="memberDescUlTwoLiSpan last" >{{item0.xzhyrs}}</span>
        </li>-->

        <li class="memberDescUlTwoLi" >
          <span class="memberDescUlTwoLiSpan  first" >近7日生日会员</span>
          <span class="memberDescUlTwoLiSpan " >{{item1.srhyrs}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item2.srhyrs}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item3.srhyrs}}</span>
          <span class="memberDescUlTwoLiSpan " >{{item4.srhyrs}}</span>
          <span class="memberDescUlTwoLiSpan last" >{{item0.srhyrs}}</span>
        </li>

      </ul>

    </div>
</template>

<script>
import global_ from '../components/tools/Global'


  export default {
    name: 'MemberDesc',
    data(){
      return {
        circle:{hyrs:123455,szHyZb:12.34,szHyRs:123456},
        circle_level:{xxq:24691,wdq:24691,wxq:24691,smq:24691,yls:24691},
        item:{hyrs:0,pjkdj:0, hfzb:0, pc:0, xzhyrs:0, srhyrs:0},
        item0:{hyrs:0,pjkdj:0, hfzb:0, pc:0, xzhyrs:0, srhyrs:0},
        item1:{hyrs:0,pjkdj:0, hfzb:0, pc:0, xzhyrs:0, srhyrs:0},
        item2:{hyrs:0,pjkdj:0, hfzb:0, pc:0, xzhyrs:0, srhyrs:0},
        item3:{hyrs:0,pjkdj:0, hfzb:0, pc:0, xzhyrs:0, srhyrs:0},
        item4:{hyrs:0,pjkdj:0, hfzb:0, pc:0, xzhyrs:0, srhyrs:0}

      }
    },
    mounted(){
      this.initCircle();
      //this.initData();
      this.initMonth();
    },
    watch:{
      '$store.state.dl'(n,o){
        //this.initData();
        this.initMonth();
      }
    },
    methods:{
      initMonth(){
        var formData = new FormData();
        formData.append('shopId',this.$store.state.activeShopId);
        formData.append('dl',this.$store.state.dl);
        let vm = this;
        this.$axios.post('/ajax_getMonth.action', formData).then(res => {
          var resultBck = res.data.rsData;
          vm.item.hyrs = resultBck.month.hyrs;
          vm.item.pjkdj = resultBck.month.pjkdj;
          vm.item.hfzb = resultBck.month.hfzb;
          vm.item.pc = resultBck.month.pc;
          vm.item.xzhyrs = resultBck.month.xzhyrs;
          vm.item.srhyrs = resultBck.month.srhyrs;

          vm.item1.hyrs = resultBck.xxq.hyrs;
          vm.item1.pjkdj = resultBck.xxq.pjkdj;
          vm.item1.hfzb = resultBck.xxq.hfzb;
          vm.item1.pc = resultBck.xxq.pc;
          vm.item1.srhyrs = resultBck.xxq.srhyrs;

          vm.item2.hyrs = resultBck.wdq.hyrs;
          vm.item2.pjkdj = resultBck.wdq.pjkdj;
          vm.item2.hfzb = resultBck.wdq.hfzb;
          vm.item2.pc = resultBck.wdq.pc;
          vm.item2.srhyrs = resultBck.wdq.srhyrs;

          vm.item3.hyrs = resultBck.wxq.hyrs;
          vm.item3.pjkdj = resultBck.wxq.pjkdj;
          vm.item3.hfzb = resultBck.wxq.hfzb;
          vm.item3.pc = resultBck.wxq.pc;
          vm.item3.srhyrs = resultBck.wxq.srhyrs;

          vm.item4.hyrs = resultBck.smq.hyrs;
          vm.item4.pjkdj = resultBck.smq.pjkdj;
          vm.item4.hfzb = resultBck.smq.hfzb;
          vm.item4.pc = resultBck.smq.pc;
          vm.item4.srhyrs = resultBck.smq.srhyrs;

          vm.item0.hyrs = resultBck.yls.hyrs;
          vm.item0.pjkdj = resultBck.yls.pjkdj;
          vm.item0.hfzb = resultBck.yls.hfzb;
          vm.item0.pc = resultBck.yls.pc;
          vm.item0.srhyrs = resultBck.yls.srhyrs;

        }, function (res) {
          console.log('error');
        });
      },
      initData(){
        var formData = new FormData();
        formData.append('shopId',this.$store.state.activeShopId);
        formData.append('dl',this.$store.state.dl);
        let vm = this;
        this.$axios.post('/ajax_getBhhyDTOItem.action', formData).then(res => {
          var resultBck = res.data.rsData;
          //item:{hyrs:0,pjkdj:0, hfzb:0, pc:0, xzhyrs:0, srhyrs:0},
          vm.item.hyrs = resultBck.month.hyrs;
          vm.item.pjkdj = resultBck.month.pjkdj;
          vm.item.hfzb = resultBck.month.hfzb;
          vm.item.pc = resultBck.month.pc;
          vm.item.xzhyrs = resultBck.month.xzhyrs;
          vm.item.srhyrs = resultBck.month.srhyrs;

          vm.item1.hyrs = resultBck.xxq.hyrs;
          vm.item1.pjkdj = resultBck.xxq.pjkdj;
          vm.item1.hfzb = resultBck.xxq.hfzb;
          vm.item1.pc = resultBck.xxq.pc;
          vm.item1.srhyrs = resultBck.xxq.srhyrs;

          vm.item2.hyrs = resultBck.wdq.hyrs;
          vm.item2.pjkdj = resultBck.wdq.pjkdj;
          vm.item2.hfzb = resultBck.wdq.hfzb;
          vm.item2.pc = resultBck.wdq.pc;
          vm.item2.srhyrs = resultBck.wdq.srhyrs;

          vm.item3.hyrs = resultBck.wxq.hyrs;
          vm.item3.pjkdj = resultBck.wxq.pjkdj;
          vm.item3.hfzb = resultBck.wxq.hfzb;
          vm.item3.pc = resultBck.wxq.pc;
          vm.item3.srhyrs = resultBck.wxq.srhyrs;

          vm.item4.hyrs = resultBck.smq.hyrs;
          vm.item4.pjkdj = resultBck.smq.pjkdj;
          vm.item4.hfzb = resultBck.smq.hfzb;
          vm.item4.pc = resultBck.smq.pc;
          vm.item4.srhyrs = resultBck.smq.srhyrs;

          vm.item0.hyrs = resultBck.yls.hyrs;
          vm.item0.pjkdj = resultBck.yls.pjkdj;
          vm.item0.hfzb = resultBck.yls.hfzb;
          vm.item0.pc = resultBck.yls.pc;
          vm.item0.srhyrs = resultBck.yls.srhyrs;

        }, function (res) {
          console.log('error');
        });
      },
      initCircle(){
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        const c_width = canvas.width;
        const c_height =  canvas.height;
        const x = 0.5*c_width;
        const y = c_height-40;
        const radius = 0.8*y;
        let lineWidth = 0.12*y;
        let start = 0.9;
        let end = 0.9;

        //新鲜期 2.1*Math.PI
        start = end;
        end = (this.circle_level.xxq / this.circle.hyrs * 1.2)+start;
        context.lineWidth = lineWidth;
        context.strokeStyle ="#6cc751";
        context.beginPath();
        context.arc(x,y,radius,start*Math.PI,end*Math.PI);
        context.stroke();

        //稳定期
        start = end+0.005;
        end = (this.circle_level.wdq / this.circle.hyrs * 1.2)+start;
        context.lineWidth = lineWidth*0.8;
        context.strokeStyle ="#1CC7D0";
        context.beginPath();
        context.arc(x,y,radius-2,start*Math.PI,end*Math.PI);
        context.stroke();

        //危险期
        start = end+0.005;
        end = (this.circle_level.wxq / this.circle.hyrs * 1.2)+start;
        context.lineWidth = lineWidth;
        context.strokeStyle ="#FFC845";
        context.beginPath();
        context.arc(x,y,radius,start*Math.PI,end*Math.PI);
        context.stroke();

        //睡眠期
        start = end+0.005;
        end = (this.circle_level.smq / this.circle.hyrs * 1.2)+start;
        context.lineWidth = lineWidth*1.4;
        context.strokeStyle =global_.member_level_color.smq;
        context.beginPath();
        context.arc(x,y,radius+2,start*Math.PI,end*Math.PI);
        context.stroke();

        //已流失
        start = end+0.005;
        context.lineWidth = lineWidth;
        context.strokeStyle =global_.member_level_color.yls;
        context.beginPath();
        context.arc(x,y,radius,start*Math.PI,2.1*Math.PI);
        context.stroke();
      }
    }
  }
</script>

<style scoped>
.memberDescUl{
  display: flex;
}
.memberDescUlTwo{
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.memberDescUlLi{
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  line-height: .6rem;
}
.memberDescUlTwoLi{
  display: flex;
  flex: 1;
}
.memberDescUlTwoLiSpan{
  flex: 1;
  text-align: center;
  line-height: 1rem;
  border-left: 1px solid #DDDDDD;
}
.header{
  color: white;
}
.first{
  flex: 1.6;
}
.last{
  border-right: 1px solid #DDDDDD;
}
#canvas{
  display: block;
  margin:auto;
  height: 4rem;
}
.canvas_note{
  text-align: center;
  display: block;
  margin: auto;
  position: absolute;
  left: 0;
  bottom: 0.6rem;
  right: 0;
}
</style>
