let num;

num = prompt("Please enter a number greater than 1");

for (i=0;num>1;i++){
    if(num%2 == 0){
        num = num/2;
    }
    else{
        num = 3*num + 1;
    }
    alert(`${num}`);
}
