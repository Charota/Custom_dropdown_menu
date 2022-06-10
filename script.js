const dropdownMenuEntity = document.getElementsByClassName('dropdown-menu')[0];
const dropdownInpEntity = document.getElementsByClassName('select-item-inp')[0];

function changeInpStatus() {
    dropdownMenuEntity.classList.toggle('options-active');
}

function changeInp(newStr) {
    dropdownInpEntity.value = newStr;
    dropdownMenuEntity.classList.toggle('options-active');
}