<template>
	<div class="body-main">
		<div class="roll">
			<div class="img-wrap">
				<figure><img src="../images/home/huadong1.jpg"/></figure>
				<figure><img src="../images/home/huadong2.jpg"/></figure>
				<figure><img src="../images/home/huadong3.jpg"/></figure>
				<figure><img src="../images/home/huadong4.jpg"/></figure>
			</div>
			<ul id="blackPoint">
					<li></li><li></li><li></li><li></li>
			</ul>
		</div>
		
	</div>	
</template>

<script>

</script>

<style scoped>
	.body-main{
		margin: 0 -1.5rem 0 -1.5rem;
	}
	.roll{
	
		height: 12.3rem;
		width: 100%;
		overflow: hidden;
	}
	.img-wrap{
		height: 100%;
		width: 100%;
		position: relative;
	
		transform: translateX(-23.54rem);
		margin-top: 2rem;	
	}
	figure{
		height: 8.333rem;
		width: 26.667rem;
		position: absolute;
		top: 0;
		left: 0;
	}
	img{
		width: 25rem;
		height: 8.333rem;
		border-radius:0.5rem;
	}
/*	figure{
		position: absolute;
		left:-25.2rem;

		width: 167rem;
		transform-style:preserve-3d;
		margin-top: 2rem;
	}
	img{
		border-radius:0.5rem;
		margin-left: 1.667rem;
		float: left;
		width: 25rem;
		height: 8.33rem;
	}
	#blackPoint{
		position: absolute;
		bottom: 2rem;
		left: 40%;
		z-index: 999;
		
	}*/
	#blackPoint>li{
		display: inline-block;
		list-style-type: none;
		height:0.7rem;
		width: 0.7rem;
		background-color: rgba(255,255,255,0.3);
		margin-left: 1rem;
		border-radius: 50%;
	}
</style>