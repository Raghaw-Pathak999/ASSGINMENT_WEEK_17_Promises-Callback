function dobuleArray (Arr, callBack){
  let dobuledArr= Arr.map((num)=>{
        return callBack(num);
    })
    return dobuledArr;
}

const oringalArr = [1,2,3,4,5]

function callBack(num) {
    return num * 2 ;
}

let result = dobuleArray(oringalArr, callBack)
console.log(result);


