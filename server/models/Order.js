const OrderSchema = mongoose.Schema({
    userId: String,
    products: Array,
    amount: Number,
    status: { type: String, default: 'processing' },
    date: { type: Date, default: Date.now }
});