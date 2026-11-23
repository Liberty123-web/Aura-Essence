import React from 'react'
import perfume5 from '../../Images/perfume5.png'

function Hero() {
    return (
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <img
                src={perfume5}
                alt="Luxury fragrance collection"
                className="absolute inset-0 w-full h-full object-cover object-[center_80%] z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-gray-600/60 to-gray-900/90 mix-blend-multiply z-10" />

            {/* Content */}
            <div className="relative z-20 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center flex flex-col items-center gap-4 sm:gap-6">
                <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-shadow-black">
                    Discover the Art of Luxury Fragrance
                </h1>

                <p className="text-white text-sm sm:text-base md:text-lg max-w-xl outline-1 outline-white p-3 sm:p-4 rounded-b-3xl">
                    Premium perfumes, body sprays, and roll ons crafted to elevate your confidence every day.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2.5 px-6 rounded-t-2xl transition-colors">
                        Shop Now
                    </button>

                    <button className="w-full sm:w-auto bg-black hover:bg-yellow-900 text-white font-bold py-2.5 px-6 rounded-b-2xl transition-colors">
                        Explore more collections
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero