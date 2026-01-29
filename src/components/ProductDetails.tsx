import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Check, Monitor, ShieldCheck, Star } from "lucide-react";
// import { useParams } from "react-router-dom"; // Hook available if needed for dynamic data

export default function ProductDetails() {
    // const { id } = useParams(); // Can be used to fetch specific product data

    // حالة وهمية لتجربة الزر
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 pb-10 px-4 md:px-20 w-full">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* 1. قسم الصور (الجانب الأيسر) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative rounded-2xl overflow-hidden border border-white/10 h-[500px]"
                >
                    <img
                        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000"
                        alt="Game Cover"
                        className="w-full h-full object-cover"
                    />
                    {/* تأثير توهج */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </motion.div>

                {/* 2. تفاصيل المنتج (الجانب الأيمن) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-mono rounded">DIGITAL KEY</span>
                        <div className="flex items-center text-yellow-500 text-sm">
                            <Star className="w-4 h-4 fill-yellow-500" /> 4.9 (1.2k Reviews)
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                        CYBERPUNK <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">2077</span>
                    </h1>

                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                        نسخة "Phantom Liberty" الكاملة. استلم الكود فوراً وابدأ اللعب. تدعم اللعب عبر الإنترنت وتحديثات الجيل الجديد.
                    </p>

                    {/* المواصفات السريعة */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <Monitor className="w-6 h-6 text-gray-400 mb-2" />
                            <div className="text-sm text-gray-500">Platform</div>
                            <div className="font-bold">PC (Steam)</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <ShieldCheck className="w-6 h-6 text-green-500 mb-2" />
                            <div className="text-sm text-gray-500">Warranty</div>
                            <div className="font-bold">Lifetime</div>
                        </div>
                    </div>

                    {/* السعر والزر */}
                    <div className="flex items-center gap-6 mt-auto">
                        <div>
                            <div className="text-sm text-gray-500 line-through">$59.99</div>
                            <div className="text-4xl font-bold text-white">$29.99</div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isAdded ? "bg-green-600 text-white" : "bg-white text-black hover:bg-cyan-400"
                                }`}
                        >
                            {isAdded ? (
                                <><Check className="w-5 h-5" /> Added to Cart</>
                            ) : (
                                <><ShoppingCart className="w-5 h-5" /> Add to Library</>
                            )}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* قسم متطلبات التشغيل (إضافة مهمة للاعبين) */}
            <div className="mt-20 border-t border-white/10 pt-10">
                <h3 className="text-2xl font-bold mb-6">System Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400 font-mono">
                    <div className="p-6 bg-[#0a0a0a] rounded-xl border border-white/5">
                        <strong className="text-white block mb-4 text-lg">Minimum</strong>
                        <p>OS: Windows 10</p>
                        <p>Processor: Intel Core i5-3570K or AMD FX-8310</p>
                        <p>Memory: 8 GB RAM</p>
                        <p>Graphics: NVIDIA GeForce GTX 780 or AMD Radeon RX 470</p>
                    </div>
                    <div className="p-6 bg-[#0a0a0a] rounded-xl border border-white/5">
                        <strong className="text-white block mb-4 text-lg">Recommended</strong>
                        <p>OS: Windows 10</p>
                        <p>Processor: Intel Core i7-4790 or AMD Ryzen 3 3200G</p>
                        <p>Memory: 12 GB RAM</p>
                        <p>Graphics: NVIDIA GeForce GTX 1060 or AMD Radeon RX 590</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
