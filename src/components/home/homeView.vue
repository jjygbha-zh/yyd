<template>
	<div id="">
		<div class="head">
			<mt-header fixed title="销售记录">
				<a slot="right" v-on:click='show(aa)'>
					+
				</a>
			</mt-header>
			<div class="sm" v-if="aa">
				<router-link to='/smgy'>
					<div class="top">
						<img src="../../assets/icon-8.png"/>
						扫码加药代
					</div>
				</router-link>
				
				<div class="bottom">
					<img src="../../assets/icon-9.png" alt="" />
					输入医生邀请码
				</div>
			</div>
		</div>
		<div class="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img src="../../assets/banner.png"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/banner.png"/>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<img src="../../assets/banner.png"/>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="type">
			<!--<mt-navbar v-model="selected">
			  <mt-tab-item id="1">本周</mt-tab-item>
			  <mt-tab-item id="2">历史</mt-tab-item>
			</mt-navbar> 
			
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			     <ul class="ul">
			     	<li><div>
			     		<img src="../../assets/icon-1.png" alt="" class="left"/>
			     		<div class="left">
			     			<p><h4 class="left">周四</h4>2015.06.23</p>
			     			<div class="jdt jdt-1"></div>
			     		</div>
			     		<div class="right">
			     			<span>30盒</span> >
			     		</div>
			     	</div></li>
			     	<li>
			     		<div>
			     		<img src="../../assets/icon-2.png" alt="" class="left"/>
			     		<div class="left">
			     			<p><h4 class="left">周三</h4>2015.06.23</p>
			     			<div class="jdt jdt-1"></div>
			     		</div>
			     		<div class="right">
			     			<span>30盒</span> >
			     		</div>
			     	</div>
			     	</li>
			     	<li>
			     		<div>
			     		<img src="../../assets/icon-2.png" alt="" class="left"/>
			     		<div class="left">
			     			<p><h4 class="left">周二</h4>2015.06.23</p>
			     			<div class="jdt jdt-1"></div>
			     		</div>
			     		<div class="right">
			     			<span>30盒</span> >
			     		</div>
			     	</div>
			     	</li>
			     	<li>
			     		<div>
			     		<img src="../../assets/icon-2.png" alt="" class="left"/>
			     		<div class="left">
			     			<p><h4 class="left">周一</h4>2015.06.23</p>
			     			<div class="jdt jdt-1"></div>
			     		</div>
			     		<div class="right">
			     			<span>30盒</span> >
			     		</div>
			     	</div>
			     	</li>
			     </ul>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
			  </mt-tab-container-item>
			</mt-tab-container>
		-->
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">本周</mt-tab-item>
			  <mt-tab-item id="2">历史</mt-tab-item>
			</mt-navbar>
			
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <ul class="bzjl">
			    	<li>
			    		<router-link to='/yptj'>
				    		<div class="clear">
					     		<img src="../../assets/icon-1.png" alt="" class="left"/>
					     		<div class="left">
					     			<p><h4 class="left">周四</h4>2015.06.23</p>
					     			<div class="jdt jdt-1"></div>
					     		</div>
					     		<div class="right sl-1">
					     			<span>30盒</span> >
					     		</div>
					     	</div>
				     	</router-link>
			    	</li>
			    	<li>
			    		<router-link to='/yptj'>
				    		<div class="clear">
					     		<img src="../../assets/icon-2.png" alt="" class="left"/>
					     		<div class="left">
					     			<p><h4 class="left">周三</h4>2015.06.23</p>
					     			<div class="jdt jdt-2"></div>
					     		</div>
					     		<div class="right">
					     			<span>65盒</span> >
					     		</div>
					     	</div>
				     	</router-link>
			    	</li>
			    	<li>
			    		<router-link to='/yptj'>
			    			<div class="clear">
					     		<img src="../../assets/icon-2.png" alt="" class="left"/>
					     		<div class="left">
					     			<p><h4 class="left">周二</h4>2015.06.23</p>
					     			<div class="jdt jdt-3"></div>
					     		</div>
					     		<div class="right">
					     			<span>58盒</span> >
					     		</div>
					     	</div>
					     </router-link>	
			    	</li>
			    	<li>
			    		<router-link to='/yptj'>
				    		<div class="clear">
					     		<img src="../../assets/icon-2.png" alt="" class="left"/>
					     		<div class="left">
					     			<p><h4 class="left">周一</h4>2015.06.23</p>
					     			<div class="jdt jdt-4"></div>
					     		</div>
					     		<div class="right">
					     			<span>80盒</span> >
					     		</div>
					     	</div>
				     	</router-link>	
			    	</li>
			    </ul>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <ul class="bzjl">
			    	<li>
			    		<div class="clear">
				     		<img src="../../assets/icon-2.png" alt="" class="left"/>
				     		<div class="left">
				     			<p><h4 class="left">周日</h4>2015.06.23</p>
				     			<div class="jdt"></div>
				     		</div>
				     		<div class="right">
				     			<span>30盒</span> >
				     		</div>
				     	</div>
			    	</li>
			    	<li>
			    		<div class="clear">
				     		<img src="../../assets/icon-2.png" alt="" class="left"/>
				     		<div class="left">
				     			<p><h4 class="left">周六</h4>2015.06.23</p>
				     			<div class="jdt jdt-2"></div>
				     		</div>
				     		<div class="right">
				     			<span>65盒</span> >
				     		</div>
				     	</div>
			    	</li>
			    	<li>
			    		<div class="clear">
				     		<img src="../../assets/icon-2.png" alt="" class="left"/>
				     		<div class="left">
				     			<p><h4 class="left">周五</h4>2015.06.23</p>
				     			<div class="jdt jdt-3"></div>
				     		</div>
				     		<div class="right">
				     			<span>58盒</span> >
				     		</div>
				     	</div>
			    	</li>
			    	<li>
			    		<div class="clear">
				     		<img src="../../assets/icon-2.png" alt="" class="left"/>
				     		<div class="left">
				     			<p><h4 class="left">周四</h4>2015.06.23</p>
				     			<div class="jdt jdt-4"></div>
				     		</div>
				     		<div class="right">
				     			<span>80盒</span> >
				     		</div>
				     	</div>
			    	</li>
			    	<li>
			    		<div class="clear">
				     		<img src="../../assets/icon-2.png" alt="" class="left"/>
				     		<div class="left">
				     			<p><h4 class="left">周三</h4>2015.06.23</p>
				     			<div class="jdt jdt-3"></div>
				     		</div>
				     		<div class="right">
				     			<span>58盒</span> >
				     		</div>
				     	</div>
			    	</li>
			    	<li>
			    		<div class="clear">
				     		<img src="../../assets/icon-2.png" alt="" class="left"/>
				     		<div class="left">
				     			<p><h4 class="left">周二</h4>2015.06.23</p>
				     			<div class="jdt jdt-4"></div>
				     		</div>
				     		<div class="right">
				     			<span>80盒</span> >
				     		</div>
				     	</div>
			    	</li>
			    	<li>
			    		<div class="clear">
				     		<img src="../../assets/icon-2.png" alt="" class="left"/>
				     		<div class="left">
				     			<p><h4 class="left">周一</h4>2015.06.23</p>
				     			<div class="jdt jdt-3"></div>
				     		</div>
				     		<div class="right">
				     			<span>58盒</span> >
				     		</div>
				     	</div>
			    	</li>
			    	<li>
			    		<div class="clear">
				     		<img src="../../assets/icon-2.png" alt="" class="left"/>
				     		<div class="left">
				     			<p><h4 class="left">周日</h4>2015.06.23</p>
				     			<div class="jdt jdt-4"></div>
				     		</div>
				     		<div class="right">
				     			<span>80盒</span> >
				     		</div>
				     	</div>
			    	</li>
			    </ul>
			  </mt-tab-container-item>
			</mt-tab-container>
			
		</div>
		<div class="foot">
			<mt-tabbar fixed v-model="selected" v-if='true'>
				<mt-tab-item id="外卖" >
					<router-link to='/home'>
						<img src="../../assets/home-1.png" alt="" />
						首页
					</router-link>
				</mt-tab-item>
				<mt-tab-item id="订单" >
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
			selected:"1",
			aa:false
		}	
	},
	methods:{
		show(aa){
			this.aa=!aa
		}
	}
}
</script>

