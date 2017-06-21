exports.schema = new mongoose.Schema({
    title: {
        type: String,
        length: 200
    },
    description: {
        type: String,
        length: 500
    },
    created: Date,
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'completed'],
        default: 'pending'
    }
});