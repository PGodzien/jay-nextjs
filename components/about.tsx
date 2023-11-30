'use client'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import ReactCurvedText from 'react-curved-text'
import Image from 'next/image'
import crown from '@/public/crown.svg'

const benefits = [
    'Upgrade Your Old Boiler in less than 10 Days*',
    'No Cost To You - 100% FREE',
    'FREE Loft & Wall Insulation',
    'Free First Time Central Heating',
]

export default function About() {
    return (
        <div className="bg-white py-24">
            <div className="relative isolate">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                        {/* <img
                            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                            src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt=""
                        /> */}
                        <div className="relative w-40 h-40">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <ReactCurvedText
                                    width={200}
                                    height={200}
                                    cx={100}
                                    cy={100}
                                    rx={50}
                                    ry={50}
                                    startOffset={0}
                                    reversed={true}
                                    text='GOVERMENT · GOVERMENT · GOVERMENT ·'
                                    textProps={{ "style": { "fontSize": "12.5" } }}
                                    tspanProps={{ "dy": "4" }}
                                    svgProps={{ "className": "animate-spin-slow" }} />
                            </div>
                            <div className='duration-200 transition w-20 h-20 absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 flex items-center justify-center'>
                                <Image className='w-20 p-3 h-auto' alt="" src={crown} />
                            </div>
                        </div>
                        <div className="w-full flex-auto">
                            <h2 className="text-3xl font-medium tracking-tight  sm:text-4xl">Government Boiler Replacement Scheme</h2>
                            <p className="mt-6 text-lg leading-8 text-secondary">
                                Apply today to replace your old, inefficient and Non-Condensing boiler
                                for FREE under Government’s Free Boiler Scheme.
                            </p>
                            <ul
                                role="list"
                                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7  sm:grid-cols-2"
                            >
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex gap-x-3">
                                        <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 flex">
                                <a href="#" className="text-lg font-medium leading-6 text-primary">
                                    Apply now <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#00a676] to-[#00a676] opacity-25"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
