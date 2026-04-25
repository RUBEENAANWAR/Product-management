const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//Get products
app.get('/api/products', (req, res) => { 
    const products = [
        { id: 1, name: 'Product1', price: 10.99 },
        { id: 2, name: 'Product2', price: 19.99 }, 
    ];
    res.json(products);
}   );


//POST product
app.post('/api/products', (req, res) => {
    try{
    const { name, price } = req.body;

    if(!name || !price) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = { id: Date.now(), name, price };
    products.push(newProduct);
    res.status(201).json({ message: 'Product created successfully' });
}catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Internal server error' });
}
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});   