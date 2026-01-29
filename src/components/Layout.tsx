import { Outlet, Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Layout() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path ? "text-cyan-400" : "text-gray-400 hover:text-white";

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black font-sans w-full overflow-x-hidden flex flex-col">

            {/* Shared Navbar */}
            <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-6 py-4 border-b border-white/5 backdrop-blur-md bg-black/50">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="relative z-20">
                        <img src={logo} alt="LOOT ZONE" className="h-12 w-auto object-contain" />
                    </div>
                    <div className="overflow-hidden -ml-2 pl-2 py-1"> {/* Mask container with slight overlap */}
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{
                                x: ["-100%", "0%", "0%", "-100%"],
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 4,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 1,
                                times: [0, 0.2, 0.8, 1] // Spend 60% of time visible
                            }}
                            className="text-xl font-bold tracking-widest flex items-center whitespace-nowrap"
                        >
                            <span className="text-purple-500 mr-1">LOOT</span>
                            <span className="text-cyan-400">ZONE</span>
                        </motion.div>
                    </div>
                </Link>
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    <Link to="/games" className={`transition-colors ${isActive('/games')}`}>Games</Link>
                    <Link to="/hardware" className={`transition-colors ${isActive('/hardware')}`}>Hardware</Link>
                    <Link to="/consoles" className={`transition-colors ${isActive('/consoles')}`}>Consoles</Link>
                    <Link to="/about" className={`transition-colors ${isActive('/about')}`}>About</Link>
                </div>
                <div className="flex gap-4">
                    <Search className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors" />
                    <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-cyan-400 transition-colors" />
                </div>
            </nav>

            {/* Main Content (Child Pages) */}
            <main className="flex-1 w-full">
                <Outlet />
            </main>

            {/* Shared Footer */}
            <footer className="py-8 text-center text-sm text-gray-600 bg-black border-t border-white/5 relative z-10">
                <p>&copy; 2026 Loot Zone. All rights reserved.</p>
                <p className="mt-2 text-lg font-bold text-cyan-400">إعداد قيس الجازي</p>
            </footer>
        </div>
    );
}
