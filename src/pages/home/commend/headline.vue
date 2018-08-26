<template>
	<div class="headline-background">
		<div class="headline ">
			<div class="headline-left">
				<p id="study">学习</p>
				<div id="font">头条</div>
			</div>
			<div class="headline-right clearfix">
				<ul>
					<li>3种常见的代码规范</li>
					<li>别打我！常见的DOM打地鼠</li>
					<li>多线程并发的使用、学习与测试</li>
					<li>消息队列beanstalked解析</li>
					<li>【漫画】永远无法预见的未来~</li>
					<li>如影随行的设计模式与现实世界</li>
					<li>别打我！常见的DOM打地鼠</li>
					<li>多线程并发的使用、学习与测试</li>
					<li>消息队列beanstalked解析</li>
					<li>别打我！常见的DOM打地鼠</li>
					<li>多线程并发的使用、学习与测试</li>
					<li>消息队列beanstalked解析</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.headline-background{
	background-color: rgba(153,153,153,0.2);
	padding-top: 0.7rem;
	padding-bottom: 0.7rem;
}
.headline{
	background-color: white;
}
.headline{
	display: flex;
	padding-top: 1rem;
	padding-bottom: 1rem;
	flex-flow: row nowrap;
	align-items: center;
}

.headline-left{
	font-size: 1.5rem;
	font-weight: bolder;
	margin-left: 1.5rem;
	width: 5rem;
}
#font{
	display: block;
	background-color: red;
	border-radius: 0.2rem;
	color: white;
	text-align: center;
}
#study{
	text-align: center;
}
.headline-right{
	margin-left: 2.5rem;
	margin-top: 0.5rem;
	height: 3.7rem;
	overflow: hidden;
	position: relative;
	width: 70%;
}
ul li{
	margin-top: 0.5rem;
}
ul{
	width: 15rem;
	height:100%;
	position: absolute;
	top: 0;
	left: 0;
	animation: roll 24s linear infinite ;
}
@keyframes roll{
	0{
		top:0
	}
	12%{
		top:0rem
	}
	16.6%{
		top:-3.7rem
	}
	28.7%{
		top: -3.7rem;
	}
	33.3%{
		top: -7.4rem;
	}
	45.4%{
		top: -7.4rem;
	}
	50%{
		top: -11.1rem;
	}
	62.1%{
		top: -11.1rem;
	}
	66.7%{
		top: -14.8rem;
	}78.7%{
		top: -14.8rem;
	}
	83.3%{
		top: -18.5rem;
	}100%{
		top: -18.5rem;
	}

}
</style>