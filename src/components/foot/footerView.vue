<template>
	<div>
		<mt-tabbar fixed v-model="selected" v-if='true'>
				<mt-tab-item id="外卖">
					<router-link to='/home'>
						<img src="../../assets/home-1.png" alt="" />
						首页
					</router-link>
				</mt-tab-item>
				<mt-tab-item id="订单">
					<router-link to='/ranking'>
						<img src="../../assets/home-2.png" alt="" />
						讲堂
					</router-link>
				</mt-tab-item>
				<mt-tab-item id="我的">
					<router-link to='/me'>
						<img src="../../assets/home-3.png" alt="" />
						我的
					</router-link>
				</mt-tab-item>
			</mt-tabbar>
	</div>
</template>

<script>

</script>

<style scoped="scoped">
	.mint-tab-item-label{
		text-align: center;
	}
	.mint-tab-item-label img{
		height: 1rem;
		margin: 0.6rem 0 0.6rem 2.8rem;
		display: block;
	}
</style>