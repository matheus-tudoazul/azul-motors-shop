import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Heart, Wrench } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Users,
      title: "Experiência",
      description: "Mais de 10 anos no mercado de motocicletas"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Produtos de alta qualidade e durabilidade"
    },
    {
      icon: Heart,
      title: "Compromisso",
      description: "Dedicação total à satisfação do cliente"
    },
    {
      icon: Wrench,
      title: "Assistência",
      description: "Suporte técnico completo e especializado"
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-xl text-muted-foreground">Conheça nossa história e nosso compromisso</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem do estabelecimento */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Nossa loja"
                  className="w-full h-80 object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Texto sobre a empresa */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quem Somos</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Somos uma empresa especializada na venda de motocicletas de alta qualidade, 
                comprometida em oferecer as melhores opções para nossos clientes. Com mais de 
                uma década de experiência no mercado, conquistamos a confiança de milhares de 
                motociclistas em todo o país.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa missão é proporcionar mobilidade, liberdade e satisfação através de 
                produtos excepcionais e um atendimento personalizado que supera expectativas. 
                Cada moto vendida representa nosso compromisso com a qualidade e excelência.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;