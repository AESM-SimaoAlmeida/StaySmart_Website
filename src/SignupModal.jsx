import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const MODAL_LABELS = {
  pt: { title: 'Inscreva-se gratuitamente', subtitle: '30 dias de trial. Sem cartão de crédito.', name: 'Nome completo *', namePh: 'João Silva', email: 'Email da empresa *', emailPh: 'joao@empresa.com', phone: 'Número de telefone *', phonePh: '+351 900 000 000', button: 'Solicitar acesso gratuito' },
  en: { title: 'Sign up for free', subtitle: '30-day trial. No credit card.', name: 'Full name *', namePh: 'John Smith', email: 'Company email *', emailPh: 'john@company.com', phone: 'Phone number *', phonePh: '+44 700 000 000', button: 'Request free access' },
  fr: { title: "S'inscrire gratuitement", subtitle: "30 jours d'essai. Sans carte de crédit.", name: 'Nom complet *', namePh: 'Jean Dupont', email: "Email de l'entreprise *", emailPh: 'jean@entreprise.com', phone: 'Numéro de téléphone *', phonePh: '+33 6 00 00 00 00', button: 'Demander un accès gratuit' },
  de: { title: 'Kostenlos registrieren', subtitle: '30 Tage Testphase. Ohne Kreditkarte.', name: 'Vollständiger Name *', namePh: 'Max Mustermann', email: 'Firmen-E-Mail *', emailPh: 'max@firma.de', phone: 'Telefonnummer *', phonePh: '+49 170 0000000', button: 'Kostenlosen Zugang anfordern' },
  ru: { title: 'Зарегистрироваться бесплатно', subtitle: '30 дней пробного периода. Без кредитной карты.', name: 'Полное имя *', namePh: 'Иван Иванов', email: 'Корпоративный email *', emailPh: 'ivan@kompaniya.ru', phone: 'Номер телефона *', phonePh: '+7 900 000 00 00', button: 'Запросить бесплатный доступ' },
};

const SignupModal = ({ open, onClose, lang }) => {
  const l = MODAL_LABELS[lang] || MODAL_LABELS.pt;

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-[40px] shadow-2xl w-full max-w-md p-10 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-primary/10 text-brand-dark/50 hover:text-brand-dark transition-all"
        >
          <X size={20} />
        </button>

        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-1">{l.title}</h2>
        <p className="text-brand-dark/50 text-sm mb-8">{l.subtitle}</p>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">{l.name}</label>
            <input
              type="text"
              placeholder={l.namePh}
              className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">{l.email}</label>
            <input
              type="email"
              placeholder={l.emailPh}
              className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">{l.phone}</label>
            <input
              type="tel"
              placeholder={l.phonePh}
              className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold text-base hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20 mt-2"
          >
            {l.button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
