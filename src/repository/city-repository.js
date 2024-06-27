const {City} = require('../models/index')

class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        } catch(error){
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id:cityId
                }
            });
            return true;
        } catch(error){
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
          const city = await City.findByPk(cityId);
          return city;  
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data) {
        try {
            //the below approch also works but will not return updated object on screen
            //if we are using postgress
            //const city = await City.update(data,{
            //    where: {
            //        id: cityId
            //    },
          //  });
          //  return city;
          //for getting updated data in mysql 
          const city = await City.findByPk(cityId);
          city.name = data.name;
          await city.save();
          return city;

        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;
