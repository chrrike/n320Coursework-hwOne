document.getElementById("fortune").innerHTML = "";

class RandomPicker{
    //list all items to be selected from randomly
    items

    constructor(items){
        //store use set of items
        this.items = items;
    }

    //returns random entry in array
    pickRandom(){
        return this.items[Math.floor(Math.random() * this.items.length)];
    }
}

class fortuneCookie extends RandomPicker{
    constructor(element){
        //array of fortunes
        super(["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A fresh start will put you on your way.", "He who knows he has enough is rich.", "It is honorable to stand up for what is right, however unpopular it seems.", "Practice makes perfect.", "Success is a journey, not a destination.", "The truly generous share, even with the undeserving.", "You are talented in many ways."]);
        this.outputElement = element;
    }

    getFortune(){
        //if the text in the div is not open your cookie
        if(this.outputElement.innerHTML != "Open your cookie!"){
            //the user is instructed to pick up a new cookie
            this.outputElement.innerHTML = "You have to pick up a cookie first.";
        }else{
            //if it's anything else, a random fortune is displayed
            let reply = this.pickRandom();
            this.outputElement.innerHTML = reply;
        }
    }

    getNewCookie(){
        //sets the innerHTML in the div to Open your cookie, instructing the user to open a new fortune
        this.outputElement.innerHTML = "Open your cookie!";
    }
}

//creates a cookie and displays the fortune/any text in the element with the id fortune
let myCookie = new fortuneCookie(document.getElementById("fortune"));