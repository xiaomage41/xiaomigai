window.onload=function(){
	// 头部选项卡
	let head_car=document.getElementsByClassName("head_car")[0];
	let head_cars=document.getElementsByClassName("head_cars")[0];
	head_car.onmouseenter=function(){
		head_cars.style.display="block";
	}
	head_car.onmouseleave=function(){
		head_cars.style.display="none";
	}
	// 导航选项卡
	let nav=document.getElementsByClassName("nav")[0];
	let span=nav.getElementsByTagName("span");
	let nav_kk=nav.getElementsByClassName("nav_kk");
	
		for(let i=0;i<span.length-2;i++){

			span[i].onmouseenter=function(){
			nav_kk[i].style.display="block"
			}
			span[i].onmouseleave=function(){
			nav_kk[i].style.display="none"
			}
		}
		// 侧导航选项卡
		let banner=document.getElementById("banner");
		let li=banner.getElementsByTagName("li");
		let banner_ss=banner.getElementsByClassName("banner_ss");
		for(let i=0;i<li.length;i++){
			li[i].onmouseenter=function(){
			banner_ss[i].style.display="block";
			}
			li[i].onmouseleave=function(){
			banner_ss[i].style.display="none";
			}
		}
		//块选项卡
		
		let peijian=document.getElementsByClassName("peijian");
		for(let k=0;k<peijian.length;k++){

		let x=peijian[k].getElementsByClassName("x");
		let zhineng_bottom1=peijian[k].getElementsByClassName("zhineng_bottom1")	
		for(let i=0;i<x.length;i++){
			x[i].onmouseenter=function(){
				for(let j=0;j<x.length;j++){
					x[j].style.color= "black";
					zhineng_bottom1[j].style.display="none";
    				 x[j].style.borderBottom=" none";
				}
			x[i].style.color= "#ff6700";
    		x[i].style.borderBottom="2px solid #ff6700";	
			zhineng_bottom1[i].style.display="block";
		}  
		}
	}


	//轮播图选项卡
	let bann=document.getElementById("banner");
	let banner_lbtn=document.getElementsByClassName("banner_lbtn")[0]	
	let banner_rbtn=document.getElementsByClassName("banner_rbtn")[0]	
	let y=banner.getElementsByClassName("y");
	let banner_yuan=banner.getElementsByClassName("banner_yuan")	
	let num=0;
	let t=setInterval(move,2000);
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);	
	}
	function move(){
		num++;
		if(num==y.length){
			num=0;
		}
		for(i=0;i<y.length;i++){
			y[i].style.zIndex=5;
			banner_yuan[i].className=" banner_yuan"
		}
		y[num].style.zIndex=10;
		banner_yuan[num].className="banner_yuan hot"
	}
	function move1(){
		num--;
		if(num<0){
			num=y.length-1;
		}
		for(i=0;i<y.length;i++){
			y[i].style.zIndex=5;
			banner_yuan[i].className=" banner_yuan"
		}
		y[num].style.zIndex=10;
		banner_yuan[num].className="banner_yuan hot"
	}
 	banner_rbtn.onclick=function(){
 		move();
 	}
 	banner_lbtn.onclick=function(){
 		move1();
 	}

 	for(let j=0;j<banner_yuan.length;j++){
 		banner_yuan[j].onclick=function(){
 			for(let i=0;i<banner_yuan.length;i++){
 				y[i].style.zIndex=5;
 			banner_yuan[i].className="banner_yuan";
 			}
 			y[j].style.zIndex=10;
 			banner_yuan[j].className="banner_yuan hot";

 			num=j;
 		}

 	}

 	//双下标轮播图
 	
 	let neirong_k=document.querySelectorAll(".neirong_k")
 	console.log(neirong_k)
 	fn(neirong_k[0])
 	fn(neirong_k[1])
 	for (let i=0;i<neirong_k.length;i++){
 		fn(neirong_k[i]);
 	}
 	function fn(obj){
	 	let neirong_item=obj.querySelectorAll(".neirong_item")
	 	let widths=parseInt(getComputedStyle(neirong_item[0],null).width); 	
	 	let neirong_lbtn= obj.querySelector(".neirong_lbtn");
	 	let neirong_rbtn= obj.querySelector(".neirong_rbtn");
	 	let neirongxiaodian= obj.querySelectorAll(".neirongxiaodian")
	 	let now=0;
	 	let next=0;
	 	let flag=true;	
	 	function move2(){
	 		next++;
	 		if(next==neirong_item.length){
	 			next=0;
	 		}
	 		neirong_item[next].style.left=widths+"px";
	 		animate(neirong_item[now],{left:-widths});
	 		animate(neirong_item[next],{left:0},function(){
	 			flag=true;
	 		});
	 		neirongxiaodian[now].classList.remove("quan");
					neirongxiaodian[next].classList.add("quan");
	 		now=next;
	 	}
	 	function move3(){
	 		next--;
	 		if(next<0){
	 			next=neirong_item.length-1;
	 		}
	 		neirong_item[next].style.left=-widths+"px";
	 		animate(neirong_item[now],{left:widths});
	 		animate(neirong_item[next],{left:0},function(){
	 			flag=true;
	 		});
	 		neirongxiaodian[now].classList.remove("quan");
					neirongxiaodian[next].classList.add("quan");
			now=next;
	 	}
	 	neirong_rbtn.onclick=function(){
	 		if(flag==false){
				return;
			}
			if(next==neirongxiaodian.length-1){
				return;
			}
			flag=false;
	 		move2()
	 	}

	 	neirong_lbtn.onclick=function(){
	 		if(flag==false){
				return;
			}
			if(next==0){
				return;
			}
			flag=false;
	 		move3()
	 	}
	 	neirongxiaodian.forEach(function(elements,index){
	 		elements.onclick=function(){
	 			if(index==now){
	 				return;
	 			}
	 			if(index<now){
	 				neirong_item[index].style.left=-widths+"px";
	 				animate(neirong_item[now],{left:widths});
	 				animate(neirong_item[index],{left:0});
	 				neirongxiaodian[now].classList.remove("quan");
					neirongxiaodian[index].classList.add("quan");
	 				now=next=index;
	 			}
	 			if(index>now){
					neirong_item[index].style.left=widths+"px";
					animate(neirong_item[now],{left:-widths});
					animate(neirong_item[index],{left:0});
					neirongxiaodian[now].classList.remove("quan");
					neirongxiaodian[index].classList.add("quan");
					now=next=index;
				}
	 	}
	 	})
	 }
 	//明星选项卡
 	let star_btn=document.querySelector(".star_btn")
 	let button=document.getElementsByTagName("button")
 	let star_ttt=document.querySelector(".star_ttt")
 	let star_tttwidth=parseInt(getComputedStyle(star_ttt,null).width)/2
 	console.log(star_tttwidth)
 	let times=0;

 	button[1].onclick=function(){
 		times++;
 		if(times>1){
 			times=1;
 		}
 		star_ttt.style.transform='translateX('+(-star_tttwidth*times)+'px)';

 	}
 	button[0].onclick=function(){
 		times--;
 		if(times<0){
 			times=0;
 		}
 		star_ttt.style.transform='translateX('+(-star_tttwidth*times)+'px)';

 	}




















}















// let hide = function(){
	
// 	let eles=document.querySelector(".head_cars");
// 	eles.style.display = 'block';
// }
// let leave = function(){
// 	let eles=document.querySelector(".head_cars");
// 	eles.style.display = 'none';
// }

