[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
# Navi - AI Web Companion

Navi is a Google Chrome extension that helps day-to-day users like you and me understand the contents of a website. This is supposed to take the HTML elements that generally represents the idea and create a summary out of it! 

All you would need to do is:

- Highlight the text you want to understand
- Click on the Navi icon that pops up after the text is selected

**Done!**

After some time you would see a chat-bot interface display on the screen returning a summarization of the text!

## But ... How does it Work?

Navi uses **Natural Language Processing** (or NLP for short) to take text and give meaning to it.

More specifically, it uses the TextRank algorithm. More info on the techniques we used [here](https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf).

* We first split the input into a 2D array of words, every element being the sentence.

* Then, stopwords and punctuations are removed for preprocessing.

* A similarity matrix is created to hold the relvant sentences in order.

* Sentences are ranked by their similarity and relevance.

* A list of the most relevant sentences will be shown to the user in the chat-bot interface.

# Installation

Before anything, make sure you have downloaded react with 

`npm install create-react-app` 

and downloaded the correct dependencies with 

`npm install`

To see the landing-page, 

```
git clone https://github.com/Pochetes/ShellHacks-Project-2021.git
cd ShellHacks-Project-2021/landing-page/src
npm start
```
To see the Summarizer interface,

Go to [The Google Chrome Extension Dashboard](chrome://extensions/), and click *load unpacked*. 

Running `npm run build` creates an optimized build of the app.

Go to `chrome-extension/build` and select the build folder.

Run the extension.
