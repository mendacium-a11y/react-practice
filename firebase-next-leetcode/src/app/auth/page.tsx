import AuthModal from "@/components/Modal/AuthModal";
import Navbar from "@/components/Navbar/Navbar";


export default async function NotesPage () {
    return(
        <div className="h-screen bg-slate-600 relative">
            <div className="max-w-7xl mx-auto">
                <Navbar/>
                <AuthModal/>
            </div>
        </div>
    )
}