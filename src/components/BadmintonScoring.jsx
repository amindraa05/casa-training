import React, {useState} from 'react'


const BadmintonScoring = () => {
    const [tim1, setTim1] = useState(0)
    const [tim2, setTim2] = useState(0)
    return (
        <>
            <div className='text-center mt-5'>
            <h2 class="block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-inherit antialiased">
                Badmintorn Scoring
            </h2>
            </div>
            <div className='flex justify-center text-center mt-5 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
                <div className='grid grid-cols-2 gap-8'>
                    <div>
                        <h2>Tim 1</h2>
                        <h3>{tim1}</h3>
                        <button  onClick={() => setTim1(tim1 + 1)}>+ 1 Poin</button>
                    </div>
                    <div>
                    <h2>Tim 2</h2>
                    <h3>{tim2}</h3>
                    <button  onClick={() => setTim2(tim2 + 1)}>+ 1 Poin</button>
                </div>
                </div>
                
                
            </div>
            </>
    )
        
        
            
}

export default BadmintonScoring