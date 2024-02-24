const httpStatus = require('http-status');
const validator = require('validator');
const { MESSAGE } = require('../constants/message.constants');

exports.translateValidator = (req, res, next) => {
    const { text } = req.body;

    console.log(text, !validator.isLength(text, { min: 3, max: 2000 }));
    // we can more validators in same function
    if(!text || !validator.isLength(text, { min: 3, max: 2000 })){ 
        return res.status(httpStatus.BAD_REQUEST).json({message: MESSAGE.MINMUM_MAXIMUM_LENGTH_ERROR });
    }

    next();

}