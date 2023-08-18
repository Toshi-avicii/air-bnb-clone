import { Switch } from '@headlessui/react'
import { BsCheck } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { showPricesWithTaxes, showPricesWithoutTaxes } from '../../store/reducers/globalReducer';

export default function ToggleSwitch() {
  const shouldDisplayTaxes = useSelector(state => state.appReducers.global.displayTaxes);
  const dispatch = useDispatch();

  const setEnabledCheckbox = (e) => {
    if(shouldDisplayTaxes) {
      dispatch(showPricesWithoutTaxes());
    } else {
      dispatch(showPricesWithTaxes());
    }
  }

  return (
    <div>
      <Switch
        checked={shouldDisplayTaxes}
        onChange={setEnabledCheckbox}
        className={`${shouldDisplayTaxes ? 'bg-slate-700' : 'bg-slate-300'}
          relative overflow-hidden inline-flex h-[34px] w-[62px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${shouldDisplayTaxes ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none flex justify-center items-center h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
            {
              shouldDisplayTaxes &&  <BsCheck className="text-lg" />
            }
        </span>
      </Switch>
    </div>
  )
}
