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

function ModifyTextUpgrade(textNodeContent) 
{
    return pronouncing.syllableCount(textNodeContent)
    return textNodeContent.split(' ').map((word) => {
        //TODO if the user wants numbers to be bolded    
        //if(/\d/.test(word)) return word;

        
        var boldUp2 = Math.floor(Math.random() * Math.floor(word.length/2)); //TODO Add customizable length: 1/4 , 1/2 , 3/4 of a word etc..
        return word.replace(word, `<b>${word.substring(0, boldUp2+1)}</b>${word.substring(boldUp2+1)}`);  //TODO Add customizable fonts & underline the words that are originally bolded
    });
}

document.addEventListener("DOMContentLoaded", function(){
    console.log(ModifyTextUpgrade("abandon"))
})

function ModifyWebPage()
{
    const domParser = new DOMParser();
    var allText = [... document.getElementsByTagName('p')];         //TODO replace this with customizable Tags
    allText.forEach(element => {
        var text = domParser.parseFromString(element.innerHTML, "text/html");
        var textNodeCollection = Array.from(text.body.childNodes).map((node) => {
                                                                if(node.nodeType === Node.TEXT_NODE)
                                                                    return ModifyText(node.textContent).join(' ');
                                                                else
                                                                    return node.outerHTML;})
        element.innerHTML = textNodeCollection.join('');
    });
}

ModifyWebPage();



