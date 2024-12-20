import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import utils from "@/lib/utils"

function Home() {
    const location = useLocation()
    // optional chaining
    const name = location.state?.name || "Anonymous"
    return (
        <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
            <Header />

            <div className="bg-lime-500 rounded-lg p-3">
                <h1 className="text-3xl">Success</h1>
                <p className="text-lg">{name} your form is successfully submitted.Go check <a href={utils.entriesurl} className="text-blue-600 underline" target="_blank">here</a></p>
            </div>
        </div>
    );
}

export default Home;