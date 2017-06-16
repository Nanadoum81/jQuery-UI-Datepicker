// script.js

$(function () {



    // DATEPICKER

    // https://jqueryui.com/datepicker/

    $('.date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: false,
        changeYear: false,
        numberOfMonths: 2,
        minDate: -1,
        maxDate: "+1W +5D"
    });
});
