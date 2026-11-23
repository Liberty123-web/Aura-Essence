import HeadImg from '../../Images/perfume43.png'
import human1 from '../../Images/perfume32.png'
import perfume5 from '../../Images/perfume39.png'

const aboutSections = [
    {
        title: 'Our Journey',
        description:
            'Aura Essence grew from a love of fragrance and the way a carefully chosen scent can make everyday moments feel special. We bring together perfumes, roll-ons, and body sprays to help everyone discover a fragrance that feels personal.',
        image: HeadImg,
        alt: 'Perfume surrounded by flowers',
    },
    {
        title: 'Our Mission',
        description:
            'Our mission is to help people feel confident and express their individuality through fragrance. We make it easier to find a scent for every mood, moment, and occasion.',
        image: human1,
        alt: 'A man applying fragrance',
    },
    {
        title: 'Our Vision',
        description:
            'We envision Aura Essence as a trusted destination for fragrances that make a lasting impression. We want every person to find a signature scent that feels memorable, personal, and unmistakably theirs.',
        image: perfume5,
        alt: 'Perfume bottles in Paris',
    },
]

function Bodyabout() {
    return (
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:gap-16">
                {aboutSections.map((item, index) => (
                    <article
                        key={item.title}
                        className="grid items-center gap-6 md:grid-cols-2 md:gap-10"
                    >
                        <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="h-64 w-full rounded-3xl object-cover shadow-md sm:h-80"
                            />
                        </div>

                        <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                                {item.title}
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                                {item.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Bodyabout