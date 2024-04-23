import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const projectSchema = new mongoose.Schema(
    {
        projectTitle: {
            type: String,
            required: true,
            min: 3,
            max: 50
        },
        link: {
            url: String
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

projectSchema.set("toJSON", {
    transform: (_document, returnedObject) => {
        returnedObject.userId = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

projectSchema.plugin(mongooseUniqueValidator);

const Project = mongoose.model("Project", projectSchema);

export default Project;