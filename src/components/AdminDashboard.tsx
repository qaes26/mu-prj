import { useState } from "react";
import { Link } from "react-router-dom";
import {
    LayoutDashboard, ShoppingBag, Users, Settings,
    Package, DollarSign, Bell, Search
} from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
    { title: "Total Revenue", value: "$124,592", change: "+12.5%", icon: DollarSign, color: "text-green-400", bg: "bg-green-500/10" },
    { title: "Active Orders", value: "45", change: "+3.2%", icon: ShoppingBag, color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { title: "Total Customers", value: "3,422", change: "+8.1%", icon: Users, color: "text-purple-400", bg: "bg-purple-500/10" },
    { title: "Products Sold", value: "1,205", change: "+24%", icon: Package, color: "text-yellow-400", bg: "bg-yellow-500/10" },
];

const RECENT_ORDERS = [
    { id: "#ORD-7752", customer: "Qais Jazi", product: "RTX 4090 Gaming PC", amount: "$2,499", status: "Completed", date: "Just now" },
    { id: "#ORD-7751", customer: "Sarah Connor", product: "Cyberpunk 2077 Key", amount: "$29.99", status: "Completed", date: "2 mins ago" },
    { id: "#ORD-7750", customer: "John Doe", product: "PS5 Slim Console", amount: "$449.99", status: "Processing", date: "15 mins ago" },
    { id: "#ORD-7749", customer: "Alex Smith", product: "Xbox Series X", amount: "$499.99", status: "Peinding", date: "1 hour ago" },
    { id: "#ORD-7748", customer: "Mike Ross", product: "Razer Keyboard", amount: "$199.00", status: "Completed", date: "2 hours ago" },
];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <div className="flex min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500 selection:text-white">

            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-black/50 p-6 hidden md:flex flex-col">
                <div className="flex items-center gap-2 text-xl font-bold tracking-widest mb-10">
                    <LayoutDashboard className="w-6 h-6 text-purple-500" />
                    NEXUS<span className="text-purple-500">ADMIN</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {[
                        { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
                        { id: "products", label: "Products", icon: Package },
                        { id: "orders", label: "Orders", icon: ShoppingBag },
                        { id: "customers", label: "Customers", icon: Users },
                        { id: "settings", label: "Settings", icon: Settings },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                                ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="pt-6 border-t border-white/5">
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-cyan-400 transition-colors">
                        Visit Store
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">

                {/* Top Header */}
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold">Dashboard Overview</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input type="text" placeholder="Search..." className="bg-white/5 border border-white/10 rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:border-purple-500 w-64" />
                            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" />
                        </div>
                        <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 relative">
                            <Bell className="w-5 h-5 text-gray-300" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500" />
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:border-white/10 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-full">{stat.change}</span>
                            </div>
                            <div className="text-3xl font-bold mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.title}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Recent Orders Table */}
                <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
                    <h2 className="text-lg font-bold mb-6">Recent Transactions</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-sm text-gray-500 border-b border-white/5">
                                    <th className="py-4 font-medium">Order ID</th>
                                    <th className="py-4 font-medium">Customer</th>
                                    <th className="py-4 font-medium">Product</th>
                                    <th className="py-4 font-medium">Amount</th>
                                    <th className="py-4 font-medium">Status</th>
                                    <th className="py-4 font-medium">Date</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-300">
                                {RECENT_ORDERS.map((order, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 font-mono text-purple-400">{order.id}</td>
                                        <td className="py-4 font-bold">{order.customer}</td>
                                        <td className="py-4">{order.product}</td>
                                        <td className="py-4 font-bold text-white">{order.amount}</td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold 
                                        ${order.status === "Completed" ? "bg-green-500/10 text-green-400" :
                                                    order.status === "Processing" ? "bg-blue-500/10 text-blue-400" : "bg-yellow-500/10 text-yellow-400"}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-gray-500">{order.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

        </div>
    );
}
