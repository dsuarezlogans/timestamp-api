'use strict';
const moment = require('moment');


const index = (req, res) => {
    res.status(200).sendFile('/index.html');
};


const timestamp = (req, res) => {

    let date = {
        unix: null,
        natural: null        
    }   

    const validDate = moment(req.params.timestamp).isValid() || moment.unix(req.params.timestamp).isValid();
    
    if (!validDate) return res.status(400).jsonp(date);   

    date.unix = moment(req.params.timestamp).unix() || moment.unix(req.params.timestamp).unix();
    date.natural = moment.unix(date.unix).format('LL');    
    
    res.status(200).jsonp(date);
       
}

module.exports = {
    index,
    timestamp
}