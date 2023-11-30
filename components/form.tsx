/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhoneIcon } from '@heroicons/react/24/outline'

export default function Example() {
    return (
        <section id='apply-now' className=''>
            <div className="relative py-24 sm:py-32">
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
                <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
                    <div className="">
                        <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium  bg-primary rounded-full">APPLY NOW</span>
                        <h2 className="text-3xl font-medium tracking-tight  sm:text-4xl">
                            Do you have a question?
                            <br />
                            Feel free to contact!
                        </h2>
                        <p className="text-lg text-gray-600 mt-4">Upgrade your boiler today. Apply for Free Boiler Grant!</p>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a href="tel:07555221414" className="text-sm md:text-md font-semibold py-3 px-5 bg-primary rounded-full leading-6 text-white hover:text-secondary trannsition duration-200 flex items-center">
                            <span className='w-8 h-auto mr-2' aria-hidden="true"><PhoneIcon /></span>07 555 22 14 14
                        </a>
                        <p className="text-gray-600">or</p>
                        <a href="#form" className="text-sm flex items-center font-semibold leading-6 text-gray-600">
                            Send a form <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-24 sm:py-32">
                {/* <div className="mx-auto max-w-7xl py-24 sm:py-32">
                    <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium text-white bg-primary rounded-full">APPLY NOW</span>
                    <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                        Do you have a question?
                        <br />
                        Feel free to contact!
                    </h2>
                    <p className="text-lg text-gray-600 mt-4">Upgrade your boiler today. Apply for Free Boiler Grant!</p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a href="#" className="text-lg font-semibold leading-6 text-gray-900 flex items-center">
                            <span className='w-8 h-auto mr-2' aria-hidden="true"><PhoneIcon /></span>07 555 22 14 14
                        </a>
                        <p className="">or</p>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Send a form <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div> */}
                <div id='form' className="space-y-10 divide-y divide-gray-900/10">

                    <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                        <div className="px-4 sm:px-0">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Contact form</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Complete the application form and join the scheme.</p>
                        </div>

                        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                            <div className="px-4 py-6 sm:p-8">
                                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Last name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Phone number
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                            State / Province
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="region"
                                                id="region"
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                            ZIP / Postal code
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4 mb-4">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Are You Receiving Benefits?
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option>Child Tax Credit</option>
                                                <option>Working Tax Credit</option>
                                                <option>Employment Support Allowance (ESA)</option>
                                                <option>Jobseeker Allowance (JSA)</option>
                                                <option>Pension Credit Savings Credit</option>
                                                <option>Pension Guarantee Credit</option>
                                                <option>Income Support</option>
                                                <option>Universal Credit</option>
                                                <option>Child benefit</option>
                                                <option>Housing Benefit</option>
                                                <option>I don&apos;t recieve benefits</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 mb-4">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Are You a Homeowner or Tenant?
                                        </label>
                                        <div className="mt-6 space-y-6">
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-everything"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Home Owner
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-email"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Private Tenant
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-nothing"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Council Tenant
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 mb-4">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            What is Your Current Heating Type?
                                        </label>
                                        <div className="mt-6 space-y-6">
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-everything"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-primary focus:secondary"
                                                />
                                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Gas
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-email"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:secondary"
                                                />
                                                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Electric
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 mb-4">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            When was your boiler installed?
                                        </label>
                                        <div className="mt-6 space-y-6">
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-everything"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:secondary"
                                                />
                                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                                    After 2005
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-email"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:secondary"
                                                />
                                                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Before 2005
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-nothing"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:secondary"
                                                />
                                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                                    I Don&apos;t Have a Boiler
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 mb-4">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Which type of insulation are you interested in:
                                        </label>
                                        <div className="mt-6 space-y-6">
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-everything"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:secondary"
                                                />
                                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                                Loft Insulation
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-email"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:secondary"
                                                />
                                                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Cavity wall
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-nothing"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:secondary"
                                                />
                                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                                Solid wall
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    id="push-nothing"
                                                    name="push-notifications"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:secondary"
                                                />
                                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                                None
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <p className="text-xs p-5">By clicking &quot;Apply Now&quot; you agree to be contacted by telephone, email and electronic messaging and confirm that you have read and agreed to our Terms & Conditions and our Privacy Policy.</p>
                            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                <button
                                    type="submit"
                                    className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    APPLY NOW
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </section>
    )
}
