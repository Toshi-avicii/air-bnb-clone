import { AiOutlineCopyright, AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';

function Footer() {
  return (
    <div className="p-4 lg:p-6 flex flex-col lg:flex-row justify-center items-center bg-zinc-100 border-t-2 border-t-zinc-400">
        <div className="w-[90%]">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                <div className="mt-6">
                    <h2 className="font-semibold mb-4">Support</h2>
                    <ul>
                        <li className="font-medium">Help Center</li>
                        <li className="my-3 font-medium">Get help with a safety issue</li>
                        <li className="font-medium">Air Cover</li>
                        <li className="my-3 font-medium">supporting people with disabilities</li>
                        <li className="font-medium">Cancelation options</li>
                        <li className="my-3 font-medium">Our COVID-19 Response</li>
                        <li className="font-medium">Report a neighbourhood concern</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="font-semibold mb-4">Community</h2>
                    <ul>
                        <li className="font-medium">Airbnb.org:disaster relief housing</li>
                        <li className="font-medium mt-2">Combating Discrimination</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="font-semibold mb-4">Hosting</h2>
                    <ul>
                        <li className="font-medium">Airbnb your home</li>
                        <li className="my-3 font-medium">Aircover for Hosts</li>
                        <li className="font-medium">Explore hosting resources</li>
                        <li className="my-3 font-medium">Visit our community forum</li>
                        <li className="my-3 font-medium">How to host responsibly</li>
                        <li className="font-medium">Airbnb friendly apartments</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="font-semibold mb-4">Airbnb</h2>
                    <ul>
                        <li className="font-medium">Newsroom</li>
                        <li className="my-3 font-medium">Learn about new features</li>
                        <li className="font-medium">Letter from our founders</li>
                        <li className="my-2 font-medium">Careers</li>
                        <li className="fon3-medium">Investors</li>
                        <li className="my-3 font-medium">Gift cards</li>
                    </ul>
                </div>
            </div>
            <hr className="bg-gray-300 h-[2px] my-6" />

            <div className="flex flex-col lg:flex-row py-4 justify-between items-center">
                <div>
                    <ul className="flex flex-col lg:flex-row lg:space-x-3 lg:space-y-0 space-y-3 items-center mb-4">
                        <li className='flex items-center space-x-2'>
                            <AiOutlineCopyright />
                            <span>2023 Airbnb.inc</span>
                        </li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                        <li>Privacy</li>
                        <li>Your privacy choices</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-3 items-center">
                        <li className='flex items-center space-x-2'>
                            <FiGlobe />
                            <span className='font-semibold'>English (US)</span>
                        </li>

                        <li className='flex items-center space-x-2'>
                            <span className='font-semibold'>$ USD</span>
                        </li>

                        <li className='flex items-center space-x-2'>
                            <button>
                                <AiFillFacebook className='text-2xl font-semibold' />
                            </button>
                        </li>

                        <li className='flex items-center space-x-2'>
                            <button>
                                <AiFillTwitterSquare className='text-2xl font-semibold' />
                            </button>
                        </li>

                        <li className='flex items-center space-x-2'>
                            <button>
                                <AiFillInstagram className='text-2xl font-semibold' />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer