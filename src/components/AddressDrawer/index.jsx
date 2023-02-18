import { useQuery } from '@/hooks/useQuery'
import { userService } from '@/services/user'
import { Drawer } from 'antd'
import React from 'react'
import { ListAddressCard } from '../AddressCard'

export const AddressDrawer = ({ onSelect, selected = {}, open, onClose }) => {
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
                <div className="list-group list-group-lg list-group-flush row">
                    <ListAddressCard
                        loading={loading}
                        loadingCount={3}
                        data={data?.data}
                        hideAction
                        className={(e) => ({
                            "border-b !mb-0 ": true,
                            "cursor-pointer !bg-white hover:!bg-[#eefff3]": selected?._id !== e._id,
                            "!bg-[#eefff3]": selected?._id === e._id
                        })}
                        onClick={(e) => {
                            onSelect(e)
                            onClose()
                        }}
                    />
                </div>
                {/* Buttons */}
                <div className="modal-body mt-auto">
                    <a className="btn btn-block btn-outline-dark" href="./shopping-cart.html">Thêm mới</a>
                </div>
            </div>

        </Drawer>
    )
}
