import {memo} from 'react'

type Props = {
    mapNode: any
}

function Map({ mapNode }: Props){
    return(<div ref={mapNode} style={{ width: "100vw", height: "100vh" }} />)
}

export default memo(Map);