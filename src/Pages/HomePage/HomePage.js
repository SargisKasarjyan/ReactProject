import './HomePage.css'
import React, { useState } from 'react'

export default function HomePage() {
    const [count, setCount] = useState(false)
    const [nkar, setNkar] = useState(false)
    const [real, setReal] = useState(false)

    return <div className='masin'>
        <div className='as' >
            <div className='xaz' onClick={() => setCount((e) => !e)} ></div>
            {count && <div className='real' ><a className='a1' href='https://www.nationalgeographic.com/animals/mammals/facts/gray-wolf'>thrwh5ythwtyshtr</a></div>}
        </div>
        <div className='as'>
            <div className='realakan' onClick={() => setNkar((e) => !e)} ></div>
            {nkar && <div className='real' ><a className='a1' target="_blank" href='https://pixabay.com/photos/' >trehtthtrefhh </a> </div>}
        </div>
        <div className='as' >
            <div className='mshakuyt' onClick={() =>setReal((e) => !e)} ></div>
            {real && <div className='real'><a className='a1' href='https://www.facebook.com/' >trehythethtr</a></div>}
        </div>
    </div>
}