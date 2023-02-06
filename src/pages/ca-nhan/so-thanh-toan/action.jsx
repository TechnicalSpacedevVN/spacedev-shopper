import { Field } from '@/components/Field'
import { Portal } from '@/components/Portal'
import { Radio } from '@/components/Radio'
import { PROFILE_TITLE_ID } from '@/config'
import { useForm } from '@/hooks/useForm'
import { required } from '@/utils'
import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'


const rules = {
    cardName: [required()],
    cardNumber: [required()],
    cvv: [required()],
    month: [required()],
    year: [required()],
}

export const ActionPaymentPage = () => {
    const [step, setStep] = useState(0)
    const typeRef = useRef('card')
    const form = useForm(rules)

    return (
        <>
            <Portal selector={PROFILE_TITLE_ID}>
                Add Debit / Credit Card
            </Portal>
            <Helmet>
                <title>Add Debit / Credit Card</title>
            </Helmet>
            <div>
                {
                    step === 0 && <div>
                        {/* Card */}
                        <Radio.Group defaultValue="card" onChange={value => typeRef.current = value}>
                            <div className="form-group card card-sm border">
                                <div className="card-body">
                                    {/* Radio */}
                                    <Radio value="card">
                                        I want to add Debit / Credit Card <img className="ml-2" src="/img/brands/color/cards.svg" alt="..." />
                                    </Radio>
                                </div>
                            </div>
                            {/* Card */}
                            <div className="form-group card card-sm border">
                                <div className="card-body">
                                    {/* Radio */}
                                    <Radio value="paypall">
                                        I want to add PayPall <img src="/img/brands/color/paypal.svg" alt="..." />
                                    </Radio>
                                </div>
                            </div>
                        </Radio.Group>
                        {/* Button */}
                        <button onClick={() => setStep(1)} className="btn btn-dark">
                            Continue <i className="fe fe-arrow-right ml-2" />
                        </button>
                    </div>
                }

                {
                    step === 1 && (
                        <div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Field
                                        label="Card Number *"
                                        placeholder="Card Number *"
                                        {...form.register('cardNumber')}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Field
                                        label="Name on Card *"
                                        placeholder="Name on Card *"
                                        {...form.register('cardName')}
                                    />
                                    
                                </div>
                                <div className="col-12">
                                    {/* Label */}
                                    <label>
                                        Expiry Date *
                                    </label>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="paymentMonth">Month</label>
                                        <select className="custom-select" id="paymentMonth" required>
                                            <option selected disabled value>Month *</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="paymentCardYear">Year</label>
                                        <select className="custom-select" id="paymentCardYear" required>
                                            <option selected disabled value>Year *</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="form-group">
                                        <div className="input-group input-group-merge">
                                            <input className="form-control" id="paymentCardCVV" type="text" placeholder="CVV *" required />
                                            <div className="input-group-append">
                                                <span className="input-group-text" data-toggle="popover" data-placement="top" data-trigger="hover" data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards." data-original-title title>
                                                    <i className="fe fe-help-circle" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="defaultPaymentMethod" />
                                            <label className="custom-control-label" htmlFor="defaultPaymentMethod">Default payment method</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Button */}
                            <button className="btn btn-dark" type="submit">
                                Add Card
                            </button>
                        </div>
                    )
                }
            </div>

        </>
    )
}
