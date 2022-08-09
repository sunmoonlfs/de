
var box=document.getElementById('boxd');
var list=document.getElementById('lists').children
var num=0;
var timer;
function go(){
        timer=setInterval(function(){
                    num++;
                    if(num==5){num=0};
                    box.style.transform='translateX('+-num*450+'px)';
                    for(t=0;t<list.length;t++){
                        list[t].removeAttribute('class')
                    }
                    list[num].setAttribute('class','current')
                },2100)
            }
            go()
                for(var i=0;i<list.length;i++){
                    list[i].setAttribute('index',i)
                    list[i].onmouseenter=function(){
                    num=this.getAttribute('index')
                    for(t=0;t<list.length;t++){
                        list[t].removeAttribute('class')
                        box.children[t].removeAttribute('class')
                    }
                    list[num].setAttribute('class','current')
                    box.style.transform='translateX('+-num*450+'px)';
                }
            
}
var bobo=document.getElementById('bobo');
var lis=document.getElementById('lis').children
var num1=0;
var timer1;
function go1(){
        timer1=setInterval(function(){
            console.log(num1)
                    num1++;
                    if(num1==4){num1=0};
                    bobo.style.transform='translateX('+-num1*450+'px)';
                    for(t=0;t<lis.length;t++){
                        lis[t].removeAttribute('class')
                    }
                    lis[num1].setAttribute('class','ent')
                },2100)
            }
            go1()
                for(var i=0;i<lis.length;i++){
                    lis[i].setAttribute('index',i)
                    console.log(lis[i])
                    lis[i].onmouseenter=function(){
                    num1=this.getAttribute('index')
                    for(t=0;t<lis.length;t++){
                        lis[t].removeAttribute('class')
                        bobo.children[t].removeAttribute('class')
                    }
                    lis[num1].setAttribute('class','ent')
                    bobo.style.transform='translateX('+-num1*450+'px)';
                }
            
}