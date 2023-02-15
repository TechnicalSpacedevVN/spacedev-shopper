import { removeCartItemAction, toggleCheckoutItemAction, updateCartItemAction } from "@/stores/cart"
import { currency } from "@/utils"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { Popconfirm } from "../Popconfirm"
import { useCart } from "@/hooks/useCart"
import { Spin } from "antd"
import { Checkbox } from "../Checkout"

export const CartItem = ({ allowSelect, productId, product, quantity }) => {
    const dispatch = useDispatch()
    // const inputRef = useRef()
    const [_quantity, setQuantity] = useState(quantity)
    const { loading } = useCart()
    const _loading = loading[productId] || false
    const [openPopconfirm, setOpenpopconfirm] = useState(false)
    const [openPopconfirmQuantity, setOpenPopconfirmQuantity] = useState(false)


    useEffect(() => {
        if (_quantity !== quantity) {
            setQuantity(quantity)
        }
    }, [quantity])

    const onDecrement = () => {
        // inputRef.current.value--
        setQuantity(_quantity - 1)

        dispatch(updateCartItemAction({
            productId,
            quantity: _quantity - 1,
        }))

    }

    const onIncrement = () => {
        // inputRef.current.value++
        setQuantity(_quantity + 1)


        dispatch(updateCartItemAction({
            productId,
            quantity: _quantity + 1
        }))
    }

    const onUpdateQuantity = (val) => {
        dispatch(updateCartItemAction({
            productId,
            quantity: val
        }))
    }

    const onRemoveCartItem = () => {
        dispatch(removeCartItemAction(productId))

    }

    const onSelectCartItemn = (checked) => {
        dispatch(toggleCheckoutItemAction({
            productId,
            checked
        }))
    }

    console.log(_quantity)
    return (
        <Spin spinning={_loading}>
            <li className="list-group-item">
                <div className="row align-items-center">
                    {
                        allowSelect && <Checkbox onChange={onSelectCartItemn}/>
                    }
                    <div className="w-[120px]">
                        {/* Image */}

                        <a href="./product.html">
                            <img className="img-fluid" src={product.thumbnail_url} alt="..." />
                        </a>
                    </div>
                    <div className="flex-1 px-2">
                        {/* Title */}
                        <p className="font-size-sm mb-6">
                            <a className="text-body" href="./product.html">{product.name}</a> <br />
                            <span className="card-product-price">
                                {
                                    product.real_price < product.price ? <>
                                        <span className="sale text-primary">{currency(product.real_price)}</span>
                                        <span className="text-muted line-through ml-1 inline-block">{currency(product.price)}</span>
                                    </> :
                                        <span className="text-muted line-through ml-1 inline-block">{currency(product.real_price)}</span>
                                }
                            </span>
                        </p>
                        {/*Footer */}
                        <div className="d-flex align-items-center">
                            {/* Select */}
                            <div className="btn-group btn-quantity">
                                <Popconfirm
                                    open={openPopconfirmQuantity}
                                    onOpenChange={visible => setOpenPopconfirmQuantity(visible)}
                                    onConfirm={() => {
                                        setOpenPopconfirmQuantity(false)
                                        onRemoveCartItem()
                                    }}
                                    disabled={_quantity > 1}
                                    okText="Xóa"
                                    showCancel={false} placement="bottomRight" title="Thông báo" description="Bạn có chắc chắn muốn xóa sản phẩm này">
                                    <button onClick={_quantity > 1 ? onDecrement : undefined} className="btn">-</button>
                                </Popconfirm>
                                <input
                                    value={_quantity}
                                    onChange={ev => setQuantity(ev.target.value)}
                                    onBlur={ev => {
                                        let val = parseInt(ev.target.value)
                                        if (!val) {
                                            val = 1
                                            setQuantity(val)
                                        }

                                        if (val !== quantity) {
                                            onUpdateQuantity(val)
                                        }
                                    }}
                                />
                                <button onClick={onIncrement} className="btn">+</button>
                            </div>
                            {/* Remove */}
                            <Popconfirm
                                open={openPopconfirm}
                                onOpenChange={visible => setOpenpopconfirm(visible)}
                                okText="Xóa"
                                showCancel={false} placement="bottomRight" title="Thông báo"
                                description="Bạn có chắc chắn muốn xóa sản phẩm này"
                                onConfirm={() => {
                                    setOpenpopconfirm(false)
                                    onRemoveCartItem()
                                }}>
                                <a onClick={ev => ev.preventDefault()} className="font-size-xs text-gray-400 ml-auto" href="#!">
                                    <i className="fe fe-x" /> Xóa
                                </a>
                            </Popconfirm>
                        </div>
                    </div>
                </div>
            </li>
        </Spin>
    )
}