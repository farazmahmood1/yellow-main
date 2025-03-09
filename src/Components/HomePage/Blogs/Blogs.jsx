import React from 'react'
import './BlogsStyles.scss'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <>
            <div className="container">
                <div className="performance-inner-wrap">
                    <h3 className="sub-heading text-center mb-5">Latest Blog Posts</h3>
                    <div className="row performancelist-wrp">
                        <div className="col-md-3 col-sm-6 perform-item p-0">
                            <img
                                src="https://asssets.yellowmellowfilms.com/PhotoSection/img72.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="perform-content">
                                <h5 className="perform-head">Capturing the Perfect Wedding Kiss</h5>
                                <div className="arrowbtn-wrap perform-btnwrp">
                                    <Link to="/blogs" className='btn btn-outline-dark'>
                                        <i className='fa-solid fa-arrow-right border-0' />
                                    </Link>
                                </div>
                            </div>
                            <div className="perform-overlay" />
                        </div>
                        <div className="col-md-3 col-sm-6 perform-item p-0">
                            <img
                                src="https://asssets.yellowmellowfilms.com/PhotoSection/img9.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="perform-content">
                                <h5 className="perform-head">Top 5 First Dance Moments to Capture</h5>
                                <div className="arrowbtn-wrap perform-btnwrp">
                                    <Link to="/blogs" className='btn btn-outline-dark'>
                                        <i className='fa-solid fa-arrow-right border-0' />
                                    </Link>
                                </div>
                            </div>
                            <div className="perform-overlay" />
                        </div>
                        <div className="col-md-3 col-sm-6 perform-item p-0">
                            <img src="https://asssets.yellowmellowfilms.com/PhotoSection/img10.jpg" className="img-fluid" alt="" />
                            <div className="perform-content">
                                <h5 className="perform-head">Choosing the Perfect Wedding Venue</h5>
                                <div className="arrowbtn-wrap perform-btnwrp">
                                    <Link to="/blogs" className='btn btn-outline-dark'>
                                        <i className='fa-solid fa-arrow-right border-0' />
                                    </Link>
                                </div>
                            </div>
                            <div className="perform-overlay" />
                        </div>
                        <div className="col-md-3 col-sm-6 perform-item p-0">
                            <img src="https://asssets.yellowmellowfilms.com/PhotoSection/img84.jpg" className="img-fluid" alt="" />
                            <div className="perform-content">
                                <h5 className="perform-head">Golden Hour Magic: The Best Time for Wedding Photos</h5>
                                <div className="arrowbtn-wrap perform-btnwrp">
                                    <Link to="/blogs" className='btn btn-outline-dark'>
                                        <i className='fa-solid fa-arrow-right border-0' />
                                    </Link>
                                </div>
                            </div>
                            <div className="perform-overlay" />
                        </div>
                    </div>
                </div>
            </div>


            {/* second blogs */}
            <div className="container">
                <div className="performance-inner-wrap">
                    <h3 className="sub-heading mb-5" style={{ textAlign: "left" }}>Latest Blog Posts</h3>
                    <div className="row position-relative">
                        <Link to="/blogs" className="col-md-4 col-sm-6 position-relative" style={{ cursor: "pointer", textDecoration: "none" }}>
                            <img
                                src="https://asssets.yellowmellowfilms.com/PhotoSection/img2.jpg"
                                className="w-100"
                                style={{ height: "250px", width: "100%" }}
                                alt=""
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0px",
                                    right: "30px",
                                    backgroundColor: "#fcc122",
                                    padding: "5px 10px",
                                    fontSize: "18px",
                                    color: "#000"
                                }}
                            >
                                <p className="m-0">5 March</p>
                            </div>
                            <p style={{ fontSize: "16px", marginTop: "15px", marginBottom: "5px", color: "#212121" }} >POSTED BY YELLOW MELLOW FILMS</p>
                            <p style={{ fontSize: "20px", fontWeight: "600", color: "#212121" }} >The art of capturing love: A Guide for Photographers</p>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#212121" }} >+ READ MORE</p>
                        </Link>

                        <Link to="/blogs" className="col-md-4 col-sm-6 position-relative" style={{ cursor: "pointer", textDecoration: "none" }}>
                            <img
                                src="https://asssets.yellowmellowfilms.com/PhotoSection/img58.PNG"
                                className="w-100"
                                style={{ height: "250px", width: "100%" }}
                                alt=""
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0px",
                                    right: "30px",
                                    backgroundColor: "#fcc122",
                                    padding: "5px 10px",
                                    fontSize: "18px",
                                    color: "#000"
                                }}
                            >
                                <p className="m-0">18 Feb</p>
                            </div>
                            <p style={{ fontSize: "16px", marginTop: "15px", marginBottom: "5px", color: "#212121" }} >POSTED BY YELLOW MELLOW FILMS</p>
                            <p style={{ fontSize: "20px", fontWeight: "600", color: "#212121" }} >How to Make Couples Feel Comfortable in Front of the Camera</p>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#212121" }} >+ READ MORE</p>
                        </Link>

                        <Link to="/blogs" className="col-md-4 col-sm-6 position-relative" style={{ cursor: "pointer", textDecoration: "none" }}>
                            <img
                                src="https://asssets.yellowmellowfilms.com/PhotoSection/img5.jpg"
                                className="w-100"
                                style={{ height: "250px", width: "100%" }}
                                alt=""
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0px",
                                    right: "30px",
                                    backgroundColor: "#fcc122",
                                    padding: "5px 10px",
                                    fontSize: "18px",
                                    color: "#000"
                                }}
                            >
                                <p className="m-0">29 Feb</p>
                            </div>
                            <p style={{ fontSize: "16px", marginTop: "15px", marginBottom: "5px", color: "#212121" }} >POSTED BY YELLOW MELLOW FILMS</p>
                            <p style={{ fontSize: "20px", fontWeight: "600", color: "#212121" }} >10 Must-Have Shots for Every Wedding Photographer</p>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#212121" }} >+ READ MORE</p>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs

