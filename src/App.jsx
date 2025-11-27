import { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ProductRange from './components/ProductRange';
import Concept from './components/Concept';
import Showcase from './components/Showcase';
import PriceContact from './components/PriceContact';
import Checkout from './components/Checkout';
import Rules from './components/Rules';

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <Layout>
      <Hero />
      <ProductRange />
      <Concept />
      <Rules />
      <Showcase />
      <PriceContact onBuyClick={() => setIsCheckoutOpen(true)} />
      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </Layout>
  );
}

export default App;
