import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/components/Products';

interface ProductDetailData extends Product {
  specifications: {
    engine: string;
    displacement: string;
    power: string;
    torque: string;
    transmission: string;
    fuel: string;
    consumption: string;
    tank: string;
    weight: string;
    dimensions: string;
    tires: string;
    brakes: string;
    suspension: string;
    colors: string[];
  };
  features: string[];
  gallery: string[];
}

interface ProductDetailProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const productsData: { [key: string]: ProductDetailData } = {
    "1": {
      id: 1,
      name: "Shineray Titaniun",
      price: 29990,
      image: "https://www.shineray.com.br/wp-content/uploads/2024/12/Foto-Capa-Titanium.webp",
      description: "Potência e estilo para cidade",
      specifications: {
        engine: "Monocilíndrico, 4 tempos, refrigerado a ar",
        displacement: "124,9 cc",
        power: "10,8 cv @ 8.500 rpm",
        torque: "0,99 kgf.m @ 7.000 rpm",
        transmission: "CVT automática",
        fuel: "Gasolina",
        consumption: "35 km/l",
        tank: "6,5 litros",
        weight: "96 kg",
        dimensions: "1.835 x 675 x 1.155 mm",
        tires: "Dianteiro: 90/90-12 / Traseiro: 90/90-12",
        brakes: "Dianteiro: Disco / Traseiro: Tambor",
        suspension: "Dianteira: Telescópica / Traseira: Duplo amortecedor",
        colors: ["Branco", "Preto", "Azul"]
      },
      features: [
        "Painel digital completo",
        "Sistema de partida elétrica",
        "Freio a disco dianteiro",
        "Design moderno e esportivo",
        "Baixo consumo de combustível"
      ],
      gallery: [
        "https://www.shineray.com.br/wp-content/uploads/2024/12/Foto-Capa-Titanium.webp"
      ]
    },
    "2": {
      id: 2,
      name: "Shineray Flash 250F",
      price: 25999,
      image: "https://www.motoremacao.com.br/uploads/images/2025/01/shineray-250f-flash-2025-a-street-chinesa-que-promete-revolucionar-o-segmento-250-cc-dd89e.jpg",
      description: "Street 250cc moderna e potente",
      specifications: {
        engine: "Monocilíndrico, 4 tempos, refrigerado a líquido",
        displacement: "249 cc",
        power: "25 cv @ 8.500 rpm",
        torque: "2,2 kgf.m @ 7.000 rpm",
        transmission: "Manual 6 marchas",
        fuel: "Gasolina",
        consumption: "25 km/l",
        tank: "15 litros",
        weight: "148 kg",
        dimensions: "2.010 x 750 x 1.100 mm",
        tires: "Dianteiro: 110/70-17 / Traseiro: 140/70-17",
        brakes: "Dianteiro: Disco / Traseiro: Disco",
        suspension: "Dianteira: Telescópica invertida / Traseira: Monoamortecedor",
        colors: ["Vermelho", "Preto", "Branco"]
      },
      features: [
        "Painel digital TFT",
        "Sistema ABS",
        "Freios a disco duplos",
        "Suspensão esportiva",
        "Motor refrigerado a líquido"
      ],
      gallery: [
        "https://www.motoremacao.com.br/uploads/images/2025/01/shineray-250f-flash-2025-a-street-chinesa-que-promete-revolucionar-o-segmento-250-cc-dd89e.jpg"
      ]
    },
    "3": {
      id: 3,
      name: "Shineray Storm 200 EFI",
      price: 24999,
      image: "https://www.shinerayrj.com.br/wp-content/uploads/2025/02/Storm-200-01.png",
      description: "Potência e estilo para longas viagens",
      specifications: {
        engine: "Monocilíndrico, 4 tempos, refrigerado a ar",
        displacement: "196 cc",
        power: "16,5 cv @ 8.500 rpm",
        torque: "1,65 kgf.m @ 7.000 rpm",
        transmission: "Manual 5 marchas",
        fuel: "Gasolina",
        consumption: "28 km/l",
        tank: "12 litros",
        weight: "138 kg",
        dimensions: "2.050 x 780 x 1.120 mm",
        tires: "Dianteiro: 100/80-17 / Traseiro: 130/70-17",
        brakes: "Dianteiro: Disco / Traseiro: Disco",
        suspension: "Dianteira: Telescópica / Traseira: Duplo amortecedor",
        colors: ["Preto", "Branco", "Azul"]
      },
      features: [
        "Injeção eletrônica",
        "Painel digital",
        "Freios a disco",
        "Design touring",
        "Conforto para longas viagens"
      ],
      gallery: [
        "https://www.shinerayrj.com.br/wp-content/uploads/2025/02/Storm-200-01.png"
      ]
    },
    "4": {
      id: 4,
      name: "Shineray SHI 175 EFI",
      price: 20999,
      image: "https://images.tcdn.com.br/img/img_prod/1089589/shi_175_efi_9447_1_ae83ac7e31e736972be9b448d98d1004.jpg",
      description: "Moto para aventuras e estradas",
      specifications: {
        engine: "Monocilíndrico, 4 tempos, refrigerado a ar",
        displacement: "175 cc",
        power: "14,5 cv @ 8.500 rpm",
        torque: "1,45 kgf.m @ 7.000 rpm",
        transmission: "Manual 5 marchas",
        fuel: "Gasolina",
        consumption: "30 km/l",
        tank: "10 litros",
        weight: "128 kg",
        dimensions: "2.000 x 760 x 1.100 mm",
        tires: "Dianteiro: 90/90-19 / Traseiro: 110/90-17",
        brakes: "Dianteiro: Disco / Traseiro: Tambor",
        suspension: "Dianteira: Telescópica / Traseira: Duplo amortecedor",
        colors: ["Vermelho", "Branco", "Preto"]
      },
      features: [
        "Injeção eletrônica",
        "Protetor de motor",
        "Bagageiro traseiro",
        "Pneus mistos",
        "Ideal para aventuras"
      ],
      gallery: [
        "https://images.tcdn.com.br/img/img_prod/1089589/shi_175_efi_9447_1_ae83ac7e31e736972be9b448d98d1004.jpg"
      ]
    },
    "5": {
      id: 5,
      name: "Shineray SHI 175 Trail",
      price: 18999,
      image: "https://www.shineray.com.br/wp-content/uploads/2023/06/Cores-SHI-175-1.webp",
      description: "Moto trail ideal para aventuras",
      specifications: {
        engine: "Monocilíndrico, 4 tempos, refrigerado a ar",
        displacement: "175 cc",
        power: "14 cv @ 8.500 rpm",
        torque: "1,4 kgf.m @ 7.000 rpm",
        transmission: "Manual 5 marchas",
        fuel: "Gasolina",
        consumption: "32 km/l",
        tank: "10 litros",
        weight: "125 kg",
        dimensions: "2.000 x 760 x 1.150 mm",
        tires: "Dianteiro: 90/90-21 / Traseiro: 110/90-18",
        brakes: "Dianteiro: Disco / Traseiro: Tambor",
        suspension: "Dianteira: Telescópica longa / Traseira: Duplo amortecedor",
        colors: ["Laranja", "Branco", "Azul"]
      },
      features: [
        "Suspensão longa",
        "Protetor de motor robusto",
        "Pneus trail",
        "Alto vão livre",
        "Ideal para trilhas"
      ],
      gallery: [
        "https://www.shineray.com.br/wp-content/uploads/2023/06/Cores-SHI-175-1.webp"
      ]
    },
    "6": {
      id: 6,
      name: "Shineray JEF 150 S",
      price: 16490,
      image: "https://www.shineray.com.br/wp-content/uploads/2024/02/JEF-150s-EFI-1.webp",
      description: "Econômica e confiável",
      specifications: {
        engine: "Monocilíndrico, 4 tempos, refrigerado a ar",
        displacement: "149 cc",
        power: "12,5 cv @ 8.500 rpm",
        torque: "1,25 kgf.m @ 7.000 rpm",
        transmission: "Manual 5 marchas",
        fuel: "Gasolina",
        consumption: "35 km/l",
        tank: "12 litros",
        weight: "118 kg",
        dimensions: "1.980 x 720 x 1.080 mm",
        tires: "Dianteiro: 80/100-18 / Traseiro: 90/90-18",
        brakes: "Dianteiro: Disco / Traseiro: Tambor",
        suspension: "Dianteira: Telescópica / Traseira: Duplo amortecedor",
        colors: ["Branco", "Preto", "Vermelho"]
      },
      features: [
        "Injeção eletrônica",
        "Economia de combustível",
        "Manutenção baixa",
        "Conforto urbano",
        "Partida elétrica"
      ],
      gallery: [
        "https://www.shineray.com.br/wp-content/uploads/2024/02/JEF-150s-EFI-1.webp"
      ]
    },
    "7": {
      id: 7,
      name: "Shineray Jet 125 SS",
      price: 13499,
      image: "https://www.shineray.com.br/wp-content/uploads/2023/06/JET-125-SS-Cores-1.webp",
      description: "Ideal para o dia a dia urbano",
      specifications: {
        engine: "Monocilíndrico, 4 tempos, refrigerado a ar",
        displacement: "124 cc",
        power: "10,5 cv @ 8.500 rpm",
        torque: "1,0 kgf.m @ 7.000 rpm",
        transmission: "Manual 4 marchas",
        fuel: "Gasolina",
        consumption: "38 km/l",
        tank: "11 litros",
        weight: "110 kg",
        dimensions: "1.950 x 700 x 1.050 mm",
        tires: "Dianteiro: 80/100-18 / Traseiro: 90/90-18",
        brakes: "Dianteiro: Disco / Traseiro: Tambor",
        suspension: "Dianteira: Telescópica / Traseira: Duplo amortecedor",
        colors: ["Azul", "Branco", "Preto"]
      },
      features: [
        "Design esportivo",
        "Economia excepcional",
        "Fácil pilotagem",
        "Manutenção simples",
        "Ideal para iniciantes"
      ],
      gallery: [
        "https://www.shineray.com.br/wp-content/uploads/2023/06/JET-125-SS-Cores-1.webp"
      ]
    },
    "8": {
      id: 8,
      name: "Shineray Jet 50 S",
      price: 12999,
      image: "https://www.shineray.com.br/wp-content/uploads/2023/06/Banner-Principal-JET-50S.webp",
      description: "Entrada no mundo das motos",
      specifications: {
        engine: "Monocilíndrico, 4 tempos, refrigerado a ar",
        displacement: "49,9 cc",
        power: "3,5 cv @ 8.500 rpm",
        torque: "0,35 kgf.m @ 7.000 rpm",
        transmission: "CVT automática",
        fuel: "Gasolina",
        consumption: "45 km/l",
        tank: "5,5 litros",
        weight: "85 kg",
        dimensions: "1.830 x 670 x 1.100 mm",
        tires: "Dianteiro: 80/90-14 / Traseiro: 80/90-14",
        brakes: "Dianteiro: Disco / Traseiro: Tambor",
        suspension: "Dianteira: Telescópica / Traseira: Duplo amortecedor",
        colors: ["Cinza", "Branco", "Azul"]
      },
      features: [
        "Transmissão automática",
        "Consumo excepcional",
        "Fácil condução",
        "Não precisa de habilitação A",
        "Perfeita para cidade"
      ],
      gallery: [
        "https://www.shineray.com.br/wp-content/uploads/2023/06/Banner-Principal-JET-50S.webp"
      ]
    },
    "9": {
      id: 9,
      name: "Shineray Phoenix S EFI",
      price: 11999,
      image: "https://www.shineray.com.br/wp-content/uploads/2023/08/Phoenix-S-EFI-Cor-3.webp",
      description: "Design esportivo e performance",
      specifications: {
        engine: "Monocilíndrico, 4 tempos, refrigerado a ar",
        displacement: "124 cc",
        power: "10 cv @ 8.500 rpm",
        torque: "0,95 kgf.m @ 7.000 rpm",
        transmission: "Manual 4 marchas",
        fuel: "Gasolina",
        consumption: "40 km/l",
        tank: "10 litros",
        weight: "105 kg",
        dimensions: "1.920 x 690 x 1.040 mm",
        tires: "Dianteiro: 80/100-17 / Traseiro: 90/90-17",
        brakes: "Dianteiro: Disco / Traseiro: Tambor",
        suspension: "Dianteira: Telescópica / Traseira: Duplo amortecedor",
        colors: ["Vermelho", "Preto", "Branco"]
      },
      features: [
        "Injeção eletrônica",
        "Design naked",
        "Painel digital",
        "Freio a disco",
        "Posição de pilotagem esportiva"
      ],
      gallery: [
        "https://www.shineray.com.br/wp-content/uploads/2023/08/Phoenix-S-EFI-Cor-3.webp"
      ]
    }
  };

  const product = id ? productsData[id] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header 
          cartItemsCount={0} 
          onCartClick={() => navigate('/')} 
          onMenuClick={() => navigate('/')} 
        />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Produto não encontrado</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemsCount={0} 
        onCartClick={() => navigate('/')} 
        onMenuClick={() => navigate('/')} 
      />
      
      <div>
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="absolute top-20 left-4 z-10 bg-white/80 hover:bg-white/90 backdrop-blur-sm"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        {/* Hero Section com imagem da moto - AUMENTADO */}
        <div className="relative h-[85vh] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay com informações */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Informações sobrepostas */}
          <div className="absolute bottom-0 left-0 right-0 text-white p-8">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200">{product.description}</p>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-gray-300 mb-1">A partir de</p>
                  <div className="text-3xl md:text-4xl font-bold">
                    {formatPrice(product.price)}
                  </div>
                  <p className="text-sm text-gray-300 mt-1">*Preço público sugerido. Frete não incluso</p>
                </div>
                
                <div className="flex gap-4">
                  <Button
                    onClick={() => onAddToCart(product)}
                    className="bg-[#0485e0] hover:bg-[#063f5c] text-white px-8 py-3 text-lg"
                  >
                    <Plus className="mr-2 h-5 w-5" />
                    Adicionar ao Carrinho
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-white text-white bg-white/10 hover:bg-white hover:text-black px-8 py-3 text-lg backdrop-blur-sm"
                    onClick={() => {
                      const message = `Olá! Tenho interesse na ${product.name}. Gostaria de mais informações.`;
                      const whatsappUrl = `https://wa.me/5599985381946?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Consultar Preço
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de informações detalhadas */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#0485e0] p-1 rounded-none">
                <TabsTrigger value="specs" className="text-lg py-4 text-white data-[state=active]:bg-white data-[state=active]:text-[#063f5c] data-[state=inactive]:bg-[#0485e0] data-[state=inactive]:text-white font-semibold">
                  Especificações Técnicas
                </TabsTrigger>
                <TabsTrigger value="features" className="text-lg py-4 text-white data-[state=active]:bg-white data-[state=active]:text-[#063f5c] data-[state=inactive]:bg-[#0485e0] data-[state=inactive]:text-white font-semibold">
                  Características
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="specs" className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Motor */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#063f5c] mb-6 border-b border-gray-200 pb-2">
                      Motor
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Tipo:</span>
                        <span className="text-gray-900 font-semibold text-right">{product.specifications.engine}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Cilindrada:</span>
                        <span className="text-gray-900 font-semibold">{product.specifications.displacement}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Potência:</span>
                        <span className="text-gray-900 font-semibold">{product.specifications.power}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-medium">Torque:</span>
                        <span className="text-gray-900 font-semibold">{product.specifications.torque}</span>
                      </div>
                    </div>
                  </div>

                  {/* Transmissão e Combustível */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#063f5c] mb-6 border-b border-gray-200 pb-2">
                      Transmissão e Combustível
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Transmissão:</span>
                        <span className="text-gray-900 font-semibold">{product.specifications.transmission}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Combustível:</span>
                        <span className="text-gray-900 font-semibold">{product.specifications.fuel}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Consumo:</span>
                        <span className="text-gray-900 font-semibold">{product.specifications.consumption}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-medium">Tanque:</span>
                        <span className="text-gray-900 font-semibold">{product.specifications.tank}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dimensões e Peso */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#063f5c] mb-6 border-b border-gray-200 pb-2">
                      Dimensões e Peso
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Peso:</span>
                        <span className="text-gray-900 font-semibold">{product.specifications.weight}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Dimensões:</span>
                        <span className="text-gray-900 font-semibold text-right">{product.specifications.dimensions}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-medium">Pneus:</span>
                        <span className="text-gray-900 font-semibold text-right">{product.specifications.tires}</span>
                      </div>
                    </div>
                  </div>

                  {/* Freios e Suspensão */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#063f5c] mb-6 border-b border-gray-200 pb-2">
                      Freios e Suspensão
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Freios:</span>
                        <span className="text-gray-900 font-semibold text-right">{product.specifications.brakes}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">Suspensão:</span>
                        <span className="text-gray-900 font-semibold text-right">{product.specifications.suspension}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600 font-medium">Cores disponíveis:</span>
                        <span className="text-gray-900 font-semibold">{product.specifications.colors.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4">
                      <div className="w-3 h-3 bg-[#0485e0] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;