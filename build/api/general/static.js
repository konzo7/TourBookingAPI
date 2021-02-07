"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileUploader = exports.fileMapper = exports.getStaticHome = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
function getStaticHome(env) {
    switch (env) {
        case "development":
            return "http://localhost:8091/static/";
        case "production":
        // ...CDN...
    }
}
exports.getStaticHome = getStaticHome;
// 1. FileMapper-Funktion 2. Mapping-Funktion
function fileMapper(env) {
    return (filename) => getStaticHome(env) + filename;
}
exports.fileMapper = fileMapper;
// Datei Uploader
function getFileUploader(env) {
    switch (env) {
        case "development":
            const fileID = uuid_1.v4();
            const fileStore = multer_1.default.diskStorage({
                destination: function (req, file, callback) {
                    callback(null, path_1.default.resolve("./", "public", "img"));
                },
                filename: function (req, file, callback) {
                    callback(null, fileID + path_1.default.extname(file.originalname));
                }
            });
            return multer_1.default({ storage: fileStore }).single("file");
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
exports.getFileUploader = getFileUploader;
