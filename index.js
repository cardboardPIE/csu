(function(){
    "use strict";
    
    //Global values
    let searchButton = null;
    let searchBar = null;
    let panelets = null;
    let searchOptions = [];
    let characters = ["mario", "donkey kong", "link", "samus", "dark samus",
        "yoshi", "kirby", "fox", "pikachu", "luigi", "ness", "captain falcon", 
        "jigglypuff", "peach", "daisy", "bowser", "ice climbers", "sheik", 
        "zelda", "dr. mario", "pichu", "falco", "marth", "lucina", 
        "young link", "ganondorf", "mewtwo", "roy", "chrom", "mr. game & watch",
        "meta knight", "pit", "dark pit", "zero suit samus", "wario", "snake",
        "ike", "pokemon trainer", "diddy kong", "lucas", "sonic", "king dedede", 
        "olimar", "lucario", "rob", "toon link", "wolf", "villager", "mega man", 
        "wii fit trainer", "rosalina & luma", "little mac", "greninja", 
        "palutena", "pac-man", "robin", "shulk", "bowser jr.", "duck hunt", 
        "ryu", "ken", "cloud", "corrin", "bayonetta", "inkling", "ridley", 
        "simon", "richter", "king k. rool", "isabelle", "incineroar", 
        "piranha plant", "joker", "hero", "mii brawler", "mii swordfighter",
        "mii gunner", "random"];
    
    //Stuff that happens when the page loads
    window.onload = function(){
        getAllItems();
    };
    
    //Gets all DOM elements on the page
    function getAllItems(){
        //panelets items
        panelets = document.getElementsByClassName("panelet");
        for (let i = 0; i < panelets.length; i++){
            panelets[i].onclick = getPagePanelet;
        }
            
        
        searchButton = document.getElementById("searchsubmit");
        searchButton.onclick = getSearch;
        searchBar = document.getElementById("searchbar");
    }
    
    //Gets the value from the search bar when the search button is pressed
    function getSearch(){
        searchReturn();
    }
    
    //An onclick event for all panelets that will load the relevant page
    function getPagePanelet(){
        let newPage = (this.textContent).trim();
        console.log("Opening page: " + newPage +"...");
        if(newPage.toLowerCase() === "characters"){
            loadCharactersPage();
        }
        if(newPage.toLowerCase() === "stages"){
            loadStagesPage();
        }
        if(newPage.toLowerCase() === "patches"){
            loadPatchesPage();
        }
        if(newPage.toLowerCase() === "helpful sites"){
            loadHelpfulSitesPage();
        }
    }
    
    //Loads the characters page
    function loadCharactersPage(){
        //console.log("->characters");
        clearPage();
        loadCharacterIcons();
        
    }
    
    //returns back a string relevant to something smash bros ultimate related
    function searchReturn(){
        let searchText = searchBar.value.toLowerCase();
        searchOptions["mario"] = ["mari", "mario", "mar", "ario"];
        searchOptions["luigi"] = ["lui", "luig", "luigi", "lugi", "uigi"];
        for (let thing in searchOptions){
            //console.log("Thing is: "  + thing);
            if (isInArray(searchText, searchOptions[thing])){
            console.log("Found " + thing + " :)");
            return thing;
        }
        }
    }
    
    function loadSearchOptions(){
        
    }
    
    //Checks if the string is in an array of strings, returns true if it is, 
    //false otherwise
    function isInArray(stringText, textArray){
        for (let i = 0; i < textArray.length; i++){
            //console.log(textArray[i]);
            if (stringText === textArray[i])
                return true;
        }
        return false;
    }
    
    //Loads the stages page
    function loadStagesPage(){
        console.log("->stages");
    }
    
    //Loads the patches page
    function loadPatchesPage(){
        console.log("->patches");
    }
    
    //Loads the helpful sites page
    function loadHelpfulSitesPage(){
        console.log("->helpful sites");
    }
    
    //Loads the html objects for the main page of CSU
    function loadMainPage(){
        
    }
    
    //Clears everything on the page, assuming all html items are in main div
    function clearPage(){
        let DOMStuff = document.getElementById("main");

        while(DOMStuff.firstChild){
            DOMStuff.removeChild(DOMStuff.firstChild);
        }
    }
    
    //Loads all the character icons in a 13 max width div and a transparent
    //black background
    function loadCharacterIcons(){
        let charactersDiv = document.createElement("DIV");
        let tempPath = "character_icons/";
        let tempImg = null;
        let tempRowDiv = null;
        
        charactersDiv.classList.add("charactersDiv");
        for (let index in characters){
            if (index % 13 === 0 || index === 0){
                tempRowDiv = document.createElement("DIV");
                tempRowDiv.id = "row";
                charactersDiv.appendChild(tempRowDiv);
            }
            
            let tempDiv = document.createElement("DIV");
            tempDiv.classList.add("characterIcon");
            tempImg = createImage(tempPath + characters[index] + ".png", characters[index]);
            tempDiv.appendChild(tempImg);
            tempRowDiv.appendChild(tempDiv);

        }
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(charactersDiv);  
        addTextToMain("CHOOSE YOUR FIGHTER!", "smashText");
    }
    
    //Creates an image given a path and optional alt value, and returns the 
    //image
    function createImage(imagePath, alt = ""){
        let image = document.createElement("IMG");
        image.onclick = loadCharacterPage;
        image.src = imagePath;
        image.alt = alt;
        return image;
    }
    
    //Will add some text to the main div
    function addTextToMain(text, cssTag = ""){
        let someText = document.createElement("P");
        if (cssTag.length !== 0 || cssTag === null){
            someText.classList.add(cssTag);
        }
        someText.innerHTML = text;
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(someText); 
        
    }
    
    //Loads a characters info page when clicked on from the characters page
    function loadCharacterPage(){
        let name = (this.alt);
        console.log(name);
    }
    

    
})();