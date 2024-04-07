const quotes = [
    {
        "quote": "The only thing we have to fear is fear itself.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "The best way to predict the future is to create it.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "It's not how much you have, but how much you enjoy that makes happiness.",
        "author": "Charles Spurgeon"
    },
    {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela"
    },
    {
        "quote": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon"
    },
    {
        "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "author": "Aristotle"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "quote": "It's not about waiting for the storm to pass, it's about learning to dance in the rain.",
        "author": "Vivian Greene"
    },
    {
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "To be or not to be, that is the question.",
        "author": "William Shakespeare"
    },
    {
        "quote": "A journey of a thousand miles begins with a single step.",
        "author": "Lao Tzu"
    },
    {
        "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "author": "Albert Einstein"
    },
]

const quote = document.querySelector("#quote-context");
const author = document.querySelector("#quote-author");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todayQuote.quote}"`;
author.innerText = todayQuote.author;
