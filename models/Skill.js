import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const skillSchema = new mongoose.Schema(
    {
        skillTitle: {
            type: String,
            required: true,
            min: 3,
            max: 50
        },
        description: {
            type: String
        },
        
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

skillSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
        returnedObject.userId = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

skillSchema.plugin(mongooseUniqueValidator);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;