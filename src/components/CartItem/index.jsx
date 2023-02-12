import { updateCartItemAction } from "@/stories/cart"
import { currency } from "@/utils"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"

export const CartItem = ({ productId, product, quantity }) => {
    const dispatch = useDispatch()
    const inputRef = useRef()

    useEffect(() => {
        if(parseInt(inputRef.current.value) !== quantity) {
            inputRef.current.value = quantity
        }
    }, [quantity])

    const onDecrement = () => {
        inputRef.current.value--

        dispatch(updateCartItemAction({
            productId,
            quantity: inputRef.current.value,
        }))

    }

    const onIncrement = () => {
        inputRef.current.value++

        dispatch(updateCartItemAction({
            productId,
            quantity: inputRef.current.value
        }))
    }

    return (
        <li className="list-group-item">
            <div className="row align-items-center">
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
                            <button onClick={onDecrement} className="btn">-</button>
                            <input ref={inputRef} defaultValue={quantity} />
                            <button onClick={onIncrement} className="btn">+</button>
                        </div>
                        {/* Remove */}
                        <a className="font-size-xs text-gray-400 ml-auto" href="#!">
                            <i className="fe fe-x" /> Xóa
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}