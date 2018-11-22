import validator from 'validator';

export const parcelValidation =  (req, res, next) => {
    
    let error = '';
    const {
        status,
        from,
        to,
        currentLocation
    } = req.body;
    
    if(!from || validator.isEmpty(from.trim())) { 
        error = "the from is required"
    }
    if(!to|| validator.isEmpty(to.trim())) { 
        error = "the to field is required"
    }
    if(!currentLocation || validator.isEmpty(currentLocation.trim())) { 
        error = "current location is required"
    }
    // if there is an error, return with a response of bad request
    if (error.length > 0){
        return res.status(422).send({status: 'Unprocessable Entity', error});
    }
   
    next();
}



