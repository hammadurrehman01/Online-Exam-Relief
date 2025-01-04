import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import React from 'react'
import { CtaButtons } from '../../(Home)/Banner'

function ExamHelpDivider() {
    const words = `Exams can be stressful, but with the right support, you can gain clarity, confidence, and the calm needed to face any challenge head-on. Our live exam help service is here to guide you every step of the way.`;

  return (
     <div className='my-10 dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-t from-zinc-300 to-[#77BBB8]'>
      <div className='p-5 mx-auto max-w-screen-xl mt-10'>
    <TextGenerateEffect words={words} />
    <div className='flex flex-col lg:flex-row justify-center items-center gap-3 p-3 '>
        <CtaButtons/>
    </div>

    </div>
    </div>
  )
}

export default ExamHelpDivider