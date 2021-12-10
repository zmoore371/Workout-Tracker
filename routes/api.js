const router = require("express").Router();
const db = require("../models");
// const Workout = require("../models/workout.js")





// get workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            res.json(data)
            console.log("--------",)  
        }
    })
})






module.exports = router;