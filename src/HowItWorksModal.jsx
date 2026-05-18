import React, { useEffect } from 'react';
import { X, Upload, MessageSquare, Zap, CheckCircle, FileText, Wifi, Bot, Star } from 'lucide-react';

const CONTENT = {
  pt: {
    title: 'Como funciona o StaySmart',
    subtitle: 'Do upload ao hóspede satisfeito — em 4 passos simples',
    steps: [
      {
        number: '01',
        icon: Upload,
        title: 'Carregue o manual da sua casa',
        summary: 'Faça upload de um PDF ou documento com todas as informações do seu imóvel.',
        details: [
          'WiFi, código da fechadura, instruções de electrodomésticos',
          'Regras da casa, horários de check-in e check-out',
          'Recomendações de restaurantes, transportes e atrações locais',
          'Contactos de emergência e prestadores de serviços',
          'O StaySmart converte tudo em vetores de conhecimento com tecnologia RAG',
        ],
      },
      {
        number: '02',
        icon: MessageSquare,
        title: 'O hóspede pergunta via WhatsApp',
        summary: 'Sem apps para instalar. O hóspede usa o WhatsApp que já tem no telemóvel.',
        details: [
          'O hóspede recebe um número de WhatsApp dedicado à propriedade',
          'Pode perguntar qualquer coisa a qualquer hora, incluindo de madrugada',
          'Suporta texto, áudio e imagens enviadas pelo hóspede',
          'A conversa é natural, como falar com uma pessoa real',
          'Funciona em qualquer idioma — a IA detecta e responde na língua do hóspede',
        ],
      },
      {
        number: '03',
        icon: Zap,
        title: 'A IA processa e responde em segundos',
        summary: 'O motor de IA consulta o manual da sua propriedade e gera uma resposta precisa.',
        details: [
          'Tempo de resposta médio inferior a 3 segundos',
          'Respostas baseadas exclusivamente no manual da sua propriedade',
          'Sem invenções nem "alucinações" — só informação que forneceu',
          'Controla dispositivos smart home via comandos de chat (luzes, AC, etc.)',
          'Notifica o proprietário em casos que precisam de intervenção humana',
        ],
      },
      {
        number: '04',
        icon: Star,
        title: 'Hóspede satisfeito, mais avaliações 5 estrelas',
        summary: 'Respostas instantâneas 24/7 traduzem-se diretamente em melhores avaliações.',
        details: [
          'Proprietários StaySmart reportam aumento médio de 0,6 estrelas no Airbnb',
          'Redução de 80% nas mensagens repetidas para o proprietário',
          'O dashboard mostra todas as conversas e pedidos dos hóspedes',
          'Relatórios mensais com as perguntas mais frequentes',
          'Sugestões automáticas para melhorar o manual com base nas dúvidas reais',
        ],
      },
    ],
    close: 'Fechar',
    cta: 'Começar gratuitamente',
  },
  en: {
    title: 'How StaySmart works',
    subtitle: 'From upload to happy guest — in 4 simple steps',
    steps: [
      {
        number: '01',
        icon: Upload,
        title: 'Upload your house manual',
        summary: 'Upload a PDF or document with all the information about your property.',
        details: [
          'WiFi, lock code, appliance instructions',
          'House rules, check-in and check-out times',
          'Restaurant, transport and local attraction recommendations',
          'Emergency contacts and service providers',
          'StaySmart converts everything into knowledge vectors using RAG technology',
        ],
      },
      {
        number: '02',
        icon: MessageSquare,
        title: 'Guest asks via WhatsApp',
        summary: 'No apps to install. The guest uses the WhatsApp already on their phone.',
        details: [
          'The guest receives a WhatsApp number dedicated to the property',
          'Can ask anything at any time, including the middle of the night',
          'Supports text, audio and images sent by the guest',
          'The conversation feels natural, like talking to a real person',
          'Works in any language — AI detects and replies in the guest\'s language',
        ],
      },
      {
        number: '03',
        icon: Zap,
        title: 'AI processes and responds in seconds',
        summary: 'The AI engine consults your property manual and generates a precise answer.',
        details: [
          'Average response time under 3 seconds',
          'Answers based exclusively on your property manual',
          'No hallucinations — only information you provided',
          'Controls smart home devices via chat commands (lights, AC, etc.)',
          'Notifies the owner in cases requiring human intervention',
        ],
      },
      {
        number: '04',
        icon: Star,
        title: 'Happy guest, more 5-star reviews',
        summary: 'Instant 24/7 responses translate directly into better ratings.',
        details: [
          'StaySmart owners report an average 0.6-star increase on Airbnb',
          '80% reduction in repetitive messages to the owner',
          'Dashboard shows all guest conversations and requests',
          'Monthly reports with the most frequently asked questions',
          'Automatic suggestions to improve the manual based on real guest questions',
        ],
      },
    ],
    close: 'Close',
    cta: 'Start for free',
  },
  fr: {
    title: 'Comment fonctionne StaySmart',
    subtitle: "Du téléchargement à l'hôte satisfait — en 4 étapes simples",
    steps: [
      {
        number: '01',
        icon: Upload,
        title: 'Téléchargez le manuel de votre maison',
        summary: 'Téléchargez un PDF ou un document avec toutes les informations sur votre bien.',
        details: [
          'WiFi, code de serrure, instructions des appareils',
          "Règles de la maison, horaires d'arrivée et de départ",
          'Recommandations de restaurants, transports et attractions locales',
          "Contacts d'urgence et prestataires de services",
          "StaySmart convertit tout en vecteurs de connaissance avec la technologie RAG",
        ],
      },
      {
        number: '02',
        icon: MessageSquare,
        title: "L'hôte pose une question via WhatsApp",
        summary: "Aucune application à installer. L'hôte utilise le WhatsApp déjà sur son téléphone.",
        details: [
          "L'hôte reçoit un numéro WhatsApp dédié à la propriété",
          "Peut poser n'importe quelle question à n'importe quelle heure",
          "Supporte le texte, l'audio et les images envoyés par l'hôte",
          'La conversation est naturelle, comme parler à une vraie personne',
          "Fonctionne dans n'importe quelle langue — l'IA détecte et répond dans la langue de l'hôte",
        ],
      },
      {
        number: '03',
        icon: Zap,
        title: "L'IA traite et répond en quelques secondes",
        summary: "Le moteur IA consulte le manuel de votre propriété et génère une réponse précise.",
        details: [
          'Temps de réponse moyen inférieur à 3 secondes',
          'Réponses basées exclusivement sur le manuel de votre propriété',
          "Sans hallucinations — uniquement les informations que vous avez fournies",
          'Contrôle les appareils domotiques via des commandes de chat',
          "Notifie le propriétaire dans les cas nécessitant une intervention humaine",
        ],
      },
      {
        number: '04',
        icon: Star,
        title: 'Hôte satisfait, plus d\'avis 5 étoiles',
        summary: 'Les réponses instantanées 24/7 se traduisent directement par de meilleures évaluations.',
        details: [
          "Les propriétaires StaySmart rapportent une augmentation moyenne de 0,6 étoile sur Airbnb",
          '80% de réduction des messages répétitifs au propriétaire',
          'Le tableau de bord affiche toutes les conversations et demandes des hôtes',
          'Rapports mensuels avec les questions les plus fréquentes',
          'Suggestions automatiques pour améliorer le manuel',
        ],
      },
    ],
    close: 'Fermer',
    cta: 'Commencer gratuitement',
  },
  de: {
    title: 'Wie StaySmart funktioniert',
    subtitle: 'Vom Upload zum zufriedenen Gast — in 4 einfachen Schritten',
    steps: [
      {
        number: '01',
        icon: Upload,
        title: 'Laden Sie Ihr Haushandbuch hoch',
        summary: 'Laden Sie ein PDF oder Dokument mit allen Informationen zu Ihrer Immobilie hoch.',
        details: [
          'WLAN, Türcode, Gerätebedienungsanleitungen',
          'Hausregeln, Check-in- und Check-out-Zeiten',
          'Empfehlungen für Restaurants, Verkehrsmittel und lokale Attraktionen',
          'Notfallkontakte und Dienstleister',
          'StaySmart konvertiert alles in Wissensvektoren mit RAG-Technologie',
        ],
      },
      {
        number: '02',
        icon: MessageSquare,
        title: 'Gast fragt per WhatsApp',
        summary: 'Keine App-Installation nötig. Der Gast nutzt das bereits installierte WhatsApp.',
        details: [
          'Der Gast erhält eine WhatsApp-Nummer speziell für die Unterkunft',
          'Kann jederzeit fragen, auch mitten in der Nacht',
          'Unterstützt Text, Audio und Bilder vom Gast',
          'Die Konversation fühlt sich natürlich an, wie mit einer echten Person',
          'Funktioniert in jeder Sprache — KI erkennt und antwortet in der Sprache des Gastes',
        ],
      },
      {
        number: '03',
        icon: Zap,
        title: 'KI verarbeitet und antwortet in Sekunden',
        summary: 'Die KI-Engine konsultiert Ihr Immobilienhandbuch und generiert eine präzise Antwort.',
        details: [
          'Durchschnittliche Antwortzeit unter 3 Sekunden',
          'Antworten ausschließlich auf Basis Ihres Immobilienhandbuchs',
          'Keine Halluzinationen — nur Informationen, die Sie bereitgestellt haben',
          'Steuert Smart-Home-Geräte per Chat-Befehlen (Lichter, Klimaanlage, etc.)',
          'Benachrichtigt den Eigentümer bei Fällen, die menschliches Eingreifen erfordern',
        ],
      },
      {
        number: '04',
        icon: Star,
        title: 'Zufriedener Gast, mehr 5-Sterne-Bewertungen',
        summary: 'Sofortige 24/7-Antworten führen direkt zu besseren Bewertungen.',
        details: [
          'StaySmart-Eigentümer berichten von durchschnittlich 0,6 mehr Sternen auf Airbnb',
          '80% weniger wiederholte Nachrichten an den Eigentümer',
          'Dashboard zeigt alle Gästegespräche und Anfragen',
          'Monatliche Berichte mit den häufigsten Fragen',
          'Automatische Verbesserungsvorschläge für das Handbuch',
        ],
      },
    ],
    close: 'Schließen',
    cta: 'Kostenlos starten',
  },
  ru: {
    title: 'Как работает StaySmart',
    subtitle: 'От загрузки до довольного гостя — за 4 простых шага',
    steps: [
      {
        number: '01',
        icon: Upload,
        title: 'Загрузите руководство по дому',
        summary: 'Загрузите PDF или документ со всей информацией о вашей недвижимости.',
        details: [
          'WiFi, код замка, инструкции по бытовой технике',
          'Правила дома, время заезда и выезда',
          'Рекомендации ресторанов, транспорта и местных достопримечательностей',
          'Контакты экстренных служб и поставщиков услуг',
          'StaySmart конвертирует всё в векторы знаний с помощью технологии RAG',
        ],
      },
      {
        number: '02',
        icon: MessageSquare,
        title: 'Гость спрашивает через WhatsApp',
        summary: 'Никаких приложений для установки. Гость использует уже имеющийся WhatsApp.',
        details: [
          'Гость получает номер WhatsApp, выделенный для объекта',
          'Может спрашивать что угодно в любое время, даже ночью',
          'Поддерживает текст, аудио и изображения от гостя',
          'Общение естественное, как с реальным человеком',
          'Работает на любом языке — ИИ определяет и отвечает на языке гостя',
        ],
      },
      {
        number: '03',
        icon: Zap,
        title: 'ИИ обрабатывает и отвечает за секунды',
        summary: 'Движок ИИ обращается к руководству вашей недвижимости и генерирует точный ответ.',
        details: [
          'Среднее время ответа менее 3 секунд',
          'Ответы основаны исключительно на руководстве вашей недвижимости',
          'Без галлюцинаций — только информация, которую вы предоставили',
          'Управляет устройствами умного дома через команды в чате',
          'Уведомляет владельца в случаях, требующих вмешательства человека',
        ],
      },
      {
        number: '04',
        icon: Star,
        title: 'Довольный гость, больше отзывов на 5 звёзд',
        summary: 'Мгновенные ответы 24/7 напрямую ведут к лучшим оценкам.',
        details: [
          'Владельцы StaySmart сообщают о среднем увеличении рейтинга на 0,6 звезды на Airbnb',
          '80% сокращение повторяющихся сообщений владельцу',
          'Панель управления показывает все разговоры и запросы гостей',
          'Ежемесячные отчёты с наиболее частыми вопросами',
          'Автоматические предложения по улучшению руководства',
        ],
      },
    ],
    close: 'Закрыть',
    cta: 'Начать бесплатно',
  },
};

