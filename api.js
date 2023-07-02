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
    response=[];
    if(password=="wewertre"){
       commd=req.params['cm'];
       if(commd=="imp"){
        response.push("1 tolureis.com,2 github.com/Altinolukfan"); 
       }
       else if(commd=="bestaitools"){
         response.push("1 Chatgpt,2 Google Bard,3 Midjourney"); 
        }
        else if(commd="toluxversions"){
         response.push("1:Tolux-Search-Engine (Full-Version) 100 sites,2:Tolux-Search-Engine-2 (Beta) 104 sites");
        }
        else if(commd="bestedusites"){
         response.push("1 w3schools.com,2 geeksforgeeks.org,3 tutorialspoint.com");
        }
       else{
          response.push("wrong command");
       }
    }
    else{
      response.push("wrong password");
    }
    res.send(response);
    res.end();
   });

 app.listen(3000);
