import iziToast, { IziToast } from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refsBtn = document.querySelector('.myBtn');

refsBtn.addEventListener('click', handleClick);

function handleClick() {
    iziToast.success({
    title: 'OK',
    message: 'Successfully inserted record!',
});
}

const refsInput = document.querySelector('#datetime-picker');

refsInput.addEventListener('focus', flatpickrClick);
refsInput.addEventListener('change', onInputChange)

function flatpickrClick() {
    flatpickr (refsInput,
        {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    minDate: "2020-01"
        }
    )
    console.log(event.currentTarget.value);
}

function onInputChange(event) {
    console.log(event.currentTarget.value);

}



