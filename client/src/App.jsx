import { useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Analyzer from "./pages/Analyzer";

export default function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();

            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Sign in error:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Sign out error:", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f9ff]">
            <Navbar
                user={user}
                onSignIn={handleSignIn}
                onSignOut={handleSignOut}
            />

            {!user ? <Home onSignIn={handleSignIn} /> : <Analyzer />}
        </div>
    );
}
