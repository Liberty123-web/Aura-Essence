import { useState } from 'react'
import perfume17 from '../../Images/perfume17.png'
import perfume18 from '../../Images/perfume18.png'

const trackingStages = [
    { name: 'Order Received', date: 'Nov 21, 2026', time: '9:15 AM', status: 'Complete' },
    { name: 'Packed', date: 'Nov 21, 2026', time: '2:30 PM', status: 'Complete' },
    { name: 'Shipped', date: 'Nov 22, 2026', time: '7:45 AM', status: 'Complete' },
    { name: 'In Transit', date: 'Nov 22, 2026', time: '11:20 AM', status: 'Current' },
    { name: 'Out for Delivery', date: 'Pending', time: 'Pending', status: 'Upcoming' },
    { name: 'Delivered', date: 'Pending', time: 'Pending', status: 'Upcoming' },
]

const products = [
    { name: 'SUSPENSO', description: 'Eau de Parfum', quantity: 1, price: 29.99, image: perfume17 },
    { name: 'VANILLA DREAM', description: 'Eau de Parfum', quantity: 1, price: 34.99, image: perfume18 },
]

function TrackOrderBody() {
    const [orderNumber, setOrderNumber] = useState('')
    const [searchMessage, setSearchMessage] = useState('')

    function handleSearch(event) {
        event.preventDefault()
        setSearchMessage('Order lookup is not connected yet. This page is showing sample tracking details.')
    }

    return (
        <main className="bg-stone-50 px-4 py-12 sm:px-6 sm:py-16">
            <div className="mx-auto max-w-7xl space-y-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
                            Delivery updates
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-stone-900 sm:text-4xl">
                            Follow your order
                        </h2>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-800">
                        <i className="bi bi-info-circle" aria-hidden="true" />
                        Sample preview
                    </span>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
                    <form onSubmit={handleSearch} className="flex flex-col gap-4 sm:flex-row sm:items-end">
                        <label htmlFor="order-number" className="flex-1 text-sm font-semibold text-stone-800">
                            Enter Order Number
                            <input
                                id="order-number"
                                name="orderNumber"
                                type="text"
                                value={orderNumber}
                                onChange={(event) => {
                                    setOrderNumber(event.target.value)
                                    setSearchMessage('')
                                }}
                                placeholder="e.g. AE-10482"
                                required
                                className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base font-normal text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20"
                            />
                        </label>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                        >
                            <i className="bi bi-search" aria-hidden="true" />
                            Track Order
                        </button>
                    </form>
                    <p aria-live="polite" className="mt-3 min-h-5 text-sm text-stone-600">
                        {searchMessage}
                    </p>
                </div>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900">
                    <strong>Preview only:</strong> The order, timeline, courier and map details below are sample content.
                    Connect your order API and GPS/map provider to show real customer information and live locations.
                </div>

                <section aria-labelledby="tracking-timeline-heading" className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
                    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-medium text-yellow-700">Order AE-10482 · Sample</p>
                            <h3 id="tracking-timeline-heading" className="mt-1 text-xl font-bold text-stone-900">
                                Tracking Timeline
                            </h3>
                        </div>
                        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-yellow-50 px-3 py-1.5 text-sm font-semibold text-yellow-800">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-600" />
                            In Transit
                        </span>
                    </div>

                    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {trackingStages.map((stage, index) => {
                            const isComplete = stage.status === 'Complete'
                            const isCurrent = stage.status === 'Current'

                            return (
                                <li key={stage.name} className="relative rounded-xl border border-stone-200 p-4">
                                    <div className="flex items-start gap-3">
                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                                                isComplete
                                                    ? 'bg-green-100 text-green-700'
                                                    : isCurrent
                                                        ? 'bg-yellow-100 text-yellow-800'
                                                        : 'bg-stone-100 text-stone-500'
                                            }`}
                                        >
                                            {isComplete ? (
                                                <i className="bi bi-check-lg" aria-hidden="true" />
                                            ) : (
                                                index + 1
                                            )}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <h4 className="font-semibold text-stone-900">{stage.name}</h4>
                                                <span
                                                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                                                        isComplete
                                                            ? 'bg-green-50 text-green-700'
                                                            : isCurrent
                                                                ? 'bg-yellow-50 text-yellow-800'
                                                                : 'bg-stone-100 text-stone-500'
                                                    }`}
                                                >
                                                    {stage.status}
                                                </span>
                                            </div>
                                            <dl className="mt-3 grid grid-cols-2 gap-3 text-xs">
                                                <div>
                                                    <dt className="text-stone-500">Date</dt>
                                                    <dd className="mt-1 font-medium text-stone-800">{stage.date}</dd>
                                                </div>
                                                <div>
                                                    <dt className="text-stone-500">Time</dt>
                                                    <dd className="mt-1 font-medium text-stone-800">{stage.time}</dd>
                                                </div>
                                                <div>
                                                    <dt className="text-stone-500">Status</dt>
                                                    <dd className="mt-1 font-medium text-stone-800">{stage.status}</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </section>

                <div className="grid gap-8 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">
                    <section aria-labelledby="live-map-heading" className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                        <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                            <div>
                                <p className="text-sm font-medium text-yellow-700">Delivery progress</p>
                                <h3 id="live-map-heading" className="mt-1 text-xl font-bold text-stone-900">Live Map</h3>
                            </div>
                            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-600">
                                <i className="bi bi-geo-alt" aria-hidden="true" />
                                Map preview · GPS not connected
                            </span>
                        </div>

                        <div
                            className="relative `aspect-[16/10]` min-h-64 overflow-hidden bg-[#edf2e8] `sm:aspect-[16/8]`"
                            role="img"
                            aria-label="Illustrative map preview showing a sample delivery route"
                        >
                            <svg viewBox="0 0 900 440" className="absolute inset-0 h-full w-full" aria-hidden="true">
                                <rect width="900" height="440" fill="#edf2e8" />
                                <path d="M-20 95 C180 35 230 180 425 115 S690 44 930 100" fill="none" stroke="#d7e8ee" strokeWidth="42" />
                                <path d="M-20 95 C180 35 230 180 425 115 S690 44 930 100" fill="none" stroke="#c1d9e2" strokeWidth="2" />
                                <path d="M-30 320 C180 270 255 390 470 320 S720 240 930 300" fill="none" stroke="#d7e8ee" strokeWidth="34" />
                                <g fill="#e1eadc">
                                    <rect x="74" y="146" width="118" height="73" rx="12" />
                                    <rect x="221" y="156" width="102" height="69" rx="12" />
                                    <rect x="502" y="142" width="134" height="74" rx="12" />
                                    <rect x="689" y="135" width="118" height="84" rx="12" />
                                    <rect x="95" y="350" width="108" height="48" rx="12" />
                                    <rect x="630" y="335" width="156" height="58" rx="12" />
                                </g>
                                <g fill="none" stroke="#fff" strokeLinecap="round">
                                    <path d="M-20 250 L920 225" strokeWidth="19" />
                                    <path d="M340 -20 L365 470" strokeWidth="18" />
                                    <path d="M690 -20 L660 470" strokeWidth="17" />
                                    <path d="M35 30 L240 440" strokeWidth="13" />
                                    <path d="M820 10 L455 440" strokeWidth="13" />
                                </g>
                                <g fill="none" stroke="#d5d9d3" strokeLinecap="round">
                                    <path d="M-20 250 L920 225" strokeWidth="2" />
                                    <path d="M340 -20 L365 470" strokeWidth="2" />
                                    <path d="M690 -20 L660 470" strokeWidth="2" />
                                    <path d="M35 30 L240 440" strokeWidth="2" />
                                    <path d="M820 10 L455 440" strokeWidth="2" />
                                </g>
                                <path d="M270 267 C365 220 475 282 575 235 S690 210 755 256" fill="none" stroke="#d99d25" strokeDasharray="9 10" strokeLinecap="round" strokeWidth="5" />
                                <text x="90" y="240" fill="#89918a" fontSize="13">Garden Road</text>
                                <text x="408" y="170" fill="#89918a" fontSize="13">Market Street</text>
                                <text x="700" y="316" fill="#89918a" fontSize="13">Central Avenue</text>
                            </svg>

                            <div className="delivery-truck-marker absolute left-[42%] top-[52%] z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-yellow-500 text-white shadow-lg">
                                    <i className="bi bi-truck-front-fill text-lg" aria-hidden="true" />
                                </span>
                                <span className="rounded-md bg-white/95 px-2 py-1 text-xs font-semibold text-stone-800 shadow">
                                    Delivery vehicle
                                </span>
                            </div>

                            <div className="absolute right-[10%] top-[38%] z-10 flex -translate-y-1/2 items-center gap-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-rose-600 text-white shadow-lg">
                                    <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                                </span>
                                <span className="rounded-md bg-white/95 px-2 py-1 text-xs font-semibold text-stone-800 shadow">
                                    Customer location
                                </span>
                            </div>

                            <div className="absolute bottom-3 left-3 rounded-xl border border-white/80 bg-white/95 p-3 shadow-sm sm:bottom-5 sm:left-5">
                                <p className="text-xs font-medium text-stone-500">Estimated arrival · sample</p>
                                <p className="mt-1 text-sm font-bold text-stone-900">Nov 23 · 10 AM–2 PM</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-stone-200 px-5 py-4 text-xs text-stone-600 sm:px-7">
                            <span className="inline-flex items-center gap-2">
                                <i className="bi bi-truck-front-fill text-yellow-600" aria-hidden="true" />
                                Current delivery location (sample)
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <i className="bi bi-geo-alt-fill text-rose-600" aria-hidden="true" />
                                Customer location (sample)
                            </span>
                        </div>
                    </section>

                    <section aria-labelledby="delivery-info-heading" className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
                        <p className="text-sm font-medium text-yellow-700">Your delivery</p>
                        <h3 id="delivery-info-heading" className="mt-1 text-xl font-bold text-stone-900">
                            Delivery Information
                        </h3>

                        <dl className="mt-6 divide-y divide-stone-100">
                            {[
                                ['Courier Name', 'Aura Express · sample'],
                                ['Driver Name', 'Sample Driver'],
                                ['Driver Phone', 'Available after integration'],
                                ['Vehicle', 'Delivery van · sample'],
                                ['Expected Delivery Time', 'Nov 23, 2026 · 10 AM–2 PM'],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-4">
                                    <dt className="text-sm text-stone-500">{label}</dt>
                                    <dd className="text-sm font-semibold text-stone-900 sm:text-right">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                </div>

                <section aria-labelledby="order-summary-heading" className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
                    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm font-medium text-yellow-700">Order AE-10482 · Sample</p>
                            <h3 id="order-summary-heading" className="mt-1 text-xl font-bold text-stone-900">
                                Order Summary
                            </h3>
                        </div>
                        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700">
                            <i className="bi bi-check-circle-fill" aria-hidden="true" />
                            Payment Paid · sample
                        </span>
                    </div>

                    <div className="divide-y divide-stone-100">
                        {products.map((product) => (
                            <div key={product.name} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-16 w-16 rounded-lg bg-stone-100 object-cover"
                                />
                                <div className="min-w-0 flex-1">
                                    <h4 className="font-semibold text-stone-900">{product.name}</h4>
                                    <p className="mt-1 text-sm text-stone-500">{product.description}</p>
                                </div>
                                <p className="text-sm text-stone-600">Qty: {product.quantity}</p>
                                <p className="w-20 text-right text-sm font-semibold text-stone-900">
                                    ${(product.price * product.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 flex justify-between border-t border-stone-200 pt-5 text-base font-bold text-stone-900">
                        <span>Total</span>
                        <span>${products.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2)}</span>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default TrackOrderBody