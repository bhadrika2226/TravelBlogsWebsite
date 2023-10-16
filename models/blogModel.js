const blogSchema = new mongoose.Schema({
    blogId: {
        type: Number,
        unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bState: {
        type: String,
        required: true
    },
    bCity: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tag: {
        type: [String],
        required: true
    },
    date: {
        type: date,
        require: true
    },
    bImg: {
        type: String,
        required: true
    },
});
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;