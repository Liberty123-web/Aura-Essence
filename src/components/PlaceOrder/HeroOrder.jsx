import { Link } from 'react-router-dom'
import perfume30 from '../../Images/perfume30.png'

function HeroOrder() {
    return (
        <section className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-black md:min-h-[80vh]">
            <img
                src={perfume30}
                alt="Luxury fragrance bottle"
                className="absolute inset-0 h-full w-full object-cover object-[center_46%]"
            />

            <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/20" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
                <div className="max-w-2xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                        Your signature scent is waiting
                    </p>

                    <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
                        Place Your Order
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                        Choose a fragrance that feels like you. Explore our collection
                        and let us prepare your next favorite scent.
                    </p>

                    <Link
                        to="/Collections"
                        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-yellow-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-yellow-700"
                    >
                        Browse the collection
                        <i className="bi bi-arrow-right" aria-hidden="true" />
                    </Link>

                    <p className="mt-6 text-sm text-white/70">
                        <i className="bi bi-box-seam mr-2 text-yellow-400" aria-hidden="true" />
                        Carefully packed and delivered with care
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeroOrder