const values = [
    {
        title: 'Quality',
        description: 'We carefully select fragrances that feel special and last.',
        icon: 'bi-gem',
    },
    {
        title: 'Authenticity',
        description: 'We help you discover scents that feel true to who you are.',
        icon: 'bi-patch-check',
    },
    {
        title: 'Customer Satisfaction',
        description: 'We want every experience with Aura Essence to leave you smiling.',
        icon: 'bi-heart',
    },
    {
        title: 'Integrity',
        description: 'We believe in honest service and treating every customer with care.',
        icon: 'bi-shield-check',
    },
    {
        title: 'Innovation',
        description: 'We keep exploring fresh ways to make finding your scent enjoyable.',
        icon: 'bi-lightbulb',
    },
]

function CoreValues() {
    return (
        <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
                    Our Values
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                    {values.map((value) => (
                        <article
                            key={value.title}
                            className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                        >
                            <i
                                className={`bi ${value.icon} text-3xl text-yellow-600`}
                                aria-hidden="true"
                            />

                            <h3 className="mt-4 text-lg font-bold text-slate-900">
                                {value.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {value.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoreValues