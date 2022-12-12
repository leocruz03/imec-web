import { XMarkIcon } from '@heroicons/react/24/solid'

export const ResNav = ({ toggle, handleToggle, logo }) => {
    return (
        <section className={toggle ? "hidden" : "w-full h-screen top-0 left-0 block z-50 absolute md:hidden bg-white"}>
            <div className="flex items-end justify-end px-4 py-2">
                <section>
                    <button onClick={ handleToggle }><XMarkIcon className="w-8" /></button>
                </section>
            </div>
            <nav className="flex flex-col px-8 space-y-4">
                <a href="#">sedes</a>
                <a href="#">donaciones</a>
                <a href="#">asistencia</a>
                <a href="#">contactanos</a>
            </nav>
        </section>
    )
}