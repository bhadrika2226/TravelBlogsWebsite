const likesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    blogsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    },
});
const Likes = mongoose.model('Likes', likesSchema);
module.exports = Likes;
