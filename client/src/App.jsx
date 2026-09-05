import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function App() {
    const [user, setUser] = useState(null);

    const handleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
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
