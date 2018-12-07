var typeOnScreen=`/*面试官你好，我是Nelson

* 只用文字作做我介绍太单调了

* 先来点BGM~

* 现在我就用代码来介绍吧

* 首先准备一些样式

*/

*{transition:all 1s;}

body{
    background:#ddd;
}

#showCode{
    margin:18px;
    border:1px solid #fff;
    padding:16px;
    background:rgb(238,238,238)
}

/* 我需要一点代码高亮 */
.token.property{color:#905;}
.token.selector{color:#690;}
.token.punctuation{color:#999;}

/* 配合BGM加一个动次打次效果 */

#showCode{
  animation: BBox 1s infinite alternate-reverse;
}
/* 现在正式开始 */

/* 我需要一张白纸 */

#contentWrapper{
    width: 50%; left: 0; position: fixed; 
    height: 100%;
}

#paper > .content {
   display: block;
}

/* 于是我就可以在白纸上写字了，请看右边 */ 
`
var myPaperContent=`
    # 自我介绍

    我叫 杨宁潇

    1993 年 7 月出生

    学历:本科

    专业:自动化

    希望应聘前端开发岗位

    # 技能介绍

    熟悉 JavaScript CSS

    # 项目介绍

    1. XXX 轮播

    2. XXX 简历

    3. XXX 画板

    # 联系方式

    - QQ 449574189

    - Email 449574189@qq.com    

    - 手机 15708496745
`
var aboveAll=`
/* 接下来用一个优秀的库 marked.js

* 把 Markdown 变成 HTML

* 这就是我的会动的简历

* 谢谢观看

*/
`

init()
writeContent('',typeOnScreen,myPre,buildPaper)

function init(){
    var content=document.createElement('pre')
    contentWrapper.append(content)
    content.id='showCode'
    window.myPre=document.querySelector('#showCode')
    window.myCode=document.querySelector('#code')
}
function writeContent(preContent,content,container,buildPaper){
    var n=0
    var id = setInterval(()=>{
        n++
        container.innerHTML=Prism.highlight(preContent+content.substring(0,n), Prism.languages.css, 'css');
        myCode.innerHTML=preContent+content.substring(0,n)
        container.scrollTop = myPre.scrollHeight
        if(n>content.length){
            window.clearInterval(id)
            buildPaper(paperFill)
        }
    },50)
}
function buildPaper(paperFill){
    var paper =document.createElement('pre')
    document.body.appendChild(paper)
    paper.id='paper' 
    paperFill(myPaperContent,transferDone)
}
function paperFill(content,transferDone){ 
    var n=0
    var paper =document.querySelector('#paper')
    var timer=setInterval(() => {
        n++
        paper.innerHTML=1
        paper.innerHTML=content.substring(0,n)
        if(n>content.length){
            window.clearInterval(timer) 
            transferDone(recommendUser)
        }
    },50);
    
}
function transferDone(recommendUser){
    window.paperWrapper=document.querySelector('#paper')
    recommendUser()
    paperWrapper.innerHTML =
    marked('# 自我介绍\n我叫 杨宁潇\n1993 年 7 月出生\n学历:本科\n专业:自动化\n希望应聘前端开发岗位\n# 技能介绍\n熟悉 JavaScript CSS\n# 项目介绍\n- XXX 轮播\n- XXX 简历\n- XXX 画板\n# 联系方式\n- QQ 449574189\n- Email 449574189@qq.com\n- 手机 15708496745')

}    

function recommendUser(){
    writeContent(typeOnScreen,aboveAll,myPre,jobDone)}
function jobDone(){
    showCode.style.height="calc(100% - 18px)"
    paperWrapper.style.height="calc(100% - 18px)"
    console.log('done')
}
