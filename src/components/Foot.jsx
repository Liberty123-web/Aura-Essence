import React from 'react';
import { Link } from 'react-router-dom';

function Foot() {
    return (
        <footer className="w-full bg-black text-slate-300 border-t border-white/10 pt-10 sm:pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 border-b border-white/10">

                    {/* Brand Info Column */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-xl font-bold text-white tracking-wide">
                            Aura Essence
                        </h2> 
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            Captivating perfumes, roll-ons, and body sprays crafted to make every moment more memorable. Find your signature scent and let your presence speak.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                            Contact Us
                        </h3>
                        <div className="flex flex-col gap-2 text-sm">
                            <p className="flex flex-wrap items-center gap-x-2">
                                <span className="text-slate-400">Email:</span>
                                <a
                                    href="mailto:info@auraessence.com"
                                    className="text-yellow-500 hover:text-yellow-400 transition-colors hover:underline break-all"
                                >
                                    info@auraessence.com
                                </a>
                            </p>
                            <p className="flex flex-wrap items-center gap-x-2">
                                <span className="text-slate-400">Phone:</span>
                                <a
                                    href="tel:+1234567890"
                                    className="text-yellow-500 hover:text-yellow-400 transition-colors hover:underline"
                                >
                                    +1 (234) 567-890
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Social Links Card */}
                    <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1 lg:items-end">
                        <div className="w-full max-w-xs flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md shadow-xl">
                            <h3 className="text-sm font-semibold tracking-wider text-slate-200 uppercase text-center">
                                Follow Us
                            </h3>

                            <div className="flex items-center justify-center gap-4">
                                <a
                                    href="https://www.facebook.com/auraessence"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-yellow-500 transition-all duration-200 hover:bg-yellow-600 hover:text-white hover:scale-110 active:scale-95"
                                >
                                    <i className="bi bi-facebook text-lg"></i>
                                </a>

                                <a
                                    href="https://www.instagram.com/auraessence"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-yellow-500 transition-all duration-200 hover:bg-yellow-600 hover:text-white hover:scale-110 active:scale-95"
                                >
                                    <i className="bi bi-instagram text-lg"></i>
                                </a>

                                <a
                                    href="https://www.threads.net/@auraessence"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Threads"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-yellow-500 transition-all duration-200 hover:bg-yellow-600 hover:text-white hover:scale-110 active:scale-95"
                                >
                                    <i className="bi bi-threads text-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500 text-center sm:text-left">
                    <p>© {new Date().getFullYear()} Aura Essence. site from Liberty Creative.</p>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                        <Link to="/" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                        <Link to="/" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Foot;