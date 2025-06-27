
import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#063f5c] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0485e0] to-white rounded-full flex items-center justify-center text-[#063f5c] font-bold text-xl">
                TM
              </div>
              <div className="ml-3">
                <h3 className="text-2xl font-bold">Tudo Azul Motors</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sua concessionária de confiança para motos Shineray. 
              Qualidade, preço justo e atendimento excepcional há mais de 10 anos no mercado.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-[#0485e0]" />
                <span className="text-sm text-gray-300">Rua das Motos, 123 - Centro</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-[#0485e0]" />
                <span className="text-sm text-gray-300">(99) 9827-8034</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-[#0485e0]" />
                <span className="text-sm text-gray-300">contato@tudoazulmotors.com.br</span>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#0485e0] transition-colors duration-200"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#0485e0] transition-colors duration-200"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#0485e0] transition-colors duration-200"
                >
                  Simulador
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#0485e0] transition-colors duration-200"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Políticas</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#0485e0] transition-colors duration-200">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#0485e0] transition-colors duration-200">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#0485e0] transition-colors duration-200">
                  Política de Devolução
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#0485e0] transition-colors duration-200">
                  Garantia
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2024 Tudo Azul Motors. Todos os direitos reservados.
            </div>
            <button
              onClick={scrollToTop}
              className="bg-[#0485e0] hover:bg-[#0485e0]/90 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
