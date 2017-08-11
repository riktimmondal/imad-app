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
//Submit Nmae

var submit=document.getElementById('submit_btn');
submit.onClick = function(){
    
     //Create request object
    var request =new XMLHTTPRequest();
    //CAPTURE THE RESPOND AND STORE IT IN A VARIABLE
    request.onreadystatechange=function(){
        if(request.readyState==XMLHTTPRequest.DONE){
            //TAKE SOME ACTION
            if(request.status==200)//Cheching sucessful status
            {
                  //Make a request to the server and send the name
                    //Capture a lsit of name as render as a list
                    var names=request.responseText;
                    names=JSON.parse(names);
                    var list='';
                    for(var i=0;i<names.length;i++)
                    {
                        list+='<li>'+names[i]+'</li>';
                    }
                    var ul=document.getELementById('namelist');
                    ul.innerHTML=list;
                
            }
        }
        //IF NOT
    };
        var nameInput=document.getElementById('name');
        var name=nameInput.value;
        //MAKE REQUEST 
        request.open('GET','http://riktimrules.imad.hasura-app.io/submit-name='+name,true);
        request.send(null);
    
    //RENDER THE VARIABLE IN CORRECT SPAN
    // counter+=1;
};