<style scoped>
	router-link{
		color: black;
	}
	ul{
		list-style: none;
	}
	.clear:after{
	    content: "";
	    display: table;
	    clear: both;
	}
	.sm{
		width: 8rem;
		padding: 0.5rem;
		box-sizing: border-box;
		background: white;
		position: absolute;
		top: 3rem;
		z-index: 100;
		right: 0.3rem;
	}
	.sm .top,.sm .bottom{
		height: 2rem;
		font-size: 12px;
		color: black;
		box-sizing: border-box;
		padding: 0.5rem 0;
	}
	.sm .top{
		border-bottom: 1px solid #ddd;
	}
	.sm .top img,.sm .bottom img{
		height: 1rem;
		margin-right: 0.2rem;
	}
	.mint-header.is-fixed{
		padding: 1rem;
	}
	.mint-header-button > a{
		font-size: 1.5rem;
		text-decoration: none;
	}
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
	.mint-button-text{
		font-size: 30px;
	}
	mt-swipe-item img{
		/*height: ;*/
		width: 100%;
	}
	.banner{
		height: 8rem;
	}
	.mint-swipe-items-wrap img{
		width: 100%;
		height: auto;
	}
	.mint-swipe-indicator {
		opacity: 1;
	}
	.mint-swipe-indicator{
		background: cornflowerblue;
	}
	.type{
		width: 100%;
		height: 100%;
	}
	.mint-navbar{
		margin-bottom: 0.6rem;
	}
	.ul{
		padding-left: 1rem;
		list-style: none;
		background: white;
	}
	.ul li{
		height: 5rem;
		border-bottom: 1px solid #ddd;
		padding: 1.5rem 0;
		background: white;
		box-sizing: border-box;
	}
	.ul li img{
		width: 2rem;
		margin-right: 1rem;
	}
	.ul li>div>.left>div{
		height:0.4rem;
		width: 5rem;
		background: #aaa;
		margin-top: 0.4rem;
		border-radius: 3px;
	}
	.left>h4{
		margin-right: 0.6rem;
	}
	.right{
		padding-right: 0.8rem;
	}
	.right p{
		height: 2rem;
		line-height: 2rem;
	}
	.bzjl{
		padding-left: 1rem;
		background: white;
	}
	.bzjl li{
		border-bottom: 1px solid #ddd;
		padding: 0.8rem 0;
	}
	.bzjl li img{
		height: 2rem;
		padding-right: 1rem;
	}
	.bzjl li .sl-1 span{
		color: #f08c34;
	}
	.bzjl li .jdt{
		height: 0.3rem;
		border-radius: 8px;
		margin-top: 0.5rem;
		background: #cdcdcd;
	}
	.bzjl li .jdt-1{
		width: 4rem;
		background: #ff6b3d;
	}
	.bzjl li .jdt-2{
		width: 8rem;
	}
	.bzjl li .jdt-3{
		width: 6rem;
	}
	.bzjl li .jdt-4{
		width: 10rem;
	}
	.bzjl li .right{
		padding-top: 0.4rem;
		color: #666;
	}
	.bzjl li .right span{
		font-weight: 800;
	}
	.mint-tab-item-label{
		text-align: center;
	}
	.foot .mint-tab-item{
		    padding: 7px 0;
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