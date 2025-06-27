
import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#063f5c] mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a encontrar a moto perfeita
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#063f5c] mb-6">Informações da Loja</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0485e0] p-3 rounded-full">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#063f5c] mb-1">Endereço</h4>
                    <p className="text-gray-600">Rua das Motos, 123<br />Centro - Sua Cidade, Estado<br />CEP: 12345-678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0485e0] p-3 rounded-full">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#063f5c] mb-1">Telefones</h4>
                    <p className="text-gray-600">(99) 9827-8034<br />(99) 3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0485e0] p-3 rounded-full">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#063f5c] mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 8:00 às 18:00<br />Sábado: 8:00 às 16:00<br />Domingo: Fechado</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#0485e0] p-3 rounded-full">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#063f5c] mb-1">Email</h4>
                    <p className="text-gray-600">contato@tudoazulmotors.com.br</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/5599982780034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                >
                  <MessageCircle size={24} className="mr-2" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-[#0485e0] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#063f5c] mb-2">Localização</h3>
                <p className="text-gray-600">Visite nossa loja física</p>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#063f5c] mb-8">Siga-nos nas Redes Sociais</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a
              href="#"
              className="bg-blue-800 hover:bg-blue-900 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.348-.09.375-.293 1.199-.334 1.363-.054.225-.174.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
