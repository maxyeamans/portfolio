$("document").ready(function () {
    
    // TODO: finish the code below to dynamically create the portfolio photo carousel
    // Portfolio items
    
    const portfolioItems = [
        {
            Image: "my-deck.png",
            Title: "myDeck",
            Description: "myDeck is the site to keep track of your Magic: The Gathering card collection and create custom decks. This was our second group project for boot camp. I worked mostly on the back end on this one, designing the database models using Sequelize and writing the database API.",
            RepoLink: "https://github.com/xeroneon/Project-2",
            PageLink: "https://safe-coast-77807.herokuapp.com/collection"
        },
        {
            Image: "marvel-teamup.png",
            Title: "Marvel Teamup",
            Description: "Pick two Marvel characters and see which comics they first teamed up in. Character not showing? Search for them! This project involved AJAX calls to the Marvel and eBay APIs, storing information in Firebase, and extensive use of jQuery to dynamically generate content.",
            RepoLink: "https://github.com/maxyeamans/soaring-indigo-mimes",
            PageLink: "https://maxyeamans.github.io/soaring-indigo-mimes"
        },
        {
            Image: "train-scheduler.png",
            Title: "Train Scheduler",
            Description: "Input information for train lines and dynamically add them to the page. This was an exercise in connecting to a database using Firebase. All time info managed with Moment.js. I added extra code to account for trains stopping at midnight.",
            RepoLink: "https://github.com/maxyeamans/train-scheduler",
            PageLink: "https://maxyeamans.github.io/train-scheduler"
        },
        {
            Image: "trivia-game.png",
            Title: "Star Wars Trivia Game",
            Description: "Start the game and get 5 random Star Wars questions. This project was meant to work on timers in JavaScript. Each question is stored as its own object in a separate .js file. This project was where jQuery finally clicked for me.",
            RepoLink: "https://github.com/maxyeamans/TriviaGame",
            PageLink: "https://maxyeamans.github.io/TriviaGame"
        },
        {
            Image: "word-guess.png",
            Title: "Overwatch Hangman",
            Description: "This was our first project using vanilla JavaScript. The whole game is written in an object, with event listeners checking for key presses. I added code to make sure you're not penalized for pressing the same wrong letter twice, because I'm nice like that.",
            RepoLink: "https://github.com/maxyeamans/Word-Guess-Game",
            PageLink: "https://maxyeamans.github.io/Word-Guess-Game"
        }
    ];

    // Add the portfolio items to the DOM
    portfolioItems.forEach(function (item, index) {
        // Create all the individual elements that will comprise a portfolio item
        let portItem = $("<div>").addClass("carousel-item");
        if(index === 0) {
            portItem.addClass("active");
        };
        let portImage = $("<img>").attr({
            class: "d-block w-100",
            src: "assets/img/" + item.Image,
            alt:  item.Title
        });
        let portInfo = $("<div>").addClass("carousel-caption");
        let portTitle = $("<h5>").text(item.Title);
        let portDescription = $("<p>").text(item.Description).addClass("d-none d-md-block mb-0");
        // I could probably do these next two in a loop.
        let portPageLink = $("<a>").text("View Page").attr({
            href : item.PageLink,
            target : "_blank"
        });
        let portSourceLink = $("<a>").text("View Source").attr({
            href : item.RepoLink,
            target : "_blank"
        });
        // Add all of the portfolio item info to the caption box
        portInfo.append(portTitle, portDescription, portPageLink, " | ", portSourceLink);
        // Add the portfolio image and caption box to the item
        portItem.append(portImage, portInfo);
        // Add the portfolio item itself to the photo carousel
        $("#portfolio-items").append(portItem);
    });

}); 