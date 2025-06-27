
import React, { useState } from 'react';
import { X, Minus, Plus, User, Calendar, CreditCard, Phone, MapPin, Mail, DollarSign, Car } from 'lucide-react';
import { Product } from './Products';
import { CustomerData } from './Simulator';

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onFinalizeOrder: (customerData: CustomerData) => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onFinalizeOrder
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<CustomerData>({
    fullName: '',
    birthDate: '',
    cpf: '',
    phone: '',
    address: '',
    email: '',
    monthlyIncome: '',
    downPayment: '',
    hasLicense: false
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const handleInputChange = (field: keyof CustomerData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFinalizeOrder(formData);
    setShowForm(false);
    setFormData({
      fullName: '',
      birthDate: '',
      cpf: '',
      phone: '',
      address: '',
      email: '',
      monthlyIncome: '',
      downPayment: '',
      hasLicense: false
    });
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#063f5c]">
            {showForm ? 'Dados para Finalizar Compra' : 'Carrinho'}
          </h2>
          <button
            onClick={() => {
              onClose();
              setShowForm(false);
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 200px)' }}>
          {!showForm ? (
            // Cart Items View
            <div className="p-6">
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-lg">Seu carrinho está vazio</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#063f5c]">{item.name}</h3>
                        <p className="text-[#0485e0] font-bold">{formatPrice(item.price)}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Form View
            <div className="p-6">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nome Completo */}
                  <div className="md:col-span-2">
                    <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                      <User size={16} className="mr-2" />
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  {/* Data de Nascimento */}
                  <div>
                    <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                      <Calendar size={16} className="mr-2" />
                      Data de Nascimento *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>

                  {/* CPF */}
                  <div>
                    <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                      <CreditCard size={16} className="mr-2" />
                      CPF *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={14}
                      value={formData.cpf}
                      onChange={(e) => handleInputChange('cpf', formatCPF(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="000.000.000-00"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                      <Phone size={16} className="mr-2" />
                      Telefone *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={15}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', formatPhone(e.target.value))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="(99) 99999-9999"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                      <Mail size={16} className="mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Endereço */}
                  <div className="md:col-span-2">
                    <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                      <MapPin size={16} className="mr-2" />
                      Endereço Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Rua, número, bairro, cidade, CEP"
                    />
                  </div>

                  {/* Renda Mensal */}
                  <div>
                    <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                      <DollarSign size={16} className="mr-2" />
                      Renda Mensal *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.monthlyIncome}
                      onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="R$ 0,00"
                    />
                  </div>

                  {/* Valor da Entrada */}
                  <div>
                    <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                      <DollarSign size={16} className="mr-2" />
                      Valor da Entrada
                    </label>
                    <input
                      type="text"
                      value={formData.downPayment}
                      onChange={(e) => handleInputChange('downPayment', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                      placeholder="R$ 0,00 (opcional)"
                    />
                  </div>

                  {/* Habilitação */}
                  <div className="md:col-span-2">
                    <label className="flex items-center text-[#063f5c] font-semibold mb-3">
                      <Car size={16} className="mr-2" />
                      Possui habilitação para motocicletas?
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasLicense"
                          checked={formData.hasLicense === true}
                          onChange={() => handleInputChange('hasLicense', true)}
                          className="w-4 h-4 text-[#0485e0] border-gray-300 focus:ring-[#0485e0]"
                        />
                        <span className="ml-2 text-gray-700">Sim</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasLicense"
                          checked={formData.hasLicense === false}
                          onChange={() => handleInputChange('hasLicense', false)}
                          className="w-4 h-4 text-[#0485e0] border-gray-300 focus:ring-[#0485e0]"
                        />
                        <span className="ml-2 text-gray-700">Não</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Voltar ao Carrinho
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Finalizar Pedido
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer - Only show for cart view */}
        {!showForm && items.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-[#063f5c]">Total:</span>
              <span className="text-2xl font-bold text-[#0485e0]">{formatPrice(total)}</span>
            </div>
            
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
