import { Link } from 'react-router-dom'
import human1 from '../../Images/human1.png'

function Heroabout() {
    return (
        <section className="relative isolate flex min-h-[80vh] w-full items-center overflow-hidden bg-black">
            <img
                src={human1}
                alt="A man applying fragrance"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_35%]"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/75 to-black/20" />

            <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-28 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                        The Aura Essence story
                    </p>

                    <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
                        More than a scent.
                        <span className="mt-2 block text-yellow-500">A feeling that stays.</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                        We believe the right fragrance can make an ordinary moment
                        unforgettable. Explore perfumes, roll-ons, and body sprays
                        chosen to help you find a scent that feels like you.
                    </p>

                    <Link
                        to="/"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-yellow-700"
                    >
                        Discover our collection
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-8 right-8 hidden text-right text-white/70 sm:block">
                
                <p className="mt-1 text-sm text-yellow-500">Aura Essence</p>
            </div>
        </section>
    )
}

export default Heroabout