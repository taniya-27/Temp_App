const changeTemp = ()=>{
    const input = document.getElementById('input');
const tempInput= input.value;
const temp_select = document.getElementById('temp');
const value_temp = temp.options[temp_select.selectedIndex].value;
const result = document.getElementById('result');


if(value_temp == 'cel'){
    let fahren = (tempInput*9)/5 + 32;
    var fah = fahren.toFixed(2);
    result.innerHTML = `${fah} &#176;Fahrenheit`
}else{
    let celsius = (tempInput - 32)*5/9;
    var cel = celsius.toFixed(2);
    result.innerHTML = `${cel} &#176;Celsius`;
}

}