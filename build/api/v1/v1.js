"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerV1 = void 0;
const express_1 = __importStar(require("express"));
const body_parser_1 = require("body-parser");
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const errorHandling_1 = require("./general/errorHandling");
const apiDownloadImage_1 = require("./tours/apiDownloadImage");
const apiTours_1 = require("./tours/apiTours");
const apiUsers_1 = require("./users/apiUsers");
exports.routerV1 = express_1.Router();
exports.routerV1.use(body_parser_1.json());
exports.routerV1.use(morgan_1.default("dev"));
exports.routerV1.use("/static", express_1.default.static(path_1.default.join(__dirname, "public", "img")));
exports.routerV1.use("/users", apiUsers_1.usersRouter);
exports.routerV1.use("/tours/", apiTours_1.toursRouter);
exports.routerV1.get("/static/download/:id", apiDownloadImage_1.apiDownloadImage);
exports.routerV1.use(errorHandling_1.apiErrorHandler);
