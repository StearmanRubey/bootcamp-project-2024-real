//Set up Blog details
var blogs = [
    {
        title: "First Hack4Impact Meeting",
        date: "10-14-24",
        description: "I went to my first Hack4Impact Meeting!",
        image: "./Table_Meeting.png",
        imageAlt: "Seven people sitting at a meeting table, one person standing",
        slug: "blog0"
    },
    {
        title: "Second Hack4Impact Meeting",
        date: "10-17-24",
        description: "I went to my second Hack4Impact Meeting!",
        image: "./Meeting_Image.png",
        imageAlt: "Three people sitting at a meeting table",
        slug: "blog1"
    },
    {
        title: "Hack4Impact Milestone 1",
        date: "10-18-24",
        description: "I completed the first Hack4Impact milestone!",
        image: "./Completed_Stamp.png",
        imageAlt: "A stamp that says 'completed",
        slug: "blog2"
    }
];
var blogContainer = document.getElementById('blog-container');
//For loop to add blog content
blogs.forEach(function (blog) {
    var divElement = document.createElement('div');
    var h1Element = document.createElement("h1");
    h1Element.innerText = blog.title;
    var imgElement = document.createElement("img");
    imgElement.src = blog.image;
    imgElement.width = 700;
    imgElement.height = 394;
    imgElement.alt = blog.imageAlt;
    var pElement = document.createElement("p");
    pElement.innerText = blog.description;
    var linkElement = document.createElement("a");
    linkElement.innerHTML = "More Info:";
    linkElement.href = blog.slug + '.html';
    divElement.appendChild(h1Element);
    divElement.appendChild(imgElement);
    divElement.appendChild(pElement);
    divElement.appendChild(linkElement);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(divElement);
});
