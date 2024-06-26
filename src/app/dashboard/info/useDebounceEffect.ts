import { useEffect, DependencyList } from 'react'

export function useDebounceEffect(
    fn: () => void,
    waitTime: number,
    deps?: DependencyList,
    // do this to fix error if yu want - deps: [],
) {
    useEffect(() => {
        const t = setTimeout(() => {
            fn.apply(undefined, deps)
        }, waitTime)

        return () => {
            clearTimeout(t)
        }
    }, deps)
}
