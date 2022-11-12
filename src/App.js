import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

const SignInPage = lazy(() => import("./pages/auth/SignInPage"));
const Home = lazy(() => import("./pages/home/Home"));

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Suspense fallback={<></>}></Suspense>
                <Routes>
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
