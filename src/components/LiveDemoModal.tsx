import React, { useState } from 'react';
import { 
  X, Play, ShoppingCart, Volume2, VolumeX, Plus, Trash2, CheckCircle2, 
  ExternalLink, Github, Sparkles, Filter, Search, Sliders, Layers, ArrowRight,
  Database, Server, RefreshCw, Copy, Check, Heart, Eye, ArrowLeft
} from 'lucide-react';
import { Project } from '../types';

interface LiveDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

// -------------------------------------------------------------
// 1. Electro E-Commerce Live Demo Component
// -------------------------------------------------------------
const ElectroDemo: React.FC = () => {
  interface Product {
    id: string;
    title: string;
    category: 'Laptops' | 'Audio' | 'Accessories';
    price: number;
    rating: number;
    imageBg: string;
    badge?: string;
  }

  const catalog: Product[] = [
    { id: 'p1', title: 'ProBook Ultra 16', category: 'Laptops', price: 1899, rating: 4.9, imageBg: 'from-blue-600 to-indigo-900', badge: 'Next.js SSR' },
    { id: 'p2', title: 'Apex ANC Headphones', category: 'Audio', price: 279, rating: 4.8, imageBg: 'from-emerald-600 to-teal-900', badge: 'Best Seller' },
    { id: 'p3', title: 'Tactile Mechanical Board', category: 'Accessories', price: 159, rating: 4.7, imageBg: 'from-amber-600 to-orange-900' },
    { id: 'p4', title: 'Nova Fit OLED Watch', category: 'Accessories', price: 229, rating: 4.6, imageBg: 'from-purple-600 to-slate-900' },
    { id: 'p5', title: 'Curved 34" Ultrawide', category: 'Laptops', price: 649, rating: 4.9, imageBg: 'from-cyan-600 to-blue-900', badge: 'High Refresh' },
    { id: 'p6', title: 'Studio Dynamic Mic', category: 'Audio', price: 139, rating: 4.5, imageBg: 'from-rose-600 to-red-900' },
  ];

  const [activeCategory, setActiveCategory] = useState<'All' | 'Laptops' | 'Audio' | 'Accessories'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ [id: string]: number }>({ 'p2': 1 });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const filteredProducts = catalog.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const totalItems = (Object.values(cart) as number[]).reduce((sum: number, qty: number) => sum + qty, 0);
  const subtotal = (Object.entries(cart) as [string, number][]).reduce((sum: number, [id, qty]: [string, number]) => {
    const prod = catalog.find(p => p.id === id);
    return sum + (prod ? prod.price * qty : 0);
  }, 0);
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      setCheckoutComplete(false);
      setCart({});
      setIsCartOpen(false);
    }, 2800);
  };

  return (
    <div className="space-y-4">
      {/* Storefront Nav Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-xs">
            E
          </div>
          <div>
            <h4 className="text-xs font-bold text-white tracking-wide">ELECTRO STORE</h4>
            <span className="text-[10px] text-emerald-400 font-mono">Next.js 14 SSR Engine</span>
          </div>
        </div>

        <div className="flex items-center gap-2 grow max-w-xs">
          <div className="relative w-full">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search tech products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-md text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
        >
          <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />
          <span>Cart</span>
          {totalItems > 0 && (
            <span className="w-4 h-4 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        {(['All', 'Laptops', 'Audio', 'Accessories'] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
              activeCategory === cat
                ? 'bg-emerald-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-[11px] text-slate-400 font-mono">
          {filteredProducts.length} items rendered
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredProducts.map(product => {
          const inCartQty = cart[product.id] || 0;
          return (
            <div
              key={product.id}
              className="group bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-lg p-3 flex flex-col justify-between transition-all"
            >
              <div>
                {/* Product Image Mockup */}
                <div className={`w-full h-24 rounded-md bg-gradient-to-br ${product.imageBg} flex items-center justify-center relative overflow-hidden mb-2.5`}>
                  <div className="text-white/25 font-black text-2xl tracking-widest uppercase">
                    {product.category}
                  </div>
                  {product.badge && (
                    <span className="absolute top-2 right-2 text-[9px] font-semibold px-1.5 py-0.5 rounded bg-black/60 text-emerald-300 backdrop-blur-xs border border-white/10">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-1 mb-1">
                  <h5 className="text-xs font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {product.title}
                  </h5>
                  <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">
                    ${product.price}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-3">
                  <span>★ {product.rating}</span>
                  <span>•</span>
                  <span>{product.category}</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/80">
                {inCartQty > 0 ? (
                  <div className="flex items-center gap-2 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-slate-400 hover:text-rose-400 text-xs font-bold px-1"
                    >
                      -
                    </button>
                    <span className="text-xs font-mono text-emerald-400 font-bold">{inCartQty} in cart</span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="text-slate-400 hover:text-emerald-400 text-xs font-bold px-1"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-500 font-mono">In Stock</span>
                )}

                <button
                  onClick={() => addToCart(product.id)}
                  className="px-2.5 py-1 text-xs font-semibold rounded bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 border border-emerald-500/30 transition-colors cursor-pointer"
                >
                  Add +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Drawer / Slideover */}
      {isCartOpen && (
        <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg shadow-xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
            <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
              <ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />
              Your Cart ({totalItems} items)
            </h5>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-slate-400 hover:text-white text-xs"
            >
              Close
            </button>
          </div>

          {totalItems === 0 ? (
            <p className="text-xs text-slate-400 py-3 text-center">Your cart is empty. Add products to test live checkout.</p>
          ) : (
            <div className="space-y-2">
              <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1">
                {Object.entries(cart).map(([id, qty]) => {
                  const prod = catalog.find(p => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="flex items-center justify-between text-xs py-1 px-2 rounded bg-slate-950/60 border border-slate-800">
                      <span className="text-slate-200 truncate max-w-[140px]">{prod.title}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-400">{qty} × ${prod.price}</span>
                        <button
                          onClick={() => removeFromCart(id)}
                          className="text-rose-400 hover:text-rose-300 text-xs"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono">${subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Tax (8% Est.)</span>
                  <span className="font-mono">${tax}</span>
                </div>
                <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-slate-800/60">
                  <span>Total</span>
                  <span className="text-emerald-400 font-mono">${total}</span>
                </div>
              </div>

              <button
                disabled={checkoutComplete}
                onClick={handleCheckout}
                className="w-full mt-2 py-2 rounded bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                {checkoutComplete ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                    <span>Order Placed! (Server Session Recorded)</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Instant Checkout</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tech implementation badge footer */}
      <div className="p-3 bg-slate-950/90 rounded border border-slate-800/80 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Next.js SSR • Strict TypeScript typing • Express/MongoDB Inventory API</span>
        </div>
        <span className="font-mono text-emerald-400">30% Load Time Cut</span>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Headphone Showcase Live Demo Component
// -------------------------------------------------------------
const HeadphoneDemo: React.FC = () => {
  const colors = [
    { name: 'Onyx Black', hex: '#09090b', accent: '#3b82f6', label: 'Dark Carbon' },
    { name: 'Arctic Silver', hex: '#e2e8f0', accent: '#10b981', label: 'Matte Titanium' },
    { name: 'Midnight Blue', hex: '#1e3a8a', accent: '#06b6d4', label: 'Deep Ocean' },
    { name: 'Sunset Rose', hex: '#881337', accent: '#fb7185', label: 'Warm Blush' }
  ];

  const soundModes = [
    { id: 'bass', label: 'Bass Boost', hz: '+6dB @ 40Hz', desc: 'Punchy low-end response' },
    { id: 'vocal', label: 'Vocal Clarity', hz: '+4dB @ 2.5kHz', desc: 'Crisp dialogue & podcasts' },
    { id: 'studio', label: 'Studio Neutral', hz: 'Flat 20Hz-20kHz', desc: 'Reference audiophile tuning' },
    { id: 'spatial', label: 'Spatial 3D', hz: 'HRTF Virtual Soundstage', desc: 'Immersive binaural audio' }
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedMode, setSelectedMode] = useState(soundModes[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [ancEnabled, setAncEnabled] = useState(true);

  return (
    <div className="space-y-4">
      {/* Product visualizer frame */}
      <div 
        className="relative rounded-xl p-6 overflow-hidden border border-slate-800 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${selectedColor.accent}22, #020617 80%)`
        }}
      >
        {/* Top bar controls */}
        <div className="flex items-center justify-between text-xs mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-slate-300 text-[11px]">Apex Acoustics Gen-II</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setAncEnabled(!ancEnabled)}
              className={`px-2.5 py-1 rounded text-[11px] font-semibold border transition-colors cursor-pointer ${
                ancEnabled 
                  ? 'bg-emerald-950/80 text-emerald-400 border-emerald-700' 
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}
            >
              ANC {ancEnabled ? 'ON (-42dB)' : 'OFF'}
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold bg-slate-800 text-slate-200 hover:text-white border border-slate-700 cursor-pointer"
            >
              {isPlaying ? <Volume2 className="w-3 h-3 text-emerald-400" /> : <VolumeX className="w-3 h-3" />}
              <span>{isPlaying ? 'Mute' : 'Play'}</span>
            </button>
          </div>
        </div>

        {/* Headphone Render Graphic */}
        <div className="flex flex-col items-center justify-center py-4">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Ambient glow */}
            <div 
              className="absolute inset-0 rounded-full blur-2xl opacity-40 transition-all duration-700"
              style={{ backgroundColor: selectedColor.accent }}
            />
            
            {/* Stylized Headphone Headband */}
            <div 
              className="absolute w-36 h-36 rounded-full border-8 transition-colors duration-500"
              style={{ borderColor: selectedColor.accent, borderBottomColor: 'transparent' }}
            />

            {/* Ear cups */}
            <div 
              className="absolute left-3 w-10 h-20 rounded-2xl shadow-xl transition-all duration-500 border border-white/20 flex items-center justify-center"
              style={{ backgroundColor: selectedColor.hex }}
            >
              <span className="text-[10px] font-mono text-white/50">L</span>
            </div>
            <div 
              className="absolute right-3 w-10 h-20 rounded-2xl shadow-xl transition-all duration-500 border border-white/20 flex items-center justify-center"
              style={{ backgroundColor: selectedColor.hex }}
            >
              <span className="text-[10px] font-mono text-white/50">R</span>
            </div>

            {/* Center frequency visualizer badge */}
            <div className="relative z-10 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                {selectedColor.name}
              </span>
              <div className="text-xs font-bold text-white px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-md">
                {selectedMode.label}
              </div>
            </div>
          </div>

          {/* Equalizer Frequency Bars */}
          <div className="flex items-end justify-center gap-1.5 h-12 mt-4 px-4 w-full max-w-xs">
            {[45, 75, 90, 60, 30, 85, 100, 70, 50, 95, 65, 40].map((baseHeight, idx) => {
              const height = isPlaying 
                ? (selectedMode.id === 'bass' && idx < 4 ? Math.min(100, baseHeight * 1.3) : baseHeight)
                : 8;
              return (
                <div
                  key={idx}
                  className="w-2 rounded-full transition-all duration-300"
                  style={{
                    height: `${height}%`,
                    backgroundColor: isPlaying ? selectedColor.accent : '#334155',
                    opacity: isPlaying ? 0.9 : 0.3
                  }}
                />
              );
            })}
          </div>
          <span className="text-[10px] font-mono text-slate-400 mt-2">
            Acoustic Visualizer: {selectedMode.hz}
          </span>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Color Switcher */}
        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
          <label className="text-xs font-bold text-white block mb-2">
            Select Finish & Material
          </label>
          <div className="grid grid-cols-2 gap-2">
            {colors.map(col => (
              <button
                key={col.name}
                onClick={() => setSelectedColor(col)}
                className={`flex items-center gap-2 p-2 rounded-md text-left transition-all cursor-pointer ${
                  selectedColor.name === col.name
                    ? 'bg-slate-800 border-2 border-emerald-500 text-white'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-white/20 shrink-0"
                  style={{ backgroundColor: col.hex }}
                />
                <div className="min-w-0">
                  <span className="text-xs font-semibold block truncate">{col.name}</span>
                  <span className="text-[10px] text-slate-400 block">{col.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Audio Profile Switcher */}
        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
          <label className="text-xs font-bold text-white block mb-2">
            Equalizer Acoustic Tuning
          </label>
          <div className="grid grid-cols-2 gap-2">
            {soundModes.map(mode => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode)}
                className={`p-2 rounded-md text-left transition-all cursor-pointer ${
                  selectedMode.id === mode.id
                    ? 'bg-slate-800 border-2 border-emerald-500 text-white'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className="text-xs font-semibold block">{mode.label}</span>
                <span className="text-[10px] text-emerald-400 font-mono block">{mode.hz}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hardware Specs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
        <div className="p-2 rounded bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-400 block">Acoustic Drivers</span>
          <span className="text-xs font-bold text-white">40mm Graphene</span>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-400 block">Battery Life</span>
          <span className="text-xs font-bold text-white">45 Hours (Fast Chg)</span>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-400 block">Latency</span>
          <span className="text-xs font-bold text-white">&lt; 28ms Gaming</span>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800">
          <span className="text-[10px] text-slate-400 block">Codecs</span>
          <span className="text-xs font-bold text-white">aptX HD / LDAC</span>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 3. DevSprint MERN Kanban Live Demo Component
// -------------------------------------------------------------
const KanbanDemo: React.FC = () => {
  interface Task {
    id: string;
    title: string;
    status: 'backlog' | 'in_progress' | 'review' | 'done';
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    assignee: string;
  }

  const initialTasks: Task[] = [
    { id: 't1', title: 'Implement MongoDB Indexing for product search', status: 'done', priority: 'High', assignee: 'Sachin Y.' },
    { id: 't2', title: 'Optimize Next.js SSR bundle by 30%', status: 'done', priority: 'Critical', assignee: 'Sachin Y.' },
    { id: 't3', title: 'Integrate Express JWT auth & cookie middleware', status: 'review', priority: 'High', assignee: 'Sachin Y.' },
    { id: 't4', title: 'Figma UI to Tailwind CSS component translation', status: 'in_progress', priority: 'Medium', assignee: 'Sachin Y.' },
    { id: 't5', title: 'Write unit tests for RESTful API endpoints', status: 'backlog', priority: 'Low', assignee: 'Sachin Y.' },
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState<'Critical' | 'High' | 'Medium' | 'Low'>('High');

  const columns: { id: Task['status']; title: string; color: string }[] = [
    { id: 'backlog', title: 'Backlog', color: 'border-slate-700 text-slate-400' },
    { id: 'in_progress', title: 'In Progress', color: 'border-amber-500/50 text-amber-400' },
    { id: 'review', title: 'In Review', color: 'border-cyan-500/50 text-cyan-400' },
    { id: 'done', title: 'Completed', color: 'border-emerald-500/50 text-emerald-400' },
  ];

  const moveTask = (id: string, direction: 'next' | 'prev') => {
    const order: Task['status'][] = ['backlog', 'in_progress', 'review', 'done'];
    setTasks(prev => prev.map(t => {
      if (t.id !== id) return t;
      const curIndex = order.indexOf(t.status);
      const nextIndex = direction === 'next' ? Math.min(order.length - 1, curIndex + 1) : Math.max(0, curIndex - 1);
      return { ...t, status: order[nextIndex] };
    }));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newTask: Task = {
      id: 't_' + Date.now(),
      title: newTitle.trim(),
      status: 'in_progress',
      priority: newPriority,
      assignee: 'Sachin Y.'
    };
    setTasks(prev => [newTask, ...prev]);
    setNewTitle('');
  };

  const priorityBadges = {
    Critical: 'bg-rose-950 text-rose-300 border-rose-800',
    High: 'bg-orange-950 text-orange-300 border-orange-800',
    Medium: 'bg-blue-950 text-blue-300 border-blue-800',
    Low: 'bg-slate-800 text-slate-300 border-slate-700',
  };

  return (
    <div className="space-y-4">
      {/* Quick Add Form */}
      <form onSubmit={handleAddTask} className="flex flex-wrap gap-2 p-3 bg-slate-900 rounded-lg border border-slate-800">
        <input
          type="text"
          placeholder="New sprint ticket (e.g. Dockerize MERN microservices)..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="grow min-w-[200px] px-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-md text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value as any)}
          className="px-2.5 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-md text-slate-300 focus:outline-none"
        >
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          type="submit"
          className="px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs flex items-center gap-1 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Ticket</span>
        </button>
      </form>

      {/* Kanban Multi-Column Board */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.id);
          return (
            <div key={col.id} className="bg-slate-900/80 border border-slate-800 rounded-lg p-3 flex flex-col min-h-[260px]">
              {/* Column Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                <span className={`text-xs font-bold flex items-center gap-1.5 ${col.color}`}>
                  {col.title}
                </span>
                <span className="w-5 h-5 rounded bg-slate-950 text-slate-300 font-mono text-[10px] flex items-center justify-center font-bold">
                  {colTasks.length}
                </span>
              </div>

              {/* Task list in column */}
              <div className="space-y-2 grow">
                {colTasks.length === 0 ? (
                  <p className="text-[11px] text-slate-600 text-center py-6">No tasks</p>
                ) : (
                  colTasks.map(task => (
                    <div
                      key={task.id}
                      className="p-2.5 rounded-md bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition-all text-xs"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${priorityBadges[task.priority]}`}>
                          {task.priority}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">{task.assignee}</span>
                      </div>
                      <p className="font-medium text-slate-200 text-xs mb-2">
                        {task.title}
                      </p>

                      {/* Direction Move Buttons */}
                      <div className="flex items-center justify-between pt-1.5 border-t border-slate-900 text-[10px]">
                        <button
                          disabled={task.status === 'backlog'}
                          onClick={() => moveTask(task.id, 'prev')}
                          className="text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer flex items-center gap-0.5"
                        >
                          <ArrowLeft className="w-3 h-3" /> Back
                        </button>
                        <button
                          disabled={task.status === 'done'}
                          onClick={() => moveTask(task.id, 'next')}
                          className="text-emerald-400 hover:text-emerald-300 disabled:opacity-30 cursor-pointer flex items-center gap-0.5 font-semibold"
                        >
                          Advance <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-3 bg-slate-950 rounded border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-emerald-400" />
          MongoDB Aggregations: Sprint Velocity & Task Status Pipeline
        </span>
        <span className="text-emerald-400 font-mono">Real-Time State Transitions</span>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 4. CodeCraft Snippets Live Demo Component
// -------------------------------------------------------------
const CodeCraftDemo: React.FC = () => {
  const snippets = [
    {
      id: 'react-hook',
      title: 'useDebounce Hook (TypeScript)',
      lang: 'TypeScript / React',
      code: `import { useState, useEffect } from 'react';

// Custom hook to debounce search & API inputs
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}`
    },
    {
      id: 'express-middleware',
      title: 'Express REST Error & Auth Guard',
      lang: 'Node.js / Express',
      code: `import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: Missing JWT token' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};`
    },
    {
      id: 'mongodb-pipeline',
      title: 'MongoDB Top Selling Aggregation',
      lang: 'MongoDB / Mongoose',
      code: `// Aggregation pipeline for order analytics
const getTopProductsPipeline = async () => {
  return await OrderModel.aggregate([
    { $unwind: "$items" },
    {
      $group: {
        _id: "$items.productId",
        totalSold: { $sum: "$items.quantity" },
        revenue: { $sum: { $multiply: ["$items.price", "$items.quantity"] } }
      }
    },
    { $sort: { revenue: -1 } },
    { $limit: 5 },
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "_id",
        as: "productDetails"
      }
    }
  ]);
};`
    }
  ];

  const [activeTab, setActiveTab] = useState(snippets[0].id);
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState<{ [id: string]: number }>({
    'react-hook': 42,
    'express-middleware': 38,
    'mongodb-pipeline': 57
  });

  const activeSnippet = snippets.find(s => s.id === activeTab) || snippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = (id: string) => {
    setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  return (
    <div className="space-y-3">
      {/* Tab bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-slate-900 rounded-lg border border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5">
          {snippets.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                activeTab === s.id
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleLike(activeSnippet.id)}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-rose-950/40 text-slate-300 hover:text-rose-400 border border-slate-700 text-xs transition-colors cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400/20" />
            <span>{likes[activeSnippet.id]}</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Code Viewer */}
      <div className="relative rounded-lg bg-slate-950 border border-slate-800 p-4 font-mono text-xs overflow-x-auto text-slate-200 leading-relaxed max-h-80">
        <div className="absolute top-2 right-3 text-[10px] text-slate-500 uppercase tracking-wider">
          {activeSnippet.lang}
        </div>
        <pre>
          <code>{activeSnippet.code}</code>
        </pre>
      </div>

      <div className="p-3 bg-slate-900 rounded border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span>Clean Code Principles • Strict TypeScript Typing • Modular Design</span>
        <span className="text-emerald-400 font-mono">Production Ready</span>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// Primary Live Demo Modal Container
// -------------------------------------------------------------
export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div 
        id="live-demo-modal-container"
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[94vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Interactive Live Demo
                </span>
              </div>
              <p className="text-[11px] text-slate-400 truncate max-w-md">
                {project.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>

            <button
              id="live-demo-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Live Demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body with Demo Engine */}
        <div className="p-4 sm:p-6 overflow-y-auto bg-slate-950/60 grow">
          {project.demoType === 'ecommerce' && <ElectroDemo />}
          {project.demoType === 'headphone' && <HeadphoneDemo />}
          {project.demoType === 'kanban' && <KanbanDemo />}
          {project.demoType === 'codecraft' && <CodeCraftDemo />}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Tech Stack:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map(tech => (
                <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors cursor-pointer"
          >
            Done Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
