import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
class HandBook extends Component {

    render() {
        return (
            <div className="section-share section-HandBook">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Cẩm nang</span>
                        <button className="btn-section">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className=" bg-image section-handbook" />
                                <div className="handbook text-center">
                                    <div>3 phòng khám Sản phụ khoa uy tín ở Quận Bình Thạnh</div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className=" bg-image section-handbook" />
                                <div className="handbook text-center">
                                    <div>5 Bác sĩ khám chữa trào ngược dạ dày thực quản giỏi tại TP.HCM</div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className=" bg-image section-handbook" />
                                <div className="handbook text-center">
                                    <div>6 bệnh viện, phòng khám tư nhân khám chữa bệnh Tiêu hóa uy tín Hà Nội</div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className=" bg-image section-handbook" />
                                <div className="handbook text-center">
                                    <div>Cắt Polyp dạ dày có nguy hiểm không? Cắt polyp dạ dày ở đâu TP.HCM?</div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className=" bg-image section-handbook" />
                                <div className="handbook text-center">
                                    <div>3 phòng khám Sản phụ khoa uy tín ở Quận Bình Thạnh</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
