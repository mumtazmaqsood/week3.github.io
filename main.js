console.log('script loaded');



let books = [{
     bookId: "Java_Script",
     title: "Async Java Script",
     author: "Trevor Burnham",
     language: "English",
     //bookCover: "img/java.jpg",

}, {

    bookId: "Java_Dummies",
    title: "Java Dummies",
    author: "Ross Harmes",
    language: "English",
    //bookCover: "img/javadummies.gif",

}, {

    bookId: "java_script_design_pattern",
    title: "JavaScript Design Pattern",
    author: "Addy Osmani",
    language: "English",
    //bookCover: "img/jspattern.jpg",
},

  {
    bookId: "object_oriented_javascript",
    title: "Object Oriented JavaScript",
    author: "Stoyan stefanov",
    language: "English",
    //bookCover: "img/object.png",

},{

    bookId: "php_mysql_javascript",
    title: "PHP, MySql & JavaScript",
    author: "Julie C,Melon",
    language: "english",
    //bookCover: "img/php.jpg",
}             
];


// book covers
let covers = {
    Java_Script: "img/java.jpg",
    Java_Dummies: "img/javadummies.gif",
    java_script_design_pattern: "img/jspattern.jpg",
    object_oriented_javascript:"img/object.png",
    php_mysql_javascript: "img/php.jpg",
    }



function generateUl() {

    // Add Ul element to the page
     let ul = document.createElement("ul");
    
    document.body.appendChild(ul)

    // Loop in array objects
    books.forEach(function(element) {

        // Add list element to the page        
        let li = document.createElement("li");
        li.innerHTML = element.title;
        ul.appendChild(li);

        //Add Author
        let author = document.createElement("p");
        author.innerHTML = element.author;
        li.appendChild(author);

        // Add language       
        let lang = document.createElement("p");
        lang.innerHTML = element.language;
        li.appendChild(lang);

    
        // Adding Images
        let liElements = document.querySelectorAll("li");
                        
            Array.from(liElements).forEach(function(data){
            
            if(Element.id == Object.keys(covers)[data]){
                var img = document.createElement('img');
                img.src = covers[element.bookId];
                li.appendChild(img);
            }
            
        });
    });   
}


generateUl();

