import { useState } from 'react';
import './App.css';
import Login from './Login';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem('user');
  return savedUser ? JSON.parse(savedUser) : null;
});
       if (showLogin) {
  return (
    <div>
      <button
        onClick={() => setShowLogin(false)}
        style={{ margin: '15px', padding: '10px', cursor: 'pointer' }}
      >
        ← Back to Home
      </button>

      <Login />
    </div>
  );
} 
return (
    
  <div> <nav> <h2>🏛️ Heritage & Culture</h2>


    <div>
      <a href="#home">Home</a>
      <a href="#explore">Explore</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  {user ? (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <span style={{ color: 'white' }}>
      Welcome, {user.name}!
    </span>

    <button
      onClick={() => {
        localStorage.removeItem('user');
        setUser(null);
      }}
      style={{
        marginLeft: '20px',
        padding: '10px 18px',
        background: '#b45309',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}
    >
      Logout
    </button>
  </div>
) : (
  <button
    onClick={() => setShowLogin(true)}
    style={{
      marginLeft: '20px',
      padding: '10px 18px',
      background: '#b45309',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }}
  >
    Login
  </button>
)}
  </nav>
  

  <section className="hero" id="home">
    <h1>Discover India's Heritage</h1>

    <p>
      Explore India's magnificent monuments, colorful festivals,
      traditional art, delicious cuisine and timeless culture.
    </p>

    <button onClick={() => {
      document.getElementById('explore').scrollIntoView({
        behavior: 'smooth'
      });
    }}>
      Explore Heritage →
    </button>
  </section>

<section className="section" id="explore">
  <h2>Explore Indian Culture 🇮🇳</h2>

  <p>Discover the beauty of India's rich cultural heritage.</p>
     <input
  type="text"
  placeholder="Search monuments, festivals, art..."
  className="search-input"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<div className="category-buttons">
  {['All', 'Monuments', 'Festivals', 'Art & Craft', 'Traditional Cuisine'].map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      style={{
        padding: '10px 18px',
        margin: '5px',
        borderRadius: '20px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: selectedCategory === category ? '#8b4513' : '#eeeeee',
        color: selectedCategory === category ? 'white' : 'black'
      }}
    >
      {category}
    </button>
  ))}
</div>
<div className="categories">
   <div
  className="category-card"
  style={{
  display:
    search.trim() === '' ||
'taj mahal'.includes(search.toLowerCase()) ||
'monuments'.includes(search.toLowerCase()) &&
    (selectedCategory === 'All' ||
      selectedCategory === 'Monuments')
      ? 'block'
      : 'none'
}}

>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
    className="category-image"
  />

  <h3>Monuments</h3>
  <p>Explore India's historic forts, temples and monuments.</p>
</div>

     <div
  className="category-card"
style={{
  display:
    (
      search.trim() === '' ||
      'festivals'.includes(search.toLowerCase()) ||
      'diwali'.includes(search.toLowerCase())
    ) &&
    (
      selectedCategory === 'All' ||
      selectedCategory === 'Festivals'
    )
      ? 'block'
      : 'none'
}}
>
     <img
  src="/diwali.jpg"
  alt="Diwali Festival"
  className="category-image"
/>
      <h3>Festivals</h3>
      <p>Discover the colorful festivals and traditions of India.</p>
    </div>

  <div
  className="category-card"
style={{
  display:
    (
      search.trim() === '' ||
      'art craft'.includes(search.toLowerCase()) ||
      'traditional art'.includes(search.toLowerCase())
    ) &&
    (
      selectedCategory === 'All' ||
      selectedCategory === 'Art & Craft'
    )
      ? 'block'
      : 'none'
}}
>
     <img
  src="/art.jpg"
  alt="Indian Traditional Art and Craft"
  className="category-image"
/>
      <h3>Art & Craft</h3>
      <p>Explore traditional paintings, handicrafts and artwork.</p>
    </div>

     <div
  className="category-card"
style={{
  display:
    (
      search.trim() === '' ||
      'indian cuisine'.includes(search.toLowerCase()) ||
      'food'.includes(search.toLowerCase())
    ) &&
    (
      selectedCategory === 'All' ||
      selectedCategory === 'Traditional Cuisine'
    )
      ? 'block'
      : 'none'
}}
>
     <img
  src="/food.jpg"
  alt="Traditional Indian Cuisine"
  className="category-image"
/>
      <h3>Indian Cuisine</h3>
      <p>Discover the delicious flavors of Indian food.</p>
    </div>
  </div>
</section>

  <section className="section" id="about">
    <h2>About Us</h2>
    <p>
      Our mission is to preserve and share India's beautiful heritage
      and traditions with the world.
    </p>
  </section>

  <section className="section" id="contact">
    <h2>Contact Us</h2>
    <p>Have a story to share? Stay connected with us!</p>
  </section>
</div>


);
}

export default App;
