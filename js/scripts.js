'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log("The DOM content has loaded!");
    
    const allParagraphs = document.querySelectorAll('p');
    console.log("How many paragraphs? ", allParagraphs.length);
    console.log(allParagraphs);

    allParagraphs.forEach(function(paragraph, index) {
        console.log(index, paragraph);
        paragraph.classList.add('bold');
    })
});
