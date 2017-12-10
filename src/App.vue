<template>
  <div id="app">
	  <div class="cont">
	  	<router-view></router-view>
	  </div>
	  <!--<div class="foot">
	  	<FooterView></FooterView>
	  </div>-->
  </div>
</template>

<script>
	import FooterView from './components/foot/footerView.vue'
	import { Swipe,SwipeItem,Navbar,TabItem,Cell,TabContainer,TabContainerItem  } from 'mint-ui'
	export default {
		components:{
			FooterView
		}
	}
</script>

<style>
*,head,body{
	margin: 0;
	padding: 0;
}
.cont{
	margin-bottom: 3rem;
}
body{
	background: #f5f4f9;
}
</style>
