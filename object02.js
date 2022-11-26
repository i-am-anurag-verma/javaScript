var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Ram',
        title: 'XYZ',
        readingStatus: true
    },
    {
        author: 'Shyam',
        title: 'ABC',
        readingStatus: false
    }
]

for (var data in library) {
    if (library[data].readingStatus == true) {
        console.log(`Already read  ${library[data].author} by the ${library[data].title}`);
    } else {
        console.log(`You still need to read  ${library[data].author} by ${library[data].title}`);
    }
}