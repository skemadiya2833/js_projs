// Display the following array of objects in tabular form -
let library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
console.log(" |     author    |    title       |     readingStatus     | ")
library.forEach(item => {
    console.log(item['author'] +" | "+ item['title'] + " | "+item['readingStatus']);
});