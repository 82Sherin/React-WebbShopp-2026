# Taste Of Greek – React WebShop 2026

🌐 **Live Demo:** [https://react-webb-shopp-2026.vercel.app](https://react-webb-shopp-2026.vercel.app)

A full-stack inspired React web application for Taste Of Greek Restaurant & Bar.
Built with React, React Router, Context API, and React Hook Form.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** installed on your machine.

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/YOUR-USERNAME/React-WebbShopp-2026.git
```

2. Navigate into the project folder:
```bash
   cd React-WebbShopp-2026
```

3. Install dependencies:
```bash
   npm install
```

4. Start the development server:
```bash
   npm run dev
```

5. Open your browser and go to:


http://localhost:5173



---


---

## 📦 Dependencies

- React + Vite
- React Router DOM
- React Hook Form
- @hookform/resolvers + Yup (form validation)
- Phosphor React (icons)

---

## 🛒 Features

- Product listing fetched from [DummyJSON API](https://dummyjson.com/products)
- Search with debounce
- Add/Remove products from cart
- Wishlist with heart toggle
- Persistent cart and wishlist with localStorage
- Checkout form with validation
- Thank you modal on order completion
- Image slider on home page
- Google Maps embed
- Responsive design (Mobile first)

---

## 🔍 Debounce Implementation

The search bar uses a custom `useDebounce` hook located in `src/Hooks/useDebounce.js`.

Instead of making an API call on every single keystroke, debounce delays the search request until the user has stopped typing for a set amount of time (3 seconds in this case).

```js
function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer); // clears the timer if the user keeps typing
    };
  }, [value, delay]);

  return debounceValue;
}
```

**How it works:**
- Every time the user types, a timer starts
- If the user types again before the timer runs out, the old timer is cleared and a new one starts
- Only when the user stops typing does the timer complete and the API call is made
- This prevents unnecessary API calls and improves performance

---

## ⚠️ Error Handling with try...catch

The project uses `try...catch` in several places to handle errors gracefully without crashing the app:

### 1. API Fetch (ShopContextProvider)
```js
const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) throw new Error("Not found!");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Something went wrong:", error);
    return []; // returns empty array so the app doesn't crash
  }
};
```

### 2. localStorage (ShopContextProvider)
```js
const loadFromStorage = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    console.error(`Failed to load "${key}" from localStorage:`, error);
    return fallback; // returns fallback value so the app doesn't crash
  }
};

const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to save "${key}" to localStorage:`, error);
  }
};
```

**Why try...catch?**
- If the API is down, the app shows an empty list instead of crashing
- If localStorage is full or blocked by the browser, the app still works — it just won't persist data
- Errors are logged to the console for debugging without breaking the user experience

---

## 📁 Project Structure

src/
assets/          # Images and static files
Cart/            # Cart and AddRemoveCart components
Components/      # Shared components (Card, Form, ImageSlider)
context/         # ShopContext and ShopContextProvider
Data/            # GreekMenu static data
Hooks/           # Custom hooks (useCart, useWishlist, useDebounce)
project/         # Project page components
views/           # Page views (Home, Menu, TakeAway, Header, Footer)
App.jsx
main.jsx

---

## 👩‍💻 Author

82Sherin – 2026

