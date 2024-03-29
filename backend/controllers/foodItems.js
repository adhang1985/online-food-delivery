const { default: mongoose } = require('mongoose');

// get all the food items
const getFoodItems = async(req,res) => {
    try {
        const allFoods = await mongoose.connection.db.collection('foodData').find().toArray();
        const allFoodCategory = await mongoose.connection.db.collection('foodCategory').find().toArray();
        res.status(200).json({
            status:"success",
            foodItems:allFoods,
            foodCategory:allFoodCategory
        })
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

module.exports = {getFoodItems};