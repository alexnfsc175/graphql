const {
    getDomFromURL,
    getTextContent
} = require('../utils/dom.utils')
const {
    hasSpecifiLength
} = require('../utils/validations.utils');


const getCharacterInfos = async(playerName = '') => {
    if (hasSpecifiLength({
            target: playerName,
            length: 0
        })) throw new Error('Player name is required');

    const url = `https://secure.tibia.com/community/?subtopic=characters&name=${playerName}`;

    const dom = await getDomFromURL(url);

    // Cria variavel com o seletor
    const playerNameSelector = `#characters > div.Border_2 > div > div > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(2)`;
    const playerNameFromDOM = getTextContent(dom, playerNameSelector);
    console.log(playerNameFromDOM);
}

getCharacterInfos('hue proliferator')
getCharacterInfos('mad dentist')


module.exports = {
    getCharacterInfos
}