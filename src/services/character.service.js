const {
    getDomFromURL
} = require('../utils/dom.utils')
const {
    hasSpecifiLength
} = require('../utils/validations.utils');

const Character = require('../models/Character');


const getCharacterInfos = (playerName = '') => 

    new Promise(async(resolve, reject) => {
        const playerNameWasNotSent = hasSpecifiLength({
            target: playerName,
            length: 0
        });

        if (playerNameWasNotSent) {
            reject(new Error('Player name is required'))
        }

        try {
            const url = `https://secure.tibia.com/community/?subtopic=characters&name=${playerName}`;

            const dom = await getDomFromURL(url);

            const character = new Character(dom);

            if(character.playerDoesntExists()){
                reject(new Error(`Player doesn't exists`))
            }

            resolve(character.allCharacterInformation);

            return character.allCharacterInformation;
        } catch (error) {
            reject(error);
        }
    })
    

module.exports = {
    getCharacterInfos
}