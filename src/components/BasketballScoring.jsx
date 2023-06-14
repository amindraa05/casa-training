import React, {useState} from 'react'
import { Button } from "@material-tailwind/react";

const BasketballScoring = () => {
  const [score, setScore] = useState(0)
  return (
    <>
        <div className='text-center'>
            <h2 class="block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-inherit antialiased">
                Basketball Scoring
            </h2>
        </div>

        <div className='flex justify-center text-center mt-5 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700'>
            <div className='p-2'>
        <h3 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-inherit antialiased">
                Score
            </h3>
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-inherit antialiased">{score}</h5>
                <div>
                    <Button className='mt-3 mx-1' onClick={() => setScore(score + 1)}>1</Button>
                    <Button className='mt-3 mx-1' onClick={() => setScore(score + 2)}>2</Button>
                    <Button className='mt-3 mx-1' onClick={() => setScore(score + 3)}>3</Button>
                </div>
            </div>
          </div>
    </>
  )
}

export default BasketballScoring