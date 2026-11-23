import person1 from '../../Images/person1.png'
import person2 from '../../Images/person2.png'
import person3 from '../../Images/person3.png'
import person4 from '../../Images/person4.png'

const teamMembers = [
    {
        name: 'Amara Cole',
        role: 'Founder & Creative Director',
        image: person1,
        alt: 'Portrait of a woman in a black blazer',
    },
    {
        name: 'Nia Bennett',
        role: 'Fragrance Curator',
        image: person2,
        alt: 'Portrait of a smiling woman in a black blazer',
    },
    {
        name: 'David Okoro',
        role: 'Customer Experience Lead',
        image: person3,
        alt: 'Portrait of a man in a navy suit',
    },
    {
        name: 'Michael James',
        role: 'Operations Manager',
        image: person4,
        alt: 'Portrait of a man in a black suit',
    },
]

const statistics = [
    { value: '5,000+', label: 'Satisfied Customers', icon: 'bi-people' },
    { value: '100+', label: 'Luxury Products', icon: 'bi-gem' },
    { value: '15+', label: 'States Delivered', icon: 'bi-geo-alt' },
    { value: '98%', label: 'Happy Customers', icon: 'bi-heart' },
]

function Teamabout() {
    return (
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
                        The people behind the fragrance
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                        Meet Our Team
                    </h2>
                    <p className="mt-4 leading-relaxed text-slate-600">
                        A passionate team dedicated to helping you find a fragrance
                        that feels like you.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                        <article
                            key={member.name}
                            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                        >
                            <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                                <img
                                    src={member.image}
                                    alt={member.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-slate-900">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-sm font-medium text-yellow-700">
                                    {member.role}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-14 grid grid-cols-2 gap-4 rounded-3xl bg-black p-5 text-white sm:gap-6 sm:p-8 lg:grid-cols-4">
                    {statistics.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center p-3 text-center">
                            <i
                                className={`bi ${stat.icon} text-2xl text-yellow-500`}
                                aria-hidden="true"
                            />
                            <p className="mt-3 text-2xl font-bold sm:text-3xl">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-sm text-white/75">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Teamabout