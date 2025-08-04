import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Truck, Star } from 'lucide-react';
import Header from '../components/Header';

const Testimonials = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const testimonialVideos = [
    {
      id: 1,
      title: "João Silva - Satisfeito com sua nova moto",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      customer: "João Silva",
      location: "São Paulo, SP"
    },
    {
      id: 2,
      title: "Maria Santos - Experiência incrível",
      thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      customer: "Maria Santos",
      location: "Rio de Janeiro, RJ"
    },
    {
      id: 3,
      title: "Pedro Costa - Qualidade excepcional",
      thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      customer: "Pedro Costa",
      location: "Belo Horizonte, MG"
    },
    {
      id: 4,
      title: "Ana Lima - Recomendo para todos",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      customer: "Ana Lima",
      location: "Brasília, DF"
    }
  ];

  const deliveryGallery = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Entrega em São Paulo",
      date: "15/12/2024",
      customer: "João Silva"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Entrega no Rio de Janeiro",
      date: "12/12/2024",
      customer: "Maria Santos"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Entrega em Belo Horizonte",
      date: "10/12/2024",
      customer: "Pedro Costa"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Entrega em Brasília",
      date: "08/12/2024",
      customer: "Ana Lima"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Entrega em Salvador",
      date: "05/12/2024",
      customer: "Carlos Oliveira"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Entrega em Recife",
      date: "03/12/2024",
      customer: "Fernanda Costa"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartItemsCount={0}
        onCartClick={() => {}}
        onMenuClick={(section) => {
          if (section === 'inicio') {
            window.location.href = '/';
          }
        }}
      />
      
      <div className="pt-20">
        
        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Depoimentos dos Clientes</h1>
              <p className="text-xl text-muted-foreground">Veja o que nossos clientes dizem sobre nossas motos</p>
            </div>

            {/* Main Video Player */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative bg-black aspect-video">
                    <video
                      key={currentVideo}
                      className="w-full h-full object-cover"
                      controls
                      poster={testimonialVideos[currentVideo].thumbnail}
                    >
                      <source src={testimonialVideos[currentVideo].videoUrl} type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                  </div>
                  <div className="p-6 bg-card">
                    <h3 className="text-xl font-semibold mb-2">{testimonialVideos[currentVideo].title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{testimonialVideos[currentVideo].customer}</span>
                      <span>•</span>
                      <span>{testimonialVideos[currentVideo].location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video Thumbnails */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-center">Outros Depoimentos</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {testimonialVideos.map((video, index) => (
                  <Card 
                    key={video.id}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      currentVideo === index ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setCurrentVideo(index)}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                        {currentVideo === index && (
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                            Reproduzindo
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium line-clamp-2">{video.customer}</p>
                        <p className="text-xs text-muted-foreground">{video.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Gallery Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Truck className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-bold">Galeria de Entregas</h2>
              </div>
              <p className="text-xl text-muted-foreground">Acompanhe algumas das nossas entregas realizadas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliveryGallery.map((delivery) => (
                <Card key={delivery.id} className="overflow-hidden hover:scale-105 transition-all">
                  <CardContent className="p-0">
                    <img
                      src={delivery.image}
                      alt={delivery.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">{delivery.title}</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Cliente: {delivery.customer}</p>
                        <p>Data: {delivery.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;