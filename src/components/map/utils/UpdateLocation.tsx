import { useState } from 'react'

import { Coords } from "../../../App"

type Props = {
    location: Coords,
    setLocation: (args: Coords) => void
}

const UpdateLocation = ({ location, setLocation }: Props) => {
    const [temp, setTemp] = useState<Coords>(location)

    const handleClick = () => {
        setLocation(temp)
    }
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setTemp({
            ...temp,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    return(
        <div className="loc-form">
            <p>Lon</p>
            <input type="text" value={temp.lng} name="lng" onChange={handleChange} placeholder="longitude" />
            <p>Lat</p>
            <input type="text" value={temp.lat} name="lat" onChange={handleChange} placeholder="latitude" />
            <button onClick={handleClick}>{'>>'}</button>
        </div>)
}

export default UpdateLocation