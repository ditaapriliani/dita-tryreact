import React, { useState } from 'react'

import MainLayout from '../layout/MainLayout'

const Desimal = () => {
    const [desimal, setDesimal] = useState('')
    const [option, setOption] = useState('')
    const [hasil, setHasil] = useState('')

    const calculate = (e) => {
        e.preventDefault()
        const decimalToBiner = parseInt(desimal, 10).toString(2)
        const decimalToOktal = parseInt(desimal, 10).toString(8)
        const descimalToHeksa = parseInt(desimal, 10).toString(16)


        if (option === 'desimal') {
            setHasil(decimalToBiner)
        } else if (option === 'biner') {
            setHasil(decimalToOktal)
        } else if (option === 'heksadesimal') {
            setHasil(descimalToHeksa)
        }

    }

    return (

        <MainLayout>
            <section className="bg-slate-200 h-screen flex flex-col justify-center items-center mx-auto">
                <div class="max-w-sm rounded bg-white overflow-hidden shadow-lg mb-5">
                    <div class="px-6 py-4">
                        <h1 class="text-center font-bold text-xl mb-2">Konversi Bilangan Desimal</h1>

                        <form onSubmit={calculate}>
                            <div className="flex flex-col items-start justify-normal mb-3">
                                <label htmlFor="desimal">Desimal</label>
                                <input
                                    type="number"
                                    name="desimal"
                                    id="desimal"
                                    className="w-full rounded bg-slate-100 shadow-md"
                                    placeholder='Masukkan bilangan desimal'
                                    value={desimal}
                                    onChange={(e) => setDesimal(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-normal mb-3">
                                <label htmlFor="option">Pilih Bilangan</label>
                                <select className='form-select' id='option' onChange={(e) => setOption(e.target.value)} value={option}>
                                    <option value='biner'>Biner</option>
                                    <option value='oktal'>Oktal</option>
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

export default Desimal