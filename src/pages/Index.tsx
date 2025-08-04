
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products, { Product } from '../components/Products';
import Cart, { CartItem } from '../components/Cart';
import Simulator, { CustomerData } from '../components/Simulator';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import { toast } from 'sonner';

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.success('Item removido do carrinho!');
  };

  const generateWhatsAppMessage = (customerData: CustomerData) => {
    if (cartItems.length === 0) {
      toast.error('Seu carrinho está vazio!');
      return;
    }

    const products = cartItems.map(item => 
      `- ${item.name} (${item.quantity}x) - R$ ${(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
    ).join('\n');

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let message = `Olá, gostaria de comprar as seguintes motos:\n\n${products}\n\nTotal: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

    message += `\n\nDados pessoais:\nNome: ${customerData.fullName}\nNascimento: ${customerData.birthDate}\nCPF: ${customerData.cpf}\nTelefone: ${customerData.phone}\nEndereço: ${customerData.address}\nEmail: ${customerData.email}\nRenda: ${customerData.monthlyIncome}`;
    
    if (customerData.downPayment) {
      message += `\nEntrada: ${customerData.downPayment}`;
    }
    
    message += `\nHabilitado: ${customerData.hasLicense ? 'Sim' : 'Não'}`;

    const whatsappUrl = `https://wa.me/5599982780034?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Limpar carrinho após envio
    setCartItems([]);
    setIsCartOpen(false);
    toast.success('Pedido enviado via WhatsApp!');
  };

  const handleCustomerDataSubmit = (data: CustomerData) => {
    toast.success('Dados salvos! Agora você pode finalizar seu pedido.');
    // Não fechar o modal, apenas salvar os dados
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={scrollToSection}
      />
      
      <main className="pt-16">
        <Hero />
        <AboutUs />
        <Products onAddToCart={addToCart} />
        <Simulator onSubmit={handleCustomerDataSubmit} />
        <Contact />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onFinalizeOrder={generateWhatsAppMessage}
      />
    </div>
  );
};

export default Index;
