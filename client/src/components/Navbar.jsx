import { useState } from "react";
import { FileText, ChevronDown, LogOut } from "lucide-react";

export default function Navbar({ user, onSignIn, onSignOut }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="mx-auto mt-5 flex h-16 w-[calc(100%-40px)] items-center justify-between rounded-xl bg-white px-6 shadow-sm">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <FileText size={22} />
                </div>

                <h2 className="text-xl font-bold text-slate-900">
                    Resume<span className="text-blue-600">AI</span>
                </h2>
            </div>

            {/* Right side */}
            {!user ? (
                <button
                    onClick={onSignIn}
                    className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
                >
                    Sign In
                </button>
            ) : (
                <div className="relative">
                    {/* User button */}
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="flex items-center gap-2"
                    >
                        <img
                            src={user.photoURL}
                            alt={user.displayName}
                            className=" h-10 w-10 rounded-full object-cover "
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                            }}
                        />

                        <span className=" hidden sm:block font-medium text-slate-800">
                            {user.displayName}
                        </span>

                        <ChevronDown
                            size={18}
                            className={`transition-transform ${
                                showMenu ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    {/* Dropdown */}
                    {showMenu && (
                        <div className="absolute right-0 top-12 z-50 w-40 rounded-lg bg-white p-2 shadow-lg ring-1 ring-slate-100">
                            <button
                                onClick={onSignOut}
                                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                            >
                                <LogOut size={17} />
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
