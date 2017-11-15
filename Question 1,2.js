
const printFor=function(i, str, num){
  let string="";
    for(let j=0; j<Math.abs(Math.floor((i-1)/2)); j++){
      string+=" "
    }
    if(i<=-1)
      i-=2;
    for(let k=num; k>=Math.abs(i); k--){
      string+=str;
    }
  return string
}
const printDiamondFor=function(num, str){
  if(num%2===0)
    num++;
  for(let i=num; i>-num; i-=2){
    console.log(printFor(i, str, num));
}
}
//printDiamondFor(5, "@");

const printDiamondRec=function(num, str){
  if(num%2===0)
    num+=1;
    let a;
  const helper=function(i){
    if(i<=-num)
      return "";
    if(i<=-1)
      a=i-2;
    else
        a=i
    const printSpace=function(j){
        if(j<=0)
          return "";
      return " "+printSpace(j-1);
    }
    const printStr=function(k){
      if(num<k)
        return "";
      return str+printStr(k+1)
    }
    console.log(printSpace(Math.abs((i-1)/2))+printStr(Math.abs(a)))
    return helper(i-2)
  }
  helper(num)
}
//printDiamondRec(5, "*")
