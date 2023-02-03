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
    keepPrevousData = false,
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
    const controllerRef = useRef(new AbortController())

    // useEffect(() => {
    //     if (typeof refetchRef.current === 'boolean') {
    //         refetchRef.current = true
    //     }
    // }, dependencyList)

    useEffect(() => {
        return () => {
            controllerRef.current.abort()
        }
    }, [])

    useEffect(() => {
        if (enabled) {
            fetchData()
        }
    }, [enabled].concat(queryKey))


    const getCacheDataOrPrivousData = async () => {

        if (keepPrevousData && dataRef[cacheName]) {
            return dataRef[cacheName]
        }

        // Kiểm tra cache xem có dữ liệu hay không
        if (queryKey && !refetchRef.current) {
            return cache.get(queryKey)
        }

    }

    const setCacheDataOrPrivousData = (data) => {
        if (keepPrevousData) {
            dataRef[cacheName] = data
        }

        if (cacheName && cacheTime) {
            let expired = cacheTime
            if (cacheTime) {
                expired += Date.now()
            }
            cache.set(cacheName, data, expired)
        }
    }


    const fetchData = async () => {
        controllerRef.current.abort()
        controllerRef.current = new AbortController()

        try {
            setLoading(true)
            setStatus('pending')

            let res = await getCacheDataOrPrivousData()

            if (!res) {
                res = await queryFn({ signal: controllerRef.current.signal })
            }

            setStatus('success')
            setData(res)

            setCacheDataOrPrivousData(res)

            refetchRef.current = false
            setLoading(false)
        } catch (err) {
            console.log(err)
            if (err instanceof CanceledError) {

            } else {
                setError(err)
                setStatus('error')
                setLoading(false)
            }

        }

    }
    return {
        loading,
        error,
        data,
        status
    }
}