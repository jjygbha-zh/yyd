<template>
	<div >
		<div class="head">
			<mt-header title="扫码购药">
			  <router-link to="/smgy" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="content">
			<div class="tb">
				<img src="../../assets/icon-13.png"/>
				<p>购买成功</p>
			</div>
			<div class="fx-btn">
				分享
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.clear:after{
	    content: "";
	    display: table;
	    clear: both;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.content .tb{
		text-align: center;
		margin-bottom: 1rem;
	}
	.content .tb img{
		width: 5rem;
		margin: 5rem 0 1rem;
	}
	.content .fx-btn{
		widows: 100%;
		margin: 0 1rem;
		background: #f08c34;
		height: 2.4rem;
		color: white;
		text-align: center;
		line-height: 2.4rem;
		border-radius: 0.5rem;
	}
</style>