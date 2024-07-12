"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose_1 = require("mongoose");
// Review Schema
const reviewSchema = new mongoose_1.Schema({
    email: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    comment: {
        type: String,
        require: true,
    },
});
// Movie Schema
const movieSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        require: [true, "Description is required"],
    },
    releaseDate: {
        type: Date,
    },
    genre: {
        type: String,
        require: [true, "Genre is required"],
    },
    reviews: {
        type: [reviewSchema],
    },
    slug: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    viewCount: {
        type: Number,
        default: 0,
    },
});
exports.Movie = (0, mongoose_1.model)("Movie", movieSchema);
