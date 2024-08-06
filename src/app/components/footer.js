export default function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid bg-white">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-6 col-md6 mb-3">
                                <h5>ร้าน Aunt Pizza company By Poomza</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                        หน้าแรก
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            เกี่ยวกับเรา
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            บริการของเรา
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            ราคา
                                        </a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="#" className="nav-link p-0 text-body-secondary">
                                            ติดต่อเรา
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 offset-md-1 mb-3">
                                <form>
                                    <h5>สามารถติดต่อเราได้ที่นี่</h5>
                                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                        <label htmlFor="newsletter1" className="visually-hidden">
                                            Email address
                                        </label>
                                        <input
                                            id="newsletter1"
                                            type="text"
                                            className="form-control"
                                            placeholder="Email address"
                                        />
                                        <button className="btn btn-primary" type="button">
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                            <p>© 2024 Company, Inc. All rights reserved.</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <a className="link-body-emphasis" href="#">
                                        <svg className="bi" width={24} height={24}>
                                            <use xlinkHref="#twitter" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a className="link-body-emphasis" href="#">
                                        <svg className="bi" width={24} height={24}>
                                            <use xlinkHref="#instagram" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a className="link-body-emphasis" href="#">
                                        <svg className="bi" width={24} height={24}>
                                            <use xlinkHref="#facebook" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </footer>
        </>
    )
}