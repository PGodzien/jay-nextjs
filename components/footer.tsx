
export default function Footer() {
    return (
        <footer aria-labelledby="footer-heading" className="relative">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
                <div className="border-t border-secondary pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        
                    
                            <p className="text-gray-500 text-xs">
                                <span className="text-black">Quick contact:</span> Phone: <span className="text-primary font-medium">07 555 22 14 14</span> | Email: <span className="text-primary font-medium">info@freeboilersolutions.co.uk</span>
                            </p>
                        
                    </div>
                    <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                        &copy; Realisation <a href="https://getpromo.pl" target="_blank" className="text-primary hover:text-secondary transition duration-200">Getpromo</a>, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

