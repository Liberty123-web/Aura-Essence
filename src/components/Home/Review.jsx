import person6 from '../../Images/person6.png'
import person1 from '../../Images/person1.png'
import person5 from '../../Images/person5.png'
import person2 from '../../Images/person2.png'


function Review() {
    return (
        <div className="w-full h-auto justify-center items-center flex flex-col mt-5 px-3 sm:px-6">

            <h1 className="font-bold text-xl sm:text-2xl text-center">OUR COSTOMERS REVIEW</h1>

            {/* Grid container adjusted to show 2 columns on mobile/tablet (sm:grid-cols-2) and 4 on extra large screens */}
            <div className="w-full max-w-360 h-auto p-3 grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5 justify-items-center items-stretch">

                {/* first box */}
                <div className="bg-black w-full max-w-80 h-auto min-h-80 rounded-3xl sm:rounded-4xl justify-center flex flex-col p-2 sm:p-3 pt-4 sm:pt-6">

                    <div className="p-2 sm:p-3 flex flex-wrap items-center gap-1">
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <h4 className="text-white text-xs sm:text-sm">— Amazing fragrance</h4>
                    </div>

                    <h2 className="text-white p-2 sm:p-3 text-xs sm:text-base">
                        “Honestly, I wasn't expecting it to smell this good. The fragrance is smooth,
                        elegant, and lasts for hours. I've already had two people ask me what perfume
                        I was wearing. Definitely buying again.”
                    </h2>

                    {/* image-box */}
                    <div className="w-auto h-auto min-h-16 sm:min-h-25 m-2 sm:m-3 flex items-center">
                        <div className="bg-white w-10 h-10 sm:w-15 sm:h-15 shrink-0 rounded-full sm:rounded-4xl overflow-hidden">
                            <img
                                src={person6}
                                alt="person6"
                                className="w-full h-full object-cover" />
                        </div>
                        <h6 className="text-white text-xs sm:text-lg p-2">— Daniel O.</h6>
                    </div>

                </div>

                {/* second box */}
                <div className="bg-black w-full max-w-80 h-auto min-h-80 rounded-3xl sm:rounded-4xl justify-center flex flex-col p-2 sm:p-3 pt-4 sm:pt-6">

                    <div className="p-2 sm:p-3 flex flex-wrap items-center gap-1">
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <h4 className="text-white text-xs sm:text-sm">— My new favorite</h4>
                    </div>

                    <h2 className="text-white p-2 sm:p-3 text-xs sm:text-base">
                        “I absolutely love this perfume. It has such
                        a beautiful scent without being too strong.
                        The packaging was also really neat and premium.
                        I’ll definitely be trying some of the other fragrances.”
                    </h2>

                    {/* image-box */}
                    <div className="w-auto h-auto min-h-16 sm:min-h-25 m-2 sm:m-3 flex items-center">
                        <div className="bg-white w-10 h-10 sm:w-15 sm:h-15 shrink-0 rounded-full sm:rounded-4xl overflow-hidden">
                            <img
                                src={person1}
                                alt="person1"
                                className="w-full h-full object-cover" />
                        </div>
                        <h6 className="text-white text-xs sm:text-lg p-2">— Sarah C.</h6>
                    </div>

                </div>

                {/* third box */}
                <div className="bg-black w-full max-w-80 h-auto min-h-80 rounded-3xl sm:rounded-4xl justify-center flex flex-col p-2 sm:p-3 pt-4 sm:pt-6">

                    <div className="p-2 sm:p-3 flex flex-wrap items-center gap-1">
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <h4 className="text-white text-xs sm:text-sm">— Worth every naira</h4>
                    </div>

                    <h2 className="text-white p-2 sm:p-3 text-xs sm:text-base">
                        “Beautiful scent and very good quality for the price.
                        I sprayed it in the morning and could still
                        smell it later in the evening. Really impressed with this one.”
                    </h2>

                    {/* image-box */}
                    <div className="w-auto h-auto min-h-16 sm:min-h-25 m-2 sm:m-3 flex items-center">
                        <div className="bg-white w-10 h-10 sm:w-15 sm:h-15 shrink-0 rounded-full sm:rounded-4xl overflow-hidden">
                            <img
                                src={person5}
                                alt="person5"
                                className="w-full h-full object-cover" />
                        </div>
                        <h6 className="text-white text-xs sm:text-lg p-2">— Michael A.</h6>
                    </div>

                </div>

                {/* forth box */}
                <div className="bg-black w-full max-w-80 h-auto min-h-80 rounded-3xl sm:rounded-4xl justify-center flex flex-col p-2 sm:p-3 pt-4 sm:pt-6">

                    <div className="p-2 sm:p-3 flex flex-wrap items-center gap-1">
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <i className="text-yellow-500 bi bi-star-fill text-xs sm:text-base"></i>
                        <h4 className="text-white text-xs sm:text-sm">— Smells incredible</h4>
                    </div>

                    <h2 className="text-white p-2 sm:p-3 text-xs sm:text-base">
                        “Wow! This smells amazing. It has
                        a really fresh and classy fragrance that
                        works perfectly for everyday use. I’ve already
                        recommended it to my friends.”
                    </h2>

                    {/* image-box */}
                    <div className="w-auto h-auto min-h-16 sm:min-h-25 m-2 sm:m-3 flex items-center">
                        <div className="bg-white w-10 h-10 sm:w-15 sm:h-15 shrink-0 rounded-full sm:rounded-4xl overflow-hidden">
                            <img
                                src={person2}
                                alt="person2"
                                className="w-full h-full object-cover" />
                        </div>
                        <h6 className="text-white text-xs sm:text-lg p-2">— Esther N.</h6>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Review