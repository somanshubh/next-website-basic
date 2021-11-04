import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'
export default function Nav() {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="page">page</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="contact">contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="privacy">privacy</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="about">about</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="page">page</Link>
                            </li>
                            
                            
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}