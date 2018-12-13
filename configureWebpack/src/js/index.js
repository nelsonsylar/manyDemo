import bar from './bar';
import '../css/style.scss'
var img2=new Image()
var img3=new Image()
img2.src=require('../img/2.png');
img3.src=require('../img/3.png')
document.body.appendChild(img2);
document.body.appendChild(img3);
console.log(1)
bar();
console.log(3)