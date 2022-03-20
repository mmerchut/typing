const textX = document.querySelector('.text');
const resultText = document.querySelector('.result');
const clearBtn = document.querySelector('.clearBtn');

let x = 0;
var result = '';

makeid(20);

writing = (e) => {
    console.log(String.fromCharCode(e.keyCode));
    let character = String.fromCharCode(e.keyCode);
    if(character == result[x]) {
        resultText.textContent += result[x];
        x++;
        console.log(x)
    }
    
    if(x == 20) {
        alert("super")
    }

}

function makeid(length) {

    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    // textX.textContent = result;
   }
       textX.textContent = result;

}

function clearText(){
    result = '';
    x = 0;
    resultText.textContent = '';
    makeid(20)
}



clearBtn.addEventListener('click', clearText)
window.addEventListener('keypress', writing)