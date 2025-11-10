export interface Product {
  id: string;
  name: string;
  category: string;
  emoji: string;
  price: number;
  description: string;
  featured?: boolean;
}

export const categories = [
  { name: 'Books & Notebooks', emoji: '📚' },
  { name: 'Writing Instruments', emoji: '✏️' },
  { name: 'Geometry Tools', emoji: '📐' },
  { name: 'Cleaning Supplies', emoji: '🧹' },
  { name: 'Art Supplies', emoji: '🎨' },
  { name: 'Storage Solutions', emoji: '🎒' },
];

export const products: Product[] = [
  // 📚 Books & Notebooks (5 items)
  {
    id: '1',
    name: 'Exercise Books',
    category: 'Books & Notebooks',
    emoji: '📚',
    price: 2500,
    description: 'High-quality exercise books for all subjects',
    featured: true,
  },
  {
    id: '2',
    name: 'Counter Books',
    category: 'Books & Notebooks',
    emoji: '📗',
    price: 8000,
    description: 'Professional counter books for business records',
    featured: true,
  },
  {
    id: '3',
    name: 'Ruled Sheets',
    category: 'Books & Notebooks',
    emoji: '📝',
    price: 3000,
    description: 'Pack of ruled sheets for writing',
  },
  {
    id: '4',
    name: 'Manila Papers',
    category: 'Books & Notebooks',
    emoji: '📄',
    price: 4000,
    description: 'High-quality manila papers for projects',
  },
  {
    id: '5',
    name: 'Log Books',
    category: 'Books & Notebooks',
    emoji: '📋',
    price: 5000,
    description: 'Log books for record keeping',
  },
  
  // ✏️ Writing Instruments (7 items)
  {
    id: '6',
    name: 'Blue Pens Pack',
    category: 'Writing Instruments',
    emoji: '✏️',
    price: 5000,
    description: 'Pack of 12 blue pens',
    featured: true,
  },
  {
    id: '7',
    name: 'Pencils Pack',
    category: 'Writing Instruments',
    emoji: '✏️',
    price: 6000,
    description: 'Pack of 12 HB pencils',
    featured: true,
  },
  {
    id: '8',
    name: 'Black Pens',
    category: 'Writing Instruments',
    emoji: '🖊️',
    price: 2000,
    description: 'Pack of 5 black pens',
  },
  {
    id: '9',
    name: 'Red Pens',
    category: 'Writing Instruments',
    emoji: '🖊️',
    price: 3000,
    description: 'Pack of 5 red pens',
  },
  {
    id: '10',
    name: 'Erasers',
    category: 'Writing Instruments',
    emoji: '🧹',
    price: 2000,
    description: 'Pack of 3 quality erasers',
  },
  {
    id: '11',
    name: 'Pen Refills',
    category: 'Writing Instruments',
    emoji: '💉',
    price: 4000,
    description: 'Pack of 10 pen refills',
  },
  {
    id: '12',
    name: 'Highlighters',
    category: 'Writing Instruments',
    emoji: '🖍️',
    price: 3500,
    description: 'Pack of 4 colorful highlighters',
  },
  
  // 📐 Geometry Tools (5 items)
  {
    id: '13',
    name: 'Mathematical Set',
    category: 'Geometry Tools',
    emoji: '📐',
    price: 15000,
    description: 'Complete mathematical set with compass, protractor, and ruler',
    featured: true,
  },
  {
    id: '14',
    name: 'Rulers',
    category: 'Geometry Tools',
    emoji: '📏',
    price: 2000,
    description: '30cm transparent ruler',
  },
  {
    id: '15',
    name: 'Protractors',
    category: 'Geometry Tools',
    emoji: '📐',
    price: 3000,
    description: 'Semi-circle protractor for angle measurement',
  },
  {
    id: '16',
    name: 'Compass Set',
    category: 'Geometry Tools',
    emoji: '⭕',
    price: 5000,
    description: 'Professional compass for drawing circles',
  },
  {
    id: '17',
    name: 'Set Squares',
    category: 'Geometry Tools',
    emoji: '📐',
    price: 4000,
    description: '45° and 60° set squares',
  },
  
  // 🧹 Cleaning Supplies (7 items)
  {
    id: '18',
    name: 'Heavy Duty Broom',
    category: 'Cleaning Supplies',
    emoji: '🧹',
    price: 15000,
    description: 'Durable heavy-duty broom for effective cleaning',
    featured: true,
  },
  {
    id: '19',
    name: 'Mop with Bucket',
    category: 'Cleaning Supplies',
    emoji: '🧽',
    price: 25000,
    description: 'Complete mop set with wringer bucket',
  },
  {
    id: '20',
    name: 'Plastic Brooms',
    category: 'Cleaning Supplies',
    emoji: '🧹',
    price: 12000,
    description: 'Lightweight plastic brooms',
  },
  {
    id: '21',
    name: 'Dust Pans',
    category: 'Cleaning Supplies',
    emoji: '🥄',
    price: 5000,
    description: 'Metal dust pans for easy cleaning',
  },
  {
    id: '22',
    name: 'Floor Polish',
    category: 'Cleaning Supplies',
    emoji: '💧',
    price: 18000,
    description: 'High-quality floor polish',
  },
  {
    id: '23',
    name: 'Detergents',
    category: 'Cleaning Supplies',
    emoji: '🧴',
    price: 35000,
    description: 'Bulk detergents for thorough cleaning',
  },
  {
    id: '24',
    name: 'Toilet Brushes',
    category: 'Cleaning Supplies',
    emoji: '🧽',
    price: 15000,
    description: 'Sturdy toilet brushes',
  },
  
  // 🎨 Art Supplies (6 items)
  {
    id: '25',
    name: 'Color Pencils',
    category: 'Art Supplies',
    emoji: '🎨',
    price: 18000,
    description: 'Pack of 24 vibrant color pencils',
    featured: true,
  },
  {
    id: '26',
    name: 'Water Colors',
    category: 'Art Supplies',
    emoji: '🎨',
    price: 12000,
    description: 'Complete watercolor set',
  },
  {
    id: '27',
    name: 'Paint Brushes',
    category: 'Art Supplies',
    emoji: '🖌️',
    price: 8000,
    description: 'Set of 10 different paint brushes',
  },
  {
    id: '28',
    name: 'Crayons',
    category: 'Art Supplies',
    emoji: '🖍️',
    price: 6000,
    description: 'Pack of 12 crayons',
  },
  {
    id: '29',
    name: 'Drawing Papers',
    category: 'Art Supplies',
    emoji: '📄',
    price: 4000,
    description: 'A4 drawing papers pack',
  },
  {
    id: '30',
    name: 'Art Sketch Pads',
    category: 'Art Supplies',
    emoji: '📓',
    price: 25000,
    description: 'Professional art sketch pads',
  },
  
  // 🎒 Storage Solutions (6 items)
  {
    id: '31',
    name: 'School Backpack',
    category: 'Storage Solutions',
    emoji: '🎒',
    price: 45000,
    description: 'Durable school backpack with multiple compartments',
    featured: true,
  },
  {
    id: '32',
    name: 'Plastic Boxes',
    category: 'Storage Solutions',
    emoji: '📦',
    price: 8000,
    description: 'Stackable plastic storage boxes',
  },
  {
    id: '33',
    name: 'Pencil Cases',
    category: 'Storage Solutions',
    emoji: '✏️',
    price: 5000,
    description: 'Zipper pencil cases',
  },
  {
    id: '34',
    name: 'File Organizers',
    category: 'Storage Solutions',
    emoji: '🗂️',
    price: 15000,
    description: 'Desktop file organizers',
  },
  {
    id: '35',
    name: 'Book Stands',
    category: 'Storage Solutions',
    emoji: '📚',
    price: 12000,
    description: 'Adjustable book stands',
  },
  {
    id: '36',
    name: 'Lockers',
    category: 'Storage Solutions',
    emoji: '🔒',
    price: 40000,
    description: 'Personal storage lockers',
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};


