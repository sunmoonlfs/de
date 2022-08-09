// var liste=document.getElementsByTagName('li')
//             var boxs=document.getElementsByTagName('p')
//             for(var i=0;i<liste.length;i++){
//                 // 自定义标签属性
//                 liste[i].setAttribute('index',i)
//                 liste[i].onmouseenter=function(){
//                     // 点击的时候，获取属性
//                     var t1=this.getAttribute('index')
//                     for(t=0;t<liste.length;t++){
//                         liste[t].removeAttribute('class')
//                         boxs[t].removeAttribute('class')
//                     }
//                     boxs[t1].setAttribute('class','rent')
//                     this.setAttribute('class','rent')
//                 }
//             }
var liste=document.getElementById('bot').children
var boxx=document.getElementById('boot').children
                for(var i=0;i<liste.length;i++){
                    liste[i].setAttribute('index',i)
                    liste[i].onmouseenter=function(){
                        var t1=this.getAttribute('index')
                        console.log(t1)
                        for(t=0;t<liste.length;t++){
                            liste[t].removeAttribute('class')
                            boxx[t].removeAttribute('class')
                        }
                        boxx[t1].setAttribute('class','rent')
                        this.setAttribute('class','rent')
                    }
                }
var lite=document.getElementsByClassName('btm')[0].children[0].children
var bxx=document.getElementsByClassName('ti')[0].children
                for(var i=0;i<lite.length;i++){
                    lite[i].setAttribute('index',i)
                    lite[i].onmouseenter=function(){
                        var t1=this.getAttribute('index')
                        console.log(t1)
                        for(t=0;t<lite.length;t++){
                                lite[t].removeAttribute('id')
                                bxx[t].removeAttribute('class')
                        }
                        bxx[t1].setAttribute('class','ness')
                        this.setAttribute('id','ness')
                    }
                }
var lit=document.getElementsByClassName('titl')[0].children
var bxs=document.getElementsByClassName('moon')[0].children
                for(var i=0;i<lit.length;i++){
                    lit[i].setAttribute('index',i)
                    lit[i].onmouseenter=function(){
                        var t1=this.getAttribute('index')
                        console.log(t1)
                        for(t=0;t<lit.length;t++){
                                lit[t].removeAttribute('class')
                                bxs[t].removeAttribute('id')
                        }
                        bxs[t1].setAttribute('id','clik')
                        this.setAttribute('class','dd')
                    }
                }
var litt=document.getElementsByClassName('titls')[0].children
var bxst=document.getElementsByClassName('moons')[0].children
                for(var i=0;i<litt.length;i++){
                    litt[i].setAttribute('index',i)
                    litt[i].onmouseenter=function(){
                        var t1=this.getAttribute('index')
                        console.log(t1)
                        for(t=0;t<litt.length;t++){
                                litt[t].removeAttribute('class')
                                bxst[t].removeAttribute('id')
                        }
                        bxst[t1].setAttribute('id','clik')
                        this.setAttribute('class','dd')
                    }
                }
var litet=document.getElementsByClassName('btms')[0].children[0].children
var bxxt=document.getElementsByClassName('tis')[0].children
                for(var i=0;i<litet.length;i++){
                    litet[i].setAttribute('index',i)
                    litet[i].onmouseenter=function(){
                        var t1=this.getAttribute('index')
                        console.log(t1)
                        for(t=0;t<litet.length;t++){
                                litet[t].removeAttribute('id')
                                bxxt[t].removeAttribute('class')
                        }
                        bxxt[t1].setAttribute('class','ness')
                        this.setAttribute('id','ness')
                    }
                }
var liet=document.getElementsByClassName('nice')[0].children
var bxt=document.getElementsByClassName('big')[0].children
                for(var i=0;i<liet.length;i++){
                    liet[i].setAttribute('index',i)
                    liet[i].onclick=function(){
                        var t1=this.getAttribute('index')
                        console.log(t1)
                        for(t=0;t<liet.length;t++){
                                liet[t].removeAttribute('class')
                                bxt[t].removeAttribute('class')
                        }
                        bxt[t1].setAttribute('class','hot')
                        liet[t1].setAttribute('class','hot')
                    }
                }
var lot=document.getElementsByClassName('toto')[0].children
var bet=document.getElementsByClassName('sect')[0].children
                for(var i=0;i<lot.length;i++){
                    lot[i].setAttribute('index',i)
                    lot[i].onmouseenter=function(){
                        var t1=this.getAttribute('index')
                        console.log(t1)
                        for(t=0;t<lot.length;t++){
                                lot[t].removeAttribute('id')
                                bet[t].removeAttribute('id')
                        }
                        bet[t1].setAttribute('id','end')
                        this.setAttribute('id','end')
                    }
                }
