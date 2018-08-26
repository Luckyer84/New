<template>
	<div id="container-main">
		<div class="body">
			<router-view></router-view>
		</div>
		
		<div class="footer">
			<div class="flex" >
				<div @click="changeIcon(1)">
					<router-link :to="{name:'commend'}" >
						<icon name='main_first_white' height="2rem" width="2rem" v-show='isShowOne'></icon>
						<icon name='main_first_red' height="2rem" width="2rem" v-show='!isShowOne'></icon><p>首页</p>	
					</router-link>
				</div>
				
				<div @click="changeIcon(2)">
					<router-link :to="{name:'search'}">
						<icon name="main_search_white" height="2rem" width="2rem" v-show='isShowTwo'></icon>
						<icon name="main_search_red" height="2rem" width="2rem" v-show='!isShowTwo'></icon><p>发现</p>
					</router-link>
				</div>
				
				<div @click="changeIcon(3)">
					<router-link :to="{name:'load'}">
						<icon name="main_load_white" height="2rem" width="2rem" v-show='isShowThree'></icon>
						<icon name="main_load_red" height="2rem" width="2rem" v-show='!isShowThree'></icon><p>下载</p>
					</router-link>
				</div>
				
				<div @click="changeIcon(4)">
					<router-link :to="{name:'person'}">
						<icon name="main_person_white" height="2rem" width="2rem" v-show='isShowFour'></icon>
						<icon name="main_person_red" height="2rem" width="2rem" v-show='!isShowFour'></icon><p>我的</p>
					</router-link>
				</div>
			</div>
				
		</div>
	</div>
</template>

<script>
	export default{
		data (){
			return{
				isShowOne:true,
				isShowTwo:true,
				isShowThree:true,
				isShowFour:true,
			}
		},
		methods:{
				changeIcon:function(index){
					if(index===1){
						this.isShowOne=false;
						this.isShowTwo=true;
						this.isShowThree=true;
						this.isShowFour=true;
					}else if(index===2){
						this.isShowOne=true;
						this.isShowTwo=false;
						this.isShowThree=true;
						this.isShowFour=true;
					}else if(index===3){
						this.isShowOne=true;
						this.isShowTwo=true;
						this.isShowThree=false;
						this.isShowFour=true;
					}else{
						this.isShowOne=true;
						this.isShowTwo=true;
						this.isShowThree=true;
						this.isShowFour=false;
							}	
						}	
					},
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