import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Ashwagandha Root Powder",
    description: "Ancient adaptogenic herb that helps reduce stress and anxiety while boosting energy and concentration.",
    price: 24.99,
    category: "supplements",
    imageUrl: "https://images.pexels.com/photos/4020557/pexels-photo-4020557.jpeg",
    benefits: ["Reduces stress and anxiety", "Increases energy", "Improves concentration", "Supports immune system"],
    ingredients: ["Organic Ashwagandha Root Powder"],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Triphala Supplement",
    description: "Traditional Ayurvedic formula for digestive health and detoxification.",
    price: 19.99,
    category: "supplements",
    imageUrl: "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg",
    benefits: ["Supports digestive health", "Gentle detoxification", "Antioxidant properties", "Supports regularity"],
    ingredients: ["Amalaki", "Bibhitaki", "Haritaki"],
    rating: 4.6,
    reviews: 98,
    inStock: true
  },
  {
    id: 3,
    name: "Turmeric Golden Milk Mix",
    description: "Delicious and warming Ayurvedic drink blend with anti-inflammatory properties.",
    price: 15.99,
    category: "beverages",
    imageUrl: "https://images.pexels.com/photos/6631265/pexels-photo-6631265.jpeg",
    benefits: ["Anti-inflammatory", "Supports joint health", "Antioxidant", "Supports immune function"],
    ingredients: ["Organic Turmeric", "Ginger", "Cinnamon", "Black Pepper", "Cardamom"],
    rating: 4.9,
    reviews: 211,
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Neem Purifying Face Wash",
    description: "Gentle cleanser that removes impurities while balancing skin's natural oils.",
    price: 22.99,
    category: "skincare",
    imageUrl: "https://images.pexels.com/photos/3737600/pexels-photo-3737600.jpeg",
    benefits: ["Purifies skin", "Removes excess oil", "Prevents breakouts", "Soothes irritation"],
    ingredients: ["Neem Extract", "Aloe Vera", "Tea Tree Oil", "Tulsi"],
    rating: 4.7,
    reviews: 124,
    inStock: true,
    bestSeller: true
  },
  {
    id: 5,
    name: "Brahmi Mind Boost Tincture",
    description: "Traditional herb known to support cognitive function and mental clarity.",
    price: 29.99,
    category: "supplements",
    imageUrl: "https://images.pexels.com/photos/6692608/pexels-photo-6692608.jpeg",
    benefits: ["Enhances memory", "Improves focus", "Reduces mental fatigue", "Supports overall brain health"],
    ingredients: ["Organic Brahmi Extract", "Filtered Water", "Organic Alcohol"],
    rating: 4.5,
    reviews: 87,
    inStock: true
  },
  {
    id: 6,
    name: "Ayurvedic Hair Oil Elixir",
    description: "Nourishing blend that strengthens hair and promotes healthy growth.",
    price: 26.99,
    category: "haircare",
    imageUrl: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    benefits: ["Strengthens hair", "Promotes growth", "Prevents premature graying", "Soothes scalp"],
    ingredients: ["Coconut Oil", "Amla Extract", "Brahmi", "Bhringraj", "Hibiscus"],
    rating: 4.8,
    reviews: 143,
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Rose & Sandalwood Facial Mist",
    description: "Refreshing botanical spray that tones and hydrates all skin types.",
    price: 18.99,
    category: "skincare",
    imageUrl: "https://images.pexels.com/photos/4465827/pexels-photo-4465827.jpeg",
    benefits: ["Hydrates skin", "Balances pH", "Soothes irritation", "Sets makeup"],
    ingredients: ["Rose Water", "Sandalwood Extract", "Aloe Vera", "Glycerin"],
    rating: 4.6,
    reviews: 92,
    inStock: true
  },
  {
    id: 8,
    name: "Chyawanprash Herbal Jam",
    description: "Traditional Ayurvedic formula packed with herbs and antioxidants for immunity.",
    price: 32.99,
    category: "supplements",
    imageUrl: "https://images.pexels.com/photos/5938048/pexels-photo-5938048.jpeg",
    benefits: ["Boosts immunity", "Provides energy", "Rich in antioxidants", "Supports respiratory health"],
    ingredients: ["Amla", "Honey", "Ghee", "Sesame Oil", "Mixed Herbs"],
    rating: 4.9,
    reviews: 176,
    inStock: true,
    bestSeller: true
  }
];

export const categories: { id: string; name: string; description: string }[] = [
  {
    id: "supplements",
    name: "Supplements",
    description: "Herbal supplements for health and wellness"
  },
  {
    id: "skincare",
    name: "Skincare",
    description: "Natural skincare for radiant skin"
  },
  {
    id: "haircare",
    name: "Haircare",
    description: "Herbal solutions for healthy hair"
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Herbal teas and drink mixes"
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};