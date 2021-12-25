function clickCube(){
    var red=getRandomInt(225);
    var green=getRandomInt(225);
    var blue=getRandomInt(225);
    
    console.log(red, green, blue);
    document.getElementById("cube").style.backgroundColor="rgb("+ red +","+ green +","+ blue + ")"

    var stringBoxShadow =  "0 0 5px rgba("+ red +","+ green +","+ blue +", 1)," +
    "0 0 25px rgba("+ red +","+ green +","+ blue +", 1), " +
    "0 0 50px rgba("+ red +","+ green +","+ blue +", 1), " +
    "0 0 100px rgba("+ red +","+ green +","+ blue +", .75), " +
    "0 0 200px rgba("+ red +","+ green +","+ blue +", .5), " +
    "0 0 300px rgba("+ red +","+ green +","+ blue +", .25) "

    var boo=getRandomInt(225);
    var boob=getRandomInt(225);
    

    var storonaOne= boo + "px" ;
    var storonaTwo= boob + "px" ;
   


    var goop=getRandomInt(225);

    

    var bloop=getRandomInt(50);

    var rad= bloop + "px";

    document.getElementById("cube").style.border=" 5px solid rgb("+ goop +","+ green +","+ blue + ")"
    document.getElementById("cube").style.boxShadow=stringBoxShadow;
    document.getElementById("cube").style.height=storonaOne;
    document.getElementById("cube").style.height=storonaOne;
    document.getElementById("cube").style.width=storonaTwo;
    document.getElementById("cube").style.borderRadius=rad;
}
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}