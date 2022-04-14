function validForm(formElt) {
    console.log('validForm called');
    valid = true;

    valid = validButtons(formElt.querySelector('fieldset:nth-of-type(2)'),
                        'input[type=checkbox]', 'p > span', 2);
    console.log('First validButtons: ' + valid);
    valid = validButtons(formElt.querySelector('fieldset:nth-of-type(2)'),
                        'input[name=kingdom]', 'p:nth-of-type(2) > span')
                && valid;
    console.log('Second validButtons: ' + valid);
    valid = validButtons(formElt.querySelector('fieldset:nth-of-type(2)'),
                        'input[name=keyboard]', 'p:nth-of-type(3) > span')
                && valid;
    console.log('Third validButtons: ' + valid);

    return valid;
}

function enoughChecked(buttons, enough) {
    // Takes an array of buttons 
    // and returns true iff the number checked is >= ENOUGH.
    numChecked = 0;
    for (button of buttons) {
        if (button.checked) {
            numChecked = numChecked + 1;
        }
    }
    return (numChecked >= enough);
}

function validButtons(ancestor, buttonSpec, msgSpec, enoughButtons = 1) {
    // Takes an ancestor element, a CSS specification for an array
    // of buttons relative to that ancestor, and a CSS specification 
    // for a message element (also relative to the ancestor).
    // If at least one of the buttons is checked, the
    // message element is given the "valid" class and not
    // the "invalid" class.  If none of the buttons is
    // checked, the message element is given the "invalid"
    // class and not the "valid" class.
    buttons = ancestor.querySelectorAll(buttonSpec);
    msg = ancestor.querySelector(msgSpec);
    valid = enoughChecked(buttons, enoughButtons)

    if (valid) {
        msg.classList.add('valid');
        msg.classList.remove('invalid');
    }
    else { 
        msg.classList.remove('valid');
        msg.classList.add('invalid');
    }
    return valid;
}

function validPhone(inputElt) {
    valid = true;
    inputElt.setCustomValidity(''); 
    phone = inputElt.value;
    // Initial constraint requires NNN-NNN-NNNN format
    areacode = phone.substring(0, 3);

    if (areacode.at(1) === '1' && areacode.at(2) === '1') {
        valid = false;
        inputElt.setCustomValidity('X11 area codes are not valid');
    }

    return valid;
}