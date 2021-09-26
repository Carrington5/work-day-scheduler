//Add Variables for the Workday Planner
var timeBlocksArr = [
    {
        hour: "9:00 AM",
        task: ""
    },
    {
        hour: "10:00 AM",
        task: ""
    },
    {
        hour: "11:00 AM",
        task: ""
    },
    {
        hour: "12:00 PM",
        task: ""
    },
    {
        hour: "1:00 PM",
        task: ""
    },
    {
        hour: "2:00 PM",
        task: ""
    },
    {
        hour: "3:00 PM",
        task: ""
    },
    {
        hour: "4:00 PM",
        task: ""
    },
    {
        hour: "5:00 PM",
        task: ""
    },
];

//Putting the schedule to the page
function renderPage(){
    //Get all timeblocks and task
    const timeBlocks = getLocalStorage();
}