top_input1 = document.getElementById('top-from');
top_input2 = document.getElementById('top-where');

form_input1 = document.getElementById('js-input1-form');
form_input2 = document.getElementById('js-input2-form');

top_input1.onchange = function() {
    form_input1.value = top_input1.value; 
}

top_input2.onchange = function() {
    form_input2.value = top_input2.value;
}