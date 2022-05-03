// Change an element by setting its innerText property.
function setSport(selectElt) {
    let sport = selectElt.value;
    if (sport !== "") {
        let targetElt = document.getElementById('chosen_sport');
        targetElt.innerText = article + ' ' + sport;
    }   
}

function changeSport(formElt) {
    let toBeChanged = formElt.sport.value;
    let newValue = formElt.newSport.value;
    if (toBeChanged !== "" && newValue !== "") {
        let selectList = document.querySelectorAll('select[name=sport]');
        selectList.forEach((select) => {
            let opts = Array.from(select.options)
            opts.forEach((option) => {
                if (option.value === toBeChanged) {
                    let newOpt = document.createElement('option');
                    newOpt.innerText = newValue;
                    select.replaceChild(newOpt, option);
                }
            });
        });
    }
}