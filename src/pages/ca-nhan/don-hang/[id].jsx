import { Button } from '@/components/Button'
import { useQuery } from '@/hooks/useQuery'
import { orderService } from '@/services/order'
import { currency } from '@/utils'
import moment from 'moment'
import React from 'react'
import { useParams } from 'react-router-dom'

const SHIPPING = {
    'giao-hang-nhanh': 'Giao hàng nhanh',
    'mien-phi': 'Miễn phi',
    'tieu-chuan': 'Tiêu chuẩn'
}
const PAYMENT = {
    'money': 'Trả tiền khi nhận hàng',
    'card': 'Thanh toán bằng thẻ'
}

export const OrderDetail = () => {
    const { id } = useParams()
    const { data: detail } = useQuery({
        queryFn: () => orderService.getOrderDetail(id)
    })

    let checkReturn

    if (detail) {
        const { status, finishedDate } = detail.data
        checkReturn = status === 'finished' && moment(finishedDate) > moment().add(-7, 'd')
    }



    return (
        <>
            <div>
                {/* Order */}
                <div className="card card-lg mb-5 border">
                    <div className="card-body pb-0">
                        {/* Info */}
                        <div className="card card-sm">
                            <div className="card-body bg-light">
                                <div className="row">
                                    <div className="col-6 col-lg-3">
                                        {/* Heading */}
                                        <h6 className="heading-xxxs text-muted">Mã đơn hàng:</h6>
                                        {/* Text */}
                                        <p className="mb-lg-0 font-size-sm font-weight-bold">
                                            {detail?.data?._id}
                                        </p>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        {/* Heading */}
                                        <h6 className="heading-xxxs text-muted">Ngày vận chuyển:</h6>
                                        {/* Text */}
                                        <p className="mb-lg-0 font-size-sm font-weight-bold">
                                            <time dateTime="2019-10-01">
                                                01 Oct, 2019
                                            </time>
                                        </p>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        {/* Heading */}
                                        <h6 className="heading-xxxs text-muted">Trạng thái:</h6>
                                        {/* Text */}
                                        <p className="mb-0 font-size-sm font-weight-bold">
                                            Đã giao hàng
                                        </p>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        {/* Heading */}
                                        <h6 className="heading-xxxs text-muted">Tổng tiền:</h6>
                                        {/* Text */}
                                        <p className="mb-0 font-size-sm font-weight-bold">
                                            {currency(detail?.data?.total)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        {/* Heading */}
                        <h6 className="mb-7">Order Items ({detail?.data?.totalQuantity})</h6>
                        {/* Divider */}
                        <hr className="my-5" />
                        {/* List group */}
                        <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x">
                            {
                                detail?.data?.listItems?.map(e => <li key={e.productId} className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-4 col-md-3 col-xl-2">
                                            {/* Image */}
                                            <a href="product.html"><img src={e.product.thumbnail_url} alt={e.product.name} className="img-fluid" /></a>
                                        </div>
                                        <div className="col">
                                            {/* Title */}
                                            <p className="mb-4 font-size-sm font-weight-bold">
                                                <a className="text-body" href="product.html">{e.product.name} x {e.quantity}</a> <br />
                                                <span className="text-muted">{currency(e.product.real_price)}</span>
                                            </p>

                                            <div className="card-right-info">
                                                {checkReturn && <Button outline>Đổi trả</Button>}
                                                {/* <a href="#" className="btn btn-sm btn-block btn-outline-dark">Đỏi trả</a> */}
                                                {/* <a href="#" className="btn btn-sm btn-block btn-outline-dark">Viết review</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>)
                            }

                        </ul>
                    </div>
                </div>
                {/* Total */}
                <div className="card card-lg mb-5 border">
                    <div className="card-body">
                        {/* Heading */}
                        <h6 className="mb-7">Order Total</h6>
                        {/* List group */}
                        <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                            <li className="list-group-item d-flex">
                                <span>Subtotal</span>
                                <span className="ml-auto">{currency(detail?.data?.subTotal)}</span>
                            </li>
                            <li className="list-group-item d-flex">
                                <span>Promotion</span>
                                <span className="ml-auto">{currency(detail?.data?.promotion?.discount)}</span>
                            </li>
                            <li className="list-group-item d-flex">
                                <span>Shipping</span>
                                <span className="ml-auto">{currency(detail?.data?.shipping?.shippingPrice)}</span>
                            </li>
                            <li className="list-group-item d-flex">
                                <span>Tax</span>
                                <span className="ml-auto">{currency(detail?.data?.tax)}</span>
                            </li>
                            <li className="list-group-item d-flex font-size-lg font-weight-bold">
                                <span>Total</span>
                                <span className="ml-auto">{currency(detail?.data?.subTotal)}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Details */}
                <div className="card card-lg border">
                    <div className="card-body">
                        {/* Heading */}
                        <h6 className="mb-7">Billing &amp; Shipping Details</h6>
                        {/* Content */}
                        <div className="row">
                            <div className="col-12 col-md-4">
                                {/* Heading */}
                                <p className="mb-4 font-weight-bold">
                                    Shipping Address:
                                </p>
                                <p className="mb-7 mb-md-0 text-gray-500">
                                    {detail?.data?.shipping?.phone}, <br />
                                    {detail?.data?.shipping?.email},<br />
                                    {detail?.data?.shipping?.fullName} <br />
                                    {detail?.data?.shipping?.province}, <br />
                                    {detail?.data?.shipping?.district}, <br />
                                    {detail?.data?.shipping?.address}, <br />
                                </p>
                            </div>

                            <div className="col-12 col-md-4">
                                {/* Heading */}
                                <p className="mb-4 font-weight-bold">
                                    Shipping Method:
                                </p>
                                <p className="mb-7 text-gray-500">
                                    {SHIPPING[detail?.data?.shipping?.shippingMethod]} <br />
                                    (5 - 7 days)
                                </p>
                                {/* Heading */}
                                <p className="mb-4 font-weight-bold">
                                    Payment Method:
                                </p>
                                <p className="mb-0 text-gray-500">
                                    {PAYMENT[detail?.data?.payment?.paymentMethod]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
