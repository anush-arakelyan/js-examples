
function clickButton() {
    alert('uraaaaaaaaaa');
}

function myFunction() {
    var str = "tparanddd";
    alert(str.length);
    str = str[2] + str[3] + str[8];
    alert(str.toUpperCase());
}

function upercase() {
    /*var str = "were4r esresr ere ido";
    alert(str.indexOf("ido"))*/;
    var blablabla = {['name']: "Ani"},
        message =  'Hello!',
        age = 25,
        user = 'John';
    // alert(blablabla.lala === undefined);
    // alert(blablabla.name === undefined);
    alert( message + age + user + "name") ;
}

function age() {
    var age = prompt('How old are you ?');
    if (age) {
        if (age < 0 || age > 111) {
            alert('You enter the wrong age');
        } else if (age <= 6) {
            alert('Hello my little friend');
        } else if (age <= 18) {
            alert('Hello my young friend');
        } else if (age > 18) {
            alert('Hello my friend');
        }
    }
}

function years() {
    var age = prompt('years?', 18),
        message;
    if (age) {
        message = (age < 3) ? 'hello' : (age < 100) ? 'ooooo' : 'aaaaaaaa';
        alert( message);
    }
}

function netscape() {
    var company = prompt('What company do you work for?');
    if (company) {
        company == 'Instigate' ? alert('yes') : alert('no');
    }
}

function date(){
    var time = document.getElementById('demo');
    time.innerHTML = Date();
}

function color(){
    var time = document.getElementById('demo');
    console.log()
    time.style.color = "red";  
}

function enter(){
    var text, input;
    text = document.getElementById('demo');
    input = document.getElementById('number').value;
    text.innerHTML = input;
}
// function changeColor(){
//     var image = document.getElementById("image");
//     if (image.src.match("bulbon")) {
//         image.src = "pic_bulboff.gif";
//     } else {
//         image.src = "pic_bulbon.gif";
//     }
// }


// function changeColor() {
//     var image = document.getElementById('image');
//     if (image.src.match("bulbon")) {
//         image.src = "pic_bulboff.gif";
//     } else {
//         image.src = "pic_bulbon.gif";
//     }
// }