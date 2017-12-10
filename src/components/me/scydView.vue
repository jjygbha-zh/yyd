<template>
	<div>
		<div class="head">
			<mt-header title="账户设置">
			  <router-link to="/me" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="cont">
			<div class="ewm">
				<img src="../../assets/yd-ewm.png" alt="" />
				<p>邀请码：2345</p>
			</div>
			<div class="tjdz">
				<img src="../../assets/icon-10.png" alt="" />
				推荐路线
			</div>
			<div class="wz">
				<p>
					http://123.56.102.141/hlc/webapp/index
				</p>
			</div>
			<div class="tj-btn">
				推荐
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.mint-button-text{
		font-size: 0;
	}
	.cont .ewm{
		text-align: center;
	}
	.cont .ewm img{
		height: 12rem;
		margin: 4rem auto 0.6rem;
	}
	.tjdz{
		margin: 2rem 1rem 0;
		font-size: 12px;
		color: #999999;
	}
	.tjdz img{
		height: 12px;
	}
	.wz{
		margin: 0.4rem 1rem 0;
		font-size: 14px;
		height: 2.4rem;
		text-align: center;
		background: #eeeeee;
		border-bottom: 1px solid #ccc;
	}
	.wz p{
		line-height: 2.4rem;
	}
	.tj-btn{
		margin: 1.6rem 1rem 0;
		height: 2.4rem;
		background: #f08c34;
		color: white;
		text-align: center;
		line-height: 2.4rem;
	}
</style>