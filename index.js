const userWeight = document.querySelector('#user-weight');
const intensity = document.querySelector('input[type="range"]');
const allMacros = document.querySelectorAll('.macros');
const total = document.querySelector('#total');

const loseWeight = [
    { id: "protein", kcals: 4, baseline: 1 },
    { id: "carbs", kcals: 4, baseline: 1.5 },
    { id: "fats", kcals: 9, baseline: 0.3 }
];

function updateMacros() {
    let totalMacros = [];
    for (i = 0; i < loseWeight.length; i++) {
        if (allMacros[i].id == loseWeight[i].id) {
            allMacros[i].textContent = parseInt((loseWeight[i].baseline + (intensity.value / 10 + 0.1)) * userWeight.value)
            totalMacros.push(parseInt((loseWeight[i].baseline + (intensity.value / 10 + 0.1)) * userWeight.value))
            const sum = totalMacros.reduce((partialSum, a) => partialSum + a, 0);

            total.textContent = (sum);
        }
    }
    const totalKcals = totalMacros.map(macro => macro * 4);
    console.log(totalKcals);
}

intensity.addEventListener('change', updateMacros);

userWeight.addEventListener('keyup', () => {
    if (userWeight.value == '') {
        document.querySelector('#warning').textContent = "Enter your weight";
    } else {
        document.querySelector('#warning').textContent = "Adjust the slider to see your macros";
        updateMacros();
    }

})

