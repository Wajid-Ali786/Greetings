document.addEventListener('DOMContentLoaded', () => {
    // Balloon Game
    const balloonContainer = document.getElementById('balloonContainer');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 90 + '%';
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 70%)`;

        // On click, pop balloon and increase score
        balloon.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = score;
            balloon.remove();
        });

        balloonContainer.appendChild(balloon);

        // Remove balloon after a few seconds
        setTimeout(() => balloon.remove(), 5000);
    }

    setInterval(createBalloon, 1000);

    // Fun Facts Carousel
    const facts = [
        "Did you know honey never spoils?",
        "A group of flamingos is called a 'flamboyance.'",
        "Bananas are berries, but strawberries aren't!",
        "Octopuses have three hearts.",
        "Your tongue print is as unique as a fingerprint.",
        "Cows have best friends and get stressed when separated.",
        "Sloths can hold their breath for up to 40 minutes underwater.",
        "The Eiffel Tower can be 15 cm taller during the summer due to expansion.",
        "Dolphins have names for each other and can call out to one another.",
        "An octopus can change both the color and texture of its skin.",
        "You can't hum while holding your nose closed.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting only 38 minutes.",
        "Wombat poop is cube-shaped to prevent it from rolling away.",
        "In space, astronauts can't burp because there is no gravity to separate liquid and gas in their stomachs.",
        "Sharks existed before trees, over 400 million years ago.",
        "There are more stars in the universe than grains of sand on all the Earth’s beaches.",
        "A single cloud can weigh more than 1 million pounds!",
        "Butterflies taste with their feet.",
        "Penguins propose to their mates with a pebble.",
        "The longest hiccuping spree lasted 68 years.",
        "You can’t fold a piece of paper more than 7 times, no matter how big it is.",
        "The smell of freshly-cut grass is actually a plant distress signal.",
        "In 2006, Pluto was reclassified as a dwarf planet, making it no longer a full-fledged member of our solar system.",
        "There’s a species of jellyfish that is biologically immortal and can revert to its juvenile form.",
        "A day on Venus is longer than a year on Venus.",
        "A giraffe’s tongue is so long that it can clean its ears with it!",
        "Humans share 60% of their DNA with bananas.",
        "The Great Wall of China is not visible from space with the naked eye, despite popular belief.",
        "A rainbow can only happen when the sun is behind you, and you’re facing the rain.",
        "The word 'nerd' was coined by Dr. Seuss in 1950.",
        "Sea otters hold hands while sleeping to avoid drifting apart.",
        "The longest time between two twins being born is 87 days.",
        "A group of owls is called a parliament.",
        "Jellyfish are 95% water.",
        "The first computer virus was created in 1983.",
        "Did you know honey never spoils?",
    "A group of flamingos is called a 'flamboyance.'",
    "Bananas are berries, but strawberries aren't!",
    "Octopuses have three hearts.",
    "Your tongue print is as unique as a fingerprint.",
    "Cows have best friends and get stressed when separated.",
    "Sloths can hold their breath for up to 40 minutes underwater.",
    "The Eiffel Tower can be 15 cm taller during the summer due to expansion.",
    "Dolphins have names for each other and can call out to one another.",
    "An octopus can change both the color and texture of its skin.",
    "You can't hum while holding your nose closed.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting only 38 minutes.",
    "Wombat poop is cube-shaped to prevent it from rolling away.",
    "In space, astronauts can't burp because there is no gravity to separate liquid and gas in their stomachs.",
    "Sharks existed before trees, over 400 million years ago.",
    "There are more stars in the universe than grains of sand on all the Earth’s beaches.",
    "A day on Venus is longer than a year on Venus.",
    "A blue whale’s heart is as big as a small car.",
    "Tardigrades, also known as water bears, can survive in space.",
    "The longest hiccuping spree lasted 68 years!",
    "The unicorn is Scotland's national animal.",
    "There are more fake flamingos in the world than real ones.",
    "Cats have five toes on their front paws, but only four toes on their back paws.",
    "A human could swim through the blood vessels of a blue whale.",
    "The largest snowflake ever recorded was 15 inches wide and 8 inches thick.",
    "Peanuts are not actually nuts – they're legumes, like beans and lentils.",
    "The Great Wall of China is not visible from space with the naked eye, contrary to popular belief.",
    "The heart of a shrimp is located in its head.",
    "More people are allergic to cow’s milk than any other food.",
    "The longest word in the English language has 189,819 letters and takes three-and-a-half hours to pronounce."

        
    ];
    
    let currentFactIndex = 0;
    const factDisplay = document.getElementById('funFact');
    let factInterval;

    function nextFact() {
        currentFactIndex = (currentFactIndex + 1) % facts.length;
        factDisplay.textContent = facts[currentFactIndex];
    }
 window.nextFact = nextFact; // Expose function globally

  
	
    function startFactCarousel() {
        factInterval = setInterval(nextFact, 3000);
    }

    function stopFactCarousel() {
        clearInterval(factInterval);
    }

    startFactCarousel();

    // Pause/Play Buttons for Fun Facts
    const factPausePlayBtn = document.createElement('button');
    factPausePlayBtn.innerHTML = '⏸ Pause Fun Facts';
    factPausePlayBtn.addEventListener('click', () => {
        if (factInterval) {
            stopFactCarousel();
            factInterval = null;
            factPausePlayBtn.innerHTML = '▶ Play Fun Facts';
        } else {
            startFactCarousel();
            factPausePlayBtn.innerHTML = '⏸ Pause Fun Facts';
        }
    });
    document.querySelector('.fun-facts').appendChild(factPausePlayBtn);

    // Wishing Area
    const wishInput = document.getElementById('wishInput');
    const wishDisplay = document.getElementById('wishDisplay');

    function releaseWish() {
        const wishText = wishInput.value.trim();
        if (wishText) {
            const wish = document.createElement('div');
            wish.className = 'wish';
            wish.textContent = wishText;
            wish.style.animation = 'floatUp 5s ease-out forwards';
            wishDisplay.appendChild(wish);

            // Clear input and remove wish after animation
            wishInput.value = '';
            setTimeout(() => wish.remove(), 20000);
        }
    }
 window.releaseWish = releaseWish; // Expose function globally
 
 
 
    document.querySelector('.wishing-area button').addEventListener('click', releaseWish);

    // Quotes Carousel
    const quotes = [
        "Keep smiling, because life is a beautiful thing.",
        "Happiness is not by chance, but by choice.",
        "The purpose of our lives is to be happy.",
        "You are braver than you believe, stronger than you seem, and smarter than you think.",
        "Do what you can, with what you have, where you are.",
        "Believe you can and you're halfway there.",
        "The best way to predict the future is to create it.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "In the end, we only regret the chances we didn’t take.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Your time is limited, so don’t waste it living someone else’s life.",
        "Life is what happens when you’re busy making other plans.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "The only way to do great work is to love what you do.",
        "It always seems impossible until it's done.",
        "Don’t wait for opportunity. Create it.",
        "Everything you can imagine is real.",
        "Dream big and dare to fail.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "The only person you are destined to become is the person you decide to be.",
        "You are enough just as you are.",
        "Start where you are. Use what you have. Do what you can.",
        "It’s not about how bad you want it. It’s about how hard you’re willing to work for it.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "Everything you’ve ever wanted is on the other side of fear."
    ];
    
    let currentQuoteIndex = 0;
    const quotesDisplay = document.getElementById('quote');
    let quotesInterval;

    function nextQuote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quotesDisplay.textContent = quotes[currentQuoteIndex];
    }
 window.nextQuote = nextQuote; // Expose function globally
 
 
    function startQuotesCarousel() {
        quotesInterval = setInterval(nextQuote, 5000);
    }

    function stopQuotesCarousel() {
        clearInterval(quotesInterval);
    }

    startQuotesCarousel();

    // Pause/Play Buttons for Quotes
    const quotesPausePlayBtn = document.createElement('button');
    quotesPausePlayBtn.innerHTML = '⏸ Pause Quotes';
    quotesPausePlayBtn.addEventListener('click', () => {
        if (quotesInterval) {
            stopQuotesCarousel();
            quotesInterval = null;
            quotesPausePlayBtn.innerHTML = '▶ Play Quotes';
        } else {
            startQuotesCarousel();
            quotesPausePlayBtn.innerHTML = '⏸ Pause Quotes';
        }
    });
    document.querySelector('.quotes-section').appendChild(quotesPausePlayBtn);
});
