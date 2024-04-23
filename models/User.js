import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
import validator from "validator";

const userSchema = new mongoose.Schema(
    {
        userId: mongoose.Schema.Types.ObjectId,
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
            validate: [validator.isEmail, "Please provide a valid email!"]
        },
        passwordHash: {
            type: String,
            required: true,
            min: 5,
        },
        photoInfo: {
            url: String,
            filename: String,
        },
        skills: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skills"
        }],
        pojects: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Projects"
        }],
        testimonials: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Testimonials"
        }]
    },
    { timestamps: true }

    
);

userSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
        returnedObject.userId = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

userSchema.plugin(mongooseUniqueValidator);

const User = mongoose.model("User", userSchema);

export default User;