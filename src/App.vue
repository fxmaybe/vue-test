<template>
  <div id="app">
    <comp-side-bar></comp-side-bar>
    <div class="app-content">
      <router-view></router-view>
    </div>  
  </div>
</template>

<script>
import CompSideBar from '@/components/layout/CompSideBar';
export default {
  name: 'App',
  components: {
    CompSideBar
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .app-content {
    padding: 36px  36px 36px 236px ;
  }
</style>
