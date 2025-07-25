import React from 'react';
import { Plus, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      "id": 1,
      "name": "Shineray Titaniun",
      "price": 29990,
      "image": "https://www.shineray.com.br/wp-content/uploads/2024/12/Foto-Capa-Titanium.webp",
      "description": "Potência e estilo para cidade"
    },
    {
      "id": 2,
      "name": "Shineray Flash 250F",
      "price": 25999,
      "image": "https://www.motoremacao.com.br/uploads/images/2025/01/shineray-250f-flash-2025-a-street-chinesa-que-promete-revolucionar-o-segmento-250-cc-dd89e.jpg",
      "description": "Street 250cc moderna e potente"
    },
    {
      "id": 3,
      "name": "Shineray Storm 200 EFI",
      "price": 24999,
      "image": "https://www.shinerayrj.com.br/wp-content/uploads/2025/02/Storm-200-01.png",
      "description": "Potência e estilo para longas viagens"
    },
    {
      "id": 4,
      "name": "Shineray SHI 175 EFI",
      "price": 20999,
      "image": "https://images.tcdn.com.br/img/img_prod/1089589/shi_175_efi_9447_1_ae83ac7e31e736972be9b448d98d1004.jpg",
      "description": "Moto para aventuras e estradas"
    },
    {
      "id": 5,
      "name": "Shineray SHI 175 Trail",
      "price": 18999,
      "image": "https://www.shineray.com.br/wp-content/uploads/2023/06/Cores-SHI-175-1.webp",
      "description": "Moto trail ideal para aventuras"
    },
    {
      "id": 6,
      "name": "Shineray JEF 150 S",
      "price": 16490,
      "image": "https://www.shineray.com.br/wp-content/uploads/2024/02/JEF-150s-EFI-1.webp",
      "description": "Econômica e confiável"
    },
    {
      "id": 7,
      "name": "Shineray Jet 125 SS",
      "price": 13499,
      "image": "https://www.shineray.com.br/wp-content/uploads/2023/06/JET-125-SS-Cores-1.webp",
      "description": "Ideal para o dia a dia urbano"
    },
    {
      "id": 8,
      "name": "Shineray Jet 50 S",
      "price": 12999,
      "image": "https://www.shineray.com.br/wp-content/uploads/2023/06/Banner-Principal-JET-50S.webp",
      "description": "Entrada no mundo das motos"
    },
    {
      "id": 9,
      "name": "Shineray Phoenix S EFI",
      "price": 11999,
      "image": "https://www.shineray.com.br/wp-content/uploads/2023/08/Phoenix-S-EFI-Cor-3.webp",
      "description": "Design esportivo e performance"
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
              <div className="relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <Link
                  to={`/produto/${product.id}`}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Eye size={24} className="text-white" />
                  </div>
                </Link>
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
