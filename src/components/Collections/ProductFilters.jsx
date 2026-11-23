import { useEffect, useState } from 'react'

import perfume29 from '../../Images/perfume29.png'
import perfume30 from '../../Images/perfume30.png'
import perfume32 from '../../Images/perfume32.png'
import perfume33 from '../../Images/perfume33.png'
import perfume34 from '../../Images/perfume34.png'
import perfume35 from '../../Images/perfume35.png'
import perfume36 from '../../Images/perfume36.png'

const PRODUCTS = [
    {
        id: 1,
        name: 'Purple-Mit',
        image: perfume29,
        description: 'A rich, distinctive scent for evenings and special occasions.',
        price: 39,
        rating: 4.8,
        brand: 'Aura Essence',
        gender: 'Women',
        type: 'Perfume',
        availability: true,
        dateAdded: '2026-10-12',
        popularity: 96,
    },
    {
        id: 2,
        name: 'Bakarat',
        image: perfume30,
        description: 'A warm, memorable fragrance with an elegant finish.',
        price: 49,
        rating: 4.7,
        brand: 'Bakarat',
        gender: 'Unisex',
        type: 'Body Spray',
        availability: true,
        dateAdded: '2026-09-10',
        popularity: 89,
    },
    {
        id: 3,
        name: 'Aqaphine',
        image: perfume32,
        description: 'A fresh, easy-to-wear fragrance for everyday moments.',
        price: 32,
        rating: 4.5,
        brand: 'Aura Essence',
        gender: 'Men',
        type: 'Perfume',
        availability: true,
        dateAdded: '2026-11-02',
        popularity: 82,
    },
    {
        id: 4,
        name: 'Blue-Boss',
        image: perfume33,
        description: 'A confident, clean scent with a polished character.',
        price: 55,
        rating: 4.9,
        brand: 'Blue-Boss',
        gender: 'Men',
        type: 'Perfume',
        availability: true,
        dateAdded: '2026-10-28',
        popularity: 99,
    },
    {
        id: 5,
        name: 'Nemah',
        image: perfume34,
        description: 'A convenient roll-on for a quick fragrance refresh.',
        price: 18,
        rating: 4.3,
        brand: 'Aura Essence',
        gender: 'Women',
        type: 'Roll-On',
        availability: false,
        dateAdded: '2026-08-15',
        popularity: 67,
    },
    {
        id: 6,
        name: 'Dubi',
        image: perfume35,
        description: 'A smooth, expressive fragrance made to leave an impression.',
        price: 45,
        rating: 4.6,
        brand: 'Dubi',
        gender: 'Unisex',
        type: 'Perfume',
        availability: true,
        dateAdded: '2026-07-20',
        popularity: 76,
    },
    {
        id: 7,
        name: 'CouCut',
        image: perfume36,
        description: 'A bold, refined scent for those who like to stand out.',
        price: 42,
        rating: 4.4,
        brand: 'CouCut',
        gender: 'Women',
        type: 'Body Spray',
        availability: true,
        dateAdded: '2026-06-05',
        popularity: 72,
    },
]

const FILTERS = [
    {
        key: 'brand',
        label: 'Brand',
        options: [...new Set(PRODUCTS.map((product) => product.brand))],
    },
    {
        key: 'gender',
        label: 'Gender',
        options: ['Men', 'Women', 'Unisex'],
    },
    {
        key: 'type',
        label: 'Fragrance Type',
        options: [...new Set(PRODUCTS.map((product) => product.type))],
    },
    {
        key: 'availability',
        label: 'Availability',
        options: [
            { label: 'In Stock', value: true },
            { label: 'Out of Stock', value: false },
        ],
    },
]

const MIN_PRICE = 0
const MAX_PRICE = 100

const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price)

