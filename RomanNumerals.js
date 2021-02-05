const RomanNumerals = {};
RomanNumerals.toRoman = function (num){
  const map = {M:1000,CM:900,D:500,CD:400,C:100,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let result = '';
  
  while(num > 0){
    for(let key in map){
      if (map[key] <= num){
        result+=key;
        num-=map[key];
        break;
      }
    } 
  }
  
  return result;
}

RomanNumerals.fromRoman = function(romanNum){
  const map = {M:1000,CM:900,D:500,CD:400,C:100,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let arr = romanNum.split('');
  
  let numArray = [];
  let result = [];
  
  for(let i = 0;i<=arr.length;i++){
    for(let key in map){
      if (arr[i] == key) numArray.push(map[key])
    }  
  }
  for(let j = 0;j<numArray.length;j++){
    if((numArray[j+1] > numArray[j] && numArray[j+1] != undefined)){
      result.push(numArray[j+1] - numArray[j]);
      j+=2;
    }
    result.push(numArray[j]);
  }
  
 return result.filter( (item) => item != undefined)
   .reduce((value,item,index) => value+=item,0);
}
