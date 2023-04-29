// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function (event) {
    let now = dayjs();
    setInterval(() => {
        let date = dayjs().format('DD MMM YYYY HH:mm:ss');
        document.getElementById('currentDay').innerText = date;

    }, 1000);

    // if (divTime.isBefore(now)) {
    //     $('#hour9').removeClass('future').addClass('past');
    //     //     $('#hour9').addClass('past');
    // } else if (now === (hour9)) {
    //     $('#hour9').removeClass('future').addClass('present');
    //     //     $('#hour9').addClass('present');
    // }

    function timeBlockColor() {
        $('.time-block').each(function () {
            let divHour = parseInt(this.id);
            $(this).toggleClass('past', now.isBefore(divHour));
            $(this).toggleClass('future', now.isAfter(divHour));
            $(this).toggleClass('present', divHour === now);
            // console.log(divHour);
        });
    }
    function timeBlockColorShift() {
        $('.time-block').each(function () {
            let divHour = parseInt(this.id);
            if (divHour === now) {
                $(this).removeClass('past future').addClass('present');
            } else if (divHour > now) {
                $(this).removeClass('past present').addClass('future');
            } else {
                $(this).removeClass('present future').addClass('past');
                console.log(now);
                console.log(divHour);
            }
        });
    };

    timeBlockColor();
    timeBlockColorShift();
});

    // event.preventDefault();
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.