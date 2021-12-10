const router = require("express").Router();
// const Workout = require("../models/workout.js");
const db = require("../models");

//get workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(data => {
        console.log("---------");
        console.log(data);
    })
})


module.exports = router;