import Image from "next/image"

export default function Features() {
    return (

        <section className="py-12 md:py-24 bg-radial-dark-green">
            <div className="container px-4 mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="xs:max-w-sm md:max-w-sm lg:max-w-4xl mx-auto text-center mb-24">
                        <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium text-white bg-teal-800 rounded-full">HOW IT WORKS</span>
                        <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold text-white mb-4">Organize assets in 15 seconds</h1>
                        <p className="text-lg text-gray-200">Using our platform is easy and straightforward. Here&apos;s how it works:</p>
                    </div>
                    <div className="flex flex-wrap -mx-4 md:-mx-6 items-center">
                        <div className="w-full lg:w-1/3 px-4 md:px-6 mb-16 lg:mb-0">
                            <div className="max-w-xs mx-auto lg:mx-0">
                                <img className="block w-full mb-8" src="aurora-assets/how-it-works/image-gradient-opacity-1.png" alt="">
                                    <div className="flex">
                                        <div className="flex-shrink-0 inline-flex w-8 h-8 items-center justify-center text-base font-bold text-white bg-white bg-opacity-10 rounded-full transition duration-200">1</div>
                                        <div className="ml-3">
                                            <h6 className="text-xl font-bold text-white mb-1">Sign up</h6>
                                            <p className="text-lg text-gray-200">Create an account by simply setting up your email and password.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 md:px-6 mb-16 lg:mb-0">
                            <div className="max-w-xs mx-auto lg:mx-0">
                                <img className="block w-full mb-8" src="aurora-assets/how-it-works/image-gradient-opacity-2.png" alt="">
                                    <div className="flex">
                                        <div className="flex-shrink-0 inline-flex w-8 h-8 items-center justify-center text-base font-bold text-white bg-white bg-opacity-10 rounded-full transition duration-200">2</div>
                                        <div className="ml-3">
                                            <h6 className="text-xl font-bold text-white mb-1">Explore</h6>
                                            <p className="text-lg text-gray-200">Browse through our intuitive interface to discover the features.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 md:px-6">
                            <div className="max-w-xs mx-auto lg:mx-0">
                                <img className="block w-full mb-8" src="aurora-assets/how-it-works/image-gradient-opacity-3.png" alt="">
                                    <div className="flex">
                                        <div className="flex-shrink-0 inline-flex w-8 h-8 items-center justify-center text-base font-bold text-white bg-white bg-opacity-10 rounded-full transition duration-200">3</div>
                                        <div className="ml-3">
                                            <h6 className="text-xl font-bold text-white mb-1">Upload &amp; Organize</h6>
                                            <p className="text-lg text-gray-200">Drag and drop your assets and organize it into collections to keep it neat.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}