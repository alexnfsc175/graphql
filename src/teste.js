const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { getDomFromURL, getTextContent } = require('./utils/dom.utils')
const url = 'https://secure.tibia.com/community/?subtopic=characters&name=hue+proliferator';

const dom = getDomFromURL(url);

dom
    .then(dom => {
        // Cria variavel com o seletor
        const playerNameSelector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)`;

        // Cria variavel com o nosso elemento
        const $playerName = getTextContent(dom, playerNameSelector);

        console.log('Elemento: ', $playerName);
    });