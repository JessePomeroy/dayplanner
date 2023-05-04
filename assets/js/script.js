//get date from dayjs
const currentDate = dayjs();
const currentHour = currentDate.$H;

//format date
const currentDateFormat = dayjs(currentDate).format('MM/DD/YYYY | h:mm a');

//set date
document.getElementById("currentDay").innerHTML = currentDateFormat;

//get all divs
const collection = document.querySelectorAll('[data-hour]');

//run loop on all divs from collection
collection.forEach((element) => {

    //get data elements
    const blockHour = element.dataset.hour;
    const blockHourDisplay = element.dataset.display;
    const ampm = element.dataset.ampm;

    //create divs
    const label = document.createElement("div");
    const task = document.createElement("textarea");
    const saveBtn = document.createElement("btn");

    //add classes to new divs
    label.classList.add("col-md-1", "hour", "text-center", "py-3");
    task.classList.add("col-md-10", "description");
    saveBtn.classList.add("btn", "saveBtn", "col-md-1");

    //add time to label
    label.innerHTML = blockHourDisplay + ampm

    //add icon to button
    saveBtn.innerHTML = "<i class='fas fa-save' aria-hidden='true'></i>"

    //add divs to html
    element.appendChild(label);
    element.appendChild(task);
    element.appendChild(saveBtn);

    //add class if future/past/present
    if (blockHour > currentHour) {
        element.classList.add("future");
    }
    else if (blockHour < currentHour) {
        element.classList.add("past");
    } else {
        element.classList.add("present");
    }

    //get storage data
    const storageData = localStorage.getItem(blockHour);

    //load task into task area if exists in localstorage
    task.value = storageData;

    //if save button is clicked then send hour and the task to localstorage
    saveBtn.addEventListener('click', e => {
        setLocalStorage(blockHour, task.value)
    })
});

//function to set local storage based on hour and task
function setLocalStorage(hour, task) {
    localStorage.setItem(hour, task);
}