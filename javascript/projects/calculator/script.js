let num1 = document.getElementById('btn1');
let num2 = document.getElementById('btn2');
let num3 = document.getElementById('btn3');
let num4 = document.getElementById('btn4');
let num5 = document.getElementById('btn5');
let num6 = document.getElementById('btn6');
let num7 = document.getElementById('btn7');
let num8 = document.getElementById('btn8');
let num9 = document.getElementById('btn9');
let num0 = document.getElementById('btn0');
let add = document.getElementById('btna');
let sub = document.getElementById('btnm');
let mul = document.getElementById('btnx');
let div = document.getElementById('btnd');
let equalto = document.getElementById('btne');
let screen = document.getElementById('screen');
let btndo = document.getElementById('btndo');

num0.addEventListener('click', function() {
    if (screen.innerText == '0') {
        screen.innerText = num0.innerText;
    } else {
        screen.innerText += num0.innerText;
    }
});


num1.addEventListener('click' , function(){
    if(screen.innerText == '0'){
        screen.innerText = num1.innerText;
    }else{
        screen.innerText += num1.innerText;
    }
})

num2.addEventListener('click', function() {
    if (screen.innerText == '0') {
        screen.innerText = num2.innerText;
    } else {
        screen.innerText += num2.innerText;
    }
});

num3.addEventListener('click', function() {
    if (screen.innerText == '0') {
        screen.innerText = num3.innerText;
    } else {
        screen.innerText += num3.innerText;
    }
});

num4.addEventListener('click', function() {
    if (screen.innerText == '0') {
        screen.innerText = num4.innerText;
    } else {
        screen.innerText += num4.innerText;
    }
});

num5.addEventListener('click', function() {
    if (screen.innerText == '0') {
        screen.innerText = num5.innerText;
    } else {
        screen.innerText += num5.innerText;
    }
});

num6.addEventListener('click', function() {
    if (screen.innerText == '0') {
        screen.innerText = num6.innerText;
    } else {
        screen.innerText += num6.innerText;
    }
});

num7.addEventListener('click', function() {
    if (screen.innerText == '0') {
        screen.innerText = num7.innerText;
    } else {
        screen.innerText += num7.innerText;
    }
});

num8.addEventListener('click', function() {
    if (screen.innerText == '0') {
        screen.innerText = num8.innerText;
    } else {
        screen.innerText += num8.innerText;
    }
});

num9.addEventListener('click', function() {
    if (screen.innerText == '0') {
        screen.innerText = num9.innerText;
    } else {
        screen.innerText += num9.innerText;
    }
});


add.addEventListener('click', function() {
    if (!/[+\-x÷]$/.test(screen.innerText)) {
        screen.innerText += '+';
    }
});

sub.addEventListener('click', function() {
    if (!/[+\-x÷]$/.test(screen.innerText)) {
        screen.innerText += '-';
    }
});

mul.addEventListener('click', function() {
    if (!/[+\-x÷]$/.test(screen.innerText)) {
        screen.innerText += 'x';
    }
});

div.addEventListener('click', function() {
    if (!/[+\-x÷]$/.test(screen.innerText)) {
        screen.innerText += '÷';
    }
});

btndo.addEventListener('click', function(){
    if (screen.innerText.length > 1) {
        screen.innerText = screen.innerText.slice(0, -1);
    } else {
        screen.innerText = '0';
    }
})


// btndo.addEventListener('keyup', function () {
//     screen.innerText = '0';
// });


equalto.addEventListener('click', function () {
    let expression = screen.innerText;
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');

    try {
        const result = eval(expression); 
        screen.innerText = result;
    } catch (error) {
        screen.innerText = 'Error';
    }
});

