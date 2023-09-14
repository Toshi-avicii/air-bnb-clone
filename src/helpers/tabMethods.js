
  const formatCategory = (setSearchParams, category) => {
    const strArr = category.split(' ');
    const catStr = strArr.join('_')
    setSearchParams({ category: catStr });
  }

  function setActiveTabStyle(btn) {
    const tabSlides = document.querySelectorAll('.tab-slide');

    const tabF = Array.from(tabSlides).find((tab) => {
        Array.from(tabSlides).forEach(el => {
            el.classList.remove('border-b-black');
            let para = el.children[0].children[1];
            para.classList.remove('text-black');
            para.classList.add('text-gray-400');
        });
        return btn.childNodes[1].innerText === tab.children[0].children[1].innerText;
    })

    tabF.classList.add("border-b-black");
    let para = tabF.children[0].children[1];
    para.classList.remove('text-gray-400');
    para.classList.add('text-black');
  }

  const setSearch = (setSearchParams, e) => {
    const btn = e.target.children[0];

    if(e.target.classList.contains('tab-slide')) {
        setActiveTabStyle(btn);
        
        let searchCategoryText = btn.childNodes[1].innerText.toLowerCase();
        if(searchCategoryText.includes(' ')) {
            formatCategory(setSearchParams, searchCategoryText);
            return;
        }
        setSearchParams({ category: searchCategoryText });
    }
  }

  const setSearchBtn = (setSearchParams, e) => {
    e.stopPropagation();
    setActiveTabStyle(e.target);
    if(e.target.children) {
        const searchCategoryText = e.target.children[1].innerText.toLowerCase();
        if(searchCategoryText.includes(' ')) {
            formatCategory(setSearchParams, searchCategoryText);
            return;
        }
        setSearchParams({ category: searchCategoryText });
    }
  }

  const setSearchImg = (setSearchParams, e) => {
    setActiveTabStyle(e.target.parentElement);
    e.stopPropagation();
    const searchCategoryText = e.target.nextSibling.innerText.toLowerCase();
    if(searchCategoryText.includes(' ')) {
        formatCategory(setSearchParams, searchCategoryText);
        return;
    }
    setSearchParams({ category: searchCategoryText });
  }

  const setSearchPara = (setSearchParams, e) => {
    e.stopPropagation();
    setActiveTabStyle(e.target.parentElement);
    const searchCategoryText = e.target.innerText.toLowerCase();
    if(searchCategoryText.includes(' ')) {
        formatCategory(setSearchParams, searchCategoryText);
        return;
    }
    setSearchParams({ category: searchCategoryText });
  }


export {
    setSearch,
    setSearchImg,
    setSearchBtn,
    setSearchPara
}