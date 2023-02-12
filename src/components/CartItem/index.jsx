import { currency } from "@/utils"

export const CartItem = ({ product, quantity }) => {
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
                            <button className="btn">-</button>
                            <input defaultValue={1} />
                            <button className="btn">+</button>
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