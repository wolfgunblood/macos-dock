import React from 'react'
import "./Dock.scss";
import {
    Twiiter,
    Discord,
    Netflix,
    Spotify,
    Calculator,
    Calendar,
    Github,
    Finder,
    Weather,
    Photos,
    VScode,
    Music,
} from '../../assets/images';

const Dock = () => {
    return (
        <section className='dock-container'>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Finder</p>
                </div>
            <img src={Finder} alt="Finder" id='finder' className='image-wrapper' />

            </div>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Twitter</p>
                </div>
                <img src={Twiiter} alt="twitter" id='twitter' className='image-wrapper' />

            </div>

            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Music</p>
                </div>
                <img src={Music} alt="Music" className='image-wrapper' />
            </div>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Spotify</p>
                </div>
                <img src={Spotify} alt="Spotify" className='image-wrapper'/>
            </div>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Vscode</p>
                </div>
                <img src={VScode} alt="Vscode" className='image-wrapper' />
            </div>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Weather</p>
                </div>
                <img src={Weather} alt="" className='image-wrapper'/>
            </div>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Photos</p>
                </div>
                <img src={Photos} alt="" className='image-wrapper'/>
            </div>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Calculator</p>
                </div>
                <img src={Calculator} alt="" className='image-wrapper' />
            </div>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Calendar</p>
                </div>
                <img src={Calendar} alt="" className='image-wrapper'/>
            </div>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Discord</p>
                </div>
                <img src={Discord} alt="" className='image-wrapper'/>
            </div>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Github</p>
                </div>
                <img src={Github} alt="" className='image-wrapper'/>
            </div>
            <div className='dock-item'>
                <div className='tool-tip'>
                    <p>Netflix</p>
                </div>
                <img src={Netflix} alt="" className='image-wrapper'/>
            </div>
        </section>
    )
}

export default Dock