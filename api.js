var express = require("express");
var app = express();
var fs = require("fs");
var json=require("./intents.json")

var arr=new Array();

var arr2=new Array();

const str=JSON.parse(JSON.stringify(json));

console.log(str.intents);

for (var i = 0; i < str.intents.length; i++) {
    var counter = str.intents[i];
    console.log(counter.tag);
    arr.push(counter.patterns);
    arr2.push(counter.responses);
}
console.log(arr2.length);

app.get('/',(req,res)=>{
    res.send("saaaa");
   });

 app.get('/posts/:sentence',(req,res)=>{
    adr=req.params['sentence']
    var responses=[]; 
    var num=0;
    var adrs=[];
    arr.forEach(element => {
    num++;  
    element.forEach(e2 =>{
       
       if(e2==adr){
        adrs.push(num);
       }

    });
   //console.log(adrs);
    });
    var rand=Math.floor(Math.random() * 3);
    //console.log(rand);
    adrs.forEach(e3=>{
        responses.push(arr2[e3-1][rand]);
    });




  res.send(responses);
  res.end();
 });

 app.get('/command/:password/:cm',(req,res)=>{
    password=req.params['password'];
    if(password=="wewertre"){
       commd=req.params['cm'];
       if(commd="impadrss"){
        res.send("1 tolureis.com,github.com/Altinolukfan");
        res.end();
       }
       else{
          res.send("Wrong command");
          res.end();
       }

    }
    else{
      res.send("Wrong pass");
      res.end();
    }
    
   });

 app.listen(3000);