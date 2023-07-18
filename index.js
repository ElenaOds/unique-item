const output = document.querySelector('.output');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const resetButton = document.querySelector('#reset');

function setButtonDisabled() {
    button.disabled = input.value === '';
    resetButton.disabled = input.value === '';
}

input.addEventListener('input', (event) => {
    let input = event.currentTarget.value;
    setButtonDisabled();


button.addEventListener('click', (event) => {
    const array = input.split(' ').map(element => element.split(""));
    let newArray = [];
    button.setAttribute('disabled', true);
    array.forEach(element => {
        let sortedElements = [];
        let count = {};
            for(let i = 0; i < element.length; i++) {
                let item = element[i];
                 if(count[item]) {
                    count[item]++;
                  } else {
                    count[item] = 1;
                  }
                }
                
                for(let item in count) {
                  if(count[item] === 1) {
                    sortedElements.push(item);
                  }
                }
                
        newArray.push(sortedElements[0]);
    })
    let = uniqueElements = [];
    let count = {};
        for(let i = 0; i < newArray.length; i++) {
            let item = newArray[i];
            if(count[item]) {
                count[item]++;
            } else {
                count[item] = 1;
            }
        }
        for(let item in count) {
            if(count[item] === 1) {
                uniqueElements.push(item);
            }
        }   
        output.textContent = uniqueElements[0];
        
    })   
})

resetButton.addEventListener('click', (event) => {  
    input.value = '';
    output.textContent = '';
     setButtonDisabled();
})


