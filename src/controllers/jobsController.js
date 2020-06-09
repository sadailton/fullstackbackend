const mongoose = require('mongoose');
const Jobs = mongoose.model('Jobs');

module.exports = {
    async store(req,res){
        const response = await Jobs.create(req.body);
        req.io.emit('newjob',response);
        res.json(response);
    },

    async listJobs(req,res){
        const response = await Jobs.find();
        //req.io.emit('newjob',response);
        //res.json(response);
    }
}