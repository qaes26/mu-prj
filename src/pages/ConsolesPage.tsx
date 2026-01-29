import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

export default function ConsolesPage() {
    return (
        <section className="pt-32 pb-20 px-4 min-h-screen">
            <div className="container mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="p-4 bg-emerald-500/10 rounded-2xl">
                        <Cpu className="w-10 h-10 text-emerald-400" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Next-Gen Consoles</h1>
                        <p className="text-gray-400">Experience true 4K gaming with the latest systems.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { id: 301, name: "PlayStation 5 Slim", price: "$449.99", desc: "Slim Dist Edition", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=600" },
                        { id: 302, name: "Xbox Series X", price: "$499.99", desc: "1TB SSD, 4K 120Hz", image: "https://images.unsplash.com/photo-1621259182902-88544c4154a4?auto=format&fit=crop&q=80&w=600" },
                        { id: 303, name: "Nintendo Switch OLED", price: "$349.99", desc: "White Joy-Con", image: "https://images.unsplash.com/photo-1578303512597-81de50a55096?auto=format&fit=crop&q=80&w=600" },
                        { id: 304, name: "Steam Deck OLED", price: "$549.00", desc: "512GB, 90Hz HDR", image: "https://images.unsplash.com/photo-1661680145888-c7a52f20257e?auto=format&fit=crop&q=80&w=600" },
                    ].map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="relative h-96 rounded-[2rem] overflow-hidden group border border-white/5 hover:border-emerald-500/50 transition-colors">
                            <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent p-10 flex flex-col justify-end md:justify-center">
                                <h3 className="text-4xl font-black mb-2">{product.name}</h3>
                                <p className="text-gray-300 mb-4 text-lg">{product.desc}</p>
                                <p className="text-2xl text-emerald-400 font-bold mb-8">{product.price}</p>
                                <span className="px-8 py-3 bg-white text-black font-bold rounded-full w-fit group-hover:bg-emerald-400 transition-colors">Buy Now</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
