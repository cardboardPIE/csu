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
    
    function addTextTo(text, cssTag = "", givenDiv){
        let someText = document.createElement("P");
        if (cssTag.length !== 0 || cssTag === null){
            someText.classList.add(cssTag);
        }
        someText.innerHTML = text;
 
        givenDiv.appendChild(someText); 
        
    }
    
    //Loads a characters info page when clicked on from the characters page
    function loadCharacterPage(){
        let name = (this.alt);
		
		//If the player chooses random it will obtain a new character at random
		if (name === "random"){
			console.log("We got a random one boys!");
			do {
				name = characters[characters.length * Math.random() | 0]
				console.log("name is now: " + name);
			} 
			while (name === "random");
		}
		
		
        clearPage();
        let backDiv = document.createElement("DIV");
        backDiv.classList.add("charactersDiv");
        document.body.appendChild(backDiv);
        
        //Adds character name
        addTextTo(name.toUpperCase(), "charText", backDiv);
        
        //Adds costumes 
        addTextTo("Costumes:", "charText", backDiv);
		
		//If the player chooses a mii fighter character (brawler, swordfighter, or gunner)
		if (name === "mii brawler" || name === "mii swordfighter" || name === "mii gunner"){
			loadCostumeForMiis(parseName(name), backDiv);	
		}
		else{
			loadCostumes(parseName(name), backDiv);
		}
        
        
        //Get info for character and insert into addCharacterMoveInfo()
        //Use json or .txt file
        addCharacterMoveInfo(backDiv);
        
    }
    
    //Loads all 8 costumes of a player and appends it to the givenDiv
    function loadCostumes(character, givenDiv){
        let path = "characters/";
        let mainDiv = document.getElementById("main");
        let costumeRowDiv = document.createElement("DIV");
        costumeRowDiv.id = "row";
       
        for (let i = 0; i < 8; i++){
            let costumeImg = document.createElement("IMG");
            costumeImg.classList.add("costume");
            costumeImg.src = path + character + "/costumes/costume" + (i+1) + ".png";
            costumeImg.alt = character + (i+1) + "color.png";
            console.log(costumeImg.src);    
            costumeRowDiv.appendChild(costumeImg); 
        }
        givenDiv.appendChild(costumeRowDiv);
    }
	
	//Loads only the 1 default costume for Miis and appends it to the givenDiv
    function loadCostumeForMiis(character, givenDiv){
        let path = "characters/";
        let mainDiv = document.getElementById("main");
        let costumeRowDiv = document.createElement("DIV");
        costumeRowDiv.id = "row";
       
		let costumeImg = document.createElement("IMG");
		costumeImg.classList.add("costume");
		costumeImg.src = path + character + "/costumes/costume" + (1) + ".png";
		costumeImg.alt = character + (1) + "color.png";
		console.log(costumeImg.src);    
		costumeRowDiv.appendChild(costumeImg); 
        
        givenDiv.appendChild(costumeRowDiv);
    }

    //Given a name if the name contains a space character it will replace it
    //with an underscore character. Ex: "donkey kong" returns "donkey_kong"
    function parseName(name){
        let newName = name.replace(" ", "_");
        newName = newName.replace(" ", "_");
        newName = newName.replace(" ", "_");
        console.log("\nparseName() got: " + name + "\nreturning: " 
            + newName + "\n");
        return newName;
    }
       
    //Adds move information onto the givenDiv, accesses the information from 
    //a file/json value
    function addCharacterMoveInfo(givenDiv){
        //Adds Moveset
            addTextTo("Moves: ", "charText", givenDiv);
            
            //Specials
                //Neutral B
                addTextTo("Neutral B", "moveText", givenDiv);
                addTextTo("Fireball", "BText", givenDiv);
                addTextTo("The fireball flings a projectile from Mario's palm that\
                    bounces a small bit, deals 4-6%", "pageText", givenDiv);
                    
                //Side B
                addTextTo("Side B", "moveText", givenDiv);
                addTextTo("Cape", "BText", givenDiv);
                addTextTo("Reflects any projectile back and flips players if hit by\
                the cape.  Does 5-8%", "pageText", givenDiv);
                
                //Down B
                addTextTo("Down B", "moveText", givenDiv);
                addTextTo("F.L.U.D.D.", "BText", givenDiv);
                addTextTo("Charges F.L.U.D.D. and can spray water to push back\
                players. Does 0%", "pageText", givenDiv);
                
                //Up B
                addTextTo("Up B", "moveText", givenDiv);
                addTextTo("Coins Jump", "BText", givenDiv);
                addTextTo("Obtains a few coins with an uppercut to the player.\
                Does 7-9%", "pageText", givenDiv);
            
            //Ground A
                //Neutral A
                addTextTo("Neutral A", "moveText", givenDiv);
                addTextTo("Jab", "AText", givenDiv);
                addTextTo("Does a 3-hit combo Does 6-8%", "pageText", givenDiv);
                
                //Forward Tilt
                addTextTo("Forward Tilt", "moveText", givenDiv);
                addTextTo("Leg Sweep", "AText", givenDiv);
                addTextTo("Uses leg to attack enemies Does 6-8%", "pageText",
                givenDiv);
                
                //Down Tilt
                addTextTo("Forward Tilt", "moveText", givenDiv);
                addTextTo("TBN", "AText", givenDiv);
                addTextTo("TBA", "pageText", givenDiv);
                
                //Up Tilt
                addTextTo("Forward Tilt", "moveText", givenDiv);
                addTextTo("TBN", "AText", givenDiv);
                addTextTo("TBA", "pageText", givenDiv);
            
            //Aerials
                //Neutral Air
                addTextTo("Forward Tilt", "moveText", givenDiv);
                addTextTo("TBN", "JText", givenDiv);
                addTextTo("TBA", "pageText", givenDiv);
                
                //Forward Air
                addTextTo("Forward Tilt", "moveText", givenDiv);
                addTextTo("TBN", "JText", givenDiv);
                addTextTo("TBA", "pageText", givenDiv);
                
                //Back Air
                addTextTo("Forward Tilt", "moveText", givenDiv);
                addTextTo("TBN", "JText", givenDiv);
                addTextTo("TBA", "pageText", givenDiv);
                
                //Down Air
                addTextTo("Forward Tilt", "moveText", givenDiv);
                addTextTo("TBN", "JText", givenDiv);
                addTextTo("TBA", "pageText", givenDiv);
                
                //Up Air
                addTextTo("Up Air", "moveText", givenDiv);
                addTextTo("TBN", "JText", givenDiv);
                addTextTo("TBA", "pageText", givenDiv);
            
            //Smash Attacks
                //Forward Smash
                addTextTo("Forward Smash", "moveText", givenDiv);
                addTextTo("Fire Explosion", "CText", givenDiv);
                addTextTo("Expells an explosion from Mario's palm. Does 10-13%", 
                "pageText", givenDiv);
                
                //Down Smash
                addTextTo("Down Smash", "moveText", givenDiv);
                addTextTo("Mario Sweep", "CText", givenDiv);
                addTextTo("Attacks by a spin leg sweep Does 11-13%", 
                "pageText", givenDiv);
                
                
                //Up Smash
                addTextTo("Up Smash", "moveText", givenDiv);
                addTextTo("Headbutt", "CText", givenDiv);
                addTextTo("Hits players with Mario's head. Does 12-15%", 
                "pageText", givenDiv);
    }   

        
})();