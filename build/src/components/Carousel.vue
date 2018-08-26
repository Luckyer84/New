<template>
	<el-carousel :interval="4000" type="card" height="60px">
    <el-carousel-item v-for="item in list" >
    	 <a href="#"><img v-bind:src="item.src" /></a>
    </el-carousel-item>
 </el-carousel>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{src: require("../images/home/huadong1.jpg")},
					{src:require('../images/home/huadong2.jpg')},
					{src:require('../images/home/huadong3.jpg')},
					{src:require('../images/home/huadong4.jpg')}
					]
			}
		}
	}
</script>

<style scoped>

</style>