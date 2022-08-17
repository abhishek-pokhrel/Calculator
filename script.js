let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

buttons.forEach(function(btn){
    btn.addEventListener('click', function(event){
        switch (event.target.innerText) {
            case 'C':
                display.innerText = '';
                break

            case '←':
                display.innerText = display.innerText.slice(0,-1);
                break
            
            case '=':
                try{
                    display.innerText = Number(eval(display.innerText).toFixed(2));
                    break
                }
                catch{
                    display.innerText = 'Error';
                    break
                }

            default:
                display.innerHTML += event.target.innerText;
                
                
        }
    })
});