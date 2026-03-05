export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  hoverImage: string
  colors: string[]
  rating: number
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Oversized Cotton T-Shirt",
    category: "T-Shirt",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90",
    hoverImage:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=1200&q=90",
    colors: ["#FFFFFF", "#000000", "#F5F5DC"],
    rating: 5,
  },
  {
    id: "2",
    name: "Relaxed Wool Trousers",
    category: "Trouser",
    price: 125,
    image:
      "https://images.unsplash.com/photo-1624371414361-e670fed4824e?auto=format&fit=crop&w=1200&q=90",
    hoverImage:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=90",
    colors: ["#2C3E50", "#000000"],
    rating: 4,
  },
  {
    id: "3",
    name: "Linen Blend Shorts",
    category: "Shorts",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1200&q=90",
    hoverImage:
      "https://images.unsplash.com/photo-1519273085735-3f2e4d52113b?auto=format&fit=crop&w=1200&q=90",
    colors: ["#F5F5DC", "#D2B48C"],
    rating: 5,
  },
  {
    id: "4",
    name: "Heavyweight Jersey Tee",
    category: "T-Shirt",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=90",
    hoverImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90",
    colors: ["#000000", "#FFFFFF", "#808080"],
    rating: 5,
  },
  {
    id: "5",
    name: "Straight Leg Chinos",
    category: "Trouser",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=90",
    hoverImage:
      "https://images.unsplash.com/photo-1624371414361-e670fed4824e?auto=format&fit=crop&w=1200&q=90",
    colors: ["#D2B48C", "#2C3E50"],
    rating: 4,
  },
  {
    id: "6",
    name: "Technical Nylon Shorts",
    category: "Shorts",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1519273085735-3f2e4d52113b?auto=format&fit=crop&w=1200&q=90",
    hoverImage:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1200&q=90",
    colors: ["#000000", "#2C3E50"],
    rating: 5,
  },
  {
    id: "7",
    name: "Premium Silk Shirt",
    category: "Shirt",
    price: 185,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=90",
    hoverImage:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1200&q=90",
    colors: ["#FFFFFF", "#000000"],
    rating: 5,
  },
  {
    id: "8",
    name: "Cashmere Crewneck",
    category: "Knitwear",
    price: 245,
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=90",
    hoverImage:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=1200&q=90",
    colors: ["#808080", "#000000", "#F5F5DC"],
    rating: 5,
  },
]
