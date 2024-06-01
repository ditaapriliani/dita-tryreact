import React, { useState } from 'react'

import MainLayout from '../layout/MainLayout'

const Heksadesimal = () => {
    const [heksa, setHeksadesimal] = useState('')
    const [option, setOption] = useState('')
    const [hasil, setHasil] = useState('')

    const calculate = (e) => {
        e.preventDefault()
        const heksaToDesimal = parseInt(heksa, 16)


        if (option === 'desimal') {
            setHasil(heksaToDesimal)
        } else if (option === 'oktal') {
            setHasil(heksaToDesimal.toString(8))
        } else if (option === 'biner') {
            setHasil(heksaToDesimal.toString(2))
        }

    }

    return (

        <MainLayout>
            <section className="bg-slate-200 h-screen flex flex-col justify-center items-center mx-auto">
                <div class="max-w-sm rounded bg-white overflow-hidden shadow-lg mb-5">
                    <div class="px-6 py-4">
                        <h1 class="text-center font-bold text-xl mb-2">Konversi Bilangan Heksadesimal</h1>

                        <form onSubmit={calculate}>
                            <div className="flex flex-col items-start justify-normal mb-3">
                                <label htmlFor="heksadesimal">Heksadesimal</label>
                                <input
                                    type="text"
                                    name="heksa"
                                    id="biner"
                                    className="w-full rounded bg-slate-100 shadow-md"
                                    placeholder='Masukkan bilangan heksadesimal'
                                    value={heksa}
                                    onChange={(e) => setHeksadesimal(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-normal mb-3">
                                <label htmlFor="option">Pilih Bilangan</label>
                                <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                                    <option value='biner'>Biner</option>
                                    <option value='oktal'>Oktal</option>
                                    <option value='heksadesimal'>Desimal</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 ease-linear px-3 py-2 rounded-lg">Hitung!</button>
                            <h2>Hasil akhir : {hasil}</h2>
                        </form>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Heksadesimal