import DialogModal from "./general/DialogModal"
import {Tab} from '@headlessui/react'
import ToggleSwitch from "./general/ToggleSwitch"
import { BsTranslate } from 'react-icons/bs';
import languages from '../mockData/languageData';
import { GrClose } from 'react-icons/gr';

function LangAndCurrencyModal({ isOpen, closeModal, setIsOpen }) {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    // const clickHandler = (e) => {
    //     const langBtns = document.querySelectorAll('.lang-btn');
    //     langBtns.forEach((btn) => {
    //         if(e.target !== btn) return;
    //         console.log(this);  
    //         btn.style.border = "3px solid transparent";
    //         let children = btn.querySelectorAll('.child');
    //         children[0].style.border = 'none';
    //         children[1].style.border = "none";
    //         e.target.style.border = "3px solid gray";
    //     })
    // }

    const childClickHandler = (e) => {
        const langBtnChildren = document.querySelectorAll('.child');
        langBtnChildren.forEach((child) => {
            child.style.border = "none";
            child.parentElement.style.border = '3px solid transparent';
            child.parentElement.style.backgroundColor = "transparent";
            e.target.parentElement.style.border = "3px solid gray";
            e.target.parentElement.style.backgroundColor = "rgba(210, 210, 210, 0.2)";
        })
    }

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
                            <p>this is the second</p>
                            
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </DialogModal>
    )
}

export default LangAndCurrencyModal