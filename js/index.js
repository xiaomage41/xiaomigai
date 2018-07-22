window.onload=function(){
	// 头部选项卡
	let head_car=document.getElementsByClassName("head_car")[0];
	console.log(head_car);
	let head_cars=document.getElementsByClassName("head_cars")[0];
	head_car.onmouseenter=function(){
		head_cars.style.display="block";
	}
	head_car.onmouseleave=function(){
		head_cars.style.display="none";
	}
	// 导航选项卡
	let nav=document.getElementsByClassName("nav")[0];
	console.log(nav);
	let span=nav.getElementsByTagName("span");
	console.log(span);
	let nav_kk=nav.getElementsByClassName("nav_kk");
	console.log(nav_kk);
	
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
		console.log(banner);
		let li=banner.getElementsByTagName("li");
		console.log(li);
		let banner_ss=banner.getElementsByClassName("banner_ss");
		console.log(banner_ss);
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
		console.log(peijian);
		for(let k=0;k<peijian.length;k++){

		let x=peijian[k].getElementsByClassName("x");
		console.log(x);
		let zhineng_bottom1=peijian[k].getElementsByClassName("zhineng_bottom1");
		console.log(zhineng_bottom1);

		
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












}














// let hide = function(){
	
// 	let eles=document.querySelector(".head_cars");
// 	eles.style.display = 'block';
// }
// let leave = function(){
// 	let eles=document.querySelector(".head_cars");
// 	eles.style.display = 'none';
// }

