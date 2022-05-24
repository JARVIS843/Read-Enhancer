//We probably don't need Unit Test

function ModifyText(textNodeContent) 
{
    return textNodeContent.split(' ').map((word) => {
        //TODO if the user wants numbers to be bolded    
        //if(/\d/.test(word)) return word;

        
        var boldUp2 = Math.floor(Math.random() * Math.floor(word.length/2)); //TODO Add customizable length: 1/4 , 1/2 , 3/4 of a word etc..
        return word.replace(word, `<b>${word.substring(0, boldUp2+1)}</b>${word.substring(boldUp2+1)}`);  //TODO Add customizable fonts & underline the words that are originally bolded
    });
}


function SampleWebPage()
{
    const domParser = new DOMParser();
    var allText = [... document.getElementsByTagName('p')];         //TODO replace this with customizable Tags
    allText.forEach(element => {
        var text = domParser.parseFromString(element.innerHTML, "text/html");
        var textNodeCollection = Array.from(text.body.childNodes).map((node) => {
                                                                if(node.nodeType === Node.TEXT_NODE)
                                                                {
                                                                    return ModifyText(node.textContent).join(' ');
                                                                }
                                                                    
                                                                else
                                                                    return node.outerHTML;})
        element.innerHTML = textNodeCollection.join('');
    });
}

document.addEventListener("DOMContentLoaded", function(){

    var sw1 = JSON.parse(localStorage.getItem("#sw1"))
    if(!sw1){
        document.querySelector("#sw1").click();
    } //set the checkbox to false if the value stored is false

    Clicked("#sw1");

    if(document.querySelector("#sw1").checked){
        SampleWebPage();
        console.log("work")
    }
})  //document setup not working for now

function Clicked(sw_id){
    document.querySelector(sw_id).addEventListener("click",function(){
        localStorage.setItem(sw_id, document.querySelector(sw_id).checked)
    })
}  //identify when switch is clicked




