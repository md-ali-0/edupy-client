import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="overflow-hidden sm:rounded-lg pb-8">
            <div className="text-center pt-8">
                <h1 className="text-9xl font-bold text-green-400">404</h1>
                <h1 className="text-6xl font-medium py-8">
                    oops! Page not found
                </h1>
                <p className="text-2xl pb-8 px-12 font-medium">
                    Oops! The page you are looking for does not exist. It might
                    have been moved or deleted.
                </p>
                <Link
                    href={"/"}
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
                >
                    HOME
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
