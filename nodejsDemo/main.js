
btn.onclick=function(){
    var left=money1.innerText
    left=left-6
    if(left>0){
        money1.innerText=left
    }else{
        alert('该充钱啦')
    } 
}

btn2.onclick=function(){
    let script = document.createElement('script')
    script.src='http://jack.com:8002/pay68'
    var left=money2.innerText-68
    document.body.appendChild(script)  //与image不同script必须要appendchild

    script.onload = function(e){ // 状态码是 200~299 则表示成功
        e.currentTarget.remove()
        
        if(left>0){
            money2.innerText=left
        }else{
            alert('该充钱啦')
        } 
    }
    script.onerror = function(e){ // 状态码大于等于 400 则表示失败
        e.currentTarget.remove()
    }
}
btn0.onclick=function(){
    let image = document.createElement('img')
    image.src='http://jack.com:8002/charge'
    var left=money0.innerText-0+1000
    image.onload=function(){
        alert('充钱成功')
        window.location.reload()
    }
    image.onerror=function(){
        alert('充钱失败')
    }
}
btn3.onclick=function(){
    let script = document.createElement('script')
    var left=money3.innerText-688
    let functionName = 'nelson'+ parseInt(Math.random()*1234546 ,10)
    window[functionName] = function(){  // 每次请求之前搞出一个随机的函数
        amount.innerText = amount.innerText - 0 - 688
    }
    script.src = 'http://jack.com:8002/pay688?callback=' + functionName //这里的请求路径就为特殊路径
    document.body.appendChild(script)  //与image不同script必须要appendchild
    script.onload = function(e){ // 状态码是 200~299 则表示成功
        e.currentTarget.remove()
        if(left>0){
            money3.innerText=left
        }else{
            alert('该充钱啦')
        } 
        delete window[functionName]    //用完后要及时删除
    }
    script.onerror = function(e){ // 状态码大于等于 400 则表示失败
        e.currentTarget.remove()
        delete window[functionName] 
    }
}