import { Link } from "react-router-dom";
import { Monitor } from "lucide-react";

export default function HardwarePage() {
    return (
        <section className="pt-32 pb-20 px-4 min-h-screen">
            <div className="container mx-auto">
                <div className="flex items-center gap-4 mb-16 justify-end text-right">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Pro Hardware</h1>
                        <p className="text-gray-400">High-performance gear for streaming and competitive gaming.</p>
                    </div>
                    <div className="p-4 bg-cyan-500/10 rounded-2xl">
                        <Monitor className="w-10 h-10 text-cyan-400" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { id: 201, name: "GeForce RTX 4090", desc: "24GB GDDR6X, The ultimate GPU", price: "$1,599", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=600" },
                        { id: 202, name: "Alienware 34\" QD-OLED", desc: "175Hz Curved Gaming Monitor", price: "$999", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600" },
                        { id: 203, name: "Keychron Q1 Pro", desc: "Wireless Custom Mechanical Keyboard", price: "$199", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=600" },
                        { id: 204, name: "Logitech G Pro X Superlight", desc: "Ultralight Wireless Gaming Mouse", price: "$129", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600" },
                        { id: 205, name: "SecretLab Titan Evo", desc: "Premium Gaming Chair", price: "$499", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=600" },
                        { id: 206, name: "Elgato Stream Deck MK.2", desc: "15 LCD Keys, Fully Customizable", price: "$149", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=600" },
                    ].map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="flex gap-4 p-6 rounded-3xl bg-[#111] border border-white/5 hover:border-cyan-400/50 transition-colors group">
                            <div className="w-32 h-32 shrink-0 rounded-2xl overflow-hidden bg-white/5">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{product.desc}</p>
                                <span className="font-mono text-cyan-300 text-lg">{product.price}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
