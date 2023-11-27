document.getElementById('countBtn').addEventListener('click', function() {
    const booleansArray = [1, 2, 3, false, true, true, false , -5, 0 ,false , true]; 
    const trueCount = booleansArray.filter(Boolean).length;

    document.getElementById('result').textContent = `Number of true values: ${trueCount}`;
});
