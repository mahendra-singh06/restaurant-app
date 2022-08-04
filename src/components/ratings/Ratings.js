/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../../App.css";
import "../../components/icons/feather.css";

function Ratings() {
  return (
    <>
        <div className="mb-3">
                    <div id="ratings-and-reviews" className="bg-white shadow-sm d-flex align-items-center rounded p-3 mb-3 clearfix restaurant-detailed-star-rating">
                        <h6 className="mb-0">Rate this Place</h6>
                        <div className="star-rating ml-auto">
                            <div className="d-inline-block h6 m-0"><i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star text-warning"></i>
                                <i className="feather-star"></i>
                            </div>
                            <b className="text-black ml-2">334</b>
                        </div>
                    </div>
                    <div className="bg-white rounded p-3 mb-3 clearfix graph-star-rating rounded shadow-sm">
                        <h6 className="mb-0 mb-1">Ratings and Reviews</h6>
                        <p className="text-muted mb-4 mt-1 small">Rated 3.5 out of 5</p>
                        <div className="graph-star-rating-body">
                            <div className="rating-list">
                                <div className="rating-list-left font-weight-bold small">5 Star</div>
                                <div className="rating-list-center">
                                    <div className="progress">
                                        <div role="progressbar" className="progress-bar bg-info" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100" style="width: 56%;"></div>
                                    </div>
                                </div>
                                <div className="rating-list-right font-weight-bold small">56 %</div>
                            </div>
                            <div className="rating-list">
                                <div className="rating-list-left font-weight-bold small">4 Star</div>
                                <div className="rating-list-center">
                                    <div className="progress">
                                        <div role="progressbar" className="progress-bar bg-info" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" style="width: 23%;"></div>
                                    </div>
                                </div>
                                <div className="rating-list-right font-weight-bold small">23 %</div>
                            </div>
                            <div className="rating-list">
                                <div className="rating-list-left font-weight-bold small">3 Star</div>
                                <div className="rating-list-center">
                                    <div className="progress">
                                        <div role="progressbar" className="progress-bar bg-info" aria-valuenow="11" aria-valuemin="0" aria-valuemax="100" style="width: 11%;"></div>
                                    </div>
                                </div>
                                <div className="rating-list-right font-weight-bold small">11 %</div>
                            </div>
                            <div className="rating-list">
                                <div className="rating-list-left font-weight-bold small">2 Star</div>
                                <div className="rating-list-center">
                                    <div className="progress">
                                        <div role="progressbar" className="progress-bar bg-info" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100" style="width: 6%;"></div>
                                    </div>
                                </div>
                                <div className="rating-list-right font-weight-bold small">6 %</div>
                            </div>
                            <div className="rating-list">
                                <div className="rating-list-left font-weight-bold small">1 Star</div>
                                <div className="rating-list-center">
                                    <div className="progress">
                                        <div role="progressbar" className="progress-bar bg-info" aria-valuenow="4" aria-valuemin="0" aria-valuemax="100" style="width: 4%;"></div>
                                    </div>
                                </div>
                                <div className="rating-list-right font-weight-bold small">4 %</div>
                            </div>
                        </div>
                        <div className="graph-star-rating-footer text-center mt-3"><button type="button" className="btn btn-primary btn-block btn-sm">Rate and Review</button></div>
                    </div>
                    <div className="bg-white p-3 mb-3 restaurant-detailed-ratings-and-reviews shadow-sm rounded">
                        <a className="text-primary float-right" href="#">Top Rated</a>
                        <h6 className="mb-1">All Ratings and Reviews</h6>
                        <div className="reviews-members py-3">
                            <div className="media">
                                <a href="#"><img alt="#" src="img/reviewer1.png" className="mr-3 rounded-pill" /></a>
                                <div className="media-body">
                                    <div className="reviews-members-header">
                                        <div className="star-rating float-right">
                                            <div className="d-inline-block" style="font-size: 14px;"><i className="feather-star text-warning"></i>
                                                <i className="feather-star text-warning"></i>
                                                <i className="feather-star text-warning"></i>
                                                <i className="feather-star text-warning"></i>
                                                <i className="feather-star"></i>
                                            </div>
                                        </div>
                                        <h6 className="mb-0"><a className="text-dark" href="#">Trump</a></h6>
                                        <p className="text-muted small">Tue, 20 Mar 2020</p>
                                    </div>
                                    <div className="reviews-members-body">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameNameical Latin literature from 45 BC, making it over 2000 years old.</p>
                                    </div>
                                    <div className="reviews-members-footer"><a className="total-like btn btn-sm btn-outline-primary" href="#"><i className="feather-thumbs-up"></i> 856M</a> <a className="total-like btn btn-sm btn-outline-primary" href="#"><i className="feather-thumbs-down"></i> 158K</a>
                                        <span className="total-like-user-main ml-2" dir="rtl">
                                 <a href="#" aria-describedby="tooltip-top0"><img alt="#"src="img/reviewer3.png" className="total-like-user rounded-pill" /></a>
                                 <a href="#" aria-describedby="tooltip-top1"><img alt="#"src="img/reviewer4.png" className="total-like-user rounded-pill" /></a>
                                 <a href="#"><img alt="#"src="img/reviewer5.png" className="total-like-user rounded-pill" /></a>
                                 <a href="#" aria-describedby="tooltip-top3"><img alt="#"src="img/reviewer6.png" className="total-like-user rounded-pill" /></a>
                                 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="reviews-members py-3">
                            <div className="media">
                                <a href="#"><img alt="#" src="img/reviewer2.png" className="mr-3 rounded-pill" /></a>
                                <div className="media-body">
                                    <div className="reviews-members-header">
                                        <div className="star-rating float-right">
                                            <div className="d-inline-block" style="font-size: 14px;"><i className="feather-star text-warning"></i>
                                                <i className="feather-star text-warning"></i>
                                                <i className="feather-star text-warning"></i>
                                                <i className="feather-star text-warning"></i>
                                                <i className="feather-star"></i>
                                            </div>
                                        </div>
                                        <h6 className="mb-0"><a className="text-dark" href="#">Jhon Smith</a></h6>
                                        <p className="text-muted small">Tue, 20 Mar 2020</p>
                                    </div>
                                    <div className="reviews-members-body">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </div>
                                    <div className="reviews-members-footer"><a className="total-like btn btn-sm btn-outline-primary" href="#"><i className="feather-thumbs-up"></i> 88K</a> <a className="total-like btn btn-sm btn-outline-primary" href="#"><i className="feather-thumbs-down"></i> 1K</a><span className="total-like-user-main ml-2"
                                            dir="rtl"><a href="#"><img alt="#"src="img/reviewer3.png" className="total-like-user rounded-pill" /></a><a href="#"><img alt="#"src="img/reviewer4.png" className="total-like-user rounded-pill" /></a><a href="#"><img alt="#"src="img/reviewer5.png" className="total-like-user rounded-pill" /></a><a href="#"><img alt="#"src="img/reviewer6.png" className="total-like-user rounded-pill" /></a></span></div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <a className="text-center w-100 d-block mt-3 font-weight-bold" href="#">See All Reviews</a>
                    </div>
                    <div className="bg-white p-3 rating-review-select-page rounded shadow-sm">
                        <h6 className="mb-3">Leave Comment</h6>
                        <div className="d-flex align-items-center mb-3">
                            <p className="m-0 small">Rate the Place</p>
                            <div className="star-rating ml-auto">
                                <div className="d-inline-block"><i className="feather-star text-warning"></i>
                                    <i className="feather-star text-warning"></i>
                                    <i className="feather-star text-warning"></i>
                                    <i className="feather-star text-warning"></i>
                                    <i className="feather-star"></i>
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="form-group"><label className="form-label small">Your Comment</label><textarea className="form-control"></textarea></div>
                            <div className="form-group mb-0"><button type="button" className="btn btn-primary btn-block"> Submit Comment </button></div>
                        </form>
                    </div>
                </div>
            
        
    </>
  )
}

export default Ratings