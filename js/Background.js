document.addEventListener("DOMContentLoaded", function(){       //TODO Change this to chrome.storage; Extension cannot run if using "document"

    var sw1 = JSON.parse(localStorage.getItem("#sw1"))
    if(!sw1)
    {
        document.querySelector("#sw1").click();
    } //set the checkbox to false if the value stored is false

    Clicked("#sw1");

    if(document.querySelector("#sw1").checked)
        chrome.tabs.query({ active: true, currentWindow: true } , function(activeTab){
            chrome.scripting.executeScript({
                target: {tabId: activeTab[0].id, allFrames: true},
                files: ['js/Algorithm.js'],
                });
        });

})

function Clicked(sw_id){
    document.querySelector(sw_id).addEventListener("click",function(){
        localStorage.setItem(sw_id, document.querySelector(sw_id).checked)
    })
}  //identify when switch is clicked

