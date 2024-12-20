
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";


function Page() {
    const location = useLocation()
    const badWord = location.state?.badWord || "Spam"
    return (
        <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
            <Header />

            <div className="bg-red-400 rounded-lg p-3">
                <h1 className="text-3xl">Error</h1>
                <p className="text-lg">Your form is flagged for {badWord}</p>
                <p>Try resubmitting the form </p>
                <Link to="/" className="text-blue-600 underline">here</Link>
            </div>
        </div>
    );
}

export default Page;