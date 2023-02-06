import { PATH } from '@/config'
import React from 'react'
import { Link } from 'react-router-dom'

export const PaymentPage = () => {
    return (
        <div className="row">
            <div className="col-12">
                {/* Card */}
                <div className="payment-card card card-lg bg-light mb-8">
                    <div className="card-body">
                        {/* Heading */}
                        <h6 className="mb-6">
                            Debit / Credit Card
                        </h6>
                        {/* Text */}
                        <p className="mb-5">
                            <strong>Card Number:</strong> <br />
                            <span className="text-muted">4242 ∙∙∙∙ ∙∙∙∙ 7856 (Mastercard)</span>
                        </p>
                        {/* Text */}
                        <p className="mb-5">
                            <strong>Expiry Date:</strong> <br />
                            <span className="text-muted">Feb 2022</span>
                        </p>
                        {/* Text */}
                        <p className="mb-0">
                            <strong>Name on Card:</strong> <br />
                            <span className="text-muted">Daniel Robinson</span>
                        </p>
                        <div className="card-action-right-bottom">
                            <a href="#" className="color-success">
                                Thanh toán mặc định
                            </a>
                        </div>
                        {/* Action */}
                        <div className="card-action card-action-right">
                            {/* Button */}
                            <div className="btn btn-xs btn-circle btn-white-primary" href="account-payment-edit.html">
                                <i className="fe fe-edit-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                {/* Card */}
                <div className="payment-card -inset-1 card-lg bg-light mb-8">
                    <div className="card-body">
                        {/* Heading */}
                        <h6 className="mb-6">
                            Debit / Credit Card
                        </h6>
                        {/* Text */}
                        <p className="mb-5">
                            <strong>Card Number:</strong> <br />
                            <span className="text-muted">4242 ∙∙∙∙ ∙∙∙∙ 7856 (Mastercard)</span>
                        </p>
                        {/* Text */}
                        <p className="mb-5">
                            <strong>Expiry Date:</strong> <br />
                            <span className="text-muted">Feb 2022</span>
                        </p>
                        {/* Text */}
                        <p className="mb-0">
                            <strong>Name on Card:</strong> <br />
                            <span className="text-muted">Daniel Robinson</span>
                        </p>
                        {/* Action */}
                        <div className="card-action card-action-right">
                            {/* Button */}
                            <button className="btn btn-xs btn-circle btn-white-primary">
                                <i className="fe fe-edit-2" />
                            </button>
                            {/* Button */}
                            <button className="btn btn-xs btn-circle btn-white-primary">
                                <i className="fe fe-x" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                {/* Button */}
                <Link className="btn btn-block btn-lg btn-outline-border" to={PATH.Profile.NewPayment}>
                    Add Payment Method <i className="fe fe-plus" />
                </Link>
            </div>
        </div>

    )
}
