//This is the settins in the User Popup
var userSettings = {
    Auto_Bold : true
}

//First Initiallization
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ userSettings });
    console.log('Initialized with ' + userSettings.Auto_Bold);
});




//Manage change in Auto_Bold-Switch
//chrome.runtime.onMessage.addListener((request , sender , sendResponse) => {
//
//});