import DialogModal from './general/DialogModal';
import { Dialog } from "@headlessui/react"
import { useState } from 'react';
import { GrClose } from "react-icons/gr"
import { useDispatch } from 'react-redux';
import { createNewWishlist } from '../store/reducers/wishlistReducer';

function CreateWishlistModal({ isOpen, closeModal }) {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();

    const changeInputValue = (e) => {
        setInputText(e.target.value);
    }

    const wishlistHandler = (e) => {
        dispatch(createNewWishlist({
            name: inputText
        }));
        closeModal();
    }

    return (
        <DialogModal isOpen={isOpen} closeModal={closeModal}>
            <div className="border-b-2 border-gray-200 p-6">
                <div className="relative">
                    <Dialog.Title
                        as="h3"
                        className="text-xl text-center leading-6 text-gray-900 font-bold"
                    >
                        Create Wishlist
                    </Dialog.Title>
                    <button className='absolute left-0 top-2' onClick={closeModal}>
                        <GrClose />
                    </button>
                </div>
            </div>

            <div className='p-6 border-b border-gray-200'>
                <div>
                    <div className='rounded-md border-neutral-400 border-2 flex flex-col px-2 py-1'>
                        <label htmlFor="new-wishlist" className='text-xs text-neutral-600'>Name</label>
                        <input
                            type="text"
                            id='new-wishlist'
                            className='outline-none font-semibold'
                            value={inputText}
                            onChange={changeInputValue}
                            maxLength={50}
                            minLength={1}
                        />
                    </div>

                    <div className='my-2'>
                        <p className='text-sm text-neutral-400 font-semibold'>
                            {inputText.length}/50 characters
                        </p>
                    </div>
                </div>
            </div>

            <div className='p-6 flex justify-between items-center'>
                <button 
                    className='underline text-lg font-semibold'
                    onClick={() => setInputText('')}
                >
                    Clear
                </button>
                <button 
                    className={`black-btn px-6 py-2 ${(inputText.length > 50 || inputText.length === 0) ? 'disabled-btn' : ""}`} 
                    disabled={(inputText.length > 50 || inputText.length === 0) ? true: false}
                    onClick={wishlistHandler}
                >
                    Create
                </button>
            </div>

        </DialogModal>
    )
}

export default CreateWishlistModal