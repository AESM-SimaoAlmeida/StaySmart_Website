import React, { useState, useRef, useEffect } from 'react';
import SignupModal from './SignupModal';
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
  Globe,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';

const translations = {
  pt: {
    nav: { features: 'Funcionalidades', howItWorks: 'Como funciona', pricing: 'Preços', contact: 'Contacto', cta: 'Começar agora' },
    hero: { badge: 'AI-Powered Hospitality', h1: 'O seu imóvel, inteligente e autónomo.', p: 'O StaySmart automatiza a comunicação com os seus hóspedes via WhatsApp e controla a sua casa inteligente — tudo com Inteligência Artificial.', btn1: 'Inscreva-se gratuitamente', btn2: 'Ver como funciona' },
    features: {
      label: 'Funcionalidades', h2: 'Tudo o que precisa para gerir melhor o seu imóvel', p: 'Uma plataforma completa que reduz o trabalho manual e eleva a experiência dos seus hóspedes.',
      cards: [
        { title: 'Suporte Automatizado ao Hóspede', description: 'O seu hóspede envia uma mensagem no WhatsApp — a IA responde instantaneamente com base no manual da sua propriedade, 24 horas por dia.' },
        { title: 'Controlo da Casa Inteligente', description: 'Luzes, temperatura e dispositivos controlados por comandos de voz via chat. O hóspede diz o que quer, a IA faz acontecer.' },
        { title: 'Dashboard do Proprietário', description: 'Gerencie manuais, acesso dos hóspedes, datas de check-in/check-out e o estado dos dispositivos — tudo num só lugar.' },
        { title: 'Respostas em Segundos', description: 'Tecnologia RAG garante respostas precisas baseadas no manual único da sua propriedade, sem alucinações da IA.' },
        { title: 'Avaliações Mais Altas', description: 'Hóspedes satisfeitos deixam melhores avaliações. Comunicação rápida e eficiente é a chave para mais estrelas no Airbnb.' },
        { title: 'Seguro e Privado', description: 'Autenticação segura via Supabase. Os dados da sua propriedade e dos seus hóspedes estão sempre protegidos.' },
      ],
    },
    howItWorks: {
      label: 'Como Funciona', h2: 'Simples para si, perfeito para o hóspede', p: 'Em apenas 4 passos, a sua propriedade passa a ter um concierge virtual disponível a toda a hora.',
      steps: [
        { title: 'Carregue o Manual', description: 'O proprietário faz upload do manual da casa no StaySmart. O sistema converte automaticamente o texto em vetores de conhecimento.' },
        { title: 'Hóspede Pergunta no WhatsApp', description: 'O hóspede envia qualquer dúvida diretamente pelo WhatsApp — sem instalar nenhuma app, sem complicações.' },
        { title: 'IA Processa e Responde', description: 'O modelo de linguagem analisa a pergunta, consulta a base de conhecimento da sua propriedade e gera uma resposta precisa.' },
        { title: 'Hóspede Satisfeito', description: 'Resposta instantânea, 24/7. Menos chamadas para o proprietário, mais avaliações positivas.' },
      ],
    },
    experience: { h2: 'A experiência que os seus hóspedes merecem', p1: 'Imagine um hóspede que chega às 23h e não sabe como ligar o aquecimento. Em vez de o ligar, ele envia uma mensagem no WhatsApp e em segundos recebe a resposta exata.', p2: 'O StaySmart transforma o manual do seu imóvel num assistente inteligente que nunca dorme e nunca falha.', list: ['Integração com WhatsApp', 'IA baseada no manual exclusivo do seu imóvel', 'Controlo de dispositivos smart home'] },
    testimonials: {
      label: 'Testemunhos', h2: 'Proprietários que já confiam em nós',
      items: [
        { quote: 'Desde que comecei a usar o StaySmart, o número de mensagens que recebo dos hóspedes caiu drasticamente. O assistente responde melhor do que eu!', author: 'Ana Ferreira', role: 'Lisboa, Portugal' },
        { quote: 'Tenho 8 apartamentos no Porto e gerir a comunicação era um pesadelo. Agora o StaySmart faz tudo automaticamente. Poupei horas por semana.', author: 'Carlos Mendes', role: 'Porto, Portugal' },
        { quote: 'Os meus hóspedes adoram receber respostas instantâneas, mesmo de madrugada. As minhas avaliações no Airbnb melhoraram de 4.3 para 4.9 estrelas.', author: 'Maria Santos', role: 'Algarve, Portugal' },
      ],
    },
    pricing: {
      label: 'Preços', h2: 'Planos transparentes, sem surpresas', p: 'Comece gratuitamente por 30 dias. Sem cartão de crédito necessário.', popular: '★ Mais Popular', perMonth: '/ mês',
      plans: [
        { title: 'Starter', price: '19', description: 'Ideal para proprietários com 1 imóvel que querem começar a automatizar.', features: ['1 propriedade', 'Integração WhatsApp', 'Manual de casa (até 50 páginas)', 'Suporte por email', 'Dashboard básico'], buttonText: 'Começar grátis' },
        { title: 'Pro', price: '49', description: 'Para proprietários sérios com múltiplos imóveis e gestão avançada.', features: ['Até 10 propriedades', 'Integração WhatsApp ilimitada', 'Manual de casa (sem limite)', 'Controlo Smart Home', 'Dashboard completo', 'Suporte prioritário', 'Relatórios mensais'], buttonText: 'Começar grátis', highlighted: true },
        { title: 'Enterprise', price: '149', description: 'Para gestores de portfólio com muitos imóveis e necessidades específicas.', features: ['Imóveis ilimitados', 'API personalizada', 'Integrações custom', 'Gestor de conta dedicado', 'SLA garantido', 'Formação da equipa'], buttonText: 'Falar connosco' },
      ],
    },
    signup: {
      label: 'Inscrição', h2: 'Transforme o seu imóvel hoje', p: 'Junte-se a centenas de proprietários que já automatizaram a comunicação com os seus hóspedes e reduziram o trabalho manual em mais de 80%.',
      stats: [{ value: '80%', label: 'Redução de mensagens repetidas' }, { value: '4.9★', label: 'Avaliação média dos hóspedes' }, { value: '24/7', label: 'Disponibilidade do assistente IA' }],
      form: { h3: 'Começar gratuitamente', p: '30 dias de trial. Sem cartão de crédito.', name: 'Nome completo *', namePlaceholder: 'João Silva', email: 'Email *', emailPlaceholder: 'joao@email.com', phone: 'Telefone', phonePlaceholder: '+351 900 000 000', properties: 'Quantos imóveis gere?', propertiesOptions: ['Selecionar...', '1 imóvel', '2-5 imóveis', '6-10 imóveis', 'Mais de 10'], message: 'Mensagem (opcional)', messagePlaceholder: 'Diga-nos mais sobre o seu imóvel...', button: 'Solicitar acesso gratuito' },
    },
    footer: { description: 'A plataforma de IA para proprietários de alojamento local que querem automatizar a gestão e elevar a experiência dos hóspedes.', product: 'Produto', productLinks: ['Funcionalidades', 'Como funciona', 'Preços'], company: 'Empresa', companyLinks: ['Sobre nós', 'Blog', 'Parceiros', 'Privacidade', 'Termos'], copyright: '© 2026 StaySmart AI. Todos os direitos reservados.', tagline: 'Built with Intelligence in Lisbon.', designed: 'Designed with Intent', backToTop: 'Voltar ao topo ↑' },
  },
  en: {
    nav: { features: 'Features', howItWorks: 'How it works', pricing: 'Pricing', contact: 'Contact', cta: 'Get started' },
    hero: { badge: 'AI-Powered Hospitality', h1: 'Your property, intelligent and autonomous.', p: 'StaySmart automates guest communication via WhatsApp and controls your smart home — all powered by Artificial Intelligence.', btn1: 'Sign up for free', btn2: 'See how it works' },
    features: {
      label: 'Features', h2: 'Everything you need to manage your property better', p: "A complete platform that reduces manual work and elevates your guests' experience.",
      cards: [
        { title: 'Automated Guest Support', description: 'Your guest sends a WhatsApp message — AI responds instantly based on your property manual, 24 hours a day.' },
        { title: 'Smart Home Control', description: 'Lights, temperature, and devices controlled by chat commands. The guest says what they want, AI makes it happen.' },
        { title: 'Owner Dashboard', description: 'Manage manuals, guest access, check-in/check-out dates, and device status — all in one place.' },
        { title: 'Answers in Seconds', description: "RAG technology ensures precise answers based on your property's unique manual, without AI hallucinations." },
        { title: 'Higher Ratings', description: 'Satisfied guests leave better reviews. Fast, efficient communication is the key to more stars on Airbnb.' },
        { title: 'Secure & Private', description: 'Secure authentication via Supabase. Your property and guest data are always protected.' },
      ],
    },
    howItWorks: {
      label: 'How It Works', h2: 'Simple for you, perfect for your guest', p: 'In just 4 steps, your property gets a virtual concierge available around the clock.',
      steps: [
        { title: 'Upload the Manual', description: 'The owner uploads the house manual to StaySmart. The system automatically converts the text into knowledge vectors.' },
        { title: 'Guest Asks on WhatsApp', description: 'The guest sends any question directly via WhatsApp — no app to install, no complications.' },
        { title: 'AI Processes & Responds', description: "The language model analyzes the question, consults your property's knowledge base, and generates a precise answer." },
        { title: 'Happy Guest', description: 'Instant response, 24/7. Fewer calls to the owner, more positive reviews.' },
      ],
    },
    experience: { h2: 'The experience your guests deserve', p1: "Imagine a guest arriving at 11pm who doesn't know how to turn on the heating. Instead of calling you, they send a WhatsApp message and receive the exact answer in seconds.", p2: 'StaySmart turns your property manual into an intelligent assistant that never sleeps and never fails.', list: ['WhatsApp integration', "AI based on your property's exclusive manual", 'Smart home device control'] },
    testimonials: {
      label: 'Testimonials', h2: 'Owners who already trust us',
      items: [
        { quote: 'Since I started using StaySmart, the number of messages I receive from guests has dropped dramatically. The assistant responds better than I do!', author: 'Ana Ferreira', role: 'Lisbon, Portugal' },
        { quote: "I have 8 apartments in Porto and managing communication was a nightmare. Now StaySmart does everything automatically. I've saved hours per week.", author: 'Carlos Mendes', role: 'Porto, Portugal' },
        { quote: 'My guests love getting instant responses, even in the middle of the night. My Airbnb ratings improved from 4.3 to 4.9 stars.', author: 'Maria Santos', role: 'Algarve, Portugal' },
      ],
    },
    pricing: {
      label: 'Pricing', h2: 'Transparent plans, no surprises', p: 'Start free for 30 days. No credit card required.', popular: '★ Most Popular', perMonth: '/ mo',
      plans: [
        { title: 'Starter', price: '19', description: 'Ideal for owners with 1 property who want to start automating.', features: ['1 property', 'WhatsApp integration', 'House manual (up to 50 pages)', 'Email support', 'Basic dashboard'], buttonText: 'Start free' },
        { title: 'Pro', price: '49', description: 'For serious owners with multiple properties and advanced management.', features: ['Up to 10 properties', 'Unlimited WhatsApp integration', 'House manual (no limit)', 'Smart Home control', 'Full dashboard', 'Priority support', 'Monthly reports'], buttonText: 'Start free', highlighted: true },
        { title: 'Enterprise', price: '149', description: 'For portfolio managers with many properties and specific needs.', features: ['Unlimited properties', 'Custom API', 'Custom integrations', 'Dedicated account manager', 'Guaranteed SLA', 'Team training'], buttonText: 'Talk to us' },
      ],
    },
    signup: {
      label: 'Sign Up', h2: 'Transform your property today', p: 'Join hundreds of owners who have already automated guest communication and reduced manual work by over 80%.',
      stats: [{ value: '80%', label: 'Reduction in repetitive messages' }, { value: '4.9★', label: 'Average guest rating' }, { value: '24/7', label: 'AI assistant availability' }],
      form: { h3: 'Start for free', p: '30-day trial. No credit card.', name: 'Full name *', namePlaceholder: 'John Smith', email: 'Email *', emailPlaceholder: 'john@email.com', phone: 'Phone', phonePlaceholder: '+44 700 000 000', properties: 'How many properties do you manage?', propertiesOptions: ['Select...', '1 property', '2-5 properties', '6-10 properties', 'More than 10'], message: 'Message (optional)', messagePlaceholder: 'Tell us more about your property...', button: 'Request free access' },
    },
    footer: { description: 'The AI platform for short-term rental owners who want to automate management and elevate the guest experience.', product: 'Product', productLinks: ['Features', 'How it works', 'Pricing'], company: 'Company', companyLinks: ['About us', 'Blog', 'Partners', 'Privacy', 'Terms'], copyright: '© 2026 StaySmart AI. All rights reserved.', tagline: 'Built with Intelligence in Lisbon.', designed: 'Designed with Intent', backToTop: 'Back to top ↑' },
  },
  fr: {
    nav: { features: 'Fonctionnalités', howItWorks: 'Comment ça marche', pricing: 'Tarifs', contact: 'Contact', cta: 'Commencer' },
    hero: { badge: "Hôtellerie propulsée par l'IA", h1: 'Votre bien, intelligent et autonome.', p: "StaySmart automatise la communication avec vos hôtes via WhatsApp et contrôle votre maison intelligente — tout avec l'Intelligence Artificielle.", btn1: "S'inscrire gratuitement", btn2: "Voir comment ça marche" },
    features: {
      label: 'Fonctionnalités', h2: 'Tout ce dont vous avez besoin pour mieux gérer votre bien', p: "Une plateforme complète qui réduit le travail manuel et améliore l'expérience de vos hôtes.",
      cards: [
        { title: 'Assistance hôte automatisée', description: "Votre hôte envoie un message WhatsApp — l'IA répond instantanément en se basant sur le manuel de votre propriété, 24h/24." },
        { title: 'Contrôle de la maison intelligente', description: "Lumières, température et appareils contrôlés par commandes vocales via chat. L'hôte dit ce qu'il veut, l'IA le fait." },
        { title: 'Tableau de bord propriétaire', description: "Gérez les manuels, l'accès des hôtes, les dates d'arrivée/départ et l'état des appareils — tout en un seul endroit." },
        { title: 'Réponses en quelques secondes', description: "La technologie RAG garantit des réponses précises basées sur le manuel unique de votre propriété, sans hallucinations de l'IA." },
        { title: 'Meilleures évaluations', description: "Les hôtes satisfaits laissent de meilleures évaluations. Une communication rapide et efficace est la clé de plus d'étoiles sur Airbnb." },
        { title: 'Sûr et privé', description: 'Authentification sécurisée via Supabase. Les données de votre propriété et de vos hôtes sont toujours protégées.' },
      ],
    },
    howItWorks: {
      label: 'Comment ça marche', h2: 'Simple pour vous, parfait pour vos hôtes', p: "En seulement 4 étapes, votre propriété dispose d'un concierge virtuel disponible à toute heure.",
      steps: [
        { title: 'Téléchargez le manuel', description: 'Le propriétaire télécharge le manuel de la maison sur StaySmart. Le système convertit automatiquement le texte en vecteurs de connaissance.' },
        { title: "L'hôte pose une question sur WhatsApp", description: "L'hôte envoie n'importe quelle question directement via WhatsApp — sans installer d'application, sans complications." },
        { title: "L'IA traite et répond", description: "Le modèle de langage analyse la question, consulte la base de connaissances de votre propriété et génère une réponse précise." },
        { title: 'Hôte satisfait', description: "Réponse instantanée, 24/7. Moins d'appels au propriétaire, plus d'avis positifs." },
      ],
    },
    experience: { h2: 'L\'expérience que vos hôtes méritent', p1: "Imaginez un hôte qui arrive à 23h et ne sait pas comment allumer le chauffage. Au lieu de vous appeler, il envoie un message WhatsApp et reçoit la réponse exacte en quelques secondes.", p2: "StaySmart transforme le manuel de votre bien en assistant intelligent qui ne dort jamais et ne faillit jamais.", list: ['Intégration WhatsApp', 'IA basée sur le manuel exclusif de votre bien', 'Contrôle des appareils de maison intelligente'] },
    testimonials: {
      label: 'Témoignages', h2: 'Propriétaires qui nous font déjà confiance',
      items: [
        { quote: "Depuis que j'utilise StaySmart, le nombre de messages que je reçois des hôtes a considérablement diminué. L'assistant répond mieux que moi !", author: 'Ana Ferreira', role: 'Lisbonne, Portugal' },
        { quote: "J'ai 8 appartements à Porto et gérer la communication était un cauchemar. Maintenant StaySmart fait tout automatiquement. J'ai économisé des heures par semaine.", author: 'Carlos Mendes', role: 'Porto, Portugal' },
        { quote: "Mes hôtes adorent recevoir des réponses instantanées, même en pleine nuit. Mes évaluations Airbnb sont passées de 4,3 à 4,9 étoiles.", author: 'Maria Santos', role: 'Algarve, Portugal' },
      ],
    },
    pricing: {
      label: 'Tarifs', h2: 'Des plans transparents, sans surprises', p: 'Commencez gratuitement pendant 30 jours. Aucune carte de crédit requise.', popular: '★ Le plus populaire', perMonth: '/ mois',
      plans: [
        { title: 'Starter', price: '19', description: "Idéal pour les propriétaires d'1 bien qui veulent commencer à automatiser.", features: ['1 propriété', 'Intégration WhatsApp', "Manuel de la maison (jusqu'à 50 pages)", 'Support par email', 'Tableau de bord basique'], buttonText: 'Commencer gratuitement' },
        { title: 'Pro', price: '49', description: 'Pour les propriétaires sérieux avec plusieurs biens et une gestion avancée.', features: ["Jusqu'à 10 propriétés", 'Intégration WhatsApp illimitée', 'Manuel de maison (sans limite)', 'Contrôle Smart Home', 'Tableau de bord complet', 'Support prioritaire', 'Rapports mensuels'], buttonText: 'Commencer gratuitement', highlighted: true },
        { title: 'Enterprise', price: '149', description: 'Pour les gestionnaires de portefeuille avec de nombreux biens et des besoins spécifiques.', features: ['Propriétés illimitées', 'API personnalisée', 'Intégrations personnalisées', 'Gestionnaire de compte dédié', 'SLA garanti', "Formation d'équipe"], buttonText: 'Nous contacter' },
      ],
    },
    signup: {
      label: 'Inscription', h2: "Transformez votre bien aujourd'hui", p: "Rejoignez des centaines de propriétaires qui ont déjà automatisé la communication avec leurs hôtes et réduit le travail manuel de plus de 80%.",
      stats: [{ value: '80%', label: 'Réduction des messages répétitifs' }, { value: '4.9★', label: 'Évaluation moyenne des hôtes' }, { value: '24/7', label: "Disponibilité de l'assistant IA" }],
      form: { h3: 'Commencer gratuitement', p: "30 jours d'essai. Sans carte de crédit.", name: 'Nom complet *', namePlaceholder: 'Jean Dupont', email: 'Email *', emailPlaceholder: 'jean@email.com', phone: 'Téléphone', phonePlaceholder: '+33 6 00 00 00 00', properties: 'Combien de biens gérez-vous ?', propertiesOptions: ['Sélectionner...', '1 bien', '2-5 biens', '6-10 biens', 'Plus de 10'], message: 'Message (optionnel)', messagePlaceholder: 'Parlez-nous de votre bien...', button: 'Demander un accès gratuit' },
    },
    footer: { description: "La plateforme IA pour les propriétaires de location courte durée qui veulent automatiser la gestion et améliorer l'expérience des hôtes.", product: 'Produit', productLinks: ['Fonctionnalités', 'Comment ça marche', 'Tarifs'], company: 'Entreprise', companyLinks: ['À propos', 'Blog', 'Partenaires', 'Confidentialité', 'Conditions'], copyright: '© 2026 StaySmart AI. Tous droits réservés.', tagline: 'Built with Intelligence in Lisbon.', designed: 'Designed with Intent', backToTop: 'Retour en haut ↑' },
  },
  de: {
    nav: { features: 'Funktionen', howItWorks: 'Wie es funktioniert', pricing: 'Preise', contact: 'Kontakt', cta: 'Jetzt starten' },
    hero: { badge: 'KI-gestütztes Gastgewerbe', h1: 'Ihre Immobilie, intelligent und autonom.', p: 'StaySmart automatisiert die Gästekommunikation über WhatsApp und steuert Ihr Smart Home — alles mit Künstlicher Intelligenz.', btn1: 'Kostenlos registrieren', btn2: 'Wie es funktioniert' },
    features: {
      label: 'Funktionen', h2: 'Alles, was Sie für eine bessere Immobilienverwaltung brauchen', p: 'Eine vollständige Plattform, die manuelle Arbeit reduziert und das Erlebnis Ihrer Gäste verbessert.',
      cards: [
        { title: 'Automatisierter Gäste-Support', description: 'Ihr Gast sendet eine WhatsApp-Nachricht — die KI antwortet sofort basierend auf dem Handbuch Ihrer Immobilie, 24 Stunden am Tag.' },
        { title: 'Smart-Home-Steuerung', description: 'Lichter, Temperatur und Geräte werden per Chat-Befehlen gesteuert. Der Gast sagt, was er will, die KI erledigt es.' },
        { title: 'Eigentümer-Dashboard', description: 'Verwalten Sie Handbücher, Gästezugang, Check-in/Check-out-Daten und Gerätestatus — alles an einem Ort.' },
        { title: 'Antworten in Sekunden', description: 'RAG-Technologie gewährleistet präzise Antworten basierend auf dem einzigartigen Handbuch Ihrer Immobilie, ohne KI-Halluzinationen.' },
        { title: 'Höhere Bewertungen', description: 'Zufriedene Gäste hinterlassen bessere Bewertungen. Schnelle, effiziente Kommunikation ist der Schlüssel zu mehr Sternen auf Airbnb.' },
        { title: 'Sicher & Privat', description: 'Sichere Authentifizierung über Supabase. Die Daten Ihrer Immobilie und Ihrer Gäste sind stets geschützt.' },
      ],
    },
    howItWorks: {
      label: 'Wie es funktioniert', h2: 'Einfach für Sie, perfekt für Ihre Gäste', p: 'In nur 4 Schritten erhält Ihre Immobilie einen virtuellen Concierge, der rund um die Uhr verfügbar ist.',
      steps: [
        { title: 'Handbuch hochladen', description: 'Der Eigentümer lädt das Haushandbuch auf StaySmart hoch. Das System konvertiert den Text automatisch in Wissensvektoren.' },
        { title: 'Gast fragt auf WhatsApp', description: 'Der Gast stellt jede Frage direkt über WhatsApp — keine App-Installation, keine Komplikationen.' },
        { title: 'KI verarbeitet & antwortet', description: 'Das Sprachmodell analysiert die Frage, konsultiert die Wissensdatenbank Ihrer Immobilie und generiert eine präzise Antwort.' },
        { title: 'Zufriedener Gast', description: 'Sofortige Antwort, 24/7. Weniger Anrufe beim Eigentümer, mehr positive Bewertungen.' },
      ],
    },
    experience: { h2: 'Das Erlebnis, das Ihre Gäste verdienen', p1: 'Stellen Sie sich einen Gast vor, der um 23 Uhr ankommt und nicht weiß, wie er die Heizung einschaltet. Anstatt Sie anzurufen, sendet er eine WhatsApp-Nachricht und erhält die genaue Antwort in Sekunden.', p2: 'StaySmart verwandelt das Handbuch Ihrer Immobilie in einen intelligenten Assistenten, der nie schläft und nie versagt.', list: ['WhatsApp-Integration', 'KI basierend auf dem exklusiven Handbuch Ihrer Immobilie', 'Steuerung von Smart-Home-Geräten'] },
    testimonials: {
      label: 'Bewertungen', h2: 'Eigentümer, die uns bereits vertrauen',
      items: [
        { quote: 'Seit ich StaySmart nutze, ist die Anzahl der Nachrichten von Gästen drastisch gesunken. Der Assistent antwortet besser als ich!', author: 'Ana Ferreira', role: 'Lissabon, Portugal' },
        { quote: 'Ich habe 8 Wohnungen in Porto und die Kommunikationsverwaltung war ein Alptraum. Jetzt macht StaySmart alles automatisch. Ich spare Stunden pro Woche.', author: 'Carlos Mendes', role: 'Porto, Portugal' },
        { quote: 'Meine Gäste lieben es, sofortige Antworten zu erhalten, auch mitten in der Nacht. Meine Airbnb-Bewertungen verbesserten sich von 4,3 auf 4,9 Sterne.', author: 'Maria Santos', role: 'Algarve, Portugal' },
      ],
    },
    pricing: {
      label: 'Preise', h2: 'Transparente Pläne, keine Überraschungen', p: 'Starten Sie 30 Tage kostenlos. Keine Kreditkarte erforderlich.', popular: '★ Beliebteste', perMonth: '/ Monat',
      plans: [
        { title: 'Starter', price: '19', description: 'Ideal für Eigentümer mit 1 Immobilie, die mit der Automatisierung beginnen möchten.', features: ['1 Immobilie', 'WhatsApp-Integration', 'Haushandbuch (bis 50 Seiten)', 'E-Mail-Support', 'Basis-Dashboard'], buttonText: 'Kostenlos starten' },
        { title: 'Pro', price: '49', description: 'Für ernsthafte Eigentümer mit mehreren Immobilien und erweiterter Verwaltung.', features: ['Bis zu 10 Immobilien', 'Unbegrenzte WhatsApp-Integration', 'Haushandbuch (ohne Limit)', 'Smart-Home-Steuerung', 'Vollständiges Dashboard', 'Prioritäts-Support', 'Monatliche Berichte'], buttonText: 'Kostenlos starten', highlighted: true },
        { title: 'Enterprise', price: '149', description: 'Für Portfolio-Manager mit vielen Immobilien und spezifischen Anforderungen.', features: ['Unbegrenzte Immobilien', 'Benutzerdefinierte API', 'Custom-Integrationen', 'Dedizierter Account-Manager', 'Garantiertes SLA', 'Team-Schulung'], buttonText: 'Kontaktieren Sie uns' },
      ],
    },
    signup: {
      label: 'Registrierung', h2: 'Transformieren Sie Ihre Immobilie heute', p: 'Schließen Sie sich Hunderten von Eigentümern an, die bereits die Gästekommunikation automatisiert und die manuelle Arbeit um über 80% reduziert haben.',
      stats: [{ value: '80%', label: 'Reduzierung wiederkehrender Nachrichten' }, { value: '4.9★', label: 'Durchschnittliche Gästebewertung' }, { value: '24/7', label: 'KI-Assistenten-Verfügbarkeit' }],
      form: { h3: 'Kostenlos starten', p: '30 Tage Testphase. Ohne Kreditkarte.', name: 'Vollständiger Name *', namePlaceholder: 'Max Mustermann', email: 'E-Mail *', emailPlaceholder: 'max@email.com', phone: 'Telefon', phonePlaceholder: '+49 170 0000000', properties: 'Wie viele Immobilien verwalten Sie?', propertiesOptions: ['Auswählen...', '1 Immobilie', '2-5 Immobilien', '6-10 Immobilien', 'Mehr als 10'], message: 'Nachricht (optional)', messagePlaceholder: 'Erzählen Sie uns mehr über Ihre Immobilie...', button: 'Kostenlosen Zugang anfordern' },
    },
    footer: { description: 'Die KI-Plattform für Kurzzeitvermietungs-Eigentümer, die die Verwaltung automatisieren und das Gästeerlebnis verbessern möchten.', product: 'Produkt', productLinks: ['Funktionen', 'Wie es funktioniert', 'Preise'], company: 'Unternehmen', companyLinks: ['Über uns', 'Blog', 'Partner', 'Datenschutz', 'AGB'], copyright: '© 2026 StaySmart AI. Alle Rechte vorbehalten.', tagline: 'Built with Intelligence in Lisbon.', designed: 'Designed with Intent', backToTop: 'Nach oben ↑' },
  },
  ru: {
    nav: { features: 'Функции', howItWorks: 'Как это работает', pricing: 'Цены', contact: 'Контакт', cta: 'Начать' },
    hero: { badge: 'Гостеприимство на базе ИИ', h1: 'Ваша недвижимость — умная и автономная.', p: 'StaySmart автоматизирует общение с гостями через WhatsApp и управляет вашим умным домом — всё с помощью искусственного интеллекта.', btn1: 'Зарегистрироваться бесплатно', btn2: 'Посмотреть как работает' },
    features: {
      label: 'Функции', h2: 'Всё необходимое для лучшего управления недвижимостью', p: 'Полная платформа, которая сокращает ручной труд и улучшает опыт ваших гостей.',
      cards: [
        { title: 'Автоматизированная поддержка гостей', description: 'Ваш гость отправляет сообщение в WhatsApp — ИИ мгновенно отвечает на основе руководства вашей недвижимости, 24 часа в сутки.' },
        { title: 'Управление умным домом', description: 'Свет, температура и устройства управляются командами в чате. Гость говорит, что хочет — ИИ это делает.' },
        { title: 'Панель управления владельца', description: 'Управляйте руководствами, доступом гостей, датами заезда/выезда и состоянием устройств — всё в одном месте.' },
        { title: 'Ответы за секунды', description: 'Технология RAG обеспечивает точные ответы на основе уникального руководства вашей недвижимости, без галлюцинаций ИИ.' },
        { title: 'Более высокие оценки', description: 'Довольные гости оставляют лучшие отзывы. Быстрая и эффективная коммуникация — ключ к большему количеству звёзд на Airbnb.' },
        { title: 'Безопасно и конфиденциально', description: 'Безопасная аутентификация через Supabase. Данные вашей недвижимости и гостей всегда защищены.' },
      ],
    },
    howItWorks: {
      label: 'Как это работает', h2: 'Просто для вас, идеально для гостей', p: 'Всего за 4 шага ваша недвижимость получает виртуального консьержа, доступного круглосуточно.',
      steps: [
        { title: 'Загрузите руководство', description: 'Владелец загружает руководство по дому в StaySmart. Система автоматически преобразует текст в векторы знаний.' },
        { title: 'Гость спрашивает в WhatsApp', description: 'Гость отправляет любой вопрос прямо через WhatsApp — без установки приложений, без сложностей.' },
        { title: 'ИИ обрабатывает и отвечает', description: 'Языковая модель анализирует вопрос, обращается к базе знаний вашей недвижимости и генерирует точный ответ.' },
        { title: 'Довольный гость', description: 'Мгновенный ответ, 24/7. Меньше звонков владельцу, больше положительных отзывов.' },
      ],
    },
    experience: { h2: 'Опыт, которого заслуживают ваши гости', p1: 'Представьте гостя, который приезжает в 23:00 и не знает, как включить отопление. Вместо того чтобы вам позвонить, он отправляет сообщение в WhatsApp и за несколько секунд получает точный ответ.', p2: 'StaySmart превращает руководство вашей недвижимости в умного помощника, который никогда не спит и никогда не ошибается.', list: ['Интеграция с WhatsApp', 'ИИ на основе эксклюзивного руководства вашей недвижимости', 'Управление устройствами умного дома'] },
    testimonials: {
      label: 'Отзывы', h2: 'Владельцы, которые уже нам доверяют',
      items: [
        { quote: 'С тех пор как я начал использовать StaySmart, количество сообщений от гостей резко сократилось. Помощник отвечает лучше меня!', author: 'Ana Ferreira', role: 'Лиссабон, Португалия' },
        { quote: 'У меня 8 квартир в Порту, и управление коммуникацией было кошмаром. Теперь StaySmart делает всё автоматически. Я экономлю часы в неделю.', author: 'Carlos Mendes', role: 'Порту, Португалия' },
        { quote: 'Мои гости обожают получать мгновенные ответы, даже ночью. Мои оценки на Airbnb улучшились с 4,3 до 4,9 звезды.', author: 'Maria Santos', role: 'Алгарве, Португалия' },
      ],
    },
    pricing: {
      label: 'Цены', h2: 'Прозрачные тарифы, без сюрпризов', p: 'Начните бесплатно на 30 дней. Кредитная карта не нужна.', popular: '★ Самый популярный', perMonth: '/ мес',
      plans: [
        { title: 'Starter', price: '19', description: 'Идеально для владельцев с 1 объектом, которые хотят начать автоматизацию.', features: ['1 объект недвижимости', 'Интеграция WhatsApp', 'Руководство по дому (до 50 страниц)', 'Поддержка по email', 'Базовая панель управления'], buttonText: 'Начать бесплатно' },
        { title: 'Pro', price: '49', description: 'Для серьёзных владельцев с несколькими объектами и расширенным управлением.', features: ['До 10 объектов', 'Неограниченная интеграция WhatsApp', 'Руководство по дому (без ограничений)', 'Управление умным домом', 'Полная панель управления', 'Приоритетная поддержка', 'Ежемесячные отчёты'], buttonText: 'Начать бесплатно', highlighted: true },
        { title: 'Enterprise', price: '149', description: 'Для управляющих портфелями с большим количеством объектов и специфическими потребностями.', features: ['Неограниченное количество объектов', 'Пользовательский API', 'Кастомные интеграции', 'Выделенный менеджер аккаунта', 'Гарантированный SLA', 'Обучение команды'], buttonText: 'Связаться с нами' },
      ],
    },
    signup: {
      label: 'Регистрация', h2: 'Преобразуйте свою недвижимость сегодня', p: 'Присоединяйтесь к сотням владельцев, которые уже автоматизировали общение с гостями и сократили ручной труд более чем на 80%.',
      stats: [{ value: '80%', label: 'Сокращение повторяющихся сообщений' }, { value: '4.9★', label: 'Средняя оценка гостей' }, { value: '24/7', label: 'Доступность ИИ-помощника' }],
      form: { h3: 'Начать бесплатно', p: '30 дней пробного периода. Без кредитной карты.', name: 'Полное имя *', namePlaceholder: 'Иван Иванов', email: 'Email *', emailPlaceholder: 'ivan@email.com', phone: 'Телефон', phonePlaceholder: '+7 900 000 00 00', properties: 'Сколько объектов вы управляете?', propertiesOptions: ['Выбрать...', '1 объект', '2-5 объектов', '6-10 объектов', 'Более 10'], message: 'Сообщение (необязательно)', messagePlaceholder: 'Расскажите нам о вашей недвижимости...', button: 'Запросить бесплатный доступ' },
    },
    footer: { description: 'ИИ-платформа для владельцев краткосрочной аренды, которые хотят автоматизировать управление и улучшить опыт гостей.', product: 'Продукт', productLinks: ['Функции', 'Как это работает', 'Цены'], company: 'Компания', companyLinks: ['О нас', 'Блог', 'Партнёры', 'Конфиденциальность', 'Условия'], copyright: '© 2026 StaySmart AI. Все права защищены.', tagline: 'Built with Intelligence in Lisbon.', designed: 'Designed with Intent', backToTop: 'Наверх ↑' },
  },
};

