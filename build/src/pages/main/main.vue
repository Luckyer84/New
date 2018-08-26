<template>
	<div id="container-main">
		<div class="body">
			<router-view></router-view>
		</div>
		
		<div class="footer">
			<div class="flex" >
				<router-link :to="{name:'commend'}">
					<icon name="main_white" height="2rem" width="2rem" ></icon><p>首页</p>	
				</router-link>
				<router-link :to="{name:'search'}">
					<icon name="main_search" height="2rem" width="2rem"></icon><p>发现</p>
				</router-link>
				<router-link :to="{name:'load'}">
					<icon name="main_load" height="2rem" width="2rem"></icon><p>下载</p>
				</router-link>
				<router-link :to="{name:'person'}">
					<icon name="main_person" height="2rem" width="2rem"></icon><p>我的</p>
				</router-link>
			</div>

		</div>
		
	</div>
</template>

<script>
	export default{
		data (){
			return{
			
			}
		},
		methods:{
		
			}
		}
	
</script>

<style scoped>
	.footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		background-color: white;
		/*border: 1px solid black;*/
	}
	.flex{
		display: flex;
		justify-content: space-around;
	}
	.body{
		margin-bottom: 4rem;
	}
	#underline{
		width: 2rem;
		border: 1px solid red;
		height: 1px;
	}
</style>