import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, ChevronRight, Target, BarChart, PieChart, Settings, Zap,
  Users, Bot, CheckCircle, Package, TrendingDown, Infinity, ArrowRight,
  FileBox, Wrench, ShieldCheck, Clock, HelpCircle, Mail, Phone, Linkedin,
  ArrowUpRight
} from 'lucide-react';

const Slide1 = () => (
  <div className="min-h-full w-full flex flex-col items-center justify-center text-center px-6 py-24 relative">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="z-10"
    >
      <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-500 font-bold tracking-[0.3em] uppercase text-xs mb-8">
        Proposta Comercial
      </div>
      <h1 className="text-6xl md:text-8xl font-serif leading-tight italic mb-6">
        Desdobramento <br />
        <span className="not-italic font-bold">
          de Peças
        </span>
      </h1>
      <div className="flex justify-center mb-12">
        <img src="https://i.ibb.co/67D9KQPx/a-Ativo-1.png" alt="Digitalizei + Scheidt Visuals" className="h-12 md:h-16 object-contain" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
  </div>
);

const Slide2 = () => {
  const items = [
    { icon: <Target className="w-6 h-6" />, title: "Objetivo", desc: "Desdobramento contínuo a partir de KVs/Master fornecidos pela equipe da Digitalizei." },
    { icon: <BarChart className="w-6 h-6" />, title: "Volume Estimado", desc: "~200 peças por mês." },
    { icon: <PieChart className="w-6 h-6" />, title: "Proporção Prevista", desc: "70% Animadas (DOOH / Redes Sociais)\n30% Estáticas (OOH / Redes Sociais / E-mail)." },
    { icon: <Settings className="w-6 h-6" />, title: "Desafio Técnico", desc: "Adequação rigorosa a formatos diversos e especificações de veículos (DPI, limites de MB, sangria, FPS e codecs)." },
    { icon: <Zap className="w-6 h-6" />, title: "Desafio Operacional", desc: "Capacidade de absorver picos de demanda durante o mês mantendo a consistência do design original." },
  ];

  return (
    <div className="min-h-full w-full flex flex-col justify-center px-12 md:px-24 py-24">
      <span className="text-emerald-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">Visão Geral</span>
      <h2 className="text-4xl md:text-6xl font-serif leading-tight italic mb-12">Resumo do <span className="not-italic font-bold">Escopo</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            className={`bg-white/5 p-8 border border-white/10 rounded-2xl flex flex-col justify-between ${idx === 3 || idx === 4 ? 'lg:col-span-1' : ''}`}
          >
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-emerald-500">{item.icon}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-snug whitespace-pre-line">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide3 = () => (
  <div className="min-h-full w-full flex flex-col justify-center px-12 md:px-24 py-24">
    <span className="text-emerald-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">Análise de Viabilidade</span>
    <h2 className="text-4xl md:text-6xl font-serif leading-tight italic mb-12">Modelos <span className="not-italic font-bold">Operacionais</span></h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Traditional */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white/5 p-8 border border-white/10 rounded-2xl flex flex-col justify-between"
      >
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">1. Estrutura Interna Tradicional</h3>
          <div className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-mono tracking-widest uppercase mb-4">
            CLT / PJ
          </div>
          <p className="text-slate-400 text-sm leading-snug">
            Para absorver um volume de 140 animações e 60 estáticas mensais, o custo de um profissional ou equipe dedicada gira em torno de:
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-white/5 space-y-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest mb-1">PJ (NÍVEL PLENO/SÊNIOR)</span>
            <span className="text-lg font-mono">R$ 8.000 a R$ 10.000 / mês</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest mb-1">CLT (CUSTO TOTAL EMPRESA)</span>
            <span className="text-lg font-mono">R$ 12.000 a R$ 15.000 / mês</span>
          </div>
        </div>
      </motion.div>

      {/* Automated */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-emerald-500 p-8 rounded-2xl flex flex-col justify-between text-black relative"
      >
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#0F1113] text-emerald-500 border border-emerald-500 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
          RECOMENDADO
        </div>
        
        <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-6">
          <Bot className="w-6 h-6 text-black" />
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">2. Modelo Scheidt Visuals</h3>
          <div className="inline-block px-3 py-1 bg-black/10 text-black/70 text-xs font-mono tracking-widest uppercase mb-4">
            Processo Automatizado
          </div>
        </div>
        
        <div className="space-y-4 mt-auto">
          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Operação</h4>
            <p className="text-black/70 text-sm leading-snug">Aplicação de fluxos baseados em scripts e automação de processamento em lote.</p>
          </div>
          <div className="pt-4 border-t border-black/10">
            <h4 className="font-bold text-sm tracking-widest uppercase mb-1">Vantagem</h4>
            <p className="text-black/70 text-sm leading-snug">Empata ou reduz o custo financeiro de um profissional interno, eliminando gargalos de produção. A tecnologia absorve picos intensos de volume, garantindo o rigor técnico em uma fração do tempo do modelo tradicional.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Slide4 = () => {
  const [estaticoCount, setEstaticoCount] = useState(0);
  const [animadoCount, setAnimadoCount] = useState(0);

  const calculateTotal = () => {
    return (estaticoCount * 55) + (animadoCount * 85);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
  }

  const plans = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Cenário A",
      subtitle: "Pacote Fixo Mensal",
      target: "Ideal para previsibilidade",
      price: "R$ 8.500",
      priceDesc: "equivale a R$ 42,50 por peça",
      features: [
        { label: "Franquia", val: "Até 200 peças / mês" },
        { label: "Mix", val: "Livre, estimativa 70/30" },
        { label: "Excedente", val: "R$ 50,00 por peça" }
      ],
      color: "blue",
      popular: true
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Cenário B",
      subtitle: "Franquia Reduzida",
      target: "Ideal para fluxos variáveis",
      price: "R$ 4.900",
      priceDesc: "mensal",
      features: [
        { label: "Franquia Base", val: "Até 100 peças / mês" },
        { label: "Mix", val: "Livre" },
        { label: "Excedente Estática", val: "R$ 35,00 / un" },
        { label: "Excedente Animada", val: "R$ 65,00 / un" }
      ],
      color: "emerald"
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      title: "Cenário C",
      subtitle: "100% Sob Demanda",
      target: "Sem compromisso mensal",
      price: "calc",
      priceDesc: "pagamento por peça",
      features: [
        { label: "Desdobramento Estático", val: "R$ 55,00 / un" },
        { label: "Desdobramento Animado", val: "R$ 85,00 / un (até 15s)" },
      ],
      color: "purple"
    }
  ];

  return (
    <div className="min-h-full w-full flex flex-col justify-center px-12 md:px-24 py-24">
      <span className="text-emerald-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">Investimento</span>
      <h2 className="text-4xl md:text-6xl font-serif leading-tight italic mb-12">Cenários de <span className="not-italic font-bold">Investimento</span></h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.15, duration: 0.5 }}
            className={`relative p-8 rounded-2xl flex flex-col transition-transform hover:-translate-y-2
              ${plan.popular ? 'bg-emerald-500 text-black border-none' : 'bg-white/5 border border-white/10 text-white'}
            `}
          >
            {plan.popular && (
              <div className="absolute -top-4 w-full left-0 flex justify-center">
                <span className="bg-[#0F1113] text-emerald-500 border border-emerald-500 px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  DESTAQUE
                </span>
              </div>
            )}
            
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${plan.popular ? 'bg-black/10 text-black' : 'bg-white/10 text-white'}`}>
                {plan.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold">{plan.title}</h3>
                <p className={`text-sm ${plan.popular ? 'text-black/70' : 'text-slate-400'}`}>{plan.subtitle}</p>
              </div>
            </div>
            
            <p className={`text-sm font-bold tracking-widest uppercase mb-6 pb-6 border-b ${plan.popular ? 'text-black/60 border-black/10' : 'text-emerald-500 border-white/5'}`}>
              {plan.target}
            </p>
            
            <div className="mb-6">
              {plan.price === 'calc' ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Estáticas</span>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1">
                      <button onClick={() => setEstaticoCount(Math.max(0, estaticoCount - 1))} className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded transition-colors">-</button>
                      <input
                        type="number"
                        min="0"
                        value={estaticoCount}
                        onChange={(e) => setEstaticoCount(parseInt(e.target.value) || 0)}
                        className="w-10 bg-transparent text-center font-mono border-none focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded-sm [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button onClick={() => setEstaticoCount(estaticoCount + 1)} className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded transition-colors">+</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-400">Animadas</span>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1">
                      <button onClick={() => setAnimadoCount(Math.max(0, animadoCount - 1))} className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded transition-colors">-</button>
                      <input
                        type="number"
                        min="0"
                        value={animadoCount}
                        onChange={(e) => setAnimadoCount(parseInt(e.target.value) || 0)}
                        className="w-10 bg-transparent text-center font-mono border-none focus:outline-none focus:ring-1 focus:ring-emerald-500 rounded-sm [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button onClick={() => setAnimadoCount(animadoCount + 1)} className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded transition-colors">+</button>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-mono font-bold">{formatCurrency(calculateTotal())}</span>
                  </div>
                  <p className={`text-sm mt-1 uppercase tracking-wider text-[10px] text-slate-500`}>estimativa de custo</p>
                </div>
              ) : (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-mono font-bold">{plan.price}</span>
                  </div>
                  <p className={`text-sm mt-1 uppercase tracking-wider text-[10px] ${plan.popular ? 'text-black/60' : 'text-slate-500'}`}>{plan.priceDesc}</p>
                </>
              )}
            </div>
            
            <ul className="space-y-4 mt-auto">
              {plan.features.map((feat, fidx) => (
                <li key={fidx} className="flex gap-3">
                  <ArrowRight className={`w-4 h-4 mt-1 shrink-0 ${plan.popular ? 'text-black/50' : 'text-emerald-500'}`} />
                  <div className="text-sm">
                    <span className={`block mb-0.5 text-xs uppercase tracking-widest ${plan.popular ? 'text-black/60' : 'text-slate-400'}`}>{feat.label}</span>
                    <span className={`font-mono ${plan.popular ? 'text-black' : 'text-white'}`}>{feat.val}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide5 = () => {
  const steps = [
    {
      icon: <FileBox className="w-5 h-5" />,
      title: "Arquivos Master",
      desc: "Para viabilizar a agilidade da automação e desdobramento, os KVs devem ser fornecidos abertos (PSD, AI, AEP). Peças em formatos fechados como PDF e PNG não serão aceitas."
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Escopo de Ajustes",
      desc: "Os valores cobrem a adequação técnica. Refações por mudanças de conceito, de texto ou troca do KV base após o início da produção serão contabilizadas como novas peças."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Controle de Qualidade (QA)",
      desc: "Todas as entregas incluem conferência de especificações técnicas para garantir a aprovação nos veículos."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Prazos de Entrega",
      desc: "Demandas padrão serão entregues em até 24 horas úteis. Picos de volume acima de 100 peças simultâneas terão o cronograma alinhado no recebimento do briefing."
    }
  ];

  return (
    <div className="min-h-full w-full flex flex-col justify-center px-12 md:px-24 py-24">
      <span className="text-emerald-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">SLA</span>
      <h2 className="text-4xl md:text-6xl font-serif leading-tight italic mb-12">Premissas de <span className="not-italic font-bold">Trabalho</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block -translate-x-1/2"></div>
        
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * idx, duration: 0.5 }}
            className={`relative p-6 rounded-2xl bg-white/5 border border-white/10 ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8 md:-translate-y-4'}`}
          >
            <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500
              ${idx % 2 === 0 ? '-right-[42px] hidden md:block' : '-left-[42px] hidden md:block'}
              shadow-[0_0_10px_rgba(16,185,129,0.5)] border-4 border-[#0F1113]
            `} />
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-emerald-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{idx + 1}. {step.title}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Slide6 = () => (
  <div className="min-h-full w-full flex flex-col justify-center items-center text-center px-6 py-24 relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mb-16 z-10"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 text-emerald-500 mb-8 shadow-xl">
        <HelpCircle className="w-8 h-8" />
      </div>
      <h2 className="text-4xl md:text-6xl font-serif leading-tight italic max-w-3xl mx-auto mb-4">
        Qual cenário se <span className="not-italic font-bold">adequa melhor?</span>
      </h2>
      <p className="text-lg text-slate-400">Vamos conversar sobre a operação da Digitalizei.</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col items-center gap-6 z-10"
    >
      <div className="px-6 py-2 rounded-none border-b border-emerald-500">
        <h3 className="text-xl font-bold tracking-widest uppercase">
          Scheidt Visuals
        </h3>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-slate-400 font-mono text-sm">
        <a href="mailto:lucas@scheidtvisuals.com" className="flex items-center gap-2 hover:text-emerald-500 transition-colors group">
          <Mail className="w-4 h-4 text-slate-500 group-hover:text-emerald-500 transition-colors" />
          lucas@scheidtvisuals.com
        </a>
        <a href="tel:+5541998425156" className="flex items-center gap-2 hover:text-emerald-500 transition-colors group">
          <Phone className="w-4 h-4 text-slate-500 group-hover:text-emerald-500 transition-colors" />
          +55 41998425156
        </a>
      </div>
      
      <a 
        href="https://www.linkedin.com/in/lcssch/" 
        target="_blank" 
        rel="noreferrer"
        className="mt-8 flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-widest transition-colors group"
      >
        <Linkedin className="w-5 h-5" />
        Conectar no LinkedIn
        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
      </a>
    </motion.div>
  </div>
);

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'SV_Digitalizei@26') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isAuthenticated) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0F1113] overflow-hidden select-none relative text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none z-0"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none z-0"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 bg-white/5 border border-white/10 p-12 rounded-2xl w-full max-w-md flex flex-col items-center backdrop-blur-sm"
        >
          <div className="w-16 h-16 rounded-xl overflow-hidden mb-8">
            <img src="https://i.ibb.co/tMR388R0/a-Ativo-2.png" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          
          <h2 className="text-2xl font-serif mb-2">Acesso Restrito</h2>
          <p className="text-sm text-slate-400 mb-8 text-center uppercase tracking-widest">Insira a senha para visualizar a proposta</p>
          
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Senha de acesso"
                className={`w-full bg-black/20 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-lg px-4 py-3 text-center tracking-widest focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-white/20`}
              />
              {error && <p className="text-xs text-red-400 mt-2 text-center">Senha incorreta</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-widest py-3 rounded-lg transition-colors mt-2"
            >
              Acessar
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const CurrentComponent = slides[currentSlide];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div className="w-full h-[100dvh] flex flex-col bg-[#0F1113] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none z-0"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      
      {/* Header / Progress */}
      <header className="fixed top-0 w-full z-50 p-10 flex justify-between items-center bg-transparent pointer-events-none">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="https://i.ibb.co/tMR388R0/a-Ativo-2.png" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="leading-none flex-col hidden sm:flex">
            <h1 className="text-sm font-bold tracking-widest uppercase font-sans">Digitalizei</h1>
            <p className="text-[10px] text-emerald-500/70 uppercase tracking-tighter font-sans">Proposta Comercial 2026</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-xs font-mono tracking-widest opacity-50 hidden sm:inline-block uppercase">SLIDE 0{currentSlide + 1} / 0{slides.length}</span>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-300 ${i === currentSlide ? 'w-8 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'w-8 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 relative pt-16">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 }
            }}
            className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden pb-24"
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <footer className="fixed bottom-0 w-full z-50 flex items-center justify-between px-10 py-6 border-t border-white/5 bg-[#0A0C0E]">
        <div className="flex gap-6">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 text-xs font-bold uppercase opacity-40 hover:opacity-100 disabled:opacity-20 transition-opacity font-sans"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-500 disabled:opacity-30 hover:opacity-80 transition-opacity font-sans"
          >
            Próximo
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-4 hidden sm:flex">
          <span className="text-[10px] text-slate-500 font-mono">NO DESKTOP, USE AS SETAS DO TECLADO PARA NAVEGAR</span>
          <div className="h-4 w-px bg-white/10"></div>
          <span className="text-[10px] text-slate-500 font-mono">© SCHEIDT VISUALS | 2026</span>
        </div>
      </footer>
      
    </div>
  );
}

