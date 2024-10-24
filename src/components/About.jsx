function About() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Welcome to the About Page
                </h2>
                <p className="text-gray-600">
                    Discover more about our mission, vision, and values. We are dedicated to providing the best experience for our users.
                </p>
                <div className="mt-6">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;
