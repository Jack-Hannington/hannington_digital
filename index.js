const userWeight = document.querySelector('#user-weight');
const macrosCalcultor = document.querySelector('#macros-calculator');
const intensity = document.querySelector('input[type="range"]');
const protein =  document.querySelector('#protein');
const fats =  document.querySelector('#fats');
const carbs =  document.querySelector('#carbs');
const total =  document.querySelector('#total');

const loseWeight = [{ protein: 1, fats: 0.7, carbs: 0.3}, { protein: 1.2, fats: 0.4, carbs: 1 }, { protein: 1.2, fats: 1, carbs: 1.2 }]


userWeight.addEventListener('keyup', () => {
    document.querySelector('#warning').textContent = "Adjust the slider to see your macros";
})

    intensity.addEventListener('change', (event) => {
        console.log(intensity.value)
        if (userWeight.value === ''){
            document.querySelector('#warning').textContent = "Please enter a weight value";

        } else {
            document.querySelector('#warning').textContent = "Adjust the slider to see your macros";
            intensity.disabled = false;
            console.log(intensity.value)
            protein.textContent = userWeight.value * loseWeight[intensity.value].protein * 4;
            fats.textContent = userWeight.value * loseWeight[intensity.value].fats * 9;
            carbs.textContent = userWeight.value * loseWeight[intensity.value].carbs * 4;
            macrosTotal = userWeight.value * loseWeight[intensity.value].protein * 4 + userWeight.value * loseWeight[intensity.value].carbs * 4 + userWeight.value * loseWeight[intensity.value].fats * 9;
            total.textContent = macrosTotal;
        }
    
    })
