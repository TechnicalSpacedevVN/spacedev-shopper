import { useQuery } from '@/hooks/useQuery'
import { userService } from '@/services/user'
import { Drawer } from 'antd'
import React from 'react'
import { ListAddressCard } from '../AddressCard'

export const AddressDrawer = ({ open, onClose }) => {
    const { data, loading } = useQuery({
        queryFn: () => userService.getAddress()
    })

    return (
        <Drawer width={470} open={open} onClose={onClose} headerStyle={{ display: 'none' }} bodyStyle={{ padding: 0 }}>
            <div className="modal-content">
                {/* Close */}
                <button type="button" className="close !outline-none" data-dismiss="modal" aria-label="Close">
                    <i className="fe fe-x" aria-hidden="true" />
                </button>
                {/* Header*/}
                <div className="modal-header line-height-fixed font-size-lg">
                    <strong className="mx-auto">Select your address</strong>
                </div>
                {/* List group */}
                <ul className="list-group list-group-lg list-group-flush">
                    <ListAddressCard 
                        loading={loading}
                        loadingCount={3}
                        data={data?.data}
                    />
                </ul>
                {/* Buttons */}
                <div className="modal-body mt-auto">
                    <a className="btn btn-block btn-outline-dark" href="./shopping-cart.html">Thêm mới</a>
                </div>
            </div>

        </Drawer>
    )
}
