import express from "express"
const router = express.Router();
import Product from './Product.js'

router.get('/', async (req, res) => {
    try {
      const { page = 1, limit = 10, search, category, priceRange, sort } = req.query;
  

      let query = {};
      if (search) query.name = { $regex: search, $options: 'i' };
      if (category) query.category = category;
      if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);
        query.price = { $gte: minPrice, $lte: maxPrice };
      }
  
      let sortOptions = {};
      if (sort === 'priceAsc') sortOptions.price = 1;
      if (sort === 'priceDesc') sortOptions.price = -1;
      if (sort === 'dateAsc') sortOptions.createdAt = 1;
      if (sort === 'dateDesc') sortOptions.createdAt = -1;
  
      const products = await Product.find(query)
        .sort(sortOptions)
        .skip((page - 1) * limit)
        .limit(Number(limit));
  
      const totalProducts = await Product.countDocuments(query);
  
      res.json({
        products,
        totalPages: Math.ceil(totalProducts / limit),
        currentPage: Number(page)
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export default router;