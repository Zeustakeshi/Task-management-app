import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

const SignInPage = lazy(() => import("./pages/auth/SignInPage"));
const Home = lazy(() => import("./pages/home/Home"));
const Projects = lazy(() => import("./pages/projects/Projects"));

function App() {
    return (
        <div className="App overflow-hidden relative">
            <Suspense fallback={<></>}>
                <AuthProvider>
                    <Routes>
                        <Route path="/sign-in" element={<SignInPage />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </AuthProvider>
            </Suspense>
        </div>
    );
}

export default App;
