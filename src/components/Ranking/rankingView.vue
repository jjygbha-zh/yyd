<template>
	<div>
		<div class="head">
			<mt-header title="健康百科">
			  <router-link to="/home" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>
		</div>
		<div class="body">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">最新资讯</mt-tab-item>
			  <mt-tab-item id="2">健康专题</mt-tab-item>
			  <mt-tab-item id="3">个人收藏</mt-tab-item>
			</mt-navbar>
			
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <ul class="zxzx">
			    	<li>
			    		<div class="top">
			    			<h3>乙肝的共识和误区(上)</h3>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right zt">专题</div>
			    			</div>
			    		</div>
			    	</li>
			    	<li>
			    		<div class="top">
			    			<h3>乙肝的共识和误区(上)</h3>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right zt">专题</div>
			    			</div>
			    		</div>
			    	</li>
			    	<li>
			    		<div class="top">
			    			<h3>乙肝的共识和误区(上)</h3>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right tj">推荐</div>
			    			</div>
			    		</div>
			    	</li>
			    	<li>
			    		<div class="top">
			    			<h3>乙肝的共识和误区(上)</h3>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right zt">专题</div>
			    			</div>
			    		</div>
			    	</li>
			    	<li>
			    		<div class="top">
			    			<h3>乙肝的共识和误区(上)</h3>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right zt">专题</div>
			    			</div>
			    		</div>
			    	</li>
			    	<li>
			    		<div class="top">
			    			<h3>乙肝的共识和误区(上)</h3>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right zt">专题</div>
			    			</div>
			    		</div>
			    	</li>
			    </ul>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <ul class="jkzt">
			    	<li>
			    		<div class="top">
			    			<h4>【专题】 男性&女性</h4>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right">2014-08-13</div>
			    			</div>
			    		</div>
			    	</li>
			    	<li>
			    		<div class="top">
			    			<h4>【专题】 男性&女性</h4>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right">2014-08-13</div>
			    			</div>
			    		</div>
			    	</li>
			    	<li>
			    		<div class="top">
			    			<h4>【专题】 男性&女性</h4>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right">2014-08-13</div>
			    			</div>
			    		</div>
			    	</li>
			    	<li>
			    		<div class="top">
			    			<h4>【专题】 男性&女性</h4>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right">2014-08-13</div>
			    			</div>
			    		</div>
			    	</li>
			    	<li>
			    		<div class="top">
			    			<h4>【专题】 男性&女性</h4>
			    		</div>
			    		<div class="bottom clear">
			    			<img src="../../assets/yp-2.png" alt=""  class="left"/>
			    			<div class="right">
			    				<p>两性健康误区多，搜索引擎太坑爹，电视广告瞎忽悠，信谁？</p>
			    				<div class="right">2014-08-13</div>
			    			</div>
			    		</div>
			    	</li>
			    </ul>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <div class="pic">
			    	<img src="../../assets/peo.png"/>
			    </div>
			  </mt-tab-container-item>
			</mt-tab-container>
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
	import Vue from 'vue'
	import { Navbar, TabItem } from 'mint-ui';
	Vue.component(Navbar.name, Navbar);
	Vue.component(TabItem.name, TabItem);
	export default{
		data(){
			return {
				selected:"1"
			}
		}
}
</script>

<style scoped="scoped">
	ul{
		list-style: none;
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
	.zxzx li{
		padding: 1rem 0;
		border-bottom: 1px solid #ddd;
		margin: 0 1rem;
	}
	.zxzx li .bottom{
		margin-top: 0.5rem;
	}
	.zxzx li .bottom img{
		width: 5rem;
	}
	.zxzx li .bottom .right{
		width: 68%;
	}
	.zxzx li .bottom .right p{
		font-size: 12px;
		line-height: 1.2rem;
		color: #888;
	}
	.zxzx li .bottom .right .right{
		width: 2.4rem;
		height: 1.2rem;
		text-align: center;
		line-height: 1.2rem;
		font-size: 12px;
		color: white;
	}
	.zt{
		background: #f08c34;
	}
	.tj{
		background: #6dba42;
	}
	.jkzt li{
		margin-top: 0.8rem;
		padding: 0.8rem;
		border-bottom: 1px solid #ddd;
		background: white;
	}
	.jkzt li .bottom {
		/*margin-top: 0.2rem;*/
	}
	.jkzt li .bottom img{
		width: 5rem;
	}
	.jkzt li .bottom .right{
		width: 68%;
	}
	.jkzt li .bottom .right p{
		font-size: 12px;
		line-height: 1.2rem;
		color: #888;
	}
	.jkzt li .bottom .right .right{
		width: 5rem;
		height: 1.2rem;
		text-align: center;
		line-height: 1.2rem;
		font-size: 12px;
	}
	.pic{
		text-align: center;
		padding-top: 4rem;
	}
	.pic img{
		width: 12rem;
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