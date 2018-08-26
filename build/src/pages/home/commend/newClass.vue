<template>
	<div>
		<div class="recom-title">
			<span class="recom-title-left">新手上课</span>
			<router-link :to="{name:''}">更多</router-link>
		</div>
		<div class="recom-tips">
			<div class="recom-tips-left">
				<router-link :to="{name:'recomVue'}">
					<section>
						<p>Vue.js 全方位深入解析</p>
						<p>打造新开篇</p>
						<br />
						<div class="recom-tips-left-bottom">
							<span>￥488</span>&nbsp;&nbsp;
							<icon name="home-recom-personGreen" height="1rem" width="1rem"></icon>
							<span>1250</span>&nbsp;
							<icon name="home-recom-vue" height="2.5rem" width="2.5rem"></icon>
						</div>
					</section>
				</router-link>
			</div>	
			<div class="recom-tips-right">
				<!--<el-badge value="new" class="item item1">-->
					<router-link :to="{name:'recomJava'}">
						<section>
						<p>Spring Boot2.0深度</p>
						<p>实践值核心技术篇</p>
						<br />
						<div class="recom-tips-right-bottom">
							<span>￥366</span>&nbsp;&nbsp;
							<icon name="home-recom-personRed" height="1rem" width="1rem"></icon>&nbsp;
							<span>340</span>&nbsp;
							<icon name="home-recom-java" height="2.5rem" width="2.5rem"></icon>
						</div>
					</section>		
					</router-link>
				<!--</el-badge>-->
			</div>
		</div>
		<!--下面三个模块-->
		<div class="recom-article">
			<div class="section section-one">
				<router-link :to="{name:''}" class="recom-contain">
					<el-badge value="new" class="item item2">
						<div class="section-left">
							<icon name="home-newclass-design" width="8rem" height="5rem"></icon>
						</div>
					</el-badge>
					<div class="section-right">
						<p>di多边形 (low poly) 设计风格</p>
						<p class="price">免费   初级</p>
					</div>
				</router-link>
			</div>
			<div class="section section-two">
					<router-link :to="{name:''}" class="recom-contain">
						<el-badge value="new" class="item item2">
							<div class="section-left">
								<icon name="home-newclass-automation" width="8rem" height="5rem"></icon>
							</div>
						</el-badge>
						<div class="section-right">
							<p>Selenium3与Python3实战web</p>
							<p>自动化测试与框架</p>
							<p class="price">￥348   中级</p>
						</div>
					</router-link>
			</div>
			<div class="section section-three">
				<router-link :to="{name:''}" class="recom-contain">
					<div class="section-left">
						<icon name="home-newclass-cloud" width="8rem" height="5rem"></icon>
					</div>
					<div class="section-right">
						<p>学习Hyperledger Fabric 实战联盟链</p>
							<p class="price">￥366   中级</p>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.recom-title{
		display: flex;
		justify-content: space-between;
		flex-wrap:nowrap;
		margin-top: 1rem;
	}
	.recom-title-left{
		font-weight: 500;
		font-size: 1.2rem;
	}
	.recom-tips{
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		margin-top: 1rem;
	}
	.recom-tips-left{
		width: 40%;
		background-color: rgba(0,204,255,0.1);
		padding: 1rem;
		border-radius:0.5rem ;
	}
	.recom-tips-right{
		width: 40%;
		background-color: rgba(255,153,0,0.2);
		padding: 1rem;	
	}
	.recom-tips-left section{
		color:rgba(0,204,255,0.7)
	}
	.recom-tips-right section{
		color:rgba(255,153,0,0.7);
	}
	.item1{
		padding-right: 2rem;
	}
	.recom-tips-right-bottom,
	.recom-tips-left-bottom{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.recom-article{
		margin-top: 1rem;
	}
	.recom-contain{
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
	.section{
		margin-top: 1rem;
	}
	.price{
		margin-top: 0.5rem;
		font-size: 0.5rem;
		color: rgba(0,0,0,0.5);
	}
	.section-right{
		margin-left: 2rem;
	}
</style>
