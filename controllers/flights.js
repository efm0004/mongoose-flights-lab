var Flights = require('../models/flight');
var Tickets = require('../models/ticket');

module.exports = {
    index, 
    new: newFlight,
    create,
    show
}

function show(req, res) {
    Flights.findById(req.params.id, function (err, flight) {
        Tickets.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show', {flight, tickets});
        });
    });
};

function create(req, res) {
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flights(req.body);
    flight.save(function(err){
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    })
}

function newFlight(req, res) {
    res.render('flights/new');
}

function index(req, res) {
    Flights.find({}, function(err, flights){
        res.render('flights/index', {flights});
    });
}