const HowItWorksModal = ({ open, onClose, lang, onSignupOpen }) => {
  const c = CONTENT[lang] || CONTENT.pt;

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
      <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-brand-light rounded-[40px] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-brand-light/95 backdrop-blur-sm px-10 pt-10 pb-6 rounded-t-[40px] border-b border-brand-primary/10 z-10">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-primary/10 text-brand-dark/50 hover:text-brand-dark transition-all"
          >
            <X size={20} />
          </button>
          <h2 className="text-3xl font-serif font-bold text-brand-dark pr-8">{c.title}</h2>
          <p className="text-brand-dark/50 text-sm mt-1">{c.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="px-10 py-8 space-y-8">
          {c.steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex gap-6">
                {/* Step indicator */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="bg-brand-primary/10 text-brand-primary p-3 rounded-2xl">
                    <Icon size={24} />
                  </div>
                  <div className="w-px flex-1 bg-brand-primary/10 mt-3" />
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="text-xs font-bold text-brand-primary/50 uppercase tracking-widest mb-1">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-brand-dark/60 text-sm mb-4 leading-relaxed">{step.summary}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-brand-dark/70">
                        <CheckCircle size={15} className="text-brand-primary shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-brand-light/95 backdrop-blur-sm px-10 py-6 rounded-b-[40px] border-t border-brand-primary/10">
          <button
            onClick={() => { onClose(); onSignupOpen(); }}
            className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold text-base hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20"
          >
            {c.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksModal;
