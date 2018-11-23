var current=0
var n=0
var timer

$('.btnWrapper>span').eq(0).click(function(){
    curent=0
    $('.imgWrapper').css({'margin-left':'0'})
    $('.btnWrapper>span').eq(0).addClass('active').siblings().removeClass('active')
})
$('.btnWrapper>span').eq(1).click(function(){
    curent=1
    $('.imgWrapper').css({'margin-left':'-920px'})
    $('.btnWrapper>span').eq(1).addClass('active').siblings().removeClass('active')
})
$('.btnWrapper>span').eq(2).click(function(){
    curent=2
    $('.imgWrapper').css({'margin-left':'-1840px'})
    $('.btnWrapper>span').eq(2).addClass('active').siblings().removeClass('active')
})
$('.btnWrapper>span').eq(3).click(function(){
    curent=3
    $('.imgWrapper').css({'margin-left':'-2760px'})
    $('.btnWrapper>span').eq(3).addClass('active').siblings().removeClass('active')
})

// $('#firstImg').click(function(){
//     curent=1
//     $('.imgWrapper').css({'margin-left':'0'})
//     $('#firstImg').addClass('active').siblings().removeClass('active')
// })
// $('#secondImg').click(function(){  
//     $('.imgWrapper').css({'margin-left':'-920px'})
//     curent=2
//     $('#secondImg').addClass('active').siblings().removeClass('active')
// })
// $('#thirdImg').click(function(){
//     $('.imgWrapper').css({'margin-left':'-1840px'})
//     curent=3
//     $('#thirdImg').addClass('active').siblings().removeClass('active')
// })
// $('#fourthImg').click(function(){ 
//     $('.imgWrapper').css({'margin-left':'-2760px'})
//     curent=4
//     $('#fourthImg').addClass('active').siblings().removeClass('active')
// })



timer=setInterval(function(){
    doClick()
   
},1500)
 

function doClick(){
    if(n==4){
        n=0;
    }
    console.log(1)
    $('.btnWrapper>span').eq(n).click()
    n++
}

//mouseenter and mouseleave event
$('.wrapper').mouseenter(function(){
    window.clearInterval(timer)  
}).mouseleave(function(){
    timer=setInterval(function(){
        
        doClick()
    },2000)
})