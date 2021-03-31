// select every time block set data-time of text area class to text of class hour

var textConentArray = checkLocalStorage();

function updateCurrentDay(){
    // selects the element with the current-day id and sets the text to a date of the specified format
    $('#currentDay').text(`${moment().format('dddd MMMM Do')}`)
};


function checkCurrentTime(){
    // this function gets the current time in 24 hours and compares it to the data-time attribute of each textarea
    currentHourIn24Hours = moment().format('HH')
    listOfTextAreas = $('.textarea')
    $.each(listOfTextAreas, function(index,texareaBlock){
        // depending on the comparison the class of the text area is set to ammend its color via a predetermined css class
        var texareaBlockJry = $(texareaBlock)
        if (texareaBlockJry.data('time') === currentHourIn24Hours/1){
            texareaBlockJry.addClass('present')
        }else if(texareaBlockJry.data('time') < currentHourIn24Hours/1){
            texareaBlockJry.addClass('past')
        }else{
            texareaBlockJry.addClass('future')
        };
    });
};



function saveTaskToLocalStorage(event){
/**this function will:
 *      - save the value of text area to local storage
 *      - disable the text area
 *      -change the padlock icon to indicate to the user if the text area content is locked and saved
 * 
 * 
 */
    var timeBlock = $('.time-block')
    timeBlock.on('click','.saveBtn' ,function(event){
        // event.currentTarget will select the element that has the event listner on it. seeing as the children still cause the event listener to fire it is just a way for me to always select the parent
        var selectedSaveButton = $(event.currentTarget)
        var siblingTextArea = selectedSaveButton.siblings().eq(1)
        
        // if the text area is already disabled
        if (siblingTextArea.attr('disabled') === 'disabled'){
            // enable the text area
            siblingTextArea.attr('disabled',false)
            // set the img src to open padlock
            siblingTextArea.siblings().eq(1).children().attr('src','assets/icons/open-padlock.svg')
        }else{
            // disable the textarea
            siblingTextArea.attr('disabled','disabled')
            // set the img src to locked padlock
            siblingTextArea.siblings().eq(1).children().attr('src','assets/icons/locked-padlock.svg')
        };
        var textOfSiblingTextArea = siblingTextArea.val()
        const siblingTextAreaNumber = siblingTextArea.data('text-area')
        // loop through global variable textContentArray and save the textarea value to the right location
        for (var i=0; i < textConentArray.length;i++){
            // using the data set assigned to the text area, compare it to the index of the data structure built for the saving of text
            if(siblingTextAreaNumber === textConentArray[i].textContentNumber){

                textConentArray[i].textContent = textOfSiblingTextArea;
                localStorage.setItem('textAreaContent',JSON.stringify(textConentArray));
        }};
    });
};
function disableAllFilledTextArea(){
    // diables all textareas that have data in them
    // this is called on refresh or load after the textareas have had their data retrieved from storage
    var arrayOfTextAreas = $('.textarea')
    $.each(arrayOfTextAreas, function(index,element){
        if ($(element).val()){
            $(element).attr('disabled','disabled')
            $(element).siblings().eq(1).children().attr('src','assets/icons/locked-padlock.svg')
        };
    });

};
function retrieveTaskFromLocalStorage(){
    // loops through the data sturture in local storage and assigns corresponding text areas their content if it exists
    for (var i=0; i < textConentArray.length;i++){
        var selectedTextArea= $('div').find(`[data-text-area='${i}']`)
        var correspondingTextContent = textConentArray[i].textContent
        selectedTextArea.val(correspondingTextContent)
    };
};

function checkLocalStorage(){
    // this function retrieves the data structure from local storage or creates one if it doesn't already exist
    if(localStorage.getItem('textAreaContent')){
        return JSON.parse(localStorage.getItem('textAreaContent'))
        // returns data structure

    }else{
        // builds data structure

        // here you can see how i have built the data storage aspect
        var textContentTemplate = [
            {textContentNumber:0,textContent : ''},
            {textContentNumber:1,textContent : ''},
            {textContentNumber:2,textContent : ''},
            {textContentNumber:3,textContent : ''},
            {textContentNumber:4,textContent : ''},
            {textContentNumber:5,textContent : ''},
            {textContentNumber:6,textContent : ''},
            {textContentNumber:7,textContent : ''},
            {textContentNumber:8,textContent : ''}   
        ];

        localStorage.setItem('textAreaContent',JSON.stringify(textContentTemplate));
        return textContentTemplate;
    }
};


// thursdays  september 4th


updateCurrentDay();

checkCurrentTime();

retrieveTaskFromLocalStorage();

saveTaskToLocalStorage();


disableAllFilledTextArea();