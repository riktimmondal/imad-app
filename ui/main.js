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
// var counter=0;
button.onClick=function()
{
    //Create request object
    var request =new XMLHTTPRequest();
    //CAPTURE THE RESPOND AND STORE IT IN A VARIABLE
    request.onreadystatechange=function(){
        if(request.readyState==XMLHTTPRequest.DONE){
            //TAKE SOME ACTION
            if(request.status==200)//Cheching sucessful status
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //IF NOT
    };
        //MAKE REQUEST 
        request.open('GET','http://riktimrules.imad.hasura-app.io/',true);
        request.send(null);
    
    //RENDER THE VARIABLE IN CORRECT SPAN
    // counter+=1;
    
}
