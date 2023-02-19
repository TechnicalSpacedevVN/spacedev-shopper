import { OrderCard } from '@/components/OrderCard'
import { Tab } from '@/components/Tab'
import { useQuery } from '@/hooks/useQuery'
import { orderService } from '@/services/order'
import { Badge } from 'antd'
export const Order = () => {
    const { data: allData } = useQuery({
        queryFn: () => orderService.getOrder()
    })
    const { data: pendingData } = useQuery({
        queryFn: () => orderService.getOrder('?status=pending')
    })
    const { data: confirmData } = useQuery({
        queryFn: () => orderService.getOrder('?status=confirm')
    })
    const { data: finishedData } = useQuery({
        queryFn: () => orderService.getOrder('?status=finished')
    })
    const { data: cancelData } = useQuery({
        queryFn: () => orderService.getOrder('?status=cancel')
    })
    const { data: shippingData } = useQuery({
        queryFn: () => orderService.getOrder('?status=shipping')
    })


    const { data: pendingCount } = useQuery({
        queryFn: () => orderService.getCount('?status=pending')
    })
    const { data: confirmCount } = useQuery({
        queryFn: () => orderService.getCount('?status=confirm')
    })
    const { data: shipingCount } = useQuery({
        queryFn: () => orderService.getCount('?status=shipping')
    })


    return (
        <Tab defaultActive="all">
            <div className="nav mb-10">
                <Tab.Title value="all">Tất cả đơn</Tab.Title>
                <Badge count={pendingCount?.count}>
                    <Tab.Title value="pending">Đang xử lý</Tab.Title>
                </Badge>
                <Badge count={confirmCount?.count}>
                    <Tab.Title value="confirm">Đã xác nhận</Tab.Title>
                </Badge>
                <Badge count={shipingCount?.count}>
                    <Tab.Title value="shipping">Đang vận chuyển</Tab.Title>
                </Badge>
                <Tab.Title value="finished">Đã giao</Tab.Title>
                <Tab.Title value="cancel">Đã hủy</Tab.Title>
            </div>
            <div className="tab-content">
                <Tab.Content value="all">
                    {
                        allData && allData.data.map(e => <OrderCard key={e._id} {...e} />)
                    }
                </Tab.Content>
                <Tab.Content value="pending">
                    {
                        pendingData && pendingData.data.map(e => <OrderCard key={e._id} {...e} />)
                    }
                </Tab.Content>
                <Tab.Content value="confirm">
                    {
                        confirmData && confirmData.data.map(e => <OrderCard key={e._id} {...e} />)
                    }
                </Tab.Content>
                <Tab.Content value="shipping">
                    {
                        shippingData && shippingData.data.map(e => <OrderCard key={e._id} {...e} />)
                    }
                </Tab.Content>
                <Tab.Content value="finished">
                    {/* <div className="flex items-center flex-col gap-5 text-center">
                        <img width={200} src="/img/empty-order.png" alt />
                        <p>Chưa có đơn hàng nào</p>
                    </div> */}
                    {
                        finishedData && finishedData.data.map(e => <OrderCard key={e._id} {...e} />)
                    }
                </Tab.Content>
                <Tab.Content value="cancel">
                    {
                        cancelData && cancelData.data.map(e => <OrderCard key={e._id} {...e} />)
                    }
                </Tab.Content>
            </div>
            {/* Pagination */}
            <nav className="d-flex justify-content-center justify-content-md-end mt-10">
                <ul className="pagination pagination-sm text-gray-400">
                    <li className="page-item">
                        <a className="page-link page-link-arrow" href="#">
                            <i className="fa fa-caret-left" />
                        </a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">4</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">5</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">6</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link page-link-arrow" href="#">
                            <i className="fa fa-caret-right" />
                        </a>
                    </li>
                </ul>
            </nav>
        </Tab>


    )
}
