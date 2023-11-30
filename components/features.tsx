import Image from "next/image"
import image01 from '@/public/feature1.png'
import image02 from '@/public/feature2.png'
import image03 from '@/public/feature3.png'
import lineLeft from '@/public/line-left.svg'
import lineLeftShort from '@/public/line-left-short.svg'
import lineRight from '@/public/line-right.svg'

export default function Features() {
    return (

        <section className="py-12 md:py-24 bg-radial-dark-green">
            <div className="container px-4 mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-4xl mb-24">
                        <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium text-white bg-primary rounded-full">OUR SERVICES</span>
                        <h1 className="text-3xl font-medium tracking-tight  sm:text-4xl mb-4">We Offer Best Services</h1>
                        <p className="text-lg text-gray-600">ECO4 boiler and insulation grant applications are now open. It only takes 1 minute to find out if you qualify for an ECO grant to improve your home’s energy efficiency and reduce your energy bills.</p>
                    </div>
                    <div className="container px-4 mx-auto max-w-7xl">
                        <div className="max-w-xl mb-20 xl:mb-24 mx-auto text-center"></div>
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <div className="mb-6">
                                    <Image className="h-60 w-full object-cover rounded-3xl" src={image01} alt="" />
                                </div>
                                <div className="relative w-4/5 sm:w-1/2 lg:w-3/4">
                                    <Image className="absolute top-0 right-0 -mr-12 -mt-40" src={lineRight} alt="" />
                                    <div className="relative p-10 md:px-8 border bg-secondary rounded-3xl">
                                        <h3 className="mb-2 text-xl font-heading font-medium text-white leading-loose">Superpower</h3>
                                        <p className="text-gray-400">Donec laoreet sem sollicitudin, mattis mi in, tristique.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0 lg:mt-24">
                                <div className="mb-6">
                                    <Image className="h-60 w-full object-cover rounded-3xl" src={image02} alt="" />
                                </div>
                                <div className="relative w-4/5 sm:w-1/2 lg:w-3/4 ml-auto">
                                    <Image className="absolute bottom-0 left-0 mb-20 -ml-12" src={lineLeft} alt="" />
                                    <div className="relative p-10 md:px-8 border bg-secondary rounded-3xl">
                                        <h3 className="mb-2 text-xl font-heading font-medium text-white leading-loose">4K Camera</h3>
                                        <p className="text-gray-400">Vestibulum non odio non dui fermentum mattis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-4">
                                <div className="mb-6">
                                    <Image className="h-60 w-full object-cover rounded-3xl" src={image03} alt="" />
                                </div>
                                <div className="relative w-4/5 sm:w-1/2 lg:w-3/4 ml-auto">
                                    <Image className="absolute top-0 left-0 -ml-12 -mt-24" src={lineLeftShort} alt="" />
                                    <div className="relative p-10 md:px-8 border bg-secondary rounded-3xl">
                                        <h3 className="mb-2 text-xl font-heading font-medium text-white leading-loose">New design</h3>
                                        <p className="text-gray-400">Nam ipsum augue, eleifend elementum velit a, mattis sollicitudin</p>
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