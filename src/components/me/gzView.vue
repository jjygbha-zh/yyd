<template>
	<div>
		<div class="head">
			<mt-header title="我的关注">
			  <router-link to="/me" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="cont">
			<ul>
				<router-link to="/details" slot="left">
					<li>
						<div class="clear">
							<img src="../../assets/ms-1.png" alt="" class="left"/>
							<div class="right ">
								<h4>老吃太饱会撑得没事儿干</h4>
								<p>老吃太饱会撑得没事儿干老吃太饱会撑得没事儿干老吃太饱会撑得没事儿干...</p>
								<span>2015.05.20</span>
							</div>
						</div>
					
					</li>
				</router-link>
				<router-link to="/details" slot="left">
					<li>
						<div class="clear">
							<img src="../../assets/ms-2.png" alt="" class="left"/>
							<div class="right">
								<h4>老吃太饱会撑得没事儿干</h4>
								<p>老吃太饱会撑得没事儿干老吃太饱会撑得没事儿干老吃太饱会撑得没事儿干...</p>
								<span>2015.05.20</span>
							</div>
						</div>	
					</li>
				</router-link>
				<router-link to="/details" slot="left">
					<li>
						<div class="clear">
							<img src="../../assets/ms-3.png" alt="" class="left"/>
							<div class="right">
								<h4>老吃太饱会撑得没事儿干</h4>
								<p>老吃太饱会撑得没事儿干老吃太饱会撑得没事儿干老吃太饱会撑得没事儿干...</p>
								<span>2015.05.20</span>
							</div>
						</div>	
					</li>
				</router-link>
				<router-link to="/details" slot="left">
					<li>
						<div class="clear">
							<img src="../../assets/ms-4.png" alt="" class="left"/>
							<div class="right">
								<h4>老吃太饱会撑得没事儿干</h4>
								<p>老吃太饱会撑得没事儿干老吃太饱会撑得没事儿干老吃太饱会撑得没事儿干...</p>
								<span>2015.05.20</span>
							</div>
						</div>	
					</li>
				</router-link>
			</ul>
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
	.clear:after{
	    content: "";
	    display: table;
	    clear: both;
	}
	.cont ul li{
		margin-top: 0.6rem;
		background: white;
		padding: 0.6rem 1rem;
	}
	.cont ul li img{
		width: 5rem;
	}
	.cont ul li>div>div{
		width: 66%;
	}
	.cont ul li>div{
		margin-top: -0.8rem;
	}
	.cont ul li>div>div p{
		font-size: 12px;
		height: 34px;
	}
	.cont ul li>div>.right{
		width: 68%;
	}
	.cont ul li>div>.right h4{
		font-size: 14px;
	}
	.cont ul li>div>div span{
		font-size: 12px;
		float: right;
		margin-top: 0.5rem;
		color: #999;
	}
</style>