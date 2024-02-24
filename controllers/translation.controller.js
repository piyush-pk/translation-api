const httpStatus = require('http-status');
const translate = require('translate-google');
const { LANGUAGES } = require('../constants/language.constants');
const { MESSAGE } = require('../constants/message.constants');

const translateData = async (req, res) => {
    /*
        for now to from language is set to auto.
        if want to change use other language just change in options
        const from = "en";
        const to = "fr";
        const options = {from, to};
        translate(data?.text, options);

    */
   try {
       const to = LANGUAGES.FRENCH; // the text data will be translated in this language
       const options = { to };
       const { text } = req.body;
       const translation = await translate(text, options);
       res.status(httpStatus.OK).json({message: MESSAGE.TRANSLATION_SUCCESS, translation});
   } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message: MESSAGE.SERVER_ERROR})
   }
}

module.exports = {
    translateData
}