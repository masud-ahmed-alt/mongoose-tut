const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveInDB = async () => {
    const Product = mongoose.model('products', ProductSchema)
    let data = new Product(
        {
            name: "m 13",
            price: 1000,
            brand: "Samsung",
            category: 'mobile'
        }
    );
    let result = await data.save();
    console.log(result)
}

const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        { name: "m 13" },
        {
            $set: { price: "550" }
        }
    )
    console.warn(data);
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({name: "m 13"})
    console.warn(data);
}

const findInDB = async ()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({name: "Iphone 12"})
    console.warn(data);
}

// findInDB();