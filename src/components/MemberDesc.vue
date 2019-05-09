<template>
    <div>
      <ul>
        <li>
          <span>平均客单价</span>
          <span>{{pjKdj}}元</span>
        </li>
        <li>
          <span>话费占比</span>
          <span>{{hfZb}}%</span>
        </li>
        <li>
          <span>购物频次</span>
          <span>{{gwPc}}次</span>
        </li>
        <li>
          <span>新增会员</span>
          <span>{{xzHy}}人</span>
        </li>
        <li>
          <span>生日会员（近7日）</span>
          <span>{{srHy}}人</span>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'MemberDesc',
    data(){
      return {
        pjKdj:943.12,
        hfZb:27.38,
        gwPc:12,
        xzHy:100,
        srHy:100
      }
    }
  }
</script>

<style scoped>

</style>
