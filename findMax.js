var business = 450;
var minister = 350;
var Sochib = 900;


if(business > minister){
    console.log("Business is bigger");
    if(business > Sochib){
        console.log("");
    }
    else{
        console.log('Sochib is bigger');
    }
}
else{
    
    if(minister > Sochib){
        console.log("Minister id bigger");
    }
    else{
        console.log('Sochib is bigger');
    }
}