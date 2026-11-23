import { useState } from 'react'
import perfume17 from '../../Images/perfume17.png'

function PlaceOrderBody() {
    const [quantity, setQuantity] = useState(1)
    const [paymentMethod, setPaymentMethod] = useState('Card')
    const [message, setMessage] = useState('')

    const price = 29.99
    const deliveryFee = 5
    const subtotal = price * quantity
    const total = subtotal + deliveryFee

    function handleSubmit(event) {
        event.preventDefault()
        setMessage('Your details are ready. Order submission is not connected yet.')
    }

    return (
        <section className="bg-stone-50 px-4 py-14 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
                        Almost yours
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-stone-900 sm:text-4xl">
                        Complete Your Order
                    </h2>
                    <p className="mt-3 text-stone-600">
                        Review your cart and enter your delivery and payment information.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(300px,0.9fr)]"
                >
                    <div className="space-y-8">
                        {/* Shopping Cart */}
                        <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
                            <h3 className="mb-6 text-xl font-bold text-stone-900">
                                Shopping Cart
                            </h3>

                            <div className="flex flex-col gap-4 border-b border-stone-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={perfume17}
                                        alt="SUSPENSO Eau de Parfum"
                                        className="h-20 w-20 rounded-xl bg-stone-100 object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-stone-900">SUSPENSO</h4>
                                        <p className="text-sm text-stone-500">Eau de Parfum</p>
                                        <p className="mt-1 font-medium text-stone-900">
                                            ${price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                <label className="flex items-center gap-3 text-sm text-stone-700">
                                    Quantity
                                    <input
                                        type="number"
                                        min="1"
                                        max="99"
                                        value={quantity}
                                        onChange={(event) => {
                                            const value = Number(event.target.value)
                                            if (value >= 1 && value <= 99) {
                                                setQuantity(value)
                                            }
                                        }}
                                        className="w-20 rounded-lg border border-stone-300 px-3 py-2 text-center"
                                    />
                                </label>
                            </div>

                            <div className="mt-5 space-y-3 text-sm">
                                <div className="flex justify-between text-stone-600">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-stone-600">
                                    <span>Delivery Fee</span>
                                    <span>${deliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-stone-600">
                                    <span>Discount</span>
                                    <span>-$0.00</span>
                                </div>
                                <div className="flex justify-between border-t border-stone-200 pt-4 text-base font-bold text-stone-900">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </section>

                        {/* Customer Information */}
                        <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
                            <h3 className="mb-6 text-xl font-bold text-stone-900">
                                Customer Information
                            </h3>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="text-sm font-medium text-stone-700">
                                    Full Name
                                    <input
                                        type="text"
                                        name="fullName"
                                        autoComplete="name"
                                        required
                                        className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2.5"
                                    />
                                </label>

                                <label className="text-sm font-medium text-stone-700">
                                    Phone Number
                                    <input
                                        type="tel"
                                        name="phone"
                                        autoComplete="tel"
                                        required
                                        className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2.5"
                                    />
                                </label>

                                <label className="text-sm font-medium text-stone-700">
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2.5"
                                    />
                                </label>

                                <label className="text-sm font-medium text-stone-700">
                                    Address
                                    <input
                                        type="text"
                                        name="address"
                                        autoComplete="street-address"
                                        required
                                        className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2.5"
                                    />
                                </label>

                                <label className="text-sm font-medium text-stone-700">
                                    State
                                    <input
                                        type="text"
                                        name="state"
                                        required
                                        className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2.5"
                                    />
                                </label>

                                <label className="text-sm font-medium text-stone-700">
                                    City
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2.5"
                                    />
                                </label>

                                <label className="text-sm font-medium text-stone-700">
                                    ZIP Code
                                    <input
                                        type="text"
                                        name="zipCode"
                                        autoComplete="postal-code"
                                        required
                                        className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2.5"
                                    />
                                </label>

                                <label className="text-sm font-medium text-stone-700 sm:col-span-2">
                                    Delivery Instructions
                                    <textarea
                                        name="deliveryInstructions"
                                        rows="3"
                                        className="mt-2 w-full rounded-lg border border-stone-300 px-3 py-2.5"
                                    />
                                </label>
                            </div>
                        </section>

                        {/* Payment */}
                        <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7">
                            <h3 className="mb-6 text-xl font-bold text-stone-900">Payment</h3>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {[
                                    'Card',
                                    'Bank Transfer',
                                    'USSD',
                                    'Mobile Wallet',
                                    'Cash on Delivery',
                                ].map((method) => (
                                    <label
                                        key={method}
                                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-stone-200 p-4 text-sm text-stone-700"
                                    >
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value={method}
                                            checked={paymentMethod === method}
                                            onChange={() => setPaymentMethod(method)}
                                            className="accent-yellow-600"
                                        />
                                        {method}
                                        {method === 'Cash on Delivery' && (
                                            <span className="text-xs text-stone-500">(Optional)</span>
                                        )}
                                    </label>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Order Summary */}
                    <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7 lg:sticky lg:top-8">
                        <h3 className="text-xl font-bold text-stone-900">Order Summary</h3>

                        <div className="mt-6 space-y-4 text-sm">
                            <div className="flex justify-between gap-4 text-stone-600">
                                <span>Product List</span>
                                <span className="text-right text-stone-900">
                                    SUSPENSO × {quantity}
                                </span>
                            </div>

                            <div className="flex justify-between text-stone-600">
                                <span>Delivery Cost</span>
                                <span className="text-stone-900">${deliveryFee.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between gap-4 text-stone-600">
                                <span>Estimated Delivery</span>
                                <span className="text-right text-stone-900">3–5 business days</span>
                            </div>

                            <div className="flex justify-between border-t border-stone-200 pt-5 text-base font-bold text-stone-900">
                                <span>Grand Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-7 w-full rounded-xl bg-yellow-600 px-5 py-3.5 font-semibold text-white hover:bg-yellow-700"
                        >
                            Place Order
                        </button>

                        <p aria-live="polite" className="mt-4 text-sm text-stone-600">
                            {message}
                        </p>
                    </aside>
                </form>
            </div>
        </section>
    )
}

export default PlaceOrderBody