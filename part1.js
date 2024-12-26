function calculateTriangleArea() {
    const a = 5, b = 6, c = 7;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById('triangle-output').textContent = 
        `The area of the triangle is: ${area.toFixed(2)}`;
}

calculateTriangleArea();
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const multiplication = num1 * num2;
        const division = num1 / num2;
        document.getElementById('calc-output').innerHTML =
            `Multiplication: ${multiplication}<br>Division: ${division.toFixed(2)}`;
    } else {
        document.getElementById('calc-output').innerHTML = 'Please enter valid numbers!';
    }
}
function addJavaScript() {
    const userInput = document.getElementById('string-input').value;
    const result = `JavaScript ${userInput}`;
    document.getElementById('string-output').textContent = result;
}
