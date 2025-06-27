import React, { useState } from 'react';
import { User, Calendar, CreditCard, Phone, MapPin, Mail, DollarSign, Car } from 'lucide-react';

export interface CustomerData {
  fullName: string;
  birthDate: string;
  cpf: string;
  phone: string;
  address: string;
  email: string;
  monthlyIncome: string;
  downPayment: string;
  hasLicense: boolean;
}

interface SimulatorProps {
  onSubmit: (data: CustomerData) => void;
}

const Simulator: React.FC<SimulatorProps> = ({ onSubmit }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Gerar mensagem para o WhatsApp do consórcio
    const message = `Olá, gostaria de simular um consórcio para moto Shineray.\n\nDados pessoais:\nNome: ${formData.fullName}\nNascimento: ${formData.birthDate}\nCPF: ${formData.cpf}\nTelefone: ${formData.phone}\nEndereço: ${formData.address}\nEmail: ${formData.email}\nRenda: ${formData.monthlyIncome}${formData.downPayment ? `\nEntrada: ${formData.downPayment}` : ''}\nHabilitado: ${formData.hasLicense ? 'Sim' : 'Não'}`;
    
    const whatsappUrl = `https://wa.me/5599985381946?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof CustomerData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  return (
    <section id="simulador" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#063f5c] mb-4">Simulador de Consórcio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Preencha seus dados para simular o consórcio da sua moto dos sonhos
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome Completo */}
              <div className="md:col-span-2">
                <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                  <User size={20} className="mr-2" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Data de Nascimento */}
              <div>
                <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                  <Calendar size={20} className="mr-2" />
                  Data de Nascimento *
                </label>
                <input
                  type="date"
                  required
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              {/* CPF */}
              <div>
                <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                  <CreditCard size={20} className="mr-2" />
                  CPF *
                </label>
                <input
                  type="text"
                  required
                  maxLength={14}
                  value={formData.cpf}
                  onChange={(e) => handleInputChange('cpf', formatCPF(e.target.value))}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="000.000.000-00"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                  <Phone size={20} className="mr-2" />
                  Telefone *
                </label>
                <input
                  type="text"
                  required
                  maxLength={15}
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', formatPhone(e.target.value))}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="(99) 99999-9999"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                  <Mail size={20} className="mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Endereço */}
              <div className="md:col-span-2">
                <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                  <MapPin size={20} className="mr-2" />
                  Endereço Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Rua, número, bairro, cidade, CEP"
                />
              </div>

              {/* Renda Mensal */}
              <div>
                <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                  <DollarSign size={20} className="mr-2" />
                  Renda Mensal *
                </label>
                <input
                  type="text"
                  required
                  value={formData.monthlyIncome}
                  onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="R$ 0,00"
                />
              </div>

              {/* Valor da Entrada */}
              <div>
                <label className="flex items-center text-[#063f5c] font-semibold mb-2">
                  <DollarSign size={20} className="mr-2" />
                  Valor da Entrada
                </label>
                <input
                  type="text"
                  value={formData.downPayment}
                  onChange={(e) => handleInputChange('downPayment', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0485e0] focus:border-transparent outline-none transition-all duration-200"
                  placeholder="R$ 0,00 (opcional)"
                />
              </div>

              {/* Habilitação */}
              <div className="md:col-span-2">
                <label className="flex items-center text-[#063f5c] font-semibold mb-4">
                  <Car size={20} className="mr-2" />
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

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#0485e0] hover:bg-[#063f5c] text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Simular Consórcio
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
