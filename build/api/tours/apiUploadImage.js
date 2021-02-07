"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUploadImage = void 0;
const data_1 = require("../../data/data");
const messages_1 = require("../../model/shared/messages");
const static_1 = require("../general/static");
const apiUploadImage = (req, res, next) => {
    const tourID = req.params.id;
    const tourIndex = data_1.DataStore.tours.findIndex((item) => item.id === tourID);
    if (tourIndex === -1) {
        next(new messages_1.APIError("Validation Error", "No image found", 400));
    }
    else {
        const upload = static_1.getFileUploader(req.app.get("env"));
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
                next(new messages_1.APIError("Error", "File upload failed.", 400));
            }
            else {
                const dataFile = data_1.DataStore.tours[tourIndex].img.push(req.file.filename);
                res.json(new messages_1.PublicInfo("File uploaded", 200, dataFile));
                //res.json({ status: "success", message: "New file uploaded" });
            }
        });
    }
};
exports.apiUploadImage = apiUploadImage;
