import React from "react"

export const withListLoading = (Component, LoadingComponent = Component, empty2) => {
    return ({ loadingCount = 3, data, loading, empty, className, onClick, ...props }) => {
        return loading ? Array.from(Array(loadingCount)).map((_, i) => <LoadingComponent key={i} loading />)
            :
            data.length > 0 ? data.map(e => <React.Fragment key={e._id}><Component onClick={() => onClick?.(e)} className={typeof className === 'function' ? className(e) : className} {...e} {...props} /></React.Fragment>)
                :
                (
                    empty || empty2 || <div className="col-12"><p className="text-xl border p-5 text-center w-full mb-5">Không tìm thấy dữ liệu 😞</p></div>
                )
    }
}