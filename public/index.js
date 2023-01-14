const userWeight = document.querySelector('#user-weight');
const intensity = document.querySelector('input[type="range"]');
const allMacros = document.querySelectorAll('.macros');
const total = document.querySelector('#total');
const loseWeight = document.querySelector('#lose-weight');
const gainWeight = document.querySelector('#gain-weight');
const maintainWeight = document.querySelector('#maintain-weight');
intensity.disabled = true;
const macroData = [
    { id: "protein", kcals: 4, baseline: 1 },
    { id: "carbs", kcals: 4, baseline: 1.5 },
    { id: "fats", kcals: 9, baseline: 0.3 }
];

let rangeValue = intensity.value;
let colourValue = rangeValue / 6;

function updateMacros() {
    if (userWeight.value == '') {
        document.querySelector('#warning').textContent = "Enter your weight";
        intensity.disabled = true;
    } else {
        document.querySelector('#warning').textContent = "Adjust the slider to see your daily macros";
        intensity.disabled = false;
    }
    let totalMacros = [];
    for (i = 0; i < macroData.length; i++) {
        if (allMacros[i].id == macroData[i].id) {
            allMacros[i].textContent = parseInt((macroData[i].baseline + (intensity.value / 10 + 0.1)) * userWeight.value)
            totalMacros.push(parseInt((macroData[i].baseline + (intensity.value / 10 + 0.1)) * userWeight.value))
            const sum = totalMacros.reduce((partialSum, a) => partialSum + a, 0);

            total.textContent = (sum);
        }
    }
    rangeValue = intensity.value;
    if (rangeValue >= 1 ){
        loseWeight.style.opacity = 0.3;
        gainWeight.style.opacity = 1;
        maintainWeight.style.opacity = 0.5;
    } else if (rangeValue == 0 ){
        loseWeight.style.opacity = 0.5;
        gainWeight.style.opacity = 0.5;
        maintainWeight.style.opacity = 1;
    } else {
        loseWeight.style.opacity = 1;
        gainWeight.style.opacity = 0.3;
        maintainWeight.style.opacity = 0.5;
    }
    const totalKcals = totalMacros.map(macro => macro * 4);
    const sum = totalKcals.reduce((partialSum, a) => partialSum + a, 0);
    let totals = document.createElement('p')
    totals.textContent = (`Kcals: ${sum}`);
    total.appendChild(totals)
}

intensity.addEventListener('change', updateMacros);

userWeight.addEventListener('keyup', updateMacros);

