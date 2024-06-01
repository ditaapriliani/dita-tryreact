import React, { useState } from 'react';

import MainLayout from '../layout/MainLayout';

const BMI = () => {
    const [berat, setBerat] = useState('')
    const [tinggi, setTinggi] = useState('')
    const [hasil, setHasil] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formValid = tinggi > 0 && berat > 0
        if (!formValid) {
            return
        }

        const rumus = berat / (tinggi * tinggi)

        return setHasil(rumus)
    }

    return (
        <MainLayout>
            <section className="bg-slate-200 h-screen flex flex-col justify-center items-center mx-auto">
                <div class="max-w-sm rounded bg-white overflow-hidden shadow-lg mb-5">
                    <div class="px-6 py-4">
                        <h1 class="text-center font-bold text-xl mb-2">BMI Calculator</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col items-start justify-normal mb-3">
                                <label htmlFor="berat">Berat</label>
                                <input
                                    type="number"
                                    name="berat"
                                    id="berat"
                                    className="w-full rounded bg-slate-100 shadow-md"
                                    placeholder='Masukkan nominal (60)'
                                    value={berat}
                                    onChange={(e) => setBerat(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col items-start justify-normal mb-3">
                                <label htmlFor="tinggi">Tinggi Badan</label>
                                <input
                                    type="number"
                                    name="tinggi"
                                    id="tinggi"
                                    className="w-full rounded bg-slate-100 shadow-md"
                                    placeholder='Masukkan nominal (1.7)'
                                    value={tinggi}
                                    onChange={(e) => setTinggi(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 ease-linear px-3 py-2 rounded-lg">Hitung!</button>
                        </form>
                    </div>
                </div>

                {
                    hasil && hasil < 18.5 ? <div className='bg-red-500 text-white px-3 py-2 rounded-lg'>Kekurangan Berat Badan (Kurus)</div>
                        : hasil && hasil < 25 ? <div className='bg-green-500 text-white px-3 py-2 rounded-lg'>Berat Badan Normal</div>
                            : hasil && hasil < 30 ? <div className='bg-yellow-500 text-white px-3 py-2 rounded-lg'>Kelebihan Berat Badan (Gemuk)</div>
                                : hasil && hasil > 30 ? <div className='bg-red-500 text-white px-3 py-2 rounded-lg'>Obesitas</div>
                                    : <div className='bg-blue-500 text-white px-3 py-2 rounded-lg'>Hasil</div>
                }
            </section>
        </MainLayout>
    );
};

export default BMI;
