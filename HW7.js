function doExternalFileThing(elt) {
    elt.innerHTML = 'Spring Break is next week!';
    elt.disabled = true;
}

function getValueASwitch(button) {
    let parentElt = button.parentElement;
    let a = 4
    
    contents = 'The value is ';

    switch (a) {
        case 0: contents = contents + '0'; 
                break;
        case 1: contents = contents + '1'; 
                break;
        case 2: contents = contents + '2'; 
                break;
        case 3: contents = contents + '3'; 
                break;
        case 4: contents = contents + '4'; 
                break;
        case 5: contents = contents + '5'; 
                break;
        default: contents = contents + 'unknown'; 
                 break;
    }

    parentElt.innerHTML = contents;
}

function Operations(button) {
    let parentElt = button.parentElement;
    var Y = 3;
    let X = 12;
	var addition, subtraction, multiplication, division; 
	
	add = X + Y;
	subtract = X - Y; 
	multiply = X * Y;
	divide = X / Y;
	
	operateNum = 'Addition: ' + add + ' Subtraction: ' + subtract + ' Multiplication: ' + multiply + ' Division: ' + divide;
	parentElt.innerHTML = operateNum; 
}

function listMonthsOfYear(button) {
    let months = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'December' ]; // literal array notation
    let parentElt = button.parentElement;
	
		
	monthStr = '<ul>';
    for (month of months) {
        monthStr = monthStr + '<li>' + month + '</li>';
    }

    monthStr = monthStr + '</ul>';
    parentElt.innerHTML = monthStr;
}
	
function displayResult(button) { 
	let parentElt = button.parentElement;
	var string1 = "Good Morning!"; 
	var string2 = " Have a great day ahead!";
	var result = string1.concat(string2); 
	parentElt.innerHTML = result;
}
