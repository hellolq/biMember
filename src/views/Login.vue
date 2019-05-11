<template>
 <div>
   正在登陆，请稍后....
 </div>
</template>

<script>
  export default {
    name: 'Login',
    mounted () {
      this.authorizeByEmpId();
    },
    methods:{
      authorizeByEmpId(){
        //计算设备屏幕高度和宽度
        const screenHeight = document.documentElement.clientHeight || document.body.clientHeight
        const screenWidth = document.body.clientWidth;
        console.log("authorizeByEmpId",this.$store.getters.isLogin);
        if(!this.$store.getters.isLogin){
          var data = {empId:this.$route.query.empId,empName:'李桥'};
          this.$store.dispatch("add_login_user",data);
        }
        this.$router.push('/zbld');

      }
    }
  }
</script>

<style scoped>

</style>
