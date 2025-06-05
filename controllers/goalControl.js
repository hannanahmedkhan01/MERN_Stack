//const { route } = require("../routes/goalRoutes")



//@desc GET Goals
//@route GET /api/goals 
//@access private

const getGoals = (res,req)=>{
    res.status(200).json({message:`GET goals`})
}
//@desc POST Goals
//@route POST /api/goals 
//@access private

const setGoals = (res,req)=>{
    res.status(200).json({message:`SET goals`})
}
//@desc UPDATE Goals
//@route UPDATE /api/goals/:id 
//@access private

const updatetGoals = (res,req)=>{
    res.status(200).json({ message: `UPDATE goal${req.params.id}` });
}
//@desc DElETE Goals
//@route DELETE /api/goals 
//@access private

const deleteGoals = (res,req)=>{
    res.status(200).json({ message: `DELETE goal ${req.params.id}` });
}

















modules.export={
getGoals,
setGoals,
updateGoals,
deleteGoals

}