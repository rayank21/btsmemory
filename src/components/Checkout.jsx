import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Lock, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Checkout = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Details, 2: Payment
    const [loading, setLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("NDRC");

    const products = ["NDRC", "Assurance", "MCO"];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                alert(`Commande de BTS MEMORY - ${selectedProduct} simulée avec succès !`);
                onClose();
                setStep(1);
            }, 2000);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        className="relative w-full max-w-lg max-h-[90vh] bg-[#1A1A1A] border border-white/20 rounded-xl shadow-2xl overflow-y-auto"
                    >
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-3">
                                    <img src="/images/LOGO BTS MEMORY.png" alt="Logo" className="w-8 h-8 object-contain" />
                                    <h2 className="text-2xl font-serif font-bold text-white">BTS MEMORY</h2>
                                </div>
                                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="mb-8 bg-black-matte p-4 rounded-lg flex items-center justify-between border border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-md overflow-hidden">
                                        <img src="/images/Packaging.jpeg" alt="Pack" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">BTS MEMORY</h3>
                                        <div className="relative mt-1">
                                            <select
                                                value={selectedProduct}
                                                onChange={(e) => setSelectedProduct(e.target.value)}
                                                className="appearance-none bg-transparent text-sm text-bts-orange border-b border-bts-orange/30 pb-0.5 pr-6 focus:outline-none cursor-pointer hover:text-orange-400 transition-colors"
                                            >
                                                {products.map(p => (
                                                    <option key={p} value={p} className="bg-anthracite text-white">
                                                        Édition {p}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-bts-orange pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-bts-orange font-bold text-xl">4,90 €</span>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {step === 1 ? (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="space-y-4"
                                    >
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400">Prénom</label>
                                                <input required type="text" className="w-full bg-black-matte border border-white/10 rounded-md p-3 text-white focus:border-bts-orange focus:outline-none transition-colors" placeholder="Jean" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400">Nom</label>
                                                <input required type="text" className="w-full bg-black-matte border border-white/10 rounded-md p-3 text-white focus:border-bts-orange focus:outline-none transition-colors" placeholder="Dupont" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-400">Email</label>
                                            <input required type="email" className="w-full bg-black-matte border border-white/10 rounded-md p-3 text-white focus:border-bts-orange focus:outline-none transition-colors" placeholder="jean.dupont@exemple.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-400">Adresse</label>
                                            <input required type="text" className="w-full bg-black-matte border border-white/10 rounded-md p-3 text-white focus:border-bts-orange focus:outline-none transition-colors" placeholder="123 Rue de la Réussite" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400">Code Postal</label>
                                                <input required type="text" className="w-full bg-black-matte border border-white/10 rounded-md p-3 text-white focus:border-bts-orange focus:outline-none transition-colors" placeholder="75000" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm text-gray-400">Ville</label>
                                                <input required type="text" className="w-full bg-black-matte border border-white/10 rounded-md p-3 text-white focus:border-bts-orange focus:outline-none transition-colors" placeholder="Paris" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="space-y-6"
                                    >
                                        <div className="p-4 border border-bts-orange/50 bg-bts-orange/10 rounded-lg">
                                            <div className="flex items-center gap-3 mb-4">
                                                <CreditCard className="text-bts-orange" />
                                                <span className="font-bold text-white">Carte Bancaire</span>
                                            </div>
                                            <div className="space-y-4">
                                                <input required type="text" placeholder="Numéro de carte" className="w-full bg-black-matte border border-white/10 rounded-md p-3 text-white focus:border-bts-orange focus:outline-none" />
                                                <div className="grid grid-cols-2 gap-4">
                                                    <input required type="text" placeholder="MM/AA" className="w-full bg-black-matte border border-white/10 rounded-md p-3 text-white focus:border-bts-orange focus:outline-none" />
                                                    <input required type="text" placeholder="CVC" className="w-full bg-black-matte border border-white/10 rounded-md p-3 text-white focus:border-bts-orange focus:outline-none" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                                            <Lock size={14} />
                                            Paiement 100% sécurisé
                                        </div>
                                    </motion.div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-bts-orange text-white font-bold rounded-sm hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        step === 1 ? "Continuer vers le paiement" : "Payer 4,90 €"
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Checkout;
