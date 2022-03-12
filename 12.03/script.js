
function getResult(a) {
    let s = 0;

    //const a = [0, 1, 2, 3, 4, 5];
    //console.log(a.length);

    for (let index=0; index < a.length; index++) {
        //console.log(a[index]);
        s = s + a[index];
    }
    return s;
}

//console.log(getResult());

console.log(getResult([1, 2, 3, 4, 5]), '==', 15);
console.log(getResult([-1, -2, -3, -4, -5]), '==', -15);
console.log(getResult([-2, -2, 0, 4]), '==', 0);