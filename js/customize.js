let colorSwatch = document.querySelectorAll('.color-swatch')
let restartButton = document.querySelector('button.restart')

// Color Swatch
colorSwatch.forEach(swatch => {
    let varColor = `--${swatch.classList[1]}`;
    let color = getComputedStyle(document.documentElement).getPropertyValue(varColor).trim();
    let input = swatch.querySelector('input')
    swatch.addEventListener('click', () => {
        input.value = color;
    })

    // Input Color Changes
    input.onchange = (e) => {
        swatch.style.backgroundColor = e.target.value
        document.documentElement.style.setProperty(varColor, e.target.value)
        window.localStorage.setItem(`${varColor}`, e.target.value)
    }
    
    // Restart Button
    restartButton.addEventListener('click', () => {
        window.localStorage.removeItem(`${varColor}`);
        document.documentElement.style.setProperty(varColor, color)
        swatch.style.backgroundColor = color;
    })
})

