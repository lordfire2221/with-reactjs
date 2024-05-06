import RootLayout from "./layout";
import Link from "next/link";
export default function Home() {
  return (
    <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">TP OPTIMISATION  DES  DONNEES </h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Code particulier J'ai fait mon propre modèle de données </h2>
                        <Link className="btn btn-primary" href="/connexion">Get Started</Link>
                    </div>
                </div>
            </div>
        </header>
  );
}
