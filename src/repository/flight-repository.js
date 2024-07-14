const { flight } = require('../models/index');

class FlightRepository {
    async createFlight(data){
        try {
            const flight = await Flight.create(data);
        } catch (error) {
           console.log("Something went wrong in the repository layer");
           throw {error};            
        }
    }
}

module.exports = FlightRepository;
