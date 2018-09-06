<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate(){
    if(location.pathname=="/"){

      console.log("特殊处理");
      this.$router.push({name: 'login'});
    }
  }
}
</script>

<style>
  *{ padding: 0;margin: 0;}
  html,body,#app{
    height: 100%;
    width: 100%;
  }
</style>
