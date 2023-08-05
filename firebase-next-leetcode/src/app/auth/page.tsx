

import AuthModal from "@/components/Modal/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { useRecoilValue } from "recoil";


export default async function NotesPage () {

    // const AuthModal = useRecoilValue(authModalState)



    return(
        <div className="h-screen bg-slate-600 relative">
            <div className="max-w-7xl mx-auto">
                <Navbar/>
                <AuthModal/>
            </div>
        </div>
    )
}