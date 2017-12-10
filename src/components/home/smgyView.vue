<template>
	<div>
		<div class="head">
			<mt-header title="扫码购药">
			  <router-link to="/home" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			</mt-header>
		</div>
		<div class="content">
			<div class="ys clear">
				<img src="../../assets/tx-2.png" alt=""  class="left"/>
				<div class="right">
					<p><span>范佳颖 </span> 副主任医师</p>
					<h6>
						中国人民解放军第四--医院
					</h6>
				</div>
			</div>
			<div class="ysxx">
				<ul class="clear"> 
					<li><p>姓名：<span>路远费</span></p> </li>
					<li><p>性别：<span>男</span></p></li>
					<li><p>年龄：<span>35岁</span></p></li>
					<li><p>主治医师：<span>黄柳</span></p></li>
				</ul>
				<p>
					住院时间：2015-01-06  15:22:02
				</p>
				<p>
					检查服务号：4389012
				</p>
			</div>
			<div class="yp-banner clear">
				<mt-swipe :auto="4000">
				  <mt-swipe-item>
				  	<img src="../../assets/banner-2.png"/>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<img src="../../assets/banner-2.png"/>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<img src="../../assets/banner-2.png"/>
				  </mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="gmy clear">
				<p class="left">风热感冒颗粒</p>
				<p class="right"><s>￥28.50</s><span>￥25.00</span></p>
			</div>
			<div class="ypxq">
				<h5>药品详情</h5>
				<p><span>药品名称：</span>风热感冒颗粒</p>
				<p><span>批准文号：</span>国药准字H20044623</p>
				<p><span>生产企业：</span>桓诚帮药集团有限公司</p>
				<p><span>规格：</span>10g*8袋</p>
				<p><span>性状：</span>风热感冒颗粒，疏风清热，利咽解毒。用于风热
感冒，发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。
风热感冒颗粒，疏风清热，利咽解毒。用于风热感冒，
发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。</p>
			</div>
			<div class="gmfs">
				<div><img src="../../assets/icon-11.png" alt="" />去附近药店购买</div>
				<div><img src="../../assets/icon-12.png" alt="" />咨询厂家药剂师购买</div>
			</div>
			<div class="gm">
				<div class="top clear">
					<p class="left">药品疗程</p>
					<div class="right"></div>
				</div>
				<div class="bottom clear">
					<p class="left">总价：<span><s>￥800.45 </s> </span> 折扣价：<span>￥600.45</span></p>
					
					<router-link to='/gmcg' slot="right">
						<div class="right">确认购买</div>
					</router-link>
				</div>
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
	.content>div{
		margin-bottom: 1rem;
		background: white;
		padding: 0.8rem 1rem;
	}
	.ys img{
		width: 4rem;
	}
	.ys .right{
		width: 70%;
	}
	.ys .right p{
		font-size: 12px;
		margin-top: 0.6rem;
	}
	.ys .right p span{
		font-weight: 800;
		font-size: 16px;
	}
	.ys .right h6{
		font-weight: 500;
		margin-top: 0.6rem;
		font-size: 12px;
	}
	.ysxx ul li{
		list-style: none;
		width: 50%;
		float: left;
		font-size: 14px;
	}
	.ysxx ul li p{
		line-height: 1.5rem;
	}
	.ysxx ul li p span{
		color: #f08c34;
	}
	.ysxx >p{
		font-size: 12px;
		color: #898a8e;
		line-height: 1.2rem;
	}
	.content .yp-banner{
		height: 8rem;
		padding: 0 1rem;
	}
	.yp-banner img{
		width: 100%;
	}
	.gmy .right s{
		font-size: 12px;
		color: #999;
	}
	.gmy .right span{
		color: #ff6b3d;
	}
	.ypxq h5{
		margin-bottom: 1.8rem;
	}
	.ypxq p{
		line-height: 1.8rem;
		font-size: 12px;
	}
	.ypxq p span{
		font-weight: 800;
	}
	.gmfs div:nth-child(1){
		margin-bottom: 1rem;
	}
	.gmfs div{
		font-size: 14px;
		font-weight: 700;
	}
	.gmfs img{
		height: 1.2rem;
		margin-right: 0.6rem;
	}
	.gm .top{
		font-size: 12px;
		color: #999;
		margin-bottom: 1rem;
	}
	.gm .bottom .left{
		font-size: 12px;
		margin-top: 0.4rem;
	}
	.gm .bottom .left span{
		font-size: 14px;
		color: #ff4c4c;
	}
	.gm .bottom .right{
		width: 4rem;
		height: 1.6rem;
		text-align: center;
		line-height: 1.6rem;
		border-radius: 6px;
		font-size: 12px;
		background: #f08c34;
		color: white;
	}
</style>