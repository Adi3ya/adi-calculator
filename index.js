let inputScreen = document.getElementById('screen'); //targeting input box
let buttons = document.querySelectorAll('button'); //targeting buttons
let inputScreenValue = "";

// for loop for logic
for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);

            if(buttonText == "X"){
                buttonText = '*';
                inputScreenValue += buttonText;
                inputScreen.value = inputScreenValue;
            }

            else if(buttonText == "AC"){
                inputScreenValue = "";
                inputScreen.value = inputScreenValue;
            }

            else if(buttonText == "="){
                inputScreen.value = eval(inputScreenValue);
            }

            else if(buttonText == "C"){
                inputScreen.value = inputScreen.value.slice(0,-1);
            }

            else{
                inputScreenValue += buttonText;
                inputScreen.value = inputScreenValue;
            }
    })
}

function changemode(){
    let myBody = document.body;
    myBody.classList.toggle('dark-mode');
}