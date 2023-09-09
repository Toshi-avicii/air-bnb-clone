// Function to check if an element is visible in the viewport
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the element is fully visible in the viewport
    return (
        rect.top >= 0 &&
        rect.bottom <= windowHeight
    );
}

// Get the element you want to check

let elementToCheck = document.getElementById('room-info');

// Function to handle scroll events
export function handleScroll() {
    if (isElementVisible(elementToCheck)) {
        console.log('Element is visible in the viewport.');
    } else {
        console.log('Element is not visible in the viewport.');
    }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads

