import { Navbar } from '../components/Navbar';
import { ProductDetails } from '../components/ProductDetails';

export function HomePage() {
  return (
    <main className="main-layout main-app">
      <Navbar />
      <ProductDetails />
    </main>
  );
}
