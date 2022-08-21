

const navlinkRev = document.querySelectorAll('.item');
    console.log(`Number of categories: ${navlinkRev.length}.`);
    console.log('\n');

navlinkRev.forEach(function (categories) {
    console.log("Category:", categories.firstElementChild.textContent);
    console.log("Elements:", categories.lastElementChild.children.length);
    console.log('\n');
});