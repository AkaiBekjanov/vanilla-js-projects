
//DOM
const calcKeys = document.querySelector('.calc')
const output = document.body.querySelector('.calc--input')
const equalBtn = document.body.querySelector('.calc--btns.btn-equal')
const resetBtn  = document.body.querySelector('.btn-reset')


//
let a =''
let b =''
let sign = ''
let finish = false

const digits =['1','2','3','4','5','6','7','8','9','.']
const action = ['-','+','*','/']




//SCREEN


function clearAll(){
    a=''
    b=''
    sign=''
    finish=false
    output.textContent = 0
}


resetBtn.addEventListener('click',clearAll)

calcKeys.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('calc--btns')) return
    if(e.target.classList.contains('btn-reset')) return
    const key = e.target.textContent


    //если нажата клавиша 0-9 или .

    if(digits.includes(key)){
       if(b === '' && sign === ''){
        a += key

        output.textContent = a
       }
      
       else if(a!=='' && b !=='' && finish){
                 b = key
                 finish =false
                 output.textContent = b
       }
       else {
        b  +=key
        output.textContent = b
       }

    }


    //если нажата клавиша +/*-
    if(action.includes(key)){
        sign = key
        output.textContent = sign
       
        return;
    }


    // нажата  =
    if(key === '='){
        switch(sign){
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = a - b
                break;
            case '*':
                a = a*b
                break;   
            case '/':
                if(b == 0){
                    output.textContent = 'Error'
                    a = ''
                    b = ''
                    sign = ''
                    return;
                }
                a = a/b
                break;          
        }
        finish =true
        output.textContent=a
    }
  
})


