"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDownloadImage = void 0;
const path_1 = __importDefault(require("path"));
const messages_1 = require("../../../model/shared/messages");
const apiDownloadImage = (req, res, next) => {
    const fileID = req.params.id;
    res.download(path_1.default.resolve("./", "public", "img", fileID), (err) => {
        if (err) {
            next(new messages_1.APIError("Download failed.", "Can not download requested file.", 400));
        }
    });
};
exports.apiDownloadImage = apiDownloadImage;
