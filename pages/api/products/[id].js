import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const { method, query: { id }, } = req;


dbConnect();

if(method === "GET"){
    try {
        //fetching the data const - we're only getting 1 product
       const product = await Product.findById(id);
       res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error)
        
    }

}

if(method === "PUT"){
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}


if(method === "DELETE"){
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}
}
