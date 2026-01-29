import { Trophy, ShieldCheck, Zap, Star } from "lucide-react";

export default function AboutPage() {
    return (
        <section className="pt-32 pb-24 px-4 min-h-screen flex items-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block p-3 rounded-2xl bg-white/5 border border-white/10 mb-6">
                        <Trophy className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-8">About NexusHub</h1>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Founded by passionate gamers, NexusHub bridges the gap between digital convenience and physical performance.
                        We are dedicated to providing the fastest delivery for keys and the most reliable hardware shipping worldwide.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-green-400" />
                            <span className="font-medium">Official Retailer</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Zap className="w-6 h-6 text-yellow-400" />
                            <span className="font-medium">Instant Delivery</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Star className="w-6 h-6 text-purple-400" />
                            <span className="font-medium">4.9/5 Rating</span>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-square md:aspect-auto md:h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 z-10" />
                    <img src="https://images.unsplash.com/photo-1548484352-ea579e5233a8?auto=format&fit=crop&q=80&w=1000" alt="Team" className="w-full h-full object-cover" />
                    <div className="absolute bottom-8 left-8 z-20">
                        <div className="text-3xl font-bold mb-1">إعداد قيس الجازي</div>
                        <div className="text-cyan-400 font-mono">Lead Developer & Founder</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
