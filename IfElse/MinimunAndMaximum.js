let var1 = Math.random()*900+100;
let var2 = Math.random()*900+100;
let var3 = Math.random()*900+100;

console.log(var1 + " " + var2 + " " + var3);

if(var1 >= var2 && var1 >= var3){
    console.log(var1 + " is Max");
}else if(var2 >= var1 && var2 >= var3){
    console.log(var2 + " is Max ")
}else{
    console.log(var3 + " is Max")
}

if(var1 <= var2 && var1 <= var3){
    console.log(var1 + " is min");
}else if(var2 <= var1 && var2 <= var3){
    console.log(var2 + " is Min ")
}else{
    console.log(var3 + " is Min")
}