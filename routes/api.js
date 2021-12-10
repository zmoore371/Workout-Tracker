const router = require("express").Router();
const db = require("../models");


// get workouts
// router.get("/api/workouts", (req, res) => {
//     db.Workout.find({}, (err, data) => {
//         if(err) {
//             console.log(err)
//         } else {
//             res.json(data)
//             console.log("--------",)  
//         }
//     })
// })

router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            },
        },
    ])
        .then((workout) => {
            // console.log(workout);
            res.json(workout)
        })
        .catch((e) => {
            res.json(e)
        })
    
});





module.exports = router;