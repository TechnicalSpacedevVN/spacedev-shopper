import { currency } from "@/utils"
import { Skeleton } from "../Skeleton"
import { useCategory } from "@/hooks/useCategories"

export const ProductCard = ({ images, categories, rating_average, review_count, name, price, real_price, slug, discount_rate }) => {

    const img1 = images?.[0]?.thumbnail_url
    const img2 = images?.[1] ? images?.[1]?.thumbnail_url : img1
    const category = useCategory(categories)

    return (
        <div className="col-6 col-md-4">
            {/* Card */}
            <div className="product-card card mb-7">
                {/* Badge */}
                {
                    discount_rate > 0 && <div className="card-sale badge badge-dark card-badge card-badge-left text-uppercase">
                        - {discount_rate}%
                    </div>
                }

                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <a className="card-img-hover" href="product.html">

                        <img className="card-img-top card-img-back" src={img1} alt="..." />
                        <img className="card-img-top card-img-front" src={img2} alt="..." />
                    </a>
                    {/* Actions */}
                    <div className="card-actions">
                        <span className="card-action">
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Category */}
                    <div className="card-product-category font-size-xs">
                        {
                            category && <a className="text-muted" href="shop.html">{category.title}</a>
                        }
                        
                    </div>
                    {/* Title */}
                    <div className="card-product-title font-weight-bold">
                        <a className="text-body card-product-name" href="product.html">{name}</a>
                    </div>

                    <div className="card-product-rating">
                        {
                            review_count > 0 && <>
                                {rating_average}
                                <svg svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={14} color="#fdd836" height={14} width={14} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(253, 216, 54)' }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={14} color="#fdd836" height={14} width={14} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(253, 216, 54)' }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={14} color="#fdd836" height={14} width={14} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(253, 216, 54)' }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={14} color="#fdd836" height={14} width={14} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(253, 216, 54)' }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" size={14} color="#fdd836" height={14} width={14} xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(253, 216, 54)' }}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                ({review_count} review)
                            </>
                        }
                    </div>

                    {/* Price */}
                    <div className="card-product-price">
                        {
                            real_price < price ? <>
                                <span className="text-primary sale">{currency(real_price)}</span>
                                <span className="font-size-xs text-gray-350 text-decoration-line-through ml-1">{currency(price)}</span>
                            </> :
                                <span className="text-xl flex h-full items-end">{currency(real_price)}</span>
                        }

                    </div>
                </div>
            </div>
        </div >
    )
}


export const ProductCardLoading = () => {

    return (
        <div className="col-6 col-md-4">
            {/* Card */}
            <div className="product-card card mb-7">



                {/* Image */}
                <div className="card-img">
                    {/* Image */}
                    <a className="card-img-hover" href="product.html">
                        <Skeleton height={300} />
                    </a>
                    {/* Actions */}
                    <div className="card-actions">
                        <span className="card-action">
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-shopping-cart" />
                            </button>
                        </span>
                        <span className="card-action">
                            <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
                                <i className="fe fe-heart" />
                            </button>
                        </span>
                    </div>
                </div>
                {/* Body */}
                <div className="card-body px-0">
                    {/* Category */}
                    <div className="card-product-category font-size-xs">
                        <a className="text-muted" href="shop.html">
                            <Skeleton height="100%" width={150} />
                        </a>
                    </div>
                    {/* Title */}
                    <div className="card-product-title font-weight-bold">
                        <a className="text-body card-product-name" href="product.html"><Skeleton height="100%"/></a>
                    </div>

                    <div className="card-product-rating">
                        <Skeleton height="100%" width={150} />
                    </div>

                    {/* Price */}
                    <div className="card-product-price">
                        <Skeleton height="100%" width={100} />
                    </div>
                </div>
            </div>
        </div >
    )
}