function ProductFilters() {
    const [selectedFilters, setSelectedFilters] = useState({
        brand: [],
        gender: [],
        type: [],
        availability: [],
    })
    const [minPrice, setMinPrice] = useState(MIN_PRICE)
    const [maxPrice, setMaxPrice] = useState(MAX_PRICE)
    const [sortBy, setSortBy] = useState('popular')
    const [wishlist, setWishlist] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [lastAddedId, setLastAddedId] = useState(null)
    const [quickViewProduct, setQuickViewProduct] = useState(null)

    useEffect(() => {
        if (!quickViewProduct) return undefined

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setQuickViewProduct(null)
        }

        window.addEventListener('keydown', closeOnEscape)
        return () => window.removeEventListener('keydown', closeOnEscape)
    }, [quickViewProduct])

    const toggleFilter = (key, value) => {
        setSelectedFilters((current) => {
            const selected = current[key]
            const next = selected.includes(value)
                ? selected.filter((item) => item !== value)
                : [...selected, value]

            return { ...current, [key]: next }
        })
    }

    const filteredProducts = PRODUCTS
        .filter((product) => product.price >= minPrice && product.price <= maxPrice)
        .filter((product) =>
            Object.entries(selectedFilters).every(([key, selected]) =>
                selected.length === 0 || selected.includes(PRODUCTS.find((item) => item.id === product.id)[key])
            )
        )
        .sort((first, second) => {
            if (sortBy === 'newest') {
                return new Date(second.dateAdded) - new Date(first.dateAdded)
            }
            if (sortBy === 'oldest') {
                return new Date(first.dateAdded) - new Date(second.dateAdded)
            }
            return second.popularity - first.popularity
        })

    const toggleWishlist = (productId) => {
        setWishlist((current) =>
            current.includes(productId)
                ? current.filter((id) => id !== productId)
                : [...current, productId]
        )
    }

    const clearFilters = () => {
        setSelectedFilters({
            brand: [],
            gender: [],
            type: [],
            availability: [],
        })
        setMinPrice(MIN_PRICE)
        setMaxPrice(MAX_PRICE)
        setSortBy('popular')
    }

    return (
        <section className="w-full px-4 py-10 sm:px-6 sm:py-14">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
                <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="text-sm font-medium text-yellow-700 hover:text-yellow-800"
                        >
                            Clear all
                        </button>
                    </div>

                    <fieldset className="border-b border-slate-200 pb-5">
                        <legend className="font-semibold text-slate-900">Price</legend>
                        <p className="mt-3 text-sm text-slate-600">
                            {formatPrice(minPrice)} – {formatPrice(maxPrice)}
                        </p>

                        <label htmlFor="minimum-price" className="mt-4 block text-xs text-slate-600">
                            Minimum price
                        </label>
                        <input
                            id="minimum-price"
                            type="range"
                            min={MIN_PRICE}
                            max={maxPrice}
                            step="1"
                            value={minPrice}
                            onChange={(event) => setMinPrice(Number(event.target.value))}
                            className="mt-1 w-full accent-yellow-600"
                        />

                        <label htmlFor="maximum-price" className="mt-3 block text-xs text-slate-600">
                            Maximum price
                        </label>
                        <input
                            id="maximum-price"
                            type="range"
                            min={minPrice}
                            max={MAX_PRICE}
                            step="1"
                            value={maxPrice}
                            onChange={(event) => setMaxPrice(Number(event.target.value))}
                            className="mt-1 w-full accent-yellow-600"
                        />
                    </fieldset>

                    {FILTERS.map((filter) => (
                        <fieldset key={filter.key} className="border-b border-slate-200 py-5 last:border-0">
                            <legend className="font-semibold text-slate-900">{filter.label}</legend>
                            <div className="mt-3 flex flex-col gap-3">
                                {filter.options.map((option) => {
                                    const isAvailability = filter.key === 'availability'
                                    const value = isAvailability ? option.value : option
                                    const label = isAvailability ? option.label : option
                                    const id = `${filter.key}-${String(value).toLowerCase().replaceAll(' ', '-')}`

                                    return (
                                        <label
                                            key={id}
                                            htmlFor={id}
                                            className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"
                                        >
                                            <input
                                                id={id}
                                                type="checkbox"
                                                checked={selectedFilters[filter.key].includes(value)}
                                                onChange={() => toggleFilter(filter.key, value)}
                                                className="h-4 w-4 rounded border-slate-300 accent-yellow-600"
                                            />
                                            {label}
                                        </label>
                                    )
                                })}
                            </div>
                        </fieldset>
                    ))}
                </aside>

                <div className="min-w-0">
                    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">All Products</h2>
                            <p className="mt-1 text-sm text-slate-500">
                                {filteredProducts.length} products
                                {cartCount > 0 && ` · ${cartCount} item${cartCount === 1 ? '' : 's'} in cart`}
                            </p>
                        </div>

                        <label className="flex items-center gap-4 text-sm text-slate-600">
                            Sort by
                            <select
                                value={sortBy}
                                onChange={(event) => setSortBy(event.target.value)}
                                className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-yellow-600"
                            >
                                <option value="popular">Popular</option>
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                        </label>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                            {filteredProducts.map((product) => (
                                <article
                                    key={product.id}
                                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                                >
                                    <div className="relative aspect-square overflow-hidden bg-slate-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => toggleWishlist(product.id)}
                                            aria-label={
                                                wishlist.includes(product.id)
                                                    ? `Remove ${product.name} from wishlist`
                                                    : `Add ${product.name} to wishlist`
                                            }
                                            aria-pressed={wishlist.includes(product.id)}
                                            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow transition-colors hover:text-red-600"
                                        >
                                            <i
                                                className={`bi ${wishlist.includes(product.id) ? 'bi-heart-fill text-red-600' : 'bi-heart'}`}
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>

                                    <div className="p-4">
                                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                            {product.brand} · {product.type}
                                        </p>
                                        <h3 className="mt-1 text-lg font-bold text-slate-900">
                                            {product.name}
                                        </h3>
                                        <p className="mt-2 min-h-10 text-sm leading-relaxed text-slate-600">
                                            {product.description}
                                        </p>

                                        <div className="mt-3 flex items-center justify-between">
                                            <span className="font-bold text-slate-900">
                                                {formatPrice(product.price)}
                                            </span>
                                            <span className="flex items-center gap-1 text-sm text-slate-600">
                                                <i className="bi bi-star-fill text-yellow-500" aria-hidden="true" />
                                                {product.rating.toFixed(1)}
                                            </span>
                                        </div>

                                        <div className="mt-4 grid grid-cols-2 gap-2">
                                            <button
                                                type="button"
                                                disabled={!product.availability}
                                                onClick={() => {
                                                    setCartCount((count) => count + 1)
                                                    setLastAddedId(product.id)
                                                }}
                                                className="rounded-xl bg-yellow-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-yellow-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                                            >
                                                {product.availability
                                                    ? lastAddedId === product.id ? 'Added!' : 'Add to Cart'
                                                    : 'Out of Stock'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setQuickViewProduct(product)}
                                                className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-500"
                                            >
                                                Quick View
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center">
                            <p className="font-semibold text-slate-900">No products match these filters.</p>
                            <button
                                type="button"
                                onClick={clearFilters}
                                className="mt-3 text-sm font-semibold text-yellow-700 hover:text-yellow-800"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {quickViewProduct && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                    onClick={() => setQuickViewProduct(null)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="quick-view-title"
                        className="relative grid w-full max-w-2xl overflow-hidden rounded-3xl bg-white sm:grid-cols-2"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setQuickViewProduct(null)}
                            aria-label="Close quick view"
                            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-800 shadow"
                        >
                            <i className="bi bi-x-lg" aria-hidden="true" />
                        </button>
                        <img
                            src={quickViewProduct.image}
                            alt={quickViewProduct.name}
                            className="h-64 w-full object-cover sm:h-full"
                        />
                        <div className="p-6 sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-wider text-yellow-700">
                                {quickViewProduct.brand} · {quickViewProduct.type}
                            </p>
                            <h2 id="quick-view-title" className="mt-2 text-2xl font-bold text-slate-900">
                                {quickViewProduct.name}
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                {quickViewProduct.description}
                            </p>
                            <p className="mt-5 text-xl font-bold text-slate-900">
                                {formatPrice(quickViewProduct.price)}
                            </p>
                            <button
                                type="button"
                                disabled={!quickViewProduct.availability}
                                onClick={() => {
                                    setCartCount((count) => count + 1)
                                    setLastAddedId(quickViewProduct.id)
                                    setQuickViewProduct(null)
                                }}
                                className="mt-6 w-full rounded-xl bg-yellow-600 px-4 py-3 font-semibold text-white hover:bg-yellow-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                            >
                                {quickViewProduct.availability ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ProductFilters