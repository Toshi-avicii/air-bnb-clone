import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { BsCheck } from 'react-icons/bs'

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-slate-700' : 'bg-slate-300'}
          relative overflow-hidden inline-flex h-[34px] w-[62px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none flex justify-center items-center h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
            {
                enabled &&  <BsCheck className="text-lg" />
            }
        </span>
      </Switch>
    </div>
  )
}
