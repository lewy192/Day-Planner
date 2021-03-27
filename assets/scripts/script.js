// select every time block set data-time of text area class to text of class hour

var textConentArray = checkLocalStorage();

function updateCurrentDay(){
    $('#currentDay').text(`${moment().format('dddd MMMM Do')}`)
}
updateCurrentDay();

function saveTaskToLocalStorage(event){

var timeBlock = $('.time-block')
// console.log(timeBlock)
timeBlock.on('click','.saveBtn' ,function(event){
    var selectedSaveButton = $(event.target)
    var siblingTextArea = selectedSaveButton.siblings().eq(1)
    
    if (siblingTextArea.attr('disabled') === 'disabled'){
        console.log('dis')
        siblingTextArea.attr('disabled',false)
    }else{
        siblingTextArea.attr('disabled','disabled')
    };
    var textOfSiblingTextArea = siblingTextArea.val()
    const siblingTextAreaNumber = siblingTextArea.data('text-area')
    
    for (var i=0; i < textConentArray.length;i++){
        if(siblingTextAreaNumber === textConentArray[i].textContentNumber){
            console.log(textConentArray[i].textContent);
            textConentArray[i].textContent = textOfSiblingTextArea;
            localStorage.setItem('textAreaContent',JSON.stringify(textConentArray));
    };
    // display icon locked padlock
    
    };
});
};
function disableAllFilledTextArea(){
    var arrayOfTextAreas = $('.textarea')
    $.each(arrayOfTextAreas, function(index,element){
        // console.log(element)
        if ($(element).val()){
            $(element).attr('disabled','disabled')
        }
    })

};
saveTaskToLocalStorage();
function retrieveTaskFromLocalStorage(){
    for (var i=0; i < textConentArray.length;i++){
        var selectedTextArea= $('div').find(`[data-text-area='${i}']`)
        var correspondingTextContent = textConentArray[i].textContent
        selectedTextArea.val(correspondingTextContent)
    };
};
retrieveTaskFromLocalStorage();
function checkLocalStorage(){
    if(localStorage.getItem('textAreaContent')){
        return JSON.parse(localStorage.getItem('textAreaContent'))

    }else{
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

disableAllFilledTextArea();
// thursdays  september 4th
console.log(moment().format('dddd MMMM Do'))