import logo from '../../assets/img/logo_img.png'
import { ResNav } from './res_nav'
import { useState } from 'preact/hooks'
import { Bars3Icon } from '@heroicons/react/24/solid'

export const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <section className="w-full z-30 top-0">
            <div className="flex items-center justify-between px-4 md:px-12 py-2">
                <section>
                    <a href="#"><img src={logo} alt="logo_imec" className="w-20" /></a>
                </section>
                <nav className="hidden md:flex items-center justify-between space-x-36 font-bold text-sm uppercase">
                    <a href="#">sedes</a>
                    <a href="#">donaciones</a>
                    <a href="#">asistencia</a>
                    <a href="#">contacto</a>
                </nav>
                <section className="inline md:hidden">
                    <button onClick={handleToggle}><Bars3Icon className="w-8" /></button>
                </section>
            </div>
            <ResNav toggle={toggle} handleToggle={handleToggle} logo={ logo } />
        </section>
    )
}