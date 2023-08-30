import DialogModal from "./general/DialogModal"
import {Tab} from '@headlessui/react'
import ToggleSwitch from "./general/ToggleSwitch"
import { BsTranslate } from 'react-icons/bs';
import languages from '../mockData/languageData';
import { GrClose } from 'react-icons/gr';
import currencies from "../mockData/currencyData";
import { classNames, childClickHandler, childCurrencyClickHandler } from "../helpers/langAndCurrencyMethods";

function LangAndCurrencyModal({ isOpen, closeModal, setIsOpen }) {

    return (
        <DialogModal isOpen={isOpen} closeModal={closeModal} maxWidthProp={true}>
            <div className="px-6 pt-4">
                <button onClick={closeModal}>
                    <GrClose />
                </button>
            </div>
            <div className="p-6">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 border-b border-gray-300">
                        <Tab
                            className={({ selected }) =>
                            classNames(
                                'w-full py-2.5 font-medium leading-5 text-left',
                                'focus:outline-none',
                                selected
                                    ? 'bg-white border-b-2 border-black'
                                    : 'text-gray-400'
                            )
                        }
                        >Language and Region</Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 font-medium leading-5 text-left px-4',
                                    'focus:outline-none',
                                    selected
                                        ? 'bg-white border-b-2 border-black'
                                        : 'text-gray-400'
                                )
                            }
                        >
                            Currency
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel>
                            <div className="grid grid-cols-6 grid-rows-2 bg-zinc-100 pt-2 pb-2 px-2 rounded-md max-w-[500px] mt-8">
                                <div className="col-span-5 row-span-1 flex flex-col justify-center">
                                    <div className="flex space-x-2 items-center">
                                        <p className="leading-5 text-lg font-semibold">Translation</p>
                                        <BsTranslate className="text-zinc-700 text-2xl" />
                                    </div>
                                </div>
                                <div className="col-span-5 row-span-1 row-start-2 row-end-3 flex justify-start items-center">
                                    <p className="pt-3 text-zinc-700 font-semibold text-[15px]">Automatically translate descriptions and reviews to English</p>
                                </div>
                                <div className="col-span-1 row-start-1 row-end-3 row-span-2 flex justify-center items-center">
                                    <ToggleSwitch />        
                                </div>
                            </div>

                            <div className="mt-8">
                                <h1 className="leading-10 font-bold text-2xl">Suggested language and region</h1>
                                <button className="flex flex-col px-4 mt-6">
                                    <span className="text-lg font-semibold">English</span>
                                    <span className="text-zinc-500">United Kingdom</span>
                                </button>
                            </div>

                            <div className="mt-8">
                                <h1 className="leading-10 font-bold text-2xl">Choose a language and region</h1>
                                <div className="grid grid-cols-new5 gap-2 w-auto mt-6">
                                    {
                                        languages.map((lang) => {
                                            return (
                                                <button key={lang.id} className={`flex flex-col rounded-xl lang-${lang.id} lang-btn border-2 border-transparent`}>
                                                    <span className={`p-1 pl-2 font-semibold lang-${lang.id} text-left child w-full`} onClick={childClickHandler}>{lang.name}</span>
                                                    <span className={`p-1 pl-2 text-zinc-500 lang-${lang.id} text-left child w-full`} onClick={childClickHandler}>{lang.country}</span>
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                        <div className="mt-8">
                                <h1 className="leading-10 font-bold text-2xl">Choose a currency</h1>
                                <div className="grid grid-cols-new5 gap-2 w-auto mt-6">
                                    {
                                        currencies.map((currency) => {
                                            return (
                                                <button key={currency.id} className={`flex flex-col rounded-xl lang-${currency.id} lang-btn border-2 border-transparent`}>
                                                    <span className={`p-1 pl-2 font-semibold lang-${currency.id} text-left currency-child w-full`} onClick={childCurrencyClickHandler}>{currency.name}</span>
                                                    <span className={`p-1 pl-2 text-zinc-500 lang-${currency.id} text-left currency-child w-full`} onClick={childCurrencyClickHandler}>{currency.symbol}</span>
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </DialogModal>
    )
}

export default LangAndCurrencyModal