import React from 'react'

export const Profile = () => {
    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Heading */}
                        <h3 className="mb-10">Thông tin cá nhân</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        {/* Nav */}
                        <nav className="mb-10 mb-md-0">
                            <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                                <a className="list-group-item list-group-item-action dropright-toggle " href="account-orders.html">Theo dõi đơn hàng</a>
                                <a className="list-group-item list-group-item-action dropright-toggle " href="account-personal-info.html">Thông tin cá nhân</a>
                                <a className="list-group-item list-group-item-action dropright-toggle active" href="account-wishlist.html">Sản phẩm yêu thích</a>
                                <a className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">Sổ địa chỉ</a>
                                <a className="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">Sổ thanh toán</a>
                                <a className="list-group-item list-group-item-action dropright-toggle" href="#!">Đăng xuất</a>
                            </div>
                        </nav>
                    </div>
                    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                        {/* Form */}
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="profile-avatar">
                                        <div className="wrap">
                                            <img src="./img/avt.png" />
                                            <i className="icon">
                                                <img src="./img/icons/icon-camera.svg" />
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label htmlFor="accountFirstName">
                                            Full Name *
                                        </label>
                                        <input className="form-control form-control-sm" id="accountFirstName" type="text" placeholder="Full Name *" defaultValue="Daniel" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label htmlFor="accountEmail">
                                            Phone Number *
                                        </label>
                                        <input className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Phone Number *" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* Email */}
                                    <div className="form-group">
                                        <label htmlFor="accountEmail">
                                            Email Address *
                                        </label>
                                        <input disabled className="form-control form-control-sm" id="accountEmail" type="email" placeholder="Email Address *" defaultValue="support@spacedev.com" required />
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    {/* Password */}
                                    <div className="form-group">
                                        <label htmlFor="accountPassword">
                                            Current Password
                                        </label>
                                        <input className="form-control form-control-sm" id="accountPassword" type="password" placeholder="Current Password" required />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="AccountNewPassword">
                                            New Password
                                        </label>
                                        <input className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="New Password" required />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="AccountNewPassword">
                                            Conform Password
                                        </label>
                                        <input className="form-control form-control-sm" id="AccountNewPassword" type="password" placeholder="Conform Password" required />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <input className="form-control form-control-sm" type="date" placeholder="dd/mm/yyyy" required />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/* Gender */}
                                    <div className="form-group mb-8">
                                        <label>Gender</label>
                                        <div className="btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-sm btn-outline-border active">
                                                <input type="radio" name="gender" defaultChecked /> Male
                                            </label>
                                            <label className="btn btn-sm btn-outline-border">
                                                <input type="radio" name="gender" /> Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Button */}
                                    <button className="btn btn-dark" type="submit">Save Changes</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
