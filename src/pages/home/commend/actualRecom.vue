<template>
	<div>
		<div class="recom-title">
			<span class="recom-title-left">实战推荐</span>
				<router-link :to="{name:'person'}">更多</router-link>
		</div>
		<div class="recom-tips">
			<div class="recom-tips-left">
				<router-link :to="{name:'recomVue'}">
					<section>
						<p>Vue2.5开发去哪儿网</p>
						<p>App 从零基础入门...</p>
						<br />
						<div class="recom-tips-left-bottom">
							<span>￥200</span>&nbsp;&nbsp;
							<icon name="home-recom-personGreen" height="1rem" width="1rem"></icon>
							<span>2768</span>&nbsp;
							<icon name="home-recom-vue" height="2.5rem" width="2.5rem"></icon>
						</div>
					</section>
				</router-link>
			</div>	
			<div class="recom-tips-right">
				<el-badge value="new" class="item item1">
					<router-link :to="{name:'recomJava'}">
						<section>
						<p>java设计模式精讲</p>
						<p>Debug 内存分析...</p>
						<br />
						<div class="recom-tips-right-bottom">
							<span>￥230</span>&nbsp;&nbsp;
							<icon name="home-recom-personRed" height="1rem" width="1rem"></icon>&nbsp;
							<span>235</span>&nbsp;
							<icon name="home-recom-java" height="2.5rem" width="2.5rem"></icon>
						</div>
					</section>		
					</router-link>
				</el-badge>
			</div>
		</div>
		<!--下面三个模块-->
		<div class="recom-article">
			<div class="section section-one">
				<router-link :to="{name:''}" class="recom-contain">
					<div class="section-left">
						<icon name="home-recom-dataStructure" width="8rem" height="5rem"></icon>
					</div>
					<div class="section-right">
						<p>玩转数据结构 从入门到进阶</p>
						<p class="price">￥236   中级</p>
					</div>
				</router-link>
			</div>
			<div class="section section-two">
					<router-link :to="{name:''}" class="recom-contain">
						<el-badge value="new" class="item item2">
							<div class="section-left">
								<icon name="home-recom-roob" width="8rem" height="5rem"></icon>
							</div>
						</el-badge>
						<div class="section-right">
							<p>NLP 实践 TensorFlow 打造聊天机器人</p>
							<p class="price">￥348   中级</p>
						</div>
					</router-link>
			</div>
			<div class="section section-three">
				<router-link :to="{name:''}" class="recom-contain">
					<div class="section-left">
						<icon name="home-recom-python" width="8rem" height="5rem"></icon>
					</div>
					<div class="section-right">
						<p>Pyhon3入门+进阶 更快上手</p>
							<p class="price">￥366   中级</p>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
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
		background-color: rgba(51,204,0,0.1);
		padding: 1rem;
		border-radius:0.5rem ;
	}
	.recom-tips-right{
		width: 40%;
		background-color: rgba(255,0,51,0.1);
		padding: 1rem;	
	}
	.recom-tips-left section{
		color:rgba(51,204,0,1)
	}
	.recom-tips-right section{
		color:red ;
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