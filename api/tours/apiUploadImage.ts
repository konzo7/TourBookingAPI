import { RequestHandler } from "express";
import { DataStore } from "../../data/data";
import { APIError, PublicInfo } from "../../model/shared/messages";
import { getFileUploader } from "../general/static";

export const apiUploadImage: RequestHandler = (req, res, next) => {
  const tourID = req.params.id;
  const tourIndex = DataStore.tours.findIndex(
    (item: any) => item.id === tourID
  );

  if (tourIndex === -1) {
    next(new APIError("Validation Error", "No image found", 400));
  } else {
    const upload = getFileUploader(req.app.get("env"));
    upload(req, res, (err: any) => {
      if (err) {
        console.log(err);
        next(new APIError("Error", "File upload failed.", 400));
      } else {
        const dataFile = DataStore.tours[tourIndex].img.push(req.file.filename);
        res.json(new PublicInfo("File uploaded", 200, dataFile));
        //res.json({ status: "success", message: "New file uploaded" });
      }
    });
  }
};
