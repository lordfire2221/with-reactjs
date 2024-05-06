import Link from "next/link";
export default function connexion() {
  return (
    <body>   
    <div className="main">
        <section className="gray-light-bg">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
                       
                        <div className="bg-cover height-lg-100vh ml-n3 gradient-overlay">
                            <div className="position-absolute login-signup-content">
                                <div className="position-relative text-white col-md-12 col-lg-7">
                                    <h2 className="text-white">Welcome Back !</h2>
                                    <p className="lead">Keep your face always toward the sunshine - and shadows will fall behind you. Continually pursue fully researched niches whereas timely platforms. Credibly parallel task optimal catalysts for change after focused catalysts for change.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="login-signup-wrap px-4 px-lg-5 my-5">
                            <div className="mb-5 text-center">
                                <h5 className="h3">Sign In</h5>
                                <p className="text-muted mb-0">Sign in to your account to continue.</p>
                            </div>
                            
                            <form className="login-signup-form">
                                <div className="form-group">
                                    <label className="pb-1">Email Address</label>
                                    <div className="input-group input-group-merge">
                                        <div className="input-icon">
                                            <span className="ti-email color-primary"></span>
                                        </div>
                                        <input type="email" name="email" className="form-control" placeholder="name@yourdomain.com" />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label className="pb-1">Password</label>
                                        </div>
                                        <div className="col-auto">
                                            <Link href="recover-account.html" className="form-text small text-muted">
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <div className="input-icon">
                                            <span className="ti-lock color-primary"></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Enter your password" />
                                    </div>
                                </div>

                              
                                <button className="btn btn-block primary-solid-btn border-radius mt-4 mb-3">
                                    Sign IN
                                </button>

                               
                                <p className="text-center">
                                    <small className="text-muted text-center">
                                       Vous avez un compte ? <Link href="/connexion">Sign IN</Link>.
                                    </small>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
    <button className="scroll-top scroll-to-target" data-target="html">
        <span className="ti-rocket"></span>
    </button>
   
    </body>
  );
}
