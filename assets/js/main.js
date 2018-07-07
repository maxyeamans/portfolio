$("document").ready(function () {
    
    // TODO: finish the code below to dynamically create the portfolio photo carousel
    // Portfolio items
    const portfolioMarvel = {
        Image: "marvel-teamup.png",
        Title: "Marvel Teamup",
        Description: "Pick two Marvel characters and see which comics they first teamed up in. Character not showing? Search for them! This project involved AJAX calls to the Marvel and eBay APIs, storing information in Firebase, and extensive use of jQuery to dynamically generate content.",
        GitHubName: ""
    };

    const portfolioTrain = {
        Image: "train-scheduler.png",
        Title: "Train Scheduler",
        Description: "Input information for train lines and dynamically add them to the page. This was an exercise in connecting to a database using Firebase. All time info managed with Moment.js. I added extra code to account for trains stopping at midnight.",
        GitHubName: "train-scheduler"
    };

    const portfolioTrivia = {
        Image: "trivia-game.png",
        Title: "Star Wars Trivia Game",
        Description: "Start the game and get 5 random Star Wars questions. This project was meant to work on timers in JavaScript. Each question is stored as its own object in a separate .js file. This project was where jQuery finally clicked for me.",
        GitHubName: ""
    };

    const portfolioHangman = {
        Image: "word-guess.png",
        Title: "Overwatch Hangman",
        Description: "This was our first project using vanilla JavaScript. The whole game is written in an object, with event listeners checking for key presses. I added code to make sure you're not penalized for pressing the same wrong letter twice, because I'm nice like that.",
        GitHubName: "Word-Guess-Game"
    };

    const portfolioItems = [portfolioMarvel, portfolioTrain, portfolioTrivia, portfolioHangman];

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
            href : "https://maxyeamans.github.io/" + item.GitHubName,
            target : "_blank"
        });
        let portSourceLink = $("<a>").text("View Source").attr({
            href : "https://www.github.com/maxyeamans/" + item.GitHubName,
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