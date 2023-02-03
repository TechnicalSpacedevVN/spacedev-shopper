import { localStorageCache, sessionStorageCache } from "@/utils/cache"
import { useRef } from "react"
import { useMemo } from "react"
import { useEffect, useState } from "react"

const _cache = {
    localStorage: localStorageCache,
    sessionStorage: sessionStorageCache,
}


export const useQuery = ({
    queryFn,
    queryKey,
    dependencyList = [],
    enabled = true,
    cacheTime,
    keepPrivousData = false,
    storeDriver = 'localStorage'
} = {}) => {

    const dataRef = useRef({})

    const cache = _cache[storeDriver]
    const refetchRef = useRef()

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [status, setStatus] = useState('idle')

    const cacheName = Array.isArray(queryKey) ? queryKey[0] : queryKey

    // useEffect(() => {
    //     if (typeof refetchRef.current === 'boolean') {
    //         refetchRef.current = true
    //     }
    // }, dependencyList)

    useEffect(() => {
        if (enabled) {
            fetchData()
        }
    }, [enabled].concat(queryKey))


    const getCacheDataOrPrivousData = async () => {

        if (keepPrivousData && dataRef[cacheName]) {
            return dataRef[cacheName]
        }

        // Kiểm tra cache xem có dữ liệu hay không
        if (queryKey && !refetchRef.current) {
            return cache.get(queryKey)
        }

    }

    const setCacheDataOrPrivousData = (data) => {
        if (keepPrivousData) {
            dataRef[cacheName] = data
        }

        if (cacheName) {
            let expired = cacheTime
            if (cacheTime) {
                expired += Date.now()
            }
            cache.set(cacheName, res, expired)
        }
    }


    const fetchData = async () => {
        try {
            setLoading(true)
            setStatus('pending')

            let res = await getCacheDataOrPrivousData()

            if (!res) {
                res = await queryFn()
            }

            setStatus('success')
            setData(res)

            setCacheDataOrPrivousData(res)

            refetchRef.current = false
        } catch (err) {
            setError(err)
            setStatus('error')
        }
        finally {
            setLoading(false)
        }
    }
    return {
        loading,
        error,
        data,
        status
    }
}