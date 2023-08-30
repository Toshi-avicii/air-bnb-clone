function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

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

const childCurrencyClickHandler = (e) => {
    const currencyBtnChildren = document.querySelectorAll('.currency-child');
    currencyBtnChildren.forEach((child) => {
        child.style.border = "none";
        child.parentElement.style.border = '3px solid transparent';
        child.parentElement.style.backgroundColor = "transparent";
        e.target.parentElement.style.border = "3px solid gray";
        e.target.parentElement.style.backgroundColor = "rgba(210, 210, 210, 0.2)";
    })
}

export { 
    classNames,
    childClickHandler,
    childCurrencyClickHandler
}