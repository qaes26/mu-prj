import { Link } from "react-router-dom";
import { Gamepad2, ChevronDown } from "lucide-react";

export default function GamesPage() {
    return (
        <section className="pt-32 pb-20 px-4 min-h-screen">
            <div className="container mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="p-4 bg-purple-500/10 rounded-2xl">
                        <Gamepad2 className="w-10 h-10 text-purple-400" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Video Games</h1>
                        <p className="text-gray-400">Digital keys for Steam, PlayStation, and Xbox.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { id: 101, name: "Elden Ring: Shadow of the Erdtree", price: "$39.99", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600" },
                        { id: 102, name: "Call of Duty: MW3", price: "$69.99", image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=600" },
                        { id: 103, name: "FC 24 Ultimate", price: "$89.99", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600" },
                        { id: 104, name: "GTA V Premium", price: "$14.99", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600" },
                        { id: 105, name: "Red Dead Redemption 2", price: "$19.99", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600" },
                        { id: 106, name: "God of War Ragnarok", price: "$49.99", image: "https://images.unsplash.com/photo-1535451801241-b5395e1d4a1b?auto=format&fit=crop&q=80&w=600" },
                        { id: 107, name: "Hogwarts Legacy", price: "$44.99", image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&q=80&w=600" },
                        { id: 108, name: "Assassin's Creed Mirage", price: "$34.99", image: "https://images.unsplash.com/photo-1586182987320-9f1eb1bd0153?auto=format&fit=crop&q=80&w=600" },
                    ].map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="group block">
                            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 border border-white/5 group-hover:border-purple-500/50 transition-colors">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-purple-400 font-bold flex items-center gap-2">View Details <ChevronDown className="w-4 h-4 -rotate-90" /></span>
                                </div>
                            </div>
                            <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-purple-400 transition-colors">{product.name}</h3>
                            <p className="text-gray-400">{product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
