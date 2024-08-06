import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow-lg" style={{ width: '18rem', borderRadius: '15px', overflow: 'hidden' }}>
                        <img src="image/Card1.png" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-lg" style={{ width: '18rem', borderRadius: '15px', overflow: 'hidden' }}>
                        <img src="image/Card2.png" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-lg" style={{ width: '18rem', borderRadius: '15px', overflow: 'hidden' }}>
                        <img src="image/Card3.png" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
