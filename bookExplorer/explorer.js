
// Part 1
let books = [
    {
        title: "Drownproof: Eight Life Lessons to Keep Your Head Above Water",
        author: "Andy Stumpf",
        pages: 256
    },
    {
        title: "The Afghanistan Papers",
        author: "Craig Whitlock",
        pages: 384
    },
    {
        title: "The Vinland Sagas",
        author: "Keneva Kunz",
        pages: 144
    },
    {
        title: "Countdown to Zero Day",
        author: "Kim Zetter",
        pages: 448
    },
    {
        title: "The End of Everything",
        author: "Victor Davis Hanson",
        pages: 352
    }
]


// Part 2
console.log(`\nConsole Output`);

books.forEach(function(book) {
    console.log(`${book.title} by ${book.author} (${book.pages} pages)`);
});


// Part 3 
console.log(`\nDOM Tree Exploration`);

console.log(`Entire document: ${document}`);

console.log(`Document body: ${document.body}`);

console.log(`First child of body: ${document.body.firstElementChild}`);

console.log(`All children of body: ${document.body.children}`);



// Part 4
console.log(`\nDOM Tree Exploration`);

let ulElement = document.body.children[2];
console.log(`${ulElement}`);

let firstLi = ulElement.children[0];
console.log(`${firstLi}`);

let parentOfLi = firstLi.parentElement;
console.log(`${parentOfLi}`);

let siblingLi = firstLi.nextElementSibling;
console.log(`${siblingLi}`);

// Part 5
console.log(`\nNode Properties`);
let insideLi = firstLi.innerText
console.log(`${insideLi}`)

// Part 6
console.log(`\nStyles & Classes`);


let listItems = ulElement.children;
books.forEach(function(book, index) {
    if (book.pages > 300) {
        listItems[index].classList.add("featured");

        console.log(`featured was added to ${book.title}`);
    }
});
