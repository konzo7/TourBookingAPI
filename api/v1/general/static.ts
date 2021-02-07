// Statische Dateien wie Bilder in einer REST-API Zurverfügung stellen.
import { RequestHandler } from "express";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export function getStaticHome(env: string) {
  switch (env) {
    case "development":
      return "http://localhost:8091/static/";
    case "production":
    // ...CDN...
  }
}

// 1. FileMapper-Funktion 2. Mapping-Funktion
export function fileMapper(env: string): (filename: string) => string {
  return (filename) => getStaticHome(env) + filename;
}

// Datei Uploader
export function getFileUploader(env: string): RequestHandler {
  switch (env) {
    case "development":
      const fileID = uuidv4();
      const fileStore = multer.diskStorage({
        destination: function (req, file, callback) {
          callback(null, path.resolve("./", "public", "img"));
        },
        filename: function (req, file, callback) {
          callback(null, fileID + path.extname(file.originalname));
        }
      });
      return multer({ storage: fileStore }).single("file");

    case "production":
      return (req, res, next) => {
        next();
      };
    default:
      return (req, res, next) => {
        next();
      };
  }
}
