const capitalize = (string) => {
    const firstWord = string[0].toUpperCase();
    const restWords = string.slice(1).toLowerCase();
    console.log(firstWord + restWords);

    return firstWord + restWords;
}

export {
    capitalize
}