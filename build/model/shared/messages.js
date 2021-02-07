"use strict";
// Error template
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicInfo = exports.PublicError = exports.APIError = void 0;
class APIError extends Error {
    constructor(name, message, status, properties, internalProperties) {
        super();
        this.status = status;
        this.properties = properties;
        this.internalProperties = internalProperties;
        this.name = name;
        this.message = message;
    }
    // APIError in PublicError umwandeln
    publicVersion() {
        return new PublicError(this);
    }
}
exports.APIError = APIError;
// Error that will be seen by the client
class PublicError {
    constructor(err) {
        this.name = err.name;
        this.message = err.message;
        this.status = err.status;
        this.properties = err.properties;
    }
}
exports.PublicError = PublicError;
class PublicInfo {
    constructor(message, status, properties) {
        this.message = message;
        this.status = status;
        this.properties = properties;
    }
}
exports.PublicInfo = PublicInfo;
