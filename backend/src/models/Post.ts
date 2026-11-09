import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    content: { type: String, required: true},
    sourceUrl: {type: String},
    createdAt: { type: Date, default: Date.now},
    analysis: Object,
});

export const Post = mongoose.model('Post', postSchema)
