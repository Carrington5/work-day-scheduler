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


    //Container for the html elements
    let timeBlock = "";

    //Count variable for timeblocks and array iteration
    let index = 0;

    timeBlocks.forEach(block => {
        //reffering to each hour in the array
        const time = block.hour;

        //reffering to the styking of text in the area
        const taskstring = block.task;

        //variable containing full HTML elements for each block
        const blockHTMLTemplate = `<form class="row time-block"><div class="col-2 hour">${time}</div><textarea id="text-area-${index}" dataAttr="text-area" class="col-9 ${elClassColor}">${taskString}</textarea><button id="save-button${index}" dataAttr="save-button${index}" class="col-1 saveBtn"><i dataAttr="save-button${index}" class="far fa-save fa-lg"></i></button></form>`;

        timeBlock+= blockHTMLTemplate;
        index++;
    });

       //Add all time blocks in order to the container div
       $("#container").html(timeBlock);

       //Get reference to all Button Elements
       const buttonGroup = document.getElementsByClassName("saveBtn");
   
       //Creating array from buttonGroup Elements
       var saveButtons = Array.prototype.slice.call(buttonGroup);
   
       //Create click event listeners for all save buttons
       saveButtons.forEach((button) => {
       if (typeof button === "object") {
         document.getElementById(button.id).addEventListener("click", saveTasks);
       }
     });
   
        //Compare current time with schedule blocks to change color of text area
        function hasTimePassed(time){
         //Time of schedule block from array
        const timeParsed = moment(time, "hh:mm A").hours();

        //Current time
         let currentDateTime = moment().hours();

         if (timeParsed < currentDateTime){
              return "past";
           } 
             else if (timeParsed === currentDateTime){
              return "present";
           }
             else if (timeParsed > currentDateTime){
              return "future";
        }
    };

   };

