import { useState } from 'react'
import perfume7 from '../../Images/perfume7.png'
import perfume23 from '../../Images/perfume23.png'
import perfume25 from '../../Images/perfume25.png'
import perfume17 from '../../Images/perfume17.png'
import perfume18 from '../../Images/perfume18.png'
import perfume21 from '../../Images/perfume21.png'
import perfume22 from '../../Images/perfume22.png'
import perfume26 from '../../Images/perfume26.png'
import perfume27 from '../../Images/perfume27.png'

function Shop() {

    const [showAllBestSellers, setShowAllBestSellers] = useState(false);

    const bestSellersData = [

        {
            id: 1,
            name: 'SUSPENSO',
            price: '$29.99',
            image: perfume17,
            rating: 4.5
        },

        {
            id: 2,
            name: 'VANILLA DREAM',
            price: '$34.99',
            image: perfume18,
            rating: 4
        },

        {
            id: 3,
            name: 'STONE-SEED',
            price: '$33.00',
            image: perfume21,
            rating: 5
        },

        {
            id: 4,
            name: 'SUSPENSO II',
            price: '$29.99',
            image: perfume22,
            rating: 4.5
        },

        {
            id: 5,
            name: 'VANILLA DREAM II',
            price: '$34.99',
            image: perfume26,
            rating: 4
        },

        {
            id: 6,
            name: 'STONE-SEED II',
            price: '$33.00',
            image: perfume27,
            rating: 5
        }
    ]

    const visibleBestSellers = showAllBestSellers ? bestSellersData : bestSellersData.slice(0, 3);

    return (
        <>
            <section className="w-full h-auto flex flex-col justify-center items-center px-3 sm:px-6">


                {/* shop by category section */}
                <div className="h-auto w-full max-w-5xl flex flex-col justify-center mb-4 items-center p-3">
                    <h1 className="font-poppins font-bold text-xl sm:text-2xl text-center flex items-center justify-center">SHOP BY CATEGORY</h1>

                    {/* img section - 2 columns on mobile & tablet, 3 columns on desktop */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-3 sm:gap-6 mt-4 p-2 sm:p-5">

                        {/* Card 1 */}
                        <div className="flex flex-col justify-center items-center gap-2 w-full">

                            <h1 className="text-sm sm:text-base font-medium">PERFUME</h1>
                            <div className="group w-full h-56 sm:h-80 md:h-95 rounded-3xl sm:rounded-4xl overflow-hidden bg-yellow-100 flex flex-col justify-center items-center cursor-pointer shadow-md">

                                <img
                                    src={perfume7}
                                    alt="Category 1"
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>

                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col justify-center items-center gap-2 w-full">

                            <h1 className="text-sm sm:text-base font-medium">ROLL-ON</h1>
                            <div className="group w-full h-56 sm:h-80 md:h-95 rounded-3xl sm:rounded-4xl overflow-hidden bg-yellow-100 flex justify-center items-center cursor-pointer shadow-md">
                                <img
                                    src={perfume23}
                                    alt="Category 2"
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>

                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col justify-center items-center gap-2 w-full">

                            <h1 className="text-sm sm:text-base font-medium">BODY SPRAY</h1>
                            <div className="group w-full h-56 sm:h-80 md:h-95 rounded-3xl sm:rounded-4xl overflow-hidden bg-yellow-100 flex justify-center items-center cursor-pointer shadow-md">
                                <img
                                    src={perfume25}
                                    alt="Category 3"
                                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                            </div>

                        </div>

                    </div>

                </div>

                {/* Best seller section */}
                <div className="h-auto w-full max-w-5xl flex flex-col p-2 sm:p-4 mb-4 bg-gray-100 rounded-3xl transition-all duration-500">

                    {/* Header row to push Title to Left and Button to Right */}
                    <div className="flex justify-between items-center w-full px-2 sm:px-4 pt-2">
                        <h1 className="font-poppins font-bold text-base sm:text-lg">
                            BEST SELLERS
                        </h1>

                        <h3
                            onClick={() => setShowAllBestSellers(!showAllBestSellers)}
                            className="cursor-pointer underline text-sm sm:text-base hover:text-gray-600 transition-colors"
                        >
                            {showAllBestSellers ? 'View Less' : 'View All'}
                        </h3>
                    </div>

                    {/* Product Grid - 2 columns on mobile & tablet, 3 columns on desktop */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-3 sm:gap-5 mt-4 p-2 sm:p-5">
                        {visibleBestSellers.map((item) => (
                            <div
                                key={item.id}
                                className="group w-full rounded-3xl sm:rounded-4xl overflow-hidden h-80 sm:h-110 border-2 border-gray-300 bg-white flex flex-col items-center cursor-pointer"
                            >
                                <div className="w-full h-48 sm:h-72 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="object-cover w-full h-full transition-transform ease-out duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <h2 className="font-bold text-sm sm:text-xl mt-2 px-2 text-center">Name: {item.name}</h2>
                                <h3 className="text-gray-600 text-xs sm:text-lg">Price: {item.price}</h3>
                                <h3 className="text-yellow-500 text-xs sm:text-base hover:text-yellow-700 cursor-pointer mt-1">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* why choose us section */}
                <div className="h-auto w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2 p-4 mb-4 items-center rounded-3xl shadow-sm">

                    <div className="flex flex-col justify-center items-center">
                        <i className="text-2xl bi bi-briefcase"></i>
                        <h4 className="font-poppins text-sm text-center">Authentic Products</h4>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <i className="text-2xl bi bi-clock"></i>
                        <h4 className="font-poppins text-sm text-center">Long Lasting Fragrance</h4>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <i className="text-2xl bi bi-hourglass-split"></i>
                        <h4 className="font-poppins text-sm text-center">Affordable Luxury</h4>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <i className="text-2xl bi bi-truck"></i>
                        <h4 className="font-poppins text-sm text-center">Nationwide Delivery</h4>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <i className="text-2xl bi bi-credit-card"></i>
                        <h4 className="font-poppins text-sm text-center">Secure Payment</h4>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <i className="text-2xl bi bi-truck-front"></i>
                        <h4 className="font-poppins text-sm text-center">Fast Shipping</h4>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Shop