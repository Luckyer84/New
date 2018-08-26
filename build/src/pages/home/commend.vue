<template>
	<div class="commend-all">
		<carousel-item></carousel-item>
        <div class="home-body">
        	 <div class="alert">
        	 	<icon name="laba" height="1rem" width="1rem" ></icon>
        	 	<span>新人福利，35元礼包等你来拿</span>
        	 </div>
        <!--实战推荐-->
       		 <actual-recom></actual-recom>
       		 <headline-item></headline-item>
       		 <newclass-item></newclass-item>
        </div>
	</div>
</template>

<script>
	import '../../mixins/home.js'
	import Carousel from'../../components/Carousel'
	/*import luBo from'../../components/lunbo'*/
	import actualRecom from'./commend/actualRecom'
	import headline from'./commend/headline'
	import newClass from'./commend/newClass'
	
	export default{
		data (){
			return {
			
			}
		},

		components:{
//			'lobo-item':luBo,
			'carousel-item':Carousel,
			'actual-recom':actualRecom,
			'headline-item':headline,
			'newclass-item':newClass
		}
	}
</script>

<style>
	.alert{
		display: flex;
		align-items: center;
	}
	.alert span{
		color: rgba(0,0,0,0.7);
		font-size: 0.5rem;
	}
</style>