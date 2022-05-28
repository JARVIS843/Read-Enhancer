const Auto_Bold_Switch = document.getElementById('Auto_Bold');

Auto_Bold_Switch.addEventListener('change' , function(){
    var Bold_Status = Auto_Bold_Switch.checked;

    chrome.runtime.sendMessage({Auto_Bold : Bold_Status});
});