//User Settings
var userSettings = {
    Auto_Bold : true
}

//First Initiallization of the Plugin
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ userSettings });
});



chrome.tabs.onUpdated.addListener((tabId,changeInfo) => {
    console.log(changeInfo);
    if(changeInfo.status !== 'complete') return;        //TODO complete flag is a lot slower than loading flag

    if(userSettings.Auto_Bold) 
        chrome.scripting.executeScript({
            target: {tabId: tabId, allFrames: true},
            files: ['js/Algorithm.js'],
            });
});


chrome.runtime.onMessage.addListener((request , sender , sendResponse) => {
    
    //Check if request contains info related to Auto_Bold
    if('Auto_Bold' in request)
    {
        userSettings.Auto_Bold = request.Auto_Bold;
        chrome.storage.sync.set({ userSettings });
    }
        

    //Since No responce is needed, close the Message Port
    return true;
});