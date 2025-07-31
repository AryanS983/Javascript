for (let index = 1; index < 30; index++) {
    console.log(`2 * ${index} = ${index*2}`);
    if(index==15)break;
}

for (let index = 1; index < 10; index++) {
    if(index==5)continue; // this will skip the iteration
    console.log(`3 * ${index} = ${index*3}`);
}

let index =0
while(index<=10){
    console.log("Value of index is: "+index);
    index=index+2;
}

do{
    console.log("index is: "+index);
}while(index<0);

