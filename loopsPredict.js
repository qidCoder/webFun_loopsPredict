//Created by Shelley Ophir
//Coding Dojo Sep. 21,2020
//go through the following code snippets and predict the output


//predict 1
for(var num = 0; num < 15; num++){
    console.log(num);
}

//predict 1 predicition
//0,1,2,3,4,5,6,7,8,9,10,11,12,13,14

/////////////////////////////////////////////

//predict 2
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

//predict 2 prediction
//3, 9

//////////////////////////////////////////

//predict 3
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

//predict 3 prediction
//1,4,5,8,10,11,14,16
