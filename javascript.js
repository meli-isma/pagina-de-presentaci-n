let secretMessage = ['', '', '', '', '', '', '', '', '', '', '', '', ''];

secretMessage.pop();

secretMessage.push('to' , 'program');
secretMessage[7] = 'right';


secretMessage.shift();


secretMessage.unshift('Programing');


secretMessage.splice(6, 5, 'know');


console.log(secretMessage.join('   '));