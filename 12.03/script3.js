function getResult(s) {
   
   s = s.replace('2', '!' );
   const a = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
   
   for (let index=0; index < a.length; index++) {
    
    s =  s.replace(a[index], '!');
}
   
return s;

}

console.log(
    getResult('Текст с числами 2 и 3 до 5'),
    '==',
    'Текст с числами ! и ! до !.'
);

