<template>
	<div>
		<div class="head">
			<mt-header title="进药申请">
			  <router-link to="/me" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="cont">
			<ul>
				<li>
					<div>
						<div class="top clear">
							<img src="../../assets/yp-1.png" alt="" class="left"/>
							<div class="right">
								<h4>白云山伤风感冒胶囊</h4>
								<p>购买时间：2015.05.20   两个疗程</p>
								<h6>药品疗程：</h6>
							</div>
						</div>
						<div class="bottom clear">
							<div class="left"><p>总价：<span>￥800.45</span></p></div>
							<router-link to='/smgy'>
								<div class="right">确认</div>
							</router-link>
						</div>
					</div>
				</li>
				<li>
					<div>
						<div class="top clear">
							<img src="../../assets/yp-1.png" alt="" class="left"/>
							<div class="right">
								<h4>白云山伤风感冒胶囊</h4>
								<p>购买时间：2015.05.20   两个疗程</p>
								
							</div>
						</div>
						<div class="bottom clear">
							<div class="left"><p>总价：<span>￥800.45</span></p></div>
							<router-link to='/smgy'>
								<div class="right">确认</div>
							</router-link>
						</div>
					</div>
				</li>
				<li>
				<div>
						<div class="top clear">
							<img src="../../assets/yp-1.png" alt="" class="left"/>
							<div class="right">
								<h4>白云山伤风感冒胶囊</h4>
								<p>购买时间：2015.05.20   两个疗程</p>
								
							</div>
						</div>
						<div class="bottom clear">
							<div class="left"><p>总价：<span>￥800.45</span></p></div>
							<router-link to='/smgy'>
								<div class="right">确认</div>
							</router-link>
						</div>
					</div></li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
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
	.cont ul{
		list-style: none;
	}
	.cont ul li{
		margin-top: 1rem;
		padding: 0.8rem 0 0.8rem 1rem;
		background: white;
	}
	.cont ul li img{
		width: 5rem;
	}
	.cont ul li .top{
		border-bottom: 1px solid #ddd;
		padding-bottom: 0.8rem;
	}
	.cont ul li .top .right{
		width: 68%;
	}
	.cont ul li .top .right h4{
		line-height: 1.5rem;
	}
	.cont ul li .top .right p{
		font-size: 12px;
	}
	.cont ul li .top .right h6{
		font-weight: 500;
		margin-top: 0.8rem;
		color: #999;
	}
	.cont ul li .bottom .left{
		margin-top: 0.8rem;
	}
	.cont ul li .bottom .left p span{
		color: red;
	}
	.cont ul li .bottom .right{
		width: 4rem;
		height: 1.5rem;
		background: #f08c34;
		color: white;
		border-radius: 0.6rem;
		text-align: center;
		line-height: 1.5rem;
		margin-top: 0.6rem;
		margin-right: 1rem;
	}
</style>