
import React from 'react';
import { Plus } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const products: Product[] = [
    {
      id: 1,
      name: "Shineray Phoenix 150",
      price: 12990,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Moto esportiva ideal para cidade"
    },
    {
      id: 2,
      name: "Shineray Adventure 200",
      price: 15990,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Perfeita para aventuras off-road"
    },
    {
      id: 3,
      name: "Shineray Sport 150",
      price: 13990,
      image: "https://images.unsplash.com/photo-1609893700968-3b48a83dba18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Design moderno e performance"
    },
    {
      id: 4,
      name: "Shineray Classic 125",
      price: 9990,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Econômica e confiável"
    },
    {
      id: 5,
      name: "Shineray Cruiser 250",
      price: 18990,
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Conforto para longas viagens"
    },
    {
      id: 6,
      name: "Shineray Urban 150",
      price: 11990,
      image: "https://images.unsplash.com/photo-1609893700968-3b48a83dba18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ideal para o trânsito urbano"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#063f5c] mb-4">Nossos Produtos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra nossa linha completa de motos Shineray com qualidade e preços imbatíveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#063f5c] mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-[#0485e0]">
                    {formatPrice(product.price)}
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-[#0485e0] hover:bg-[#063f5c] text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
