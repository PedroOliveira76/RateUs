var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
var btn3 = document.getElementById('btn3')
var btn4 = document.getElementById('btn4')
var btn5 = document.getElementById('btn5')
var avaliacao = 0
function avaliar(estrela) {
//5 estrela
    if(estrela == 5){
        avaliacao = 5
        btn5.style.backgroundColor = '#FB7718'
        btn5.style.color = '#ffffff'
        if(avaliacao == 5){
            btn4.style.backgroundColor = '#2C3139'
            btn3.style.backgroundColor = '#2C3139'
            btn2.style.backgroundColor = '#2C3139'
            btn1.style.backgroundColor = '#2C3139'
        }else{
        btn5.style.backgroundColor = '#2C3139'
        }
    }
//4 estrela
if(estrela == 4){
    avaliacao = 4
    btn4.style.backgroundColor = '#FB7718'
    btn4.style.color = '#ffffff'
    if(avaliacao == 4){
        btn5.style.backgroundColor = '#2C3139'
        btn3.style.backgroundColor = '#2C3139'
        btn2.style.backgroundColor = '#2C3139'
        btn1.style.backgroundColor = '#2C3139'
    }else{
    btn4.style.backgroundColor = '#2C3139'
    }
}
//3 Estrela
if(estrela == 3){
    avaliacao = 3
    btn3.style.backgroundColor = '#FB7718'
    btn3.style.color = '#ffffff'
    if(avaliacao == 3){
        btn4.style.backgroundColor = '#2C3139'
        btn5.style.backgroundColor = '#2C3139'
        btn2.style.backgroundColor = '#2C3139'
        btn1.style.backgroundColor = '#2C3139'
    }else{
    btn3.style.backgroundColor = '#2C3139'
    }
}
//2 estrela
if(estrela == 2){
    avaliacao = 2
    btn2.style.backgroundColor = '#FB7718'
    btn2.style.color = '#ffffff'
    if(avaliacao == 2){
        btn4.style.backgroundColor = '#2C3139'
        btn3.style.backgroundColor = '#2C3139'
        btn5.style.backgroundColor = '#2C3139'
        btn1.style.backgroundColor = '#2C3139'
    }
    else{
    btn2.style.backgroundColor = '#2C3139'
    }
}
//1 estrela
if(estrela == 1){
    avaliacao = 1
    btn1.style.backgroundColor = '#FB7718'
    btn1.style.color = '#ffffff'
    if(avaliacao == 1){
        btn4.style.backgroundColor = '#2C3139'
        btn3.style.backgroundColor = '#2C3139'
        btn2.style.backgroundColor = '#2C3139'
        btn5.style.backgroundColor = '#2C3139'
    }    
    else{
    btn1.style.backgroundColor = '#2C3139'
    }
}
}
function enviar(){
    location.href = 'thankyou.html'
    localStorage.setItem('rate', avaliacao)
}
function myFunction(){
    rate = localStorage.getItem('rate')
    var txt = document.getElementById('txtrate').innerHTML;
    document.getElementById('txtrate').innerHTML = txt.replace("add", rate)
}



