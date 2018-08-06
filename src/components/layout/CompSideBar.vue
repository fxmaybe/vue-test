<template>
  <div class="side-bar">
    <router-link to="/regexp">正则表达式</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.side-bar {
		width: 200px;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		border-right: 1px solid #ddd;
	}

	.side-bar a{
		display: inline-block;
		width: 100%;
		text-align: center;
		height: 42px;
		line-height: 42px;
		text-decoration: none;
		color: #333;
	}
</style>
