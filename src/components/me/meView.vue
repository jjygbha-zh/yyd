<template>
	<div class="body">
		<div class="head">
			<mt-header title="账户设置">
			  <router-link to="/home" slot="left">
			    <mt-button icon="back"></mt-button>
			  </router-link>
			</mt-header>
		</div>
		<div class="body">
			<div class="grxx">
				<router-link to='/da'>
					<div class="tx">
					<img src="../../assets/tx.png" alt=""  class="left"/>
					<div class="left">
						<h3>13624627589</h3>
						<p>三居药业</p>
					</div>
					<div class="right">
						<img src="../../assets/ewm.png" alt="" />
					</div>
				</div>
				</router-link>
			</div>
			<div class="gz">
				<ul>
					<li>
						<router-link to='/da'>
							<div>
								<img src="../../assets/icon-3.png" alt="" class="left"/>
								<p class="left">个人信息</p>
								<p class="right"> > </p>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to='/gz'>
							<div>
								<img src="../../assets/icon-4.png" alt="" class="left"/>
								<p class="left">我的关注</p>
								<p class="right"> > </p>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to='/scyd'>
							<div>
								<img src="../../assets/icon-5.png" alt="" class="left"/>
								<p class="left">推荐药店</p>
								<p class="right"> > </p>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="sz">
				<ul>
					<li>
						<router-link to='/jysq'>
							<div>
								<img src="../../assets/icon-6.png" alt="" class="left"/>
								<p class="left">进药申请</p>
								<p class="right"> > </p>
							</div>
						</router-link>
					</li>
					<li>
						<div>
							<img src="../../assets/icon-7.png" alt="" class="left"/>
							<p class="left">设置</p>
							<p class="right"> > </p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="foot">
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
	</div>
	
</template>

<script>
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.head{
		height: 40px;
	}
	.mint-header{
		padding: 0 0.6rem;
	}
	.body{
		background: #eee;
		width: 100%;
		height: 100%;
	}
	.grxx{
		width: 100%;
		height: 5rem;
		margin: 1rem 0;
		padding: 1rem;
		box-sizing: border-box;
		background: white;
	}
	.grxx .left{
		margin-right: 1rem;
	}
	.grxx .left h3{
		color: black;
	}
	.grxx .left p{
		font-size: 12px;
		color: black;
		margin-top: 0.2rem;
	}
	.grxx img{
		height: 3rem;
	}
	.gz{
		margin-bottom: 1rem;
	}
	.gz ul{
		list-style: none;
		padding-left: 1rem;
		background: white;
	}
	.gz ul li{
		height: 4rem;
		box-sizing: border-box;
		border-bottom: 1px solid #ddd;
		padding: 0.8rem 0;
		
	}
	.gz ul li img{
		height: 2.4rem;
		padding-right: 0.6rem;
	}
	.gz ul li p{
		margin-top: 0.6rem;
		padding-right: 0.6rem;
	}
	.sz ul{
		list-style: none;
		padding-left: 1rem;
		background: white;
	}
	.sz ul li{
		height: 4rem;
		box-sizing: border-box;
		border-bottom: 1px solid #ddd;
		padding: 0.8rem 0;
		
	}
	.sz ul li img{
		height: 2.4rem;
		padding-right: 0.6rem;
	}
	.sz ul li p{
		margin-top: 0.6rem;
		padding-right: 0.6rem;
	}
	.foot .mint-tab-item{
		    padding: 7px 0;
	}
	.mint-tab-item-label{
		text-align: center;
	}
	.mint-tab-item-label{
		text-align: center;
	}
	.mint-tab-item-label img{
		height: 1rem;
		margin: 0.6rem auto ;
		display: block;
	}
</style>