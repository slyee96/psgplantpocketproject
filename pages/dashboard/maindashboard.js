export default function Home() {
    return (
            <section className="flex bg-white">
                <div className="min-h-screen flex flex-col text-gray-800">
                    <div className="relative flex flex-col top-0 left-0 w-60 bg-gray-900 h-full shadow-lg">
                        <div className="flex items-center pl-6 h-20 border-b border-gray-800">
                            <div className="ml-1">
                                <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">Amzil Houdaifa</p>
                                <div className="badge">
                                    <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">sys00</span>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-y-auto overflow-x-hidden flex-grow">
                            <ul className="flex flex-col py-6 space-y-1">
                                <li className="px-5">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Dashboard</div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                        </span>
                                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                        </span>
                                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Servers</span>
                                    </a>
                                </li>
                                <li className="px-5">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Settings</div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </span>
                                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </span>
                                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                                        <span className="inline-flex justify-center items-center ml-4 text-red-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                        </span>
                                        <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <header className="bg-white shadow">
                        <div className="max-w-7xl ml-6 py-6 text-left">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Dashboard
                            </h1>
                        </div>
                    </header>
                    <div className="px-4 py-8">

                        <div className="py-2 min-w-full">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg p-4">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
    );
}