import React from 'react';
import { 
  MessageSquare, 
  Home, 
  LayoutDashboard, 
  Clock, 
  Star, 
  ShieldCheck, 
  Upload, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-4 md:px-12 bg-brand-light/90 backdrop-blur-sm sticky top-0 z-50">
    <div className="text-2xl font-serif font-bold text-brand-dark">StaySmart</div>
    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-dark">
      <a href="#funcionalidades" className="hover:text-brand-primary transition-colors">Funcionalidades</a>
      <a href="#como-funciona" className="hover:text-brand-primary transition-colors">Como funciona</a>
      <a href="#precos" className="hover:text-brand-primary transition-colors">Preços</a>
      <a href="#contacto" className="hover:text-brand-primary transition-colors">Contacto</a>
    </div>
    <button className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all">
      Começar agora
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover opacity-30"
        alt="Modern living room"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-light/20 via-brand-light/40 to-brand-light"></div>
    </div>
    
    <div className="relative z-10 max-w-4xl text-center">
      <div className="inline-block px-4 py-1 mb-6 border border-brand-primary/30 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest">
        AI-Powered Hospitality
      </div>
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark mb-6 leading-tight">
        O seu imóvel, inteligente e autónomo.
      </h1>
      <p className="text-lg md:text-xl text-brand-dark/80 mb-10 max-w-2xl mx-auto leading-relaxed">
        O StaySmart automatiza a comunicação com os seus hóspedes via WhatsApp e controla a sua casa inteligente — tudo com Inteligência Artificial.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <button className="w-full md:w-auto bg-brand-primary text-white px-10 py-4 rounded-full text-base font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all">
          Inscreva-se gratuitamente
        </button>
        <button className="w-full md:w-auto border border-brand-dark/20 px-10 py-4 rounded-full text-base font-bold hover:bg-brand-dark/5 transition-all flex items-center justify-center">
          Ver como funciona <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/50 p-8 rounded-3xl border border-brand-primary/5 hover:border-brand-primary/20 transition-all hover:shadow-xl hover:shadow-brand-primary/5">
    <div className="bg-brand-primary/10 p-4 rounded-2xl w-fit mb-6 text-brand-primary">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">{title}</h3>
    <p className="text-brand-dark/70 leading-relaxed">{description}</p>
  </div>
);

const Features = () => (
  <section id="funcionalidades" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Funcionalidades</span>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-4">Tudo o que precisa para gerir melhor o seu imóvel</h2>
      <p className="text-brand-dark/60 mt-4 max-w-2xl mx-auto">Uma plataforma completa que reduz o trabalho manual e eleva a experiência dos seus hóspedes.</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      <FeatureCard 
        icon={MessageSquare}
        title="Suporte Automatizado ao Hóspede"
        description="O seu hóspede envia uma mensagem no WhatsApp — a IA responde instantaneamente com base no manual da sua propriedade, 24 horas por dia."
      />
      <FeatureCard 
        icon={Home}
        title="Controlo da Casa Inteligente"
        description="Luzes, temperatura e dispositivos controlados por comandos de voz via chat. O hóspede diz o que quer, a IA faz acontecer."
      />
      <FeatureCard 
        icon={LayoutDashboard}
        title="Dashboard do Proprietário"
        description="Gerencie manuais, acesso dos hóspedes, datas de check-in/check-out e o estado dos dispositivos — tudo num só lugar."
      />
      <FeatureCard 
        icon={Clock}
        title="Respostas em Segundos"
        description="Tecnologia RAG garante respostas precisas baseadas no manual único da sua propriedade, sem alucinações da IA."
      />
      <FeatureCard 
        icon={Star}
        title="Avaliações Mais Altas"
        description="Hóspedes satisfeitos deixam melhores avaliações. Comunicação rápida e eficiente é a chave para mais estrelas no Airbnb."
      />
      <FeatureCard 
        icon={ShieldCheck}
        title="Seguro e Privado"
        description="Autenticação segura via Supabase. Os dados da sua propriedade e dos seus hóspedes estão sempre protegidos."
      />
    </div>
  </section>
);

const Step = ({ number, icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-8">
      <div className="text-8xl font-serif font-bold text-brand-primary/10 absolute -top-12 -left-4">{number}</div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/10 relative z-10 text-brand-primary">
        <Icon size={32} />
      </div>
    </div>
    <h4 className="text-xl font-serif font-bold text-brand-dark mb-4">{title}</h4>
    <p className="text-brand-dark/60 text-sm leading-relaxed">{description}</p>
  </div>
);

const HowItWorks = () => (
  <section id="como-funciona" className="py-24 bg-brand-primary/[0.02]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-20">
        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Como Funciona</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-4">Simples para si, perfeito para o hóspede</h2>
        <p className="text-brand-dark/60 mt-4">Em apenas 4 passos, a sua propriedade passa a ter um concierge virtual disponível a toda a hora.</p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-12 relative">
        {/* Connector line for desktop */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-brand-primary/10 -z-0"></div>
        
        <Step 
          number="01"
          icon={Upload}
          title="Carregue o Manual"
          description="O proprietário faz upload do manual da casa no StaySmart. O sistema converte automaticamente o texto em vetores de conhecimento."
        />
        <Step 
          number="02"
          icon={MessageSquare}
          title="Hóspede Pergunta no WhatsApp"
          description="O hóspede envia qualquer dúvida diretamente pelo WhatsApp — sem instalar nenhuma app, sem complicações."
        />
        <Step 
          number="03"
          icon={Zap}
          title="IA Processa e Responde"
          description="O modelo de linguagem analisa a pergunta, consulta a base de conhecimento da sua propriedade e gera uma resposta precisa."
        />
        <Step 
          number="04"
          icon={CheckCircle}
          title="Hóspede Satisfeito"
          description="Resposta instantânea, 24/7. Menos chamadas para o proprietário, mais avaliações positivas."
        />
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="rounded-3xl overflow-hidden shadow-2xl relative">
        <img 
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200" 
          alt="Modern Bedroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/10"></div>
      </div>
      
      <div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">A experiência que os seus hóspedes merecem</h2>
        <p className="text-brand-dark/70 text-lg mb-8 leading-relaxed italic">
          Imagine um hóspede que chega às 23h e não sabe como ligar o aquecimento. Em vez de o ligar, ele envia uma mensagem no WhatsApp e em segundos recebe a resposta exata.
        </p>
        <p className="text-brand-dark/70 text-lg mb-10 leading-relaxed">
          O StaySmart transforma o manual do seu imóvel num assistente inteligente que nunca dorme e nunca falha.
        </p>
        <ul className="space-y-4 mb-10">
          {[
            'Integração com WhatsApp',
            'IA baseada no manual exclusivo do seu imóvel',
            'Controlo de dispositivos smart home'
          ].map((item, i) => (
            <li key={i} className="flex items-center text-brand-dark/80 font-medium">
              <div className="bg-brand-primary/20 p-1 rounded-full mr-3 text-brand-primary">
                <CheckCircle size={18} />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, author, role, image }) => (
  <div className="bg-brand-light p-8 rounded-3xl border border-brand-primary/5 flex flex-col justify-between">
    <div>
      <div className="flex text-brand-primary mb-6">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="text-brand-dark/80 text-lg mb-8 leading-relaxed">"{quote}"</p>
    </div>
    <div className="flex items-center">
      <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
      <div>
        <h5 className="font-bold text-brand-dark">{author}</h5>
        <p className="text-xs text-brand-dark/50">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="py-24 bg-white/50">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Testemunhos</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-4">Proprietários que já confiam em nós</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <TestimonialCard 
          quote="Desde que comecei a usar o StaySmart, o número de mensagens que recebo dos hóspedes caiu drasticamente. O assistente responde melhor do que eu!"
          author="Ana Ferreira"
          role="Lisboa, Portugal"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
        />
        <TestimonialCard 
          quote="Tenho 8 apartamentos no Porto e gerir a comunicação era um pesadelo. Agora o StaySmart faz tudo automaticamente. Poupei horas por semana."
          author="Carlos Mendes"
          role="Porto, Portugal"
          image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
        />
        <TestimonialCard 
          quote="Os meus hóspedes adoram receber respostas instantâneas, mesmo de madrugada. As minhas avaliações no Airbnb melhoraram de 4.3 para 4.9 estrelas."
          author="Maria Santos"
          role="Algarve, Portugal"
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
        />
      </div>
    </div>
  </section>
);

const PricingCard = ({ title, price, description, features, buttonText, highlighted }) => (
  <div className={`p-10 rounded-[40px] flex flex-col justify-between ${
    highlighted 
    ? 'bg-brand-dark text-white scale-105 shadow-2xl relative z-10' 
    : 'bg-brand-light text-brand-dark border border-brand-primary/5'
  }`}>
    <div>
      {highlighted && (
        <div className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-6">
          ★ Mais Popular
        </div>
      )}
      <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-4xl font-bold">€{price}</span>
        <span className={`text-sm ${highlighted ? 'text-white/60' : 'text-brand-dark/40'} ml-2`}>/ mês</span>
      </div>
      <p className={`text-sm mb-8 ${highlighted ? 'text-white/70' : 'text-brand-dark/60'}`}>{description}</p>
      
      <ul className="space-y-4 mb-10">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm">
            <CheckCircle size={18} className={`mr-3 shrink-0 ${highlighted ? 'text-brand-primary' : 'text-brand-primary'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
      highlighted 
      ? 'bg-brand-primary text-white hover:bg-brand-accent shadow-lg shadow-brand-primary/20' 
      : 'bg-brand-dark text-white hover:bg-brand-dark/90'
    }`}>
      {buttonText}
    </button>
  </div>
);

const Pricing = () => (
  <section id="precos" className="py-24 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Preços</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-4">Planos transparentes, sem surpresas</h2>
        <p className="text-brand-dark/60 mt-4">Comece gratuitamente por 30 dias. Sem cartão de crédito necessário.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard 
          title="Starter"
          price="19"
          description="Ideal para proprietários com 1 imóvel que querem começar a automatizar."
          features={[
            '1 propriedade',
            'Integração WhatsApp',
            'Manual de casa (até 50 páginas)',
            'Suporte por email',
            'Dashboard básico'
          ]}
          buttonText="Começar grátis"
        />
        <PricingCard 
          title="Pro"
          price="49"
          description="Para proprietários sérios com múltiplos imóveis e gestão avançada."
          features={[
            'Até 10 propriedades',
            'Integração WhatsApp ilimitada',
            'Manual de casa (sem limite)',
            'Controlo Smart Home',
            'Dashboard completo',
            'Suporte prioritário',
            'Relatórios mensais'
          ]}
          buttonText="Começar grátis"
          highlighted={true}
        />
        <PricingCard 
          title="Enterprise"
          price="149"
          description="Para gestores de portfólio com muitos imóveis e necessidades específicas."
          features={[
            'Imóveis ilimitados',
            'API personalizada',
            'Integrações custom',
            'Gestor de conta dedicado',
            'SLA garantido',
            'Formação da equipa'
          ]}
          buttonText="Falar connosco"
        />
      </div>
    </div>
  </section>
);

const SignupSection = () => (
  <section id="contacto" className="py-24 px-6 md:px-12 bg-brand-light">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Inscrição</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mt-4 mb-8">Transforme o seu imóvel hoje</h2>
        <p className="text-brand-dark/60 text-lg mb-12">
          Junte-se a centenas de proprietários que já automatizaram a comunicação com os seus hóspedes e reduziram o trabalho manual em mais de 80%.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="text-4xl font-bold text-brand-primary mr-6">80%</div>
            <div className="text-brand-dark/70 font-medium leading-tight text-sm uppercase tracking-wide">Redução de mensagens repetidas</div>
          </div>
          <div className="flex items-center">
            <div className="text-4xl font-bold text-brand-primary mr-6">4.9★</div>
            <div className="text-brand-dark/70 font-medium leading-tight text-sm uppercase tracking-wide">Avaliação média dos hóspedes</div>
          </div>
          <div className="flex items-center">
            <div className="text-4xl font-bold text-brand-primary mr-6">24/7</div>
            <div className="text-brand-dark/70 font-medium leading-tight text-sm uppercase tracking-wide">Disponibilidade do assistente IA</div>
          </div>
        </div>
        
        <div className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-white/50">
          <img 
            src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000" 
            alt="Interior" 
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
      
      <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl shadow-brand-dark/5 border border-brand-primary/5">
        <h3 className="text-3xl font-serif font-bold text-brand-dark mb-2">Começar gratuitamente</h3>
        <p className="text-brand-dark/50 text-sm mb-10">30 dias de trial. Sem cartão de crédito.</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Nome completo *</label>
            <input 
              type="text" 
              placeholder="João Silva" 
              className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Email *</label>
            <input 
              type="email" 
              placeholder="joao@email.com" 
              className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Telefone</label>
            <input 
              type="tel" 
              placeholder="+351 900 000 000" 
              className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Quantos imóveis gere?</label>
            <select className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark appearance-none">
              <option>Selecionar...</option>
              <option>1 imóvel</option>
              <option>2-5 imóveis</option>
              <option>6-10 imóveis</option>
              <option>Mais de 10</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Mensagem (opcional)</label>
            <textarea 
              rows={3}
              placeholder="Diga-nos mais sobre o seu imóvel..." 
              className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark resize-none"
            ></textarea>
          </div>
          
          <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20 mt-4">
            Solicitar acesso gratuito
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark text-white pt-24 pb-12 px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-1">
        <div className="text-2xl font-serif font-bold mb-6">StaySmart</div>
        <p className="text-white/60 text-sm leading-relaxed mb-8">
          A plataforma de IA para proprietários de alojamento local que querem automatizar a gestão e elevar a experiência dos hóspedes.
        </p>
        <div className="flex space-x-4">
          <Instagram className="text-white/60 hover:text-brand-primary cursor-pointer transition-colors" size={20} />
          <Linkedin className="text-white/60 hover:text-brand-primary cursor-pointer transition-colors" size={20} />
          <Twitter className="text-white/60 hover:text-brand-primary cursor-pointer transition-colors" size={20} />
        </div>
      </div>
      
      <div className="col-span-1">
        <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-primary">Produto</h5>
        <ul className="space-y-4 text-white/60 text-sm">
          <li className="hover:text-white cursor-pointer transition-colors">Funcionalidades</li>
          <li className="hover:text-white cursor-pointer transition-colors">Como funciona</li>
          <li className="hover:text-white cursor-pointer transition-colors">Preços</li>
        </ul>
      </div>
      
      <div className="col-span-1">
        <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-primary">Empresa</h5>
        <ul className="space-y-4 text-white/60 text-sm">
          <li className="hover:text-white cursor-pointer transition-colors">Sobre nós</li>
          <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
          <li className="hover:text-white cursor-pointer transition-colors">Parceiros</li>
          <li className="hover:text-white cursor-pointer transition-colors">Privacidade</li>
          <li className="hover:text-white cursor-pointer transition-colors">Termos</li>
        </ul>
      </div>
      
      <div className="col-span-1">
        <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-primary">StaySmart AI</h5>
        <p className="text-white/40 text-xs leading-relaxed">
          &copy; 2026 StaySmart AI. Todos os direitos reservados.<br />
          Built with Intelligence in Lisbon.
        </p>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] uppercase tracking-[0.2em]">
      <div>Designed with Intent</div>
      <div className="mt-4 md:mt-0">Back to top ↑</div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-brand-light min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Experience />
      <Testimonials />
      <Pricing />
      <SignupSection />
      <Footer />
    </div>
  );
}

export default App;
