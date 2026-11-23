import { Link } from 'react-router-dom'
import perfume43 from '../../Images/perfume43.png'

function TrackHero() {
    return (
        <section className="relative isolate flex min-h-[70vh] w-full items-center overflow-hidden bg-black md:min-h-[80vh]">
            <img
                src={perfume43}
                alt="A man applying fragrance"
                className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_35%]"
            />

            <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/85 via-black/60 to-black/20" />

            <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pt-32">
                <div className="max-w-2xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                        Your Aura Essence delivery
                    </p>

                    <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
                        Track Your Order
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                        We are getting your favorite fragrance ready. Visit this page
                        to follow your order as it makes its way to you.
                    </p>

                    <Link
                        to="/Collections"
                        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-yellow-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-yellow-700"
                    >
                        Explore the collection
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

export default TrackHero