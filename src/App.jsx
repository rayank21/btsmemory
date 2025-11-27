import { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Banner from './components/Banner';
import ProductRange from './components/ProductRange';
import Concept from './components/Concept';
import Showcase from './components/Showcase';
import PriceContact from './components/PriceContact';
import Checkout from './components/Checkout';
import Rules from './components/Rules';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Countdown from './components/Countdown';
import Demo from './components/Demo';

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Initialize theme
  useState(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <Hero />
      <Banner />
      <Countdown />
      <ProductRange />
      <Concept />
      <Demo />
      <Rules />
      <Showcase />
      <Reviews />
      <FAQ />
      <PriceContact onBuyClick={() => setIsCheckoutOpen(true)} />
      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </Layout>
  );
}

export default App;
