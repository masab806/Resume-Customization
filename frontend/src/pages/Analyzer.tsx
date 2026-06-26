import React from 'react'

const Analyzer = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">
                        Resume & Cover Letter Generator
                    </h1>
                    <p className="text-lg text-slate-600">
                        Add your LinkedIn post and resume, then generate a professional cover letter
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - LinkedIn & Resume */}
                    <div className="space-y-6">
                        {/* LinkedIn Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                            <label className="block mb-3">
                                <span className="text-sm font-semibold text-slate-900 mb-2 block">
                                    LinkedIn Post or URL
                                </span>
                                <textarea
                                    className="w-full h-32 px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-slate-50 text-slate-900 placeholder-slate-500"
                                    placeholder="Paste your LinkedIn post URL or job description here..."
                                />
                            </label>
                        </div>

                        {/* Resume Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                            <label className="block mb-3">
                                <span className="text-sm font-semibold text-slate-900 mb-2 block">
                                    Resume (LaTeX)
                                </span>
                                <textarea
                                    className="w-full h-64 px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-slate-50 text-slate-900 placeholder-slate-500 font-mono text-sm"
                                    placeholder="\documentclass{article}&#10;\begin{document}&#10;% Paste your LaTeX resume here...&#10;\end{document}"
                                />
                            </label>
                        </div>

                        <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
                            Edit with AI
                        </button>
                    </div>

                    <div className="space-y-6">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
                            {/* <Mail size={20} /> */}
                            Write Cover Letter
                        </button>

                        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-8 fixed inset-0 m-auto w-full max-w-2xl h-fit max-h-[90vh] overflow-y-auto lg:relative lg:inset-auto lg:m-0 lg:max-w-none lg:max-h-none lg:shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Professional Cover Letter
                                </h2>
                                <button className="text-slate-400 hover:text-slate-600 text-2xl lg:hidden">
                                    ×
                                </button>
                            </div>

                            <label className="block">
                                <span className="text-sm font-semibold text-slate-900 mb-3 block">
                                    Your Professional Email
                                </span>
                                <textarea
                                    className="w-full h-96 px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-slate-50 text-slate-900 placeholder-slate-500"
                                    placeholder="Dear Hiring Manager,&#10;&#10;I am writing to express my strong interest in the position at your esteemed organization...&#10;&#10;With my experience in [field], I am confident that I can contribute significantly to your team.&#10;&#10;Thank you for considering my application.&#10;&#10;Best regards,&#10;[Your Name]"
                                />
                            </label>

                            <div className="flex gap-3 mt-6">
                                <button className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                                    Cancel
                                </button>
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                                    Generate Cover Letter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analyzer