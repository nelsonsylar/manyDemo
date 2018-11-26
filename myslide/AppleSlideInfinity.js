var $imgWrapper=$('.imgWrapper')
var $wholeImage=$imgWrapper.children('img')
var $buttons=$('.btnWrapper>span')
var current=0
var n=1

initial()
$('.btnWrapper').on('click','span',function(e){
    let $button=$(e.currentTarget)//这里是为了得到jquery对象所以直接加上$
    let index=$button.index()
    $button.addClass('active').siblings().removeClass('active')
    gotoSlide(index)
})
$(nextPic).on('click', function(){
    gotoSlide(current-1)
    buttonChange()
  })
  $(prePic).on('click', function(){
    gotoSlide(current+1)
    buttonChange()
  })


var timer = setInterval(function(){
    gotoSlide(current+1)
    buttonChange()
    
},1500)
$('.wrapper').on('mouseenter',function(){
    window.clearInterval(timer)
    
})

$('.wrapper').on('mouseleave',function(){
    timer = setInterval(function(){
        gotoSlide(current+1)
        buttonChange()
    },1500)
})

function gotoSlide(index){
    if(index > $buttons.length-1){
        index = 0
      }else if(index <0){
        index = $buttons.length - 1
      }
    if(current===0 && index===$buttons.length-1){
    //从第一到最后一张
    console.log('从第一到最后一张')
        
        $imgWrapper.css({'margin-left':'0px'}).one('transitionend',function(){
            $imgWrapper.hide().offset()
            $imgWrapper.css({'margin-left':`${-(index+1) * 920}px`}).show()
        })
    }else if(current===$buttons.length-1 && index===0){
    //从最后到到第一张
    console.log('从最后到到第一张')
        $imgWrapper.css({'margin-left':`${- ($buttons.length+1) * 920}px`})
        .one('transitionend',function(){
            
            $imgWrapper.hide().offset()  //如果这里不用offset()直接先hide在show的话会被忽略
            $imgWrapper.css({'margin-left':`${-(index+1) * 920}px`}).show()
        })
    }
    else{
        console.log('正常情况')
        $imgWrapper.css({'margin-left':`${- (index+1) * 920}px`})
        
    }

    current=index
    
}
function buttonChange(){
    if(n==4){
        n=0;
    }
    
    $('.btnWrapper>span').eq(n).addClass('active').siblings().removeClass('active')
    n++
}
//将最后一页的图拷贝到第一页，第一页的图拷贝到最后一页
function initial(){
    var $firstCopy=$wholeImage.eq($wholeImage.length-1).clone(true)
    var $lastCopy=$wholeImage.eq(0).clone(true)
    
    $imgWrapper.prepend($firstCopy)
    $imgWrapper.append($lastCopy)
    $imgWrapper.css({'margin-left':'-920px'})
}