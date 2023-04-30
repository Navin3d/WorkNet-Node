const Employee = require("../models/Employee.model");
class WorkerService {
    getAllWorkers(location, workType) {
        let querry = {}; //{ location: { $regex: `/${location}/i` }, type_of_worker: { $regex: `/${workType}/i` } }
        if (location !== "null") {
            querry['location'] = { $regex: `.*${location}.*` };
        }
        if (workType!== "null") {
            querry['type_of_worker'] = { $regex: `.*${workType}.*` };
        }
        console.log(querry);
        return Employee.find(querry);
    }
}
let workerService = new WorkerService();
module.exports = workerService;
