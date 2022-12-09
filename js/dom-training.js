
const colorPickerOptions = [
    { label: 'red', color: '#f44336' },
    { label: 'green', color: '#4caf50' },
    { label: 'blue', color: '#2196f3' },
    { label: 'grey', color: '#607d8b' },
]

const colorContainerEl = document.querySelector('.js-color-btn');

const makeColorPickerOptiins = options => {
    return options.map(element => {
        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.textContent = element.label;
        buttonEl.style.backgroundColor = element.color;
        
        return buttonEl;
    })
}

const elements = makeColorPickerOptiins(colorPickerOptions);
colorContainerEl.append(...elements);
console.log(colorContainerEl);