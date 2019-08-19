var Flights = require('../models/flight');
var Tickets = require('../models/ticket');

module.exports = {
    create,
    new: newTicket
};

function newTicket(req, res){
    Flights.findById(req.params.id, function(err, flight){
        res.render('tickets/new', {flight})
    })
};

function create (req, res) {
    req.body.flight = req.params.id;
    Tickets.create(req.body, function(err, ticket){
        res.redirect(`/flights/${req.params.id}`);
    })
};