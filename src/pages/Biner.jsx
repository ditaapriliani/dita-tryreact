import React, { useState } from 'react';

import MainLayout from '../layout/MainLayout'

const Biner = () => {
    const [biner, setBiner] = useState('')
    const [option, setOption] = useState('')
    const [hasil, setHasil] = useState('')

    const calculate = (e) => {
        e.preventDefault()
        const binerToDecimal = parseInt(biner, 2)

        if (option === 'desimal') {
            setHasil(binerToDecimal)
        } else if (option === 'oktal') {
            setHasil(binerToDecimal.toString(8))
        } else if (option === 'heksadesimal') {
            setHasil(binerToDecimal.toString(16))
        }

    }

    return (

        <MainLayout>
            <section className="bg-slate-200 h-screen flex flex-col justify-center items-center mx-auto">
                <div class="max-w-sm rounded bg-white overflow-hidden shadow-lg mb-5">
                    <div class="px-6 py-4">
                        <h1 class="text-center font-bold text-xl mb-2">Konversi Bilangan Biner</h1>

                        <form onSubmit={calculate}>
                            <div className="flex flex-col items-start justify-normal mb-3">
                                <label htmlFor="biner">Biner</label>
                                <input
                                    type="number"
                                    name="biner"
                                    id="biner"
                                    className="w-full rounded bg-slate-100 shadow-md"
                                    placeholder='Masukkan bilangan biner'
                                    value={biner}
                                    onChange={(e) => setBiner(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-normal mb-3">
                                <label htmlFor="option">Pilih Bilangan</label>
                                <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                                    <option value='oktal'>Oktal</option>
                                    <option value='desimal'>Desimal</option>
                                    <option value='heksadesimal'>Heksadesimal</option>
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

export default Biner