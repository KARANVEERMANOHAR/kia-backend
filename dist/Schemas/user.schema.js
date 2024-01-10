"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: String,
    user_name: String,
    password: String,
    created_at: {
        type: Date,
        default: new Date(),
    },
    Updated_at: {
        type: Date,
    },
    created_by: mongoose.Types.ObjectId,
});
//# sourceMappingURL=user.schema.js.map