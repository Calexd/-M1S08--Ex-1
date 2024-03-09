const color = document.getElementById("colorInput");

color.addEventListener('input', () => {
    const colorSelect = color.value;
    const aplicarButton = document.getElementById("button-color");
        aplicarButton.addEventListener('click', () => {
            document.body.style.backgroundColor = colorSelect;
        })
});



