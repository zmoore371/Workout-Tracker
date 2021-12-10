const router = require("express").Router();
const db = require("../models");

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
        res.json(workout)
    })
    .catch((e) => {
        res.json(e)
    })
    
});

router.get("/api/workouts/range", (req, res) => { 
    db.Workout.aggregate([
       {
           $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
           }    
        },
        {
            "$sort": { day: -1}
        },
        //change this number to change ammount of data displayed on stats page
        {
            "$limit": 10
        }
    ])
    .then((workout) => {
        res.json(workout)
    })
    .catch((e) => {
        res.json(e)
    })
})

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body, (e, data) => {
        if(e){
            console.log(e)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            $push: {exercises: req.body}
        },
        (e, data) => {
            if(e){
                console.log(e)
            } else{
                console.log(data)
                res.json(data)
            }
        }
    )
})



module.exports = router;