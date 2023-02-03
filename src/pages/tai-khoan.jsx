import React from 'react'

export const Account = () => {
    return (
        <section className="py-12">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg mb-10 mb-md-0">
                            <div className="card-body">
                                {/* Heading */}
                                <h6 className="mb-7">Returning Customer</h6>
                                {/* Form */}
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="loginEmail">
                                                    Email Address *
                                                </label>
                                                <input className="form-control form-control-sm" id="loginEmail" type="email" placeholder="Email Address *" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Password */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="loginPassword">
                                                    Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="loginPassword" type="password" placeholder="Password *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md">
                                            {/* Remember */}
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                                    <label className="custom-control-label" htmlFor="loginRemember">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            {/* Link */}
                                            <div className="form-group">
                                                <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                                                    Password?</a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <a href="./account-personal-info.html" className="btn btn-sm btn-dark" type="submit">
                                                Sign In
                                            </a>
                                        </div>
                                        <div className="col-12">
                                            <p className="font-size-sm text-muted mt-5 mb-2 font-light">Tài khoản demo: <b className="text-black">demo@spacedev.com / Spacedev@123</b></p>
                                            <p className="font-size-sm text-muted mt-5 mb-2 font-light text-justify">
                                                Chúng tôi cung cấp cho bạn tài khoản demo vì mục đích học tập, để đảm bảo những người khác có thể sử dụng chung tài khoản chúng tôi sẽ
                                                hạn chế rất nhiều quyền trên tài khoản này ví dụ:  <br />
                                                - Không thay đổi thông tin cá nhân, mật khẩu <br />
                                                - không reset password,... <br /><br />
                                                Để có thể sử dụng toàn bộ chức năng trên website, vui lòng tiến hành <b className="text-black">đăng ký</b> bằng tài khoản email có thật
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Card */}
                        <div className="card card-lg">
                            <div className="card-body">
                                {/* Heading */}
                                <h6 className="mb-7">New Customer</h6>
                                {/* Form */}
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Email */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerFirstName">
                                                    Full Name *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerFirstName" type="text" placeholder="Full Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Email */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerEmail">
                                                    Email Address *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerEmail" type="email" placeholder="Email Address *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerPassword">
                                                    Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {/* Password */}
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="registerPasswordConfirm">
                                                    Confirm Password *
                                                </label>
                                                <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confirm Password *" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-auto">
                                            {/* Link */}
                                            <div className="form-group font-size-sm text-muted font-light">
                                                By registering your details, you agree with our Terms &amp; Conditions,
                                                and Privacy and Cookie Policy.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* Button */}
                                            <a href="./account-personal-info.html" className="btn btn-sm btn-dark" type="submit">
                                                Register
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
