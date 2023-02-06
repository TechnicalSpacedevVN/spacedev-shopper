import React from "react"

export const withListLoading = (Component, LoadingComponent = Component) => {
    return ({ loadingCount = 3, data, loading, empty, ...props }) => {
        return loading ? Array.from(Array(loadingCount)).map((_, i) => <LoadingComponent key={i} loading />)
            :
            data.length > 0 ? data.map(e => <React.Fragment key={e._id}><Component {...e} {...props} /></React.Fragment>)
                :
                (
                    empty || <div className="col-12"><p className="text-xl border p-5 text-center w-full mb-5">Không tìm thấy dữ liệu 😞</p></div>
                )
    }
}