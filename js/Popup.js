//Initializations on Startup
const Auto_Bold_Switch = document.getElementById('Auto_Bold');
var userSettingsCopy;
chrome.storage.sync.get( 'userSettings' , (result) => {
    userSettingsCopy = result.userSettings;


    Auto_Bold_Switch.checked = userSettingsCopy.Auto_Bold;
});


//Events
Auto_Bold_Switch.addEventListener('change' , function(){
    var Bold_Status = Auto_Bold_Switch.checked;

    chrome.runtime.sendMessage({Auto_Bold : Bold_Status});
});