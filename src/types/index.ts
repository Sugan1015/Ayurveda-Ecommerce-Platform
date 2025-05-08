export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  benefits: string[];
  ingredients?: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}