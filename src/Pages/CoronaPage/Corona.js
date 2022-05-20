import React, { useState } from "react";
import axios from "axios";
import './Corona.css'


const MyComponent = () => {
    const [name, setName] = useState('')
    const [data, setData] = useState({name: "",confirmed: "",deaths: ""})
    const [loading, setLoading] = useState(false)
    const hendleSend = () => {
        setLoading(true);
        let f = setTimeout(()=>{axios.get(`https://corona-api.com/countries/${name}`)
        .then((res) => {
            console.log(res);
            if (Object.keys(res.data.data).length === 0) {
                alert("inchvor ban ayn che")
            } else {
                const name = res.data.data.name
                console.log(name);
                setData((data) =>{
                    return {...data,name:name}
                })
            }

            const confirmed = res.data.data.latest_data.confirmed
            setData((a) => {
                return {...a,confirmed:confirmed}
            })

            const deaths = res.data.data.latest_data.deaths
            setData((f) => {
                return{...f,deaths:deaths}
            })
        })

     clearTimeout(f)
     setLoading(false)
    }, 2000)

    }
    const hemdleChango = (e) => {
        const {value} = e.target;
        setName(value)
    }
    if (loading) {
        return <div>loading...</div>
    }

    console.log(data);
    return (
        <div>
            <input onChange={hemdleChango}/>
            <button onClick={hendleSend}>click</button>
            {data.name !== '' && <div>erkir {data.name}</div>}
            {data.confirmed !== "" ? <div>hastatvatnern en {data.confirmed}</div> : null}
            {data.deaths !== "" && <div>voric mahacacnern en { data.deaths}</div>}
        </div>
    )
}
export default MyComponent