import Image from "next/image"
import steps from '@/public/steps.jpg'


export default function Steps() {

  return (
    <section className="py-12 md:py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-24">
            <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium text-white bg-primary rounded-full">HOW IT WORKS</span>
            <h1 className="text-3xl font-medium tracking-tight  sm:text-4xl text-white mb-4">The Best Choice for Your Home</h1>
            <p className="text-lg text-gray-200">Boilup Energy Solutions is working on an ECO4 project, that will provide qualified households with New Boilers, First-Time Central Heating, Air Source Heat pump and much more </p>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/4 md:pr-4 mb-4 md:mb-0">
              <div className="md:flex items-center">
                <div className="w-full max-w-xs mx-auto md:max-w-none md:mr-4 p-px rounded-xl bg-gradient-to-br from-cyanGreen-800 to-primary">
                  <div className="rounded-xl bg-primary">
                    <div className="w-full h-full p-4 rounded-xl bg-white bg-opacity-10">
                      <div className="flex-shrink-0 inline-flex w-10 h-10 mb-4 items-center justify-center font-medium text-white bg-white bg-opacity-10 rounded-full transition duration-200">1</div>
                      <p className="max-w-xs font-medium text-white">Telephone <br /> Consultation</p>
                    </div>
                  </div>
                </div>
                <span className="hidden md:inline-block">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <div className="flex items justify-center transform rotate-90 mt-4 md:hidden">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 md:pr-4 mb-4 md:mb-0">
              <div className="md:flex items-center">
                <div className="w-full max-w-xs mx-auto md:max-w-none md:mr-4 p-px rounded-xl border border-white border-opacity-20">
                  <div className="p-4 rounded-xl bg-white bg-opacity-10">
                    <div className="flex-shrink-0 inline-flex w-10 h-10 mb-4 items-center justify-center font-medium text-white bg-white bg-opacity-10 rounded-full transition duration-200">2</div>
                    <p className="max-w-xs font-medium text-gray-200">Property <br /> Survey</p>
                  </div>
                </div>
                <span className="hidden md:inline-block">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <div className="flex items justify-center transform rotate-90 mt-4 md:hidden">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 md:pr-4 mb-4 md:mb-0">
              <div className="md:flex items-center">
                <div className="w-full max-w-xs mx-auto md:max-w-none md:mr-4 p-px rounded-xl border border-white border-opacity-20">
                  <div className="p-4 rounded-xl bg-white bg-opacity-10">
                    <div className="flex-shrink-0 inline-flex w-10 h-10 mb-4 items-center justify-center font-medium text-white bg-white bg-opacity-10 rounded-full transition duration-200">3</div>
                    <p className="max-w-xs font-medium text-gray-200">Check & Confirm Your Eligibility</p>
                  </div>
                </div>
                <span className="hidden md:inline-block">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <div className="flex items justify-center transform rotate-90 mt-4 md:hidden">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 xl:pr-8">
              <div className="w-full max-w-xs mx-auto md:max-w-none p-px rounded-xl border border-white border-opacity-20">
                <div className="p-4 rounded-xl bg-white bg-opacity-10">
                  <div className="flex-shrink-0 inline-flex w-10 h-10 mb-4 items-center justify-center font-medium text-white bg-white bg-opacity-10 rounded-full transition duration-200">4</div>
                  <p className="max-w-xs font-medium text-gray-200">Installation <br />of Free Boiler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}