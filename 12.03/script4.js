function getResult(s) {
   
    s = s.replace('а', '1' );
    const b = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    const a = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33'];
    
    for (let index=0; index < a.length; index++) {
     
     s =  s.replace(a[index], '');
 }
    
 return s;
 }
 
 console.log(
     getResult(привет, как дела? );
 