"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.pgp = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
exports.pgp = pg_promise_1.default();
const devURL = "postgres://carlos:hallo@localhost:5432/tourdb";
exports.db = exports.pgp(process.env.DATABASE_URL || devURL);
