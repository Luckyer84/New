(function () {
   document.addEventListener('DOMContentLoaded', function () {
	var deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var ft=document.documentElement.style.fontSize ;
	document.documentElement.style.fontSize = deviceWidth / 31.25+ 'px';
   		}, false);
   		
window.onresize = function(){
var deviceWidth = document.documentElement.clientWidth;
document.documentElement.style.fontSize = deviceWidth / 31.25+ 'px';
};
})();

/*let roll=(function(){
				let width=0;
				let ft=parseInt(document.documentElement.style.fontSize) ;//获取字体大小 换算成rem
				let deviceWidth = document.documentElement.clientWidth ;//375
				let fuWidth = $(".container-box").width();//830
				$(".tagAll").on('touchstart', function(e){//手指 触摸
       				startX = e.originalEvent.changedTouches[0].pageX;	
					}),
				$(".tagAll").on('touchend',function(e){//手指 离开
       				 moveEndX = e.originalEvent.changedTouches[0].pageX;
       				let slideNum =parseInt((moveEndX-startX)/ft);//滑动的距离
       				let width=parseInt($(this).position().left/ft);//当前位置
       				let widthall=width+slideNum + 'rem';//最终距离
       				let x=moveEndX-startX;
       				 if(x>20){//右滑
		       				 	if(width<=2){
		       				 		$(this).animate({left:widthall},function(){
		       				 			let width1=parseInt($(this).position().left/ft);//需要再次判断当前的位置，用回调函数进行动画。很重要！！！！！
		       				 				if(width1>0){
		       				 					$(this).animate({left:'0'});
		       				 				}
		       				 			
		       				 		})
		       				 	}else{
		       				 		$(this).animate({left:'0'});
		       				 	}
       				 		}else if(x<-20){  //左滑
       				 	let outOfPart=-parseInt((fuWidth-deviceWidth)/ft) +'rem';
       				 		if(width>=outOfPart){
		       				 		$(this).animate({left:widthall});
		       				 }else{
		       				 		$(this).animate({left:outOfPart});
		       				 			}
       							 }
							})
				})()*/