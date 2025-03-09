import React, { useEffect } from 'react'
import './BlogStyles.scss'
import { ImagesPhotosUrl } from '../SourceFiles/BaseUrl';


const Blog = () => {

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        topFunction();
    }, []);

    return (
        <div style={{ backgroundColor: '#e9e9e9' }}>
            <div className='blog-heading'>
                <div className='title-image'>
                    <img itemProp="image" src={`${ImagesPhotosUrl}img77.jpg`} alt=" " />
                </div>

                <div className='container'>
                    <h1 className='heading-blogs'>Our Latest Blogs</h1>
                    <div className="row position-relative" style={{ marginTop: "30px", paddingBottom: "50px" }}>
                        <div className="col-md-4 col-sm-6 position-relative" style={{ cursor: "pointer", marginTop: "5px", marginBottom: "20px" }}>
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
                            <p style={{ fontSize: "16px", marginTop: "15px", marginBottom: "5px" }} >POSTED BY YELLOW MELLOW FILMS</p>
                            <p style={{ fontSize: "20px", fontWeight: "600", color: "#212121" }} >The art of capturing love: A Guide for Photographers</p>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#212121" }} >+ READ MORE</p>
                        </div>

                        <div className="col-md-4 col-sm-6 position-relative" style={{ cursor: "pointer", marginTop: "5px", marginBottom: "20px" }}>
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
                            <p style={{ fontSize: "16px", marginTop: "15px", marginBottom: "5px" }} >POSTED BY YELLOW MELLOW FILMS</p>
                            <p style={{ fontSize: "20px", fontWeight: "600", color: "#212121" }} >How to Make Couples Feel Comfortable in Front of the Camera</p>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#212121" }} >+ READ MORE</p>
                        </div>

                        <div className="col-md-4 col-sm-6 position-relative" style={{ cursor: "pointer", marginTop: "5px", marginBottom: "20px" }}>
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
                            <p style={{ fontSize: "16px", marginTop: "15px", marginBottom: "5px" }} >POSTED BY YELLOW MELLOW FILMS</p>
                            <p style={{ fontSize: "20px", fontWeight: "600", color: "#212121" }} >10 Must-Have Shots for Every Wedding Photographer</p>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#212121" }} >+ READ MORE</p>
                        </div>

                        <div className="col-md-4 col-sm-6 position-relative" style={{ cursor: "pointer", marginTop: "5px", marginBottom: "20px" }}>
                            <img
                                src="https://asssets.yellowmellowfilms.com/PhotoSection/img60.jpg"
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
                            <p style={{ fontSize: "16px", marginTop: "15px", marginBottom: "5px" }} >POSTED BY YELLOW MELLOW FILMS</p>
                            <p style={{ fontSize: "20px", fontWeight: "600", color: "#212121" }} >10 Must-Have Shots for Every Wedding Photographer</p>
                            <p style={{ fontSize: "14px", fontWeight: "700", color: "#212121" }} >+ READ MORE</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog