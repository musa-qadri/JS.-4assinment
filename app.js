// Q 1no/
document.write('<h1>Result :</h1>')
var a = 10;
document.write ('<h3>The value of a is:  <h3/>'+a);
document.write('<br>...................................<br>')
document.write('<h3>The value of ++a is : <h3/>' + ++a )
document.write('<h3>The value of ++a is : <h3/>' +  a++ )
document.write('<h3>The value of ++a is : <h3/>' + --a )
document.write('<h3>The value of ++a is : <h3/>' + a-- )
// Q 2no/

document.write('<h1>Question no 2:~<h1/>')
var a = 2;
var b = 1;
document.write('1) --a :' + " " + --a )
document.write('<br>')
document.write('2) --a - --b :' + " " + (--a - --b))
document.write('<br>')
document.write('3) --a - --b +  ++b:' + " " + (--a - --b + ++b))
document.write('<br>')
document.write('4) --a - --b +  ++b - --b:' + " " + (--a - --b + ++b - --b)) 
// Q 3no/
document.write('<h1>Question no 3:~<h1/>')
var nam =prompt('Enter Your Name')
var say = "Hello"
var hi = say + " "+ nam;
document.write(hi)
// Q 5no/
document.write('<h1>Question no 5:~<h1/>')
document.write('<h1>Multiplication table for any number :<h1/>')
var num = +prompt( 'ENTER ANY NUMBER',5)
for(var i=1;i<11;i++){
    document.write('<br>'+i+')'+' '+num+'X'+i+'='+(i*num))
}
document.write('<h1>Question no 6:~<h1/>')
// Q 6no/
var sub1 = prompt('ENTER SUB NAME').toUpperCase()
var sub2 = prompt('ENTER SUB NAME').toUpperCase()
var sub3 = prompt('ENTER SUB NAME').toUpperCase()
var mark1 =+prompt('ENTER YOUR MARKS YOU GET')
var mark2 =+prompt('ENTER YOUR MARKS YOU GET')
var mark3 =+prompt('ENTER YOUR MARKS YOU GET')
var totalMark = mark1+mark2+mark3;
// if (mark1 <= 100){
//     document.write('Enter value in Number')
// }
// elseif()
var maximi = 100
var total = maximi*3
var per1 = (mark1/maximi)*100;
var per2 = (mark2/maximi)*100;
var per3 = (mark3/maximi)*100;
var totalPer = (totalMark/total)*100;
document.write('<table><tr><th>Subject<th/> <th>Total Marks<th/> <th>Otained Marks<th/> <th>Precentage<th/><tr/>')
document.write('<tr><td>'+sub1+'<td/><td>'+maximi+'<td/><td>'+mark1+'<td/><td>'+per1+'%'+'<td/><tr/>')
document.write('<tr><td>'+sub2+'<td/><td>'+maximi+'<td/><td>'+mark2+'<td/><td>'+per2+'%'+'<td/><tr/>')
document.write('<tr><td>'+sub3+'<td/><td>'+maximi+'<td/><td>'+mark3+'<td/><td>'+per3+'%'+'<td/><tr/>')
document.write('<tr><td>'+'<td/><td>'+total+'<td/><td>'+totalMark+'<td/><td>'+totalPer+'%'+'<td/><tr/><table/>')




