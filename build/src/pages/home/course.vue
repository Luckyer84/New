<template>
	<div class="course-all">
		<div class="clearfix">
			<div class="course-tags">
				<el-menu :default-active="activeIndex" class="el-menu-demo tagAll" mode="horizontal" >
				  		<el-menu-item class="padding" index="1"><el-tag class="tag" type="danger">全部</el-tag></el-menu-item>
						  <el-menu-item index="2" class="padding" ><el-tag class="tag" >前沿技术</el-tag></el-menu-item>
						  <el-menu-item index="3" class="padding"><el-tag class="tag">前端开发</el-tag></el-menu-item>
						  <el-menu-item index="4" class="padding"><el-tag class="tag">后端开发</el-tag></el-menu-item>
						  <el-menu-item index="5" class="padding"><el-tag class="tag">移动开发</el-tag></el-menu-item>
						  <el-menu-item index="6" class="padding"><el-tag class="tag">云计算</el-tag></el-menu-item>
						  <el-menu-item index="7" class="padding"><el-tag class="tag">数据库</el-tag></el-menu-item>
				</el-menu>
			</div>
		</div>
		<div class="course-contain">
			
		</div>
	</div>
</template>

<script>
	
	import '../../mixins/home.js'
	
	 export default {
	    data() {
	      return {
	        activeIndex: '1',
	        activeIndex2: '1',
	        isShow:true
	      };
	    },
	
  }
</script>

<style scoped>
	.course-all{
		width: 100%;
		overflow: hidden;
	}
	.course-tags{
		position: absolute;
		top: 0;
		overflow: hidden;
		width: 31.25rem;
		margin-left: -1.5rem;
		-webkit-box-sizing: border-box;
		padding-left: 1rem;
	}
	.tagAll{
		display: flex;
		flex-flow: row nowrap;	
	}
	.tag{
		border-radius: 1.3rem;
	}
	.padding{
		padding: 0 0.5rem 0 ;
	}
.clearfix{
	position: relative;
	height: 6rem;
}
</style>