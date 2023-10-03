function minHandler (setFilters, filters, e) {
    setFilters({ ...filters, minPrice: Number(e.target.value) });
}

function maxHandler (setFilters, filters, e) {
    setFilters({ ...filters, maxPrice: Number(e.target.value) });
}

function sliderChangeHandler (setFilters, filters, newVal) {
    setFilters({ ...filters, minPrice: newVal[0], maxPrice: newVal[1] });
}

function clickHandler (setFilters, filters, e) {
    const bedBtns = document.querySelectorAll('.bed-btn');
    bedBtns.forEach((btn) => {
        btn.classList.remove('bg-black');
        btn.classList.remove('text-white');
    });

    e.target.classList.add('bg-black');
    e.target.classList.remove('text-slate-500');
    e.target.classList.add('text-white');

    setFilters({
        ...filters, 
        bedRooms: e.target.innerText === 'Any' ? e.target.innerText : Number(e.target.innerText)
    })
}

function bathClickHandler (setFilters, filters, e) {
    const bathBtns = document.querySelectorAll('.bath-btn');
    bathBtns.forEach((btn) => {
        btn.classList.remove('bg-black');
        btn.classList.remove('text-white');
    });

    e.target.classList.add('bg-black');
    e.target.classList.remove('text-slate-500');
    e.target.classList.add('text-white');
    setFilters({
        ...filters, 
        bathRooms: e.target.innerText === 'Any' ? e.target.innerText : Number(e.target.innerText)
    })
}

function typeHandler (setFilters, filters, e) {
    e.stopPropagation();

    if(e.target.classList.contains('border-black')) {
        e.target.classList.remove('border-black');    
        e.target.classList.remove('bg-gray-300');
        e.target.classList.add('border-gray-300');
    } else {
        e.target.classList.add('bg-gray-300');
        e.target.classList.remove('border-gray-300');
        e.target.classList.add('border-black');
    }

    if(e.target.classList.contains('house-btn') && e.target.classList.contains('border-black')) {
        setFilters((prev) => {
            if(prev.propertyType.includes('house')) {
                return {...prev}
            } else {
                return {...prev, propertyType: [...prev.propertyType, 'house']}
            }
        })
    }

    if(e.target.classList.contains('apartment-btn') && e.target.classList.contains('border-black')) {
        setFilters((prev) => {
            if(prev.propertyType.includes('apartment')) {
                return {...prev}
            } else {
                return {...prev, propertyType: [...prev.propertyType, 'apartment']}
            }
        })
    }

    if(e.target.classList.contains('guesthouse-btn') && e.target.classList.contains('border-black')) {
        setFilters((prev) => {
            if(prev.propertyType.includes('guesthouse')) {
                return {...prev}
            } else {
                return {...prev, propertyType: [...prev.propertyType, 'guesthouse']}
            }
        })
    }

}


function checkboxHandler (category, setFilters, filters, e) {
    if(category === 'amenities') {
        setFilters((prev) => {
            return {
                ...prev,
                amenities: {
                    ...prev.amenities,
                    [e.target.name]: e.target.checked
                }
            }
        })
    }

    if(category === 'accessibility') {
        setFilters((prev) => {
            return {
                ...prev,
                accessibility: {
                    ...prev.accessibility,
                    [e.target.name]: e.target.checked
                }
            }
        })
    }

    if(category === 'hostLangs') {
        if(e.target.checked) {
            setFilters((prev) => {
                if(prev.hostLangs.includes(e.target.name)) {
                    return {...prev}
                } else {
                    return {...prev, hostLangs: [...prev.hostLangs, e.target.name]}
                }
            })
        }

        if(!e.target.checked) {
            setFilters((prev) => {
                let replacedLangsArr = prev.hostLangs.filter(lang => lang !== e.target.name);
                if(prev.hostLangs.includes(e.target.name)) {
                    return {...prev, hostLangs: replacedLangsArr}
                } else {
                    return {...prev, hostLangs: replacedLangsArr}
                }
            })
        }
    }
}

function setEnabledCheckbox (category, setFilters, filters) {
    if(category === 'instantBook') {
        setFilters((prev) => {
          if(filters.bookingOptions.instantBook) { 
            return { ...prev, bookingOptions: { ...prev.bookingOptions, instantBook: false } }
          } else {
              return { ...prev, bookingOptions: { ...prev.bookingOptions, instantBook: true } }
          }
        })
    } 
    
    if(category === 'selfCheckIn') {
        setFilters((prev) => {
            if(filters.bookingOptions.selfCheckIn) { 
              return { ...prev, bookingOptions: { ...prev.bookingOptions, selfCheckIn: false } }
            } else {
                return { ...prev, bookingOptions: { ...prev.bookingOptions, selfCheckIn: true } }
            }
        })
    }

    if(category === 'superhost') {
        setFilters((prev) => {
            if(filters.superhost) { 
              return { ...prev, superhost: false }
            } else {
                return { ...prev, superhost: true }
            }
        })
    }

    if(category === 'airbnbPlus') {
        setFilters((prev) => {
            if(filters.airbnbPlus) { 
              return { ...prev, airbnbPlus: false }
            } else {
                return { ...prev, airbnbPlus: true }
            }
        })
    }
}

function filterHandler (setFilters, filters, closeModal, highestPrice, e) {
    const houseBtn = document.querySelector('.house-btn');
    const apartmentBtn = document.querySelector('.apartment-btn');
    const guesthouseBtn = document.querySelector('.guesthouse-btn');
    
    if(!houseBtn.classList.contains('border-black')) {
        setFilters((prev) => {
            if(prev.propertyType.includes('house')) {
                let replacedPropArr = prev.propertyType.filter(prop => prop !== 'house');
                return {...prev, propertyType: replacedPropArr }
            } else {
                return { ...prev }
            }
        })
    }

    if(!apartmentBtn.classList.contains('border-black')) {
        setFilters((prev) => {
            if(prev.propertyType.includes('apartment')) {
                let replacedPropArr = prev.propertyType.filter(prop => prop !== 'apartment');
                return {...prev, propertyType: replacedPropArr }
            } else {
                return { ...prev } 
            }
        })
    }

    if(!guesthouseBtn.classList.contains('border-black')) {
        setFilters((prev) => {
            if(prev.propertyType.includes('guesthouse')) {
                let replacedPropArr = prev.propertyType.filter(prop => prop !== 'guesthouse');
                return {...prev, propertyType: replacedPropArr }
            } else {
                return { ...prev } 
            }
        })
    }
    console.log(filters);

    closeModal();
}

function clearFilters (setFilters, e) {
    setFilters({
        minPrice: 1,
        maxPrice: 100,
        bedRooms: 'any',
        bathRooms: 'any',
        propertyType: [],
        amenities: {
            wifi: false,
            kitchen: false,
            privateBath: false,
            washer: false,
            dryer: false,
            ac: false
        },
        bookingOptions: {
            instantBook: false,
            selfCheckIn: false
        },
        accessibility: {
            stepFreeGuest: false,
            guest32: false,
            parking: false,
            stepFreePath: false
        },
        superhost: false,
        airbnbPlus: false,
        hostLangs: []
    })
}

export { 
    minHandler, 
    maxHandler, 
    sliderChangeHandler, 
    clickHandler, 
    bathClickHandler, 
    typeHandler,
    checkboxHandler,
    setEnabledCheckbox,
    filterHandler,
    clearFilters
}



 