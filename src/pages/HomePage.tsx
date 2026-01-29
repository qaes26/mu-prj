import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Percent } from "lucide-react";

// --- بيانات وهمية (Mock Data) ---
const EXCLUSIVE_OFFERS = [
    { id: 1, name: "Cyberpunk 2077 Ultimate", discount: "50% OFF", price: "$29.99", oldPrice: "$59.99", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600" },
    { id: 2, name: "RTX 4090 Gaming PC", discount: "SAVE $500", price: "$2499", oldPrice: "$2999", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=600" },
    { id: 3, name: "Razer DeathAdder v3", discount: "30% OFF", price: "$99.99", oldPrice: "$149.99", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=600" },
];

export default function HomePage() {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollRef });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={scrollRef}>

            {/* 1. WELCOME SCREEN / HERO --- */}
            <header className="relative h-screen flex flex-col items-center justify-center text-center px-4">
                {/* Parallax Background */}
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 -z-10"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-[#050505]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono tracking-widest text-green-400">STORE ONLINE</span>
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                        LEVEL UP
                    </h1>
                    <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
                        Your ultimate destination for digital keys, high-end hardware, and next-gen consoles.
                    </p>

                    <Link
                        to="/games"
                        className="inline-block px-8 py-4 bg-cyan-500 text-black font-bold rounded-full text-lg shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all hover:scale-105"
                    >
                        Start Shopping
                    </Link>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 opacity-50"
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </header>

            {/* --- 2. EXCLUSIVE OFFERS --- */}
            <section className="py-24 px-4 bg-black/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -z-10" />

                <div className="container mx-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <Percent className="w-8 h-8 text-yellow-400" />
                        <h2 className="text-4xl font-bold tracking-tight">Exclusive Offers</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {EXCLUSIVE_OFFERS.map((offer) => (
                            <Link to={`/product/${offer.id}`} key={offer.id} className="group relative block bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-colors">
                                {/* Badge */}
                                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-yellow-500 text-black font-bold text-xs rounded-full">
                                    {offer.discount}
                                </div>

                                <div className="h-64 overflow-hidden">
                                    <img src={offer.image} alt={offer.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">{offer.name}</h3>
                                    <div className="flex items-end gap-3">
                                        <span className="text-2xl font-bold text-white">{offer.price}</span>
                                        <span className="text-sm text-gray-500 line-through mb-1">{offer.oldPrice}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
