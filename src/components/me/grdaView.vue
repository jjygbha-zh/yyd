<template>
	<div>
		<div class="head">
			<mt-header title="个人档案">
			  <router-link to="/me" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="cont">
			<div class="gh">
				<ul>
					<li class="clear">
						<div>
							<p class="left tx">头像</p>
							<div class="right tx-r">
								<img src="../../assets/tx.png" alt="" />
								>
							</div>
						</div>
					</li>
					<li class="clear">
						<div>
							<p class="left">姓名</p>
							<div class="right">
								<span>张大大</span>
								>
							</div>
						</div>
					</li>
					<li class="clear">
						<div>
							<p class="left">昵称</p>
							<div class="right">
								<span>静雅居士</span>
								>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="sr">
				<ul>
					<li class="clear">
						<div>
							<p class="left">性别</p>
							<div class="right">
								<span>男</span>
								>
							</div>
						</div>
					</li>
					<li class="clear">
						<div>
							<p class="left">出生年月</p>
							<div class="right">
								<span>1989.12.12</span>
								>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="btn">
				保存
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
	.gh{
		margin: 1rem 0;
	}
	.gh ul{
		list-style: none;
		background: white;
		padding-left: 1rem;
	}
	.gh ul li{
		padding: 0.8rem 0.6rem 0.8rem 0;
		border-bottom: 1px solid #ddd;
		font-size: 12px;
	}
	.gh ul li img{
		height: 2.4rem;
	}
	.gh ul li .tx{
		margin-top: 0.8rem;
	}
	.sr{
		margin: 1rem 0;
	}
	.sr ul{
		list-style: none;
		background: white;
		padding-left: 1rem;
	}
	.sr ul li{
		padding: 0.8rem 0.6rem 0.8rem 0;
		border-bottom: 1px solid #ddd;
		font-size: 12px;
	}
	.sr ul li img{
		height: 2.4rem;
	}
	.sr ul li .tx{
		margin-top: 0.8rem;
	}
	.btn{
		margin: 0 1rem;
		height: 2.4rem;
		border-radius: 5px;
		background: #f08c34;
		text-align: center;
		line-height: 2.4rem;
		color: white;
	}
</style>