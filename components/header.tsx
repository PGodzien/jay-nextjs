import Image from "next/image"
import slider from '@/public/slider.jpg'

export default function Hero() {
    return (
        <div className="relative bg-white -mt-28 z-0">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Free eligibility checker.{' '}
                                <a href="#" className="whitespace-nowrap text-primary text-prbg-primary">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Check now <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <h1 className="mt-24 text-4xl font-medium tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                            Free boiler solutions
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Apply today to replace your old, inefficient and Non-Condensing boiler
                            for FREE under Government’s Free Boiler Scheme
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#apply-now"
                                className="rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-prbg-primary transition duration-200"
                            >
                                Apply now
                            </a>
                            <a href="#about-scheme" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition duration-200">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <Image
                        className="aspect-[3/2] w-full bg-gray-50 object-cover object-center lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-bl-[20%]"
                        src={slider}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
