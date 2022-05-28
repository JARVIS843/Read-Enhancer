//User Settings
var userSettings = {
    Auto_Bold : true
}

//First Initiallization of the Plugin
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ userSettings });
});


//Bold a webpage once the user has switched to a new page
chrome.tabs.onActivated.addListener((activeInfo) => {
    if(userSettings.Auto_Bold)  //TODO Once a web is bolded, mark it as "Static" so that it will not be bold again
        chrome.scripting.executeScript({
            target: {tabId: activeInfo.tabId, allFrames: true},
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