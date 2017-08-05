// console.log('Loaded!');
// //changing innerHTML using js
// var element=document.getElementById('main=text');
// element=innerHTML='New Value';

// //move the image
// var img=document.getElementById('madi');
// function moveRight(){
//     var marginLeft=0;
//     marginLeft+=10;
//     img.style.marginLeft=marginLeft+'px';
//     }
//   img.onClick=function(){
//       var interval=setInterval(moveRight,100);
// };


//counter code
var button=document.getElementById('counter');
var counter=0;
button.onClick=function()
{
    
    
    counter+=1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
}
