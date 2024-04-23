import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const testimonialSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 50
        },
        description: {
            type: String
        },
        photoInfo: {
            url: String,
            filename: String,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

testimonialSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
        returnedObject.userId = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

testimonialSchema.plugin(mongooseUniqueValidator);

const Testimonial = mongoose.model("Skill", testimonialSchema);

export default Testimonial;