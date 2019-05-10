<template>
    <div style="padding: 5px;">

      <div style="position: relative;">
        <canvas id="canvas"></canvas>
        <ul class="canvas_note">
          <li>会员人数</li>
          <li style="font-size: 18px;">{{circle.hyrs}}</li>
          <li>数字会员占比:{{circle.szHyZb}}%</li>
          <li>数字会员人数:{{circle.szHyRs}}人</li>
        </ul>
      </div>

      <ul class="memberDescUl">
        <li class="memberDescUlLi">
          <span>平均客单价</span>
          <span>{{item.pjKdj}}元</span>
        </li>
        <li class="memberDescUlLi">
          <span>话费占比</span>
          <span>{{item.hfZb}}%</span>
        </li>
        <li class="memberDescUlLi">
          <span>购物频次</span>
          <span>{{item.gwPc}}次</span>
        </li>
        <li class="memberDescUlLi">
          <span>新增会员</span>
          <span>{{item.xzHy}}人</span>
        </li>
        <li class="memberDescUlLi" style="flex: 1.6">
          <span>近7日生日会员</span>
          <span>{{item.srHy}}人</span>
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
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan last" >2456人</span>
        </li>

        <li class="memberDescUlTwoLi" >
          <span class="memberDescUlTwoLiSpan  first" >数字会员人数</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan last" >2456人</span>
        </li>

        <li class="memberDescUlTwoLi" style="background-color: #EDF8FE;">
          <span class="memberDescUlTwoLiSpan  first" >平均客单价</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan last" >2456人</span>
        </li>

        <li class="memberDescUlTwoLi" >
          <span class="memberDescUlTwoLiSpan  first" >花费占比</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan last" >2456人</span>
        </li>

        <li class="memberDescUlTwoLi" style="background-color: #EDF8FE;">
          <span class="memberDescUlTwoLiSpan  first" >购物频次</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan last" >2456人</span>
        </li>

        <li class="memberDescUlTwoLi" >
          <span class="memberDescUlTwoLiSpan  first" >新增会员</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan last" >2456人</span>
        </li>

        <li class="memberDescUlTwoLi" style="background-color: #EDF8FE;">
          <span class="memberDescUlTwoLiSpan  first" >近7日生日会员</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan " >2456人</span>
          <span class="memberDescUlTwoLiSpan last" >2456人</span>
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
        item:{pjKdj:943.12, hfZb:27.38, gwPc:12, xzHy:100, srHy:100}

      }
    },
    mounted(){
      this.initCircle();
    },
    methods:{
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
