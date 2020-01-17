"use strict";
let moonTimer= setInterval(moonspon, 50);
let starTimer= setInterval(starspon, 50);
let starttimer= setInterval(starttimera,1000);
let checker;
let checker2=0;
let a=0;
let b=0, c=0;
function moonspon(){
  a=a+1;
    
    
moon.style="transform: rotate("+a+"deg);";
  
}
function starspon(){
  b=b+2;
    
    
star.style="transform: rotate("+b+"deg);";
  
  
}
function starttimera(){
c++;
starta.style=" opacity:0;";
    if (c=54
       ){
        starta.style=" opacity:1;";
        c=0;
    }
   if (checker==1&&checker2!=0){let nextPage=setInterval(nexter, 1000);}
}
document.addEventListener("scroll", function(){
if (window.scrollY>1150){
    texti.style.opacity="1";
}
if (window.scrollY>2100) {
 
} 
    
    
});
let wraping=0;
let stopper=true;
wrap.addEventListener("click", function(){
  stopper=true;
    if (wraping>=1&&stopper==true){
    onwrap.style.display="none";
    wraping--;
       stopper=false;
}  
    if (wraping<=0&&stopper==true){
    onwrap.style.display="block";
    wraping++;
        stopper=false;
}  
 
                   
                 
   
    
});
//Код уменьшения
let scaleTimer=setInterval(scale, 10);
function scale(){
        if (window.screen.width<=480){
        caption.style.clear;
                big.style.clear;
              wrap.style.clear;
              bgall.style.clear;
              caption.style.clear;
              car.style.clear;
              head.style.clear;
              higher.style.clear;
              moon.style.clear;
              logo.style.clear;
       head.style.height="150px";
       wrap.style.display="block";
       stylewrap.style.display="none";
     
              
       if (window.scrollY>=400){
        starta.style.opacity='0';
       } else big.style.opacity='1';
        if (window.scrollY>=2100){
         big.style.opacity='0';
        } else big.style.opacity='1';
    if (window.scrollY>=6200&&window.scrollY<=8284){
        car.style.opacity='1';
    } else  car.style.opacity='0';
     if (window.scrollY>=2600){
        head.style.display='none';
    } else   head.style.display='block';
      upper.classList.remove("upperModern");
        upper.classList.add("upper");
      
         downer.classList.remove("downerModern");
       downer.classList.add("downer"); 
    }//телефоны
    
    
    if (window.screen.width>480&&window.screen.width<=767){
     caption.style.clear;
                big.style.clear;
              wrap.style.clear;
              bgall.style.clear;
              caption.style.clear;
              car.style.clear;
              head.style.clear;
              higher.style.clear;
              moon.style.clear;
              logo.style.clear;
              
        
        wrap.style.left="75%";
           head.style.height="150px";
           wrap.style.display="block";
             stylewrap.style.display="none";
       starta.style.top="1495px";
        big.style.left="5%";
        car.style.left="25%";
        upper.classList.remove("upper");
        upper.classList.add("upperModern");
        upper.classList.add("upperModern");
         downer.classList.remove("downer1");
       downer.classList.add("downerModern");
           if (window.scrollY>=400){
        starta.style.opacity='0';
       } else big.style.opacity='1';
        if (window.scrollY>=2100){
         big.style.opacity='0';
        } else big.style.opacity='1';
    if (window.scrollY>=6285&&window.scrollY<=8350){
        car.style.opacity='1';
    } else  car.style.opacity='0';
     if (window.scrollY>=2600){
        head.style.display='none';
    } else   head.style.display='block';
    
        
    }//телефоны перевернутые
          if (window.screen.width>767&&window.screen.width<=1023){
    caption.style.clear;
                big.style.clear;
              wrap.style.clear;
              bgall.style.clear;
              caption.style.clear;
              car.style.clear;
              head.style.clear;
              higher.style.clear;
              moon.style.clear;
              logo.style.clear;
              
              
              
              wrap.style.left="75%";
              head.style.height="150px";
                  wrap.style.display="block";
                   stylewrap.style.display="none";
       starta.style.top="1495px";
        big.style.left="5%";
        car.style.left="25%";
        upper.classList.remove("upper");
        upper.classList.add("upperModern");
        upper.classList.add("upperModern");
         downer.classList.remove("downer1");
       downer.classList.add("downerModern");
           if (window.scrollY>=400){
        starta.style.opacity='0';
       } else big.style.opacity='1';
        if (window.scrollY>=2100){
         big.style.opacity='0';
        } else big.style.opacity='1';
    if (window.scrollY>=6285&&window.scrollY<=8350){
        car.style.opacity='1';
    } else  car.style.opacity='0';
     if (window.scrollY>=2600){
        head.style.display='none';
    } else   head.style.display='block';
    
        
    }//планшеты
            if (window.screen.width>1023){
     wrap.style.display="none";
       starta.style.top="1495px";
        big.style.left="10%";
            big.style.top="5%";
                bgall.style.width="100%";
                bgall.style.left="0px";
                bgall.style.backgroundSize="contain";
                bgall.style.height="5999px";
                higher.style.height="6150px";
                moon.style.left="1px";
                big.style.fontSize="200px";
                stylewrap.style.display="flex";
        car.style.left="25%";
                upper.style.top="1600px";
                downer.style.top="3500px";
                texti.style.top="2500px";
                texti.style.left="5%";
                texti.style.fontSize="25px";
       logo.classList.remove("logo");
                logo.classList.add("logoSmall")
              head.style.height="50px";  
                car.style.width="159px";
                car.style.backgroundSize="contain";
                car.style.left="41%";
                  car.style.height="301px";
                caption.style.top="4000px";
                caption.style.width="750px";
                  caption.style.height="350px";
                caption.style.fontSize="35px";
                caption.style.left="25%";
           if (window.scrollY>=0){
        starta.style.opacity='0';
       } else big.style.opacity='1';
        if (window.scrollY>=1800){
         big.style.opacity='0';
        } else big.style.opacity='1';
    if (window.scrollY>=4200&&window.scrollY<=5200){
        car.style.opacity='1';
    } else  car.style.opacity='0';
     if (window.scrollY>=1800){
        head.style.display='none';
    } else   head.style.display='block';
    if (window.scrollY>=5400){
     
        message.style.display="block";
        window.location.href="/next-page-2"
        
    } else message.style.display="none";
        
    }//Компы
    
}
