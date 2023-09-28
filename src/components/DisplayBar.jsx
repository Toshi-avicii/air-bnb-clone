import ToggleSwitch from "./general/ToggleSwitch"
import { useSelector, useDispatch } from 'react-redux';
import { showPricesWithTaxes, showPricesWithoutTaxes } from '../store/reducers/globalReducer';

function DisplayBar() {
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
    <div className="hidden md:flex md:justify-center md:items-center md:my-6">
        <div className="ring-1 ring-gray-200 py-4 px-5 flex items-center rounded-lg">
            <div className="pr-3 flex items-center border-r-2 border-gray-300 min-h-[36px]">
                <p className="leading-6 font-semibold text-lg">Display total price</p>
            </div>

            <div className="px-3 min-w-[350px]">
                <p className="text-gray-400 text-lg">Include all fees, before taxes</p>
            </div>
            <ToggleSwitch 
              isChecked={shouldDisplayTaxes}
              setIsChecked={setEnabledCheckbox}
            /> 
        </div>
    </div>
  )
}

export default DisplayBar