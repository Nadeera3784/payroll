const mongoose = require('mongoose');
const PendingLeaves = mongoose.model('pendingLeave');
const Employee = mongoose.model('employee');
//USER loging level - pending leaves are associative with employee level login.
module.exports = (app) => {
    app.get('/pendingLeaves' , async (req, res) => {
        try{
            const pendingLeaves = await PendingLeaves.find({});
            res.json(pendingLeaves);
        }catch(err){
            res.json(err);
        }
    });

    app.post('/pendingLeaves/new' , async (req, res) => {
        try{
            const newPendingLeave = new PendingLeaves(req.body);
            newPendingLeave.save();
            res.json(newPendingLeave);
        }catch(err){
            res.json(err);
        }
    });

    app.delete('/pendingLeaves/:id' , async (req, res) => {
        try{
            await PendingLeaves.findByIdAndDelete(req.params.id);
        }catch(err){
            res.json(err);
        }
    })
}