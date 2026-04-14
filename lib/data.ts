export const categories = [
  { id: '1', name: 'Pizza', icon: '🍕', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop' },
  { id: '2', name: 'Burger', icon: '🍔', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop' },
  { id: '3', name: 'Sushi', icon: '🍣', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200&h=200&fit=crop' },
  { id: '4', name: 'Indian', icon: '🍛', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop' },
  { id: '5', name: 'Chinese', icon: '🥡', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=200&h=200&fit=crop' },
  { id: '6', name: 'Dessert', icon: '🍰', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&h=200&fit=crop' },
  { id: '7', name: 'Healthy', icon: '🥗', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop' },
  { id: '8', name: 'Coffee', icon: '☕', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop' },
]

export const restaurants = [
  {
    id: '1',
    name: 'Pizza Paradise',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 234,
    deliveryTime: '25-35',
    deliveryFee: 2.99,
    cuisines: ['Italian', 'Pizza'],
    featured: true,
    discount: '20% OFF',
  },
  {
    id: '2',
    name: 'Burger Barn',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop',
    rating: 4.3,
    reviewCount: 189,
    deliveryTime: '20-30',
    deliveryFee: 1.99,
    cuisines: ['American', 'Burgers', 'Fast Food'],
    featured: true,
  },
  {
    id: '3',
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 312,
    deliveryTime: '30-45',
    deliveryFee: 3.99,
    cuisines: ['Japanese', 'Sushi', 'Asian'],
    featured: true,
    discount: 'Free Delivery',
  },
  {
    id: '4',
    name: 'Spice Garden',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=400&fit=crop',
    rating: 4.6,
    reviewCount: 278,
    deliveryTime: '35-50',
    deliveryFee: 2.49,
    cuisines: ['Indian', 'Curry', 'Vegetarian'],
    featured: false,
  },
  {
    id: '5',
    name: 'Dragon Wok',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&h=400&fit=crop',
    rating: 4.2,
    reviewCount: 156,
    deliveryTime: '25-40',
    deliveryFee: 2.99,
    cuisines: ['Chinese', 'Asian', 'Noodles'],
    featured: false,
    discount: '15% OFF',
  },
  {
    id: '6',
    name: 'Sweet Tooth Bakery',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop',
    rating: 4.7,
    reviewCount: 198,
    deliveryTime: '20-30',
    deliveryFee: 1.99,
    cuisines: ['Desserts', 'Bakery', 'Cafe'],
    featured: true,
  },
  {
    id: '7',
    name: 'Green Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
    rating: 4.4,
    reviewCount: 145,
    deliveryTime: '15-25',
    deliveryFee: 2.49,
    cuisines: ['Healthy', 'Salads', 'Vegan'],
    featured: false,
  },
  {
    id: '8',
    name: 'Taco Town',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop',
    rating: 4.1,
    reviewCount: 167,
    deliveryTime: '20-35',
    deliveryFee: 1.99,
    cuisines: ['Mexican', 'Tacos', 'Latin'],
    featured: false,
    discount: 'Buy 1 Get 1',
  },
]

export const menuItems: Record<string, Array<{
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  isVeg: boolean
  isBestseller?: boolean
}>> = {
  '1': [
    { id: '1-1', name: 'Margherita Pizza', description: 'Classic tomato, mozzarella, fresh basil', price: 12.99, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop', category: 'Pizzas', isVeg: true, isBestseller: true },
    { id: '1-2', name: 'Pepperoni Pizza', description: 'Pepperoni, mozzarella, tomato sauce', price: 14.99, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop', category: 'Pizzas', isVeg: false, isBestseller: true },
    { id: '1-3', name: 'BBQ Chicken Pizza', description: 'BBQ sauce, grilled chicken, red onions', price: 15.99, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop', category: 'Pizzas', isVeg: false },
    { id: '1-4', name: 'Garlic Breadsticks', description: 'Fresh baked with garlic butter', price: 5.99, image: 'https://images.unsplash.com/photo-1619531040576-f9416abb6b71?w=300&h=200&fit=crop', category: 'Sides', isVeg: true },
    { id: '1-5', name: 'Caesar Salad', description: 'Romaine, parmesan, croutons', price: 8.99, image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=300&h=200&fit=crop', category: 'Salads', isVeg: true },
    { id: '1-6', name: 'Tiramisu', description: 'Classic Italian coffee dessert', price: 6.99, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop', category: 'Desserts', isVeg: true },
  ],
  '2': [
    { id: '2-1', name: 'Classic Cheeseburger', description: 'Beef patty, cheddar, lettuce, tomato', price: 10.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop', category: 'Burgers', isVeg: false, isBestseller: true },
    { id: '2-2', name: 'Bacon Double', description: 'Double beef, crispy bacon, cheese', price: 14.99, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=200&fit=crop', category: 'Burgers', isVeg: false, isBestseller: true },
    { id: '2-3', name: 'Veggie Burger', description: 'Plant-based patty, avocado, sprouts', price: 11.99, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300&h=200&fit=crop', category: 'Burgers', isVeg: true },
    { id: '2-4', name: 'Crispy Fries', description: 'Golden, crispy, perfectly salted', price: 4.99, image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=300&h=200&fit=crop', category: 'Sides', isVeg: true },
    { id: '2-5', name: 'Onion Rings', description: 'Beer-battered, crispy onion rings', price: 5.99, image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=200&fit=crop', category: 'Sides', isVeg: true },
    { id: '2-6', name: 'Chocolate Shake', description: 'Thick, creamy chocolate milkshake', price: 5.99, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop', category: 'Drinks', isVeg: true },
  ],
  '3': [
    { id: '3-1', name: 'Salmon Nigiri', description: 'Fresh salmon over sushi rice (2 pcs)', price: 6.99, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&h=200&fit=crop', category: 'Nigiri', isVeg: false, isBestseller: true },
    { id: '3-2', name: 'Dragon Roll', description: 'Eel, avocado, cucumber, unagi sauce', price: 15.99, image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop', category: 'Rolls', isVeg: false, isBestseller: true },
    { id: '3-3', name: 'California Roll', description: 'Crab, avocado, cucumber', price: 12.99, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&h=200&fit=crop', category: 'Rolls', isVeg: false },
    { id: '3-4', name: 'Edamame', description: 'Steamed soybeans with sea salt', price: 4.99, image: 'https://images.unsplash.com/photo-1564894809611-1742fc40ed80?w=300&h=200&fit=crop', category: 'Starters', isVeg: true },
    { id: '3-5', name: 'Miso Soup', description: 'Traditional Japanese miso soup', price: 3.99, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop', category: 'Soups', isVeg: true },
    { id: '3-6', name: 'Green Tea Mochi', description: 'Matcha ice cream in rice cake', price: 5.99, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop', category: 'Desserts', isVeg: true },
  ],
  '4': [
    { id: '4-1', name: 'Butter Chicken', description: 'Creamy tomato curry with tender chicken', price: 14.99, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop', category: 'Mains', isVeg: false, isBestseller: true },
    { id: '4-2', name: 'Paneer Tikka Masala', description: 'Grilled cottage cheese in spiced gravy', price: 13.99, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop', category: 'Mains', isVeg: true, isBestseller: true },
    { id: '4-3', name: 'Biryani', description: 'Fragrant basmati rice with spices', price: 15.99, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=200&fit=crop', category: 'Rice', isVeg: false },
    { id: '4-4', name: 'Garlic Naan', description: 'Soft bread with garlic butter', price: 3.99, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop', category: 'Breads', isVeg: true },
    { id: '4-5', name: 'Samosas', description: 'Crispy pastry with spiced potatoes', price: 5.99, image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=300&h=200&fit=crop', category: 'Starters', isVeg: true },
    { id: '4-6', name: 'Gulab Jamun', description: 'Sweet milk dumplings in syrup', price: 4.99, image: 'https://images.unsplash.com/photo-1666190094691-c5ab767df1c9?w=300&h=200&fit=crop', category: 'Desserts', isVeg: true },
  ],
  '5': [
    { id: '5-1', name: 'Kung Pao Chicken', description: 'Spicy chicken with peanuts', price: 13.99, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop', category: 'Mains', isVeg: false, isBestseller: true },
    { id: '5-2', name: 'Vegetable Fried Rice', description: 'Wok-tossed rice with vegetables', price: 10.99, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop', category: 'Rice', isVeg: true },
    { id: '5-3', name: 'Dim Sum Platter', description: 'Assorted steamed dumplings', price: 14.99, image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=200&fit=crop', category: 'Starters', isVeg: false, isBestseller: true },
    { id: '5-4', name: 'Spring Rolls', description: 'Crispy rolls with vegetables', price: 6.99, image: 'https://images.unsplash.com/photo-1548507200-829a7fff0d5a?w=300&h=200&fit=crop', category: 'Starters', isVeg: true },
    { id: '5-5', name: 'Noodle Soup', description: 'Hearty broth with noodles', price: 11.99, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop', category: 'Soups', isVeg: false },
    { id: '5-6', name: 'Fortune Cookies', description: 'Sweet cookies with messages', price: 2.99, image: 'https://images.unsplash.com/photo-1592431913823-7af6b323da9b?w=300&h=200&fit=crop', category: 'Desserts', isVeg: true },
  ],
  '6': [
    { id: '6-1', name: 'Chocolate Cake', description: 'Rich, moist chocolate layer cake', price: 6.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop', category: 'Cakes', isVeg: true, isBestseller: true },
    { id: '6-2', name: 'Croissant', description: 'Buttery, flaky French pastry', price: 3.99, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=200&fit=crop', category: 'Pastries', isVeg: true },
    { id: '6-3', name: 'Cheesecake', description: 'New York style creamy cheesecake', price: 7.99, image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=300&h=200&fit=crop', category: 'Cakes', isVeg: true, isBestseller: true },
    { id: '6-4', name: 'Macarons', description: 'French almond cookies (6 pcs)', price: 8.99, image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=300&h=200&fit=crop', category: 'Cookies', isVeg: true },
    { id: '6-5', name: 'Apple Pie', description: 'Classic American apple pie', price: 5.99, image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=300&h=200&fit=crop', category: 'Pies', isVeg: true },
    { id: '6-6', name: 'Ice Cream Sundae', description: 'Vanilla with toppings', price: 6.99, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop', category: 'Ice Cream', isVeg: true },
  ],
  '7': [
    { id: '7-1', name: 'Buddha Bowl', description: 'Quinoa, chickpeas, roasted veggies', price: 13.99, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop', category: 'Bowls', isVeg: true, isBestseller: true },
    { id: '7-2', name: 'Acai Bowl', description: 'Acai blend with fresh fruits', price: 11.99, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=300&h=200&fit=crop', category: 'Bowls', isVeg: true, isBestseller: true },
    { id: '7-3', name: 'Greek Salad', description: 'Feta, olives, cucumber, tomatoes', price: 10.99, image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop', category: 'Salads', isVeg: true },
    { id: '7-4', name: 'Smoothie', description: 'Fresh fruit blend', price: 7.99, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop', category: 'Drinks', isVeg: true },
    { id: '7-5', name: 'Avocado Toast', description: 'Multigrain bread with avocado', price: 9.99, image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop', category: 'Toast', isVeg: true },
    { id: '7-6', name: 'Protein Bar', description: 'Homemade energy bar', price: 4.99, image: 'https://images.unsplash.com/photo-1622484211148-c9b3b4b1f1c2?w=300&h=200&fit=crop', category: 'Snacks', isVeg: true },
  ],
  '8': [
    { id: '8-1', name: 'Carne Asada Tacos', description: 'Grilled steak, cilantro, onions', price: 11.99, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=200&fit=crop', category: 'Tacos', isVeg: false, isBestseller: true },
    { id: '8-2', name: 'Chicken Quesadilla', description: 'Grilled chicken, cheese, peppers', price: 10.99, image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=300&h=200&fit=crop', category: 'Quesadillas', isVeg: false },
    { id: '8-3', name: 'Veggie Burrito', description: 'Beans, rice, veggies, salsa', price: 9.99, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop', category: 'Burritos', isVeg: true, isBestseller: true },
    { id: '8-4', name: 'Guacamole & Chips', description: 'Fresh made guacamole', price: 7.99, image: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=300&h=200&fit=crop', category: 'Starters', isVeg: true },
    { id: '8-5', name: 'Nachos Supreme', description: 'Loaded nachos with all toppings', price: 12.99, image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop', category: 'Starters', isVeg: false },
    { id: '8-6', name: 'Churros', description: 'Cinnamon sugar with chocolate', price: 5.99, image: 'https://images.unsplash.com/photo-1624371414361-e670edf0b951?w=300&h=200&fit=crop', category: 'Desserts', isVeg: true },
  ],
}

export function getRestaurant(id: string) {
  return restaurants.find(r => r.id === id)
}

export function getMenuItems(restaurantId: string) {
  return menuItems[restaurantId] || []
}
