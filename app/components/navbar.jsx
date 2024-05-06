import Link from "next/link"

export default function Navbar() {
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container px-4 px-lg-5">
        <Link class="navbar-brand" href="#page-top">Start Bootstrap</Link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><Link class="nav-Link" href="#about">About</Link></li>
                <li class="nav-item"><Link class="nav-Link" href="#projects">Projects</Link></li>
                <li class="nav-item"><Link class="nav-Link" href="#signup">Contact</Link></li>
            </ul>
        </div>
    </div>
</nav>
}
