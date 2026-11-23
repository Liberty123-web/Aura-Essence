import perfume39 from '../../Images/perfume39.png'
import perfume7 from '../../Images/perfume7.png'
import perfume38 from '../../Images/perfume38.png'
import perfume13 from '../../Images/perfume13.png'
import perfume17 from '../../Images/perfume17.png'
import perfume34 from '../../Images/perfume34.png'

const categories = [
    { name: 'Perfumes', image: perfume7, alt: 'Luxury perfume bottle' },
    { name: 'Roll Ons', image: perfume38, alt: 'Roll-on fragrance' },
    { name: 'Body Sprays', image: perfume13, alt: 'Body spray bottle' },
    { name: 'Gift Boxes', image: perfume17, alt: 'Perfume presented with its box' },
    { name: 'Accessories', image: perfume34, alt: 'Fragrance items and packaging' },
]

function Herocollection() {
    return (
        <section className="relative isolate w-full overflow-hidden bg-black">
            <img
                src={perfume39}
                alt=""
                className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_46%]"
            />
            <div className="absolute inset-0 -z-10 bg-black/65" />

            <div className="mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
                <div className="text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                        Aura Essence
                    </p>
                    <h1 className="text-4xl font-black text-white sm:text-6xl md:text-7xl">
                        Our Collection
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                        Find your signature scent across our fragrance collection.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="mb-5 text-center text-2xl font-bold text-white sm:text-3xl">
                        Categories
                    </h2>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                        {categories.map((category) => (
                            <article
                                key={category.name}
                                className="group overflow-hidden rounded-2xl bg-white shadow-lg"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.alt}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="px-3 py-3 text-center font-semibold text-slate-900">
                                    {category.name}
                                </h3>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herocollection