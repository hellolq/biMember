<template>
  <div class="error_div" v-bind:style="{  height: screenHeight + 'px' }">
    <img class="error_img" src="../assets/error.svg">
    <span class="error_note">亲，您暂无访问权限</span>

  </div>
</template>

<script>
  const screenHeight = document.documentElement.clientHeight || document.body.clientHeight;

  export default {
    name: 'Error',
    data(){
      return{
        screenHeight:screenHeight
      }
    }
  }
</script>

<style scoped>
  .error_div{
    background-color: #EEEEEE;
  }
  .error_note{
    display: block;
    text-align: center;
    font-size: 24px;
    margin-top: 1rem;
  }

  .error_img{
    width: 90%;
    display: block;
    margin: auto;
    padding-top: 3rem;
  }

</style>
