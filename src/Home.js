import React from 'react'
import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";


export default function Home() {
    return (
        <div>
 
      
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
        
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <p className="font-bold">Portal to view Marks Leaderboard and add new marks.</p>
        
                        </div>



                        <div className="bg-gray-50">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                            
                            <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex rounded-md shadow">
                                <Link to="/leaderboard">
                                <a  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                View LeaderBoard
                                </a>
                                </Link>
                                
                            </div>
                            <div className="ml-3 inline-flex rounded-md shadow">
                                
                                
                                <Link to="/marks">
                                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                                Enter Marks
                                </a>
                                </Link>

                            </div>
                            </div>
                        </div>
                        </div>

        
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </div>
 
    )
}
