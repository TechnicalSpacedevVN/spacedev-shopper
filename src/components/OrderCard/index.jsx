import { currency } from '@/utils'
import moment from 'moment'
import { Button } from '../Button'
import { Link, generatePath } from 'react-router-dom'
import { PATH } from '@/config'

export const OrderCard = ({ status, total, _id, createdAt, listItems, finishedDate }) => {
    const checkReturn = status === 'finished' && moment(finishedDate) > moment().add(-7, 'd')

    const date = moment(status === 'finished' ? finishedDate : createdAt)

    return (
        <div className="card card-lg mb-5 border">
            <div className="card-body pb-0">
                {/* Info */}
                <div className="card card-sm">
                    <div className="card-body bg-light">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                {/* Heading */}
                                <h6 className="heading-xxxs text-muted">MÃ ĐƠN HÀNG:</h6>
                                {/* Text */}
                                <Link to={generatePath(PATH.Profile.OrderDetail, { id: _id })} className="mb-lg-0 font-size-sm font-weight-bold">
                                    {_id}
                                </Link>
                            </div>
                            <div className="col-6 col-lg-3">
                                {/* Heading */}
                                <h6 className="heading-xxxs text-muted">{status === 'finished' ? 'Ngày giao hàng' : 'Ngày tạo đơn'}:</h6>
                                {/* Text */}
                                <p className="mb-lg-0 font-size-sm font-weight-bold">
                                    <time dateTime="2019-09-25">
                                        {date.format('DD MMM, YYYY')}
                                    </time>
                                </p>
                            </div>

                            <div className="col-6 col-lg-3">
                                {/* Heading */}
                                <h6 className="heading-xxxs text-muted">Trạng thái:</h6>
                                {/* Text */}
                                <p className="mb-0 font-size-sm font-weight-bold">
                                    Chờ xác nhận
                                </p>
                            </div>
                            <div className="col-6 col-lg-3">
                                {/* Heading */}
                                <h6 className="heading-xxxs text-muted">Tổng tiền:</h6>
                                {/* Text */}
                                <p className="mb-0 font-size-sm font-weight-bold">
                                    {currency(total)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="form-row mb-4 mb-lg-0">
                            {
                                listItems.slice(0, 3).map(e => <div key={e.productId} className="col-3">
                                    {/* Image */}
                                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e.product.thumbnail_url})` }} />
                                </div>)
                            }
                            {listItems.length === 4 && <div className="col-3">
                                {/* Image */}
                                <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${listItems[3].product.thumbnail_url})` }} />
                            </div>}
                            {
                                listItems.length > 4 && (
                                    <div className="col-3">
                                        {/* Image */}
                                        <div className="embed-responsive embed-responsive-1by1 bg-light">
                                            <a className="embed-responsive-item embed-responsive-item-text text-reset" href="#!">
                                                <div className="font-size-xxs font-weight-bold">
                                                    +{listItems.length - 3} <br /> ảnh
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            }



                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="flex justify-end gap-3">
                            {/* <a className="btn btn-xs btn-outline-dark" href="#!">Hủy đơn</a> */}
                            {/* <a className="btn btn-xs btn-outline-dark" href="account-order.html">Xem chi tiết</a> */}
                            {checkReturn && <Button outline>Đổi trả</Button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
