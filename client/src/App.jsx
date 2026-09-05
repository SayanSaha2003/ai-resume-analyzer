import { useState , useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut , onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function App() {
    const [user, setUser] = useState(null);

    // persist user state across page refreshes
    useEffect(() => {
        // put the currentuser in the user state when the component mounts
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
            setUser(null);
        } catch (error) {
            console.error("Sign out error:", error);
        }
    };

    return (
        <div>
            {!user ? (
                <>
                    <h1>AI Resume Analyzer</h1>
                    <button onClick={handleSignIn}>Sign in with Google</button>
                </>
            ) : (
                <>
                    <h1>Welcome, {user.displayName}</h1>
                    <p>{user.email}</p>

                    <button onClick={handleSignOut}>Sign Out</button>
                </>
            )}
        </div>
    );
}
