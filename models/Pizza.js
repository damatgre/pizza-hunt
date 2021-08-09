//import dependencies
const { Schema, model } = require('mongoose');

//import dateFormat function
const dateFormat = require('../utils/dateFormat');

//create schema using constructor from Mongoose and define fields wuth specific data type
const PizzaSchema = new Schema(
    {
        pizzaName: {
            //instruct that data will adhere to built-in JS data types
            type: String
        },
        createdBy: {
            type: String
        },
        createdAt: {
            type: Date,
            //if no value is provided when user creates data, this will be executed
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        size: {
            type: String,
            default: 'Large'
        },
        //indicates array as data type, can also specify Array instead of brakcets
        toppings: [],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function () {
    return this.comments.length;
})

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;