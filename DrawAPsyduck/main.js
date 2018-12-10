!function(){
    var n=0;
    var code=`
    /*
    先画一个头
    */
    .head {
        width: 135px;
        height: 120px;
        background: rgb(246,212,123);
        border-radius: 50% 50% 40% 40%;
        transform: rotate(-15deg);
        border:3px solid black;
        position: absolute;
        top: 60px;
        left: 42px;
    }
    /*
    再画一个身体
    */
    .body {
        width: 170px;
        height: 140px;
        border:3px solid black;
        background: rgb(246,212,123);
        border-radius: 40% 40% 45% 45%;
        position: absolute;
        top: 155px;
        left: 40px;
    }
    /*
    再画大嘴
    */
    .mouth {
        width: 90px;
        height: 105px;
        background: #FAE29A;
        border-radius: 100%;
        transform: rotate(80deg);
        position: absolute;
        box-shadow: 12px 0 20px -15px #000000;
        bottom: 200px;
        right: 70px;
    }
    .mouthTriangle{
        z-index:1;
        position: absolute;
        border:transparent 20px solid;
        border-radius:50%;
        border-right-color:#FAE29A;
        transform:rotate(80deg);
        top:27%;
        left:39%;
    }
    .mouthCenter {
        width: 95px;
        height: 30px;
        border-radius: 50% 50% 0 0;
        transform: rotate(-15deg);
        background: #FAE29A;
        z-index:1;
        position: absolute;
        bottom: 267px;
        left: 80px;
    }
    
    .mouthUpLeft, .mouthUpRight {
        width: 55px;
        height: 55px;
        background: #FAE29A;
        position: absolute;
        transform: rotate(-15deg);
    }
    .mouthUpLeft {
        border-radius: 0 0 0 100%;
        bottom: 250px;
        left: 72px;
    }
    .mouthUpRight {
        border-radius: 0 0 100% 0;
        bottom: 264px;
        right: 70px;
    }
    .mouthUpLeft::before {
        content: '';
        width: 8px;
        height: 8px;
        border-top: 2px solid #2e524e;
        position: absolute;
        border-radius: 50;
        transform: rotate(35deg);
        top: 10px;
        left: 45px;
    }
    .mouthUpRight::before {
        content: '';
        width: 8px;
        height: 8px;
        border-top: 2px solid #2e524e;
        position: absolute;
        border-radius: 50;
        transform: rotate(-35deg);
        top: 10px;
        right: 40px;
    }
    /*
    再画猥琐的小眼睛
    */
    .leftEye, .rightEye{
        width: 30px;
        height: 20px;
        border-top: 3px solid #2e524e;
        position: absolute;
        top: 35px;
        border-radius: 50;
    }
    
    .leftEye {
        transform: rotate(35deg);
        top: 80px;
        left: 20px;
    }
    
    .leftEye::before {
        content: '';
        width: 15px;
        height: 10px;
        border-top: 3px solid #2e524e;
        position: absolute;
        border-radius: 50;
        transform: rotate(35deg);
        top: -6px;
        left: 15px;
    }
    .rightEye {
        transform: rotate(-35deg);
        top: 82px;
        right: 20px;
    }
    .rightEye::before {
        content: '';
        width: 15px;
        height: 10px;
        border-top: 3px solid #2e524e;
        position: absolute;
        border-radius: 50;
        transform: rotate(-35deg);
        top: -6px;
        right: 15px;
    }
    /*
    再画三根毛
    */
    .hair {
        width: 30px;
        height: 20px;
        border-top: 3px solid #2e524e;
        position: absolute;
        border-radius: 20%;
        transform: rotate(45deg);
        top: -15px;
        left: 35px;
    }
    
    .hair::before {
        content: '';
        width: 15px;
        height: 10px;
        border-top: 3px solid #2e524e;
        position: absolute;
        border-radius: 50;
        transform: rotate(35deg);
        top: -8px;
        right: 2px;
    }
    .hair::after {
        content: '';
        width: 30px;
        height: 10px;
        border-top: 3px solid #2e524e;
        position: absolute;
        border-radius: 40%;
        transform: rotate(55deg);
        top: -18px;
        left: 3px;
    }
    /*
    再画手
    */
    .leftHand {
        width: 100px;
        height: 55px;
        border:3px solid black;
        background: rgb(246,212,123);
        border-radius: 100% 90% 100% 60%;
        position: absolute;
        top: -22px;
        left: -45px;
        transform: rotate(-92deg);
    }
    .rightHand {
        width: 100px;
        height: 55px;
        background: rgb(246,212,123);
        border-radius: 100% 90% 100% 60%;
        position: absolute;
        border:3px solid black;
        top: -40px;
        right: -20px;
        transform: rotate(-100deg);
    }
    /*
    再画脚
    */
    .leftFoot {
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: #EEAA64;
        border-right-color: transparent;
        border-style: solid solid solid solid;
        border-width: 25px;
        position: absolute;
        bottom: 160px;
        left: 60px;
        transform: rotate(3deg);
        height: 45px;
        width: 20px;
    }
    .leftFoot::before {
        content: '';
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: #EEAA64;
        border-right-color: transparent;
        border-style: solid solid solid solid;
        border-width: 20px;
        position: absolute;
        bottom: -60px;
        left: -20px;
        transform: rotate(180deg);
    }
    .rightFoot {
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: #EEAA64;
        border-right-color: transparent;
        border-style: solid solid solid solid;
        border-width: 25px;
        position: absolute;
        bottom: 165px;
        right: 50px;
        transform: rotate(-30deg);
        height: 45px;
        width: 20px;
    }
    .rightFoot::before {
        content: '';
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: #EEAA64;
        border-right-color: transparent;
        border-style: solid solid solid solid;
        border-width: 20px;
        position: absolute;
        bottom: -60px;
        left: -20px;
        transform: rotate(180deg);
    }  
    /*
    好啦,画完了.谢谢观赏~
    */
    `
    var duration=5
    var viewCode=document.querySelector('.codeWrapper')
    var realCode=document.querySelector('#styleTag')
    function writeCode(nowCode,fn){
        window.timeId=setTimeout(function run(){
            n++
            viewCode.innerHTML=nowCode.substring(0,n)
            realCode.innerHTML=nowCode.substring(0,n)
            viewCode.scrollTop = viewCode.scrollHeight
            if(n<nowCode.length){
                timeId = setTimeout(run, duration);  
            }
            else{
                window.clearTimeout(timeId)
                fn&&fn.call()
            }
        } , duration);
    }
    $('.button').on('click','button',(e)=>{
        var $button=$(e.currentTarget)
        $button.addClass('active').siblings('.active').removeClass('active')
        let speed = $button.attr('data-speed')
        switch (speed){
            case 'slow':
                duration=100
            break
            case 'fast':
                duration=5
            break
            case 'jobDone':
                window.clearTimeout(window.timeId)
                realCode.innerHTML=code
                viewCode.innerHTML=code
            break
        }
    })
    writeCode(code)
}.call()