const LANGUAGES = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ru', label: 'Русский' },
];

const LanguageSelector = ({ lang, setLang }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-brand-primary/20 text-sm font-semibold text-brand-dark hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all"
      >
        <Globe size={16} className="text-brand-primary" />
        <span>{lang.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-brand-primary/10 overflow-hidden z-50">
          {LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => { setLang(code); setOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                lang === code
                  ? 'bg-brand-primary/10 text-brand-primary font-bold'
                  : 'text-brand-dark hover:bg-brand-primary/5'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ t, lang, setLang }) => (
  <nav className="flex items-center justify-between px-6 py-4 md:px-12 bg-brand-light/90 backdrop-blur-sm sticky top-0 z-50">
    <div className="text-2xl font-serif font-bold text-brand-dark">StaySmart</div>
    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-dark">
      <a href="#funcionalidades" className="hover:text-brand-primary transition-colors">{t.nav.features}</a>
      <a href="#como-funciona" className="hover:text-brand-primary transition-colors">{t.nav.howItWorks}</a>
      <a href="#precos" className="hover:text-brand-primary transition-colors">{t.nav.pricing}</a>
      <a href="#contacto" className="hover:text-brand-primary transition-colors">{t.nav.contact}</a>
    </div>
    <div className="flex items-center gap-3">
      <LanguageSelector lang={lang} setLang={setLang} />
      <button className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-accent transition-all">
        {t.nav.cta}
      </button>
    </div>
  </nav>
);

const Hero = ({ t, onSignupOpen }) => (
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
        {t.hero.badge}
      </div>
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-dark mb-6 leading-tight">
        {t.hero.h1}
      </h1>
      <p className="text-lg md:text-xl text-brand-dark/80 mb-10 max-w-2xl mx-auto leading-relaxed">
        {t.hero.p}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <button
          onClick={onSignupOpen}
          className="w-full md:w-auto bg-brand-primary text-white px-10 py-4 rounded-full text-base font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all"
        >
          {t.hero.btn1}
        </button>
        <button className="w-full md:w-auto border border-brand-dark/20 px-10 py-4 rounded-full text-base font-bold hover:bg-brand-dark/5 transition-all flex items-center justify-center">
          {t.hero.btn2} <ArrowRight className="ml-2 h-5 w-5" />
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

const FEATURE_ICONS = [MessageSquare, Home, LayoutDashboard, Clock, Star, ShieldCheck];

const Features = ({ t }) => (
  <section id="funcionalidades" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">{t.features.label}</span>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-4">{t.features.h2}</h2>
      <p className="text-brand-dark/60 mt-4 max-w-2xl mx-auto">{t.features.p}</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {t.features.cards.map((card, i) => (
        <FeatureCard key={i} icon={FEATURE_ICONS[i]} title={card.title} description={card.description} />
      ))}
    </div>
  </section>
);

const STEP_ICONS = [Upload, MessageSquare, Zap, CheckCircle];

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

const HowItWorks = ({ t }) => (
  <section id="como-funciona" className="py-24 bg-brand-primary/[0.02]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-20">
        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">{t.howItWorks.label}</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-4">{t.howItWorks.h2}</h2>
        <p className="text-brand-dark/60 mt-4">{t.howItWorks.p}</p>
      </div>
      <div className="grid md:grid-cols-4 gap-12 relative">
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-brand-primary/10 -z-0"></div>
        {t.howItWorks.steps.map((step, i) => (
          <Step key={i} number={`0${i + 1}`} icon={STEP_ICONS[i]} title={step.title} description={step.description} />
        ))}
      </div>
    </div>
  </section>
);

const Experience = ({ t }) => (
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
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">{t.experience.h2}</h2>
        <p className="text-brand-dark/70 text-lg mb-8 leading-relaxed italic">{t.experience.p1}</p>
        <p className="text-brand-dark/70 text-lg mb-10 leading-relaxed">{t.experience.p2}</p>
        <ul className="space-y-4 mb-10">
          {t.experience.list.map((item, i) => (
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

const TESTIMONIAL_IMAGES = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
];

const Testimonials = ({ t }) => (
  <section className="py-24 bg-white/50">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">{t.testimonials.label}</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-4">{t.testimonials.h2}</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {t.testimonials.items.map((item, i) => (
          <TestimonialCard key={i} quote={item.quote} author={item.author} role={item.role} image={TESTIMONIAL_IMAGES[i]} />
        ))}
      </div>
    </div>
  </section>
);

const PricingCard = ({ plan, popular, perMonth }) => (
  <div className={`p-10 rounded-[40px] flex flex-col justify-between ${
    plan.highlighted
    ? 'bg-brand-dark text-white scale-105 shadow-2xl relative z-10'
    : 'bg-brand-light text-brand-dark border border-brand-primary/5'
  }`}>
    <div>
      {plan.highlighted && (
        <div className="bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-6">
          {popular}
        </div>
      )}
      <h3 className="text-2xl font-serif font-bold mb-2">{plan.title}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-4xl font-bold">€{plan.price}</span>
        <span className={`text-sm ${plan.highlighted ? 'text-white/60' : 'text-brand-dark/40'} ml-2`}>{perMonth}</span>
      </div>
      <p className={`text-sm mb-8 ${plan.highlighted ? 'text-white/70' : 'text-brand-dark/60'}`}>{plan.description}</p>
      <ul className="space-y-4 mb-10">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm">
            <CheckCircle size={18} className="mr-3 shrink-0 text-brand-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
      plan.highlighted
      ? 'bg-brand-primary text-white hover:bg-brand-accent shadow-lg shadow-brand-primary/20'
      : 'bg-brand-dark text-white hover:bg-brand-dark/90'
    }`}>
      {plan.buttonText}
    </button>
  </div>
);

const Pricing = ({ t }) => (
  <section id="precos" className="py-24 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">{t.pricing.label}</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mt-4">{t.pricing.h2}</h2>
        <p className="text-brand-dark/60 mt-4">{t.pricing.p}</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {t.pricing.plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} popular={t.pricing.popular} perMonth={t.pricing.perMonth} />
        ))}
      </div>
    </div>
  </section>
);

const SignupSection = ({ t }) => (
  <section id="contacto" className="py-24 px-6 md:px-12 bg-brand-light">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">{t.signup.label}</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mt-4 mb-8">{t.signup.h2}</h2>
        <p className="text-brand-dark/60 text-lg mb-12">{t.signup.p}</p>
        <div className="space-y-8">
          {t.signup.stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              <div className="text-4xl font-bold text-brand-primary mr-6">{stat.value}</div>
              <div className="text-brand-dark/70 font-medium leading-tight text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
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
        <h3 className="text-3xl font-serif font-bold text-brand-dark mb-2">{t.signup.form.h3}</h3>
        <p className="text-brand-dark/50 text-sm mb-10">{t.signup.form.p}</p>
        <form className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">{t.signup.form.name}</label>
            <input type="text" placeholder={t.signup.form.namePlaceholder} className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark" />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">{t.signup.form.email}</label>
            <input type="email" placeholder={t.signup.form.emailPlaceholder} className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark" />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">{t.signup.form.phone}</label>
            <input type="tel" placeholder={t.signup.form.phonePlaceholder} className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark" />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">{t.signup.form.properties}</label>
            <select className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark appearance-none">
              {t.signup.form.propertiesOptions.map((opt, i) => <option key={i}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">{t.signup.form.message}</label>
            <textarea rows={3} placeholder={t.signup.form.messagePlaceholder} className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-primary transition-all text-brand-dark resize-none"></textarea>
          </div>
          <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20 mt-4">
            {t.signup.form.button}
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = ({ t }) => (
  <footer className="bg-brand-dark text-white pt-24 pb-12 px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1">
        <div className="text-2xl font-serif font-bold mb-6">StaySmart</div>
        <p className="text-white/60 text-sm leading-relaxed mb-8">{t.footer.description}</p>
        <div className="flex space-x-4">
          <Instagram className="text-white/60 hover:text-brand-primary cursor-pointer transition-colors" size={20} />
          <Linkedin className="text-white/60 hover:text-brand-primary cursor-pointer transition-colors" size={20} />
          <Twitter className="text-white/60 hover:text-brand-primary cursor-pointer transition-colors" size={20} />
        </div>
      </div>
      <div className="col-span-1">
        <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-primary">{t.footer.product}</h5>
        <ul className="space-y-4 text-white/60 text-sm">
          {t.footer.productLinks.map((link, i) => <li key={i} className="hover:text-white cursor-pointer transition-colors">{link}</li>)}
        </ul>
      </div>
      <div className="col-span-1">
        <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-primary">{t.footer.company}</h5>
        <ul className="space-y-4 text-white/60 text-sm">
          {t.footer.companyLinks.map((link, i) => <li key={i} className="hover:text-white cursor-pointer transition-colors">{link}</li>)}
        </ul>
      </div>
      <div className="col-span-1">
        <h5 className="font-bold uppercase tracking-widest text-xs mb-8 text-brand-primary">StaySmart AI</h5>
        <p className="text-white/40 text-xs leading-relaxed">
          {t.footer.copyright}<br />{t.footer.tagline}
        </p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] uppercase tracking-[0.2em]">
      <div>{t.footer.designed}</div>
      <div className="mt-4 md:mt-0">{t.footer.backToTop}</div>
    </div>
  </footer>
);

function App() {
  const [lang, setLang] = useState('pt');
  const [signupOpen, setSignupOpen] = useState(false);
  const t = translations[lang];

  return (
    <div className="bg-brand-light min-h-screen">
      <SignupModal open={signupOpen} onClose={() => setSignupOpen(false)} lang={lang} />
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} onSignupOpen={() => setSignupOpen(true)} />
      <Features t={t} />
      <HowItWorks t={t} />
      <Experience t={t} />
      <Testimonials t={t} />
      <Pricing t={t} />
      <SignupSection t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
