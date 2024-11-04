type Blog = {
    title: string //Title of blog
    date: string //Date of blog
    description: string //Description of blog
    image: string //Image fpr blog
    imageAlt: string //Alternative text for blog Image
    slug: string //Text to use for linking to the blog pages
}

//Set up Blog details
const blogs: Blog[] = [
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
]

const blogContainer = document.getElementById('blog-container');

//For loop to add blog content
blogs.forEach(blog => {
     const divElement = document.createElement('div');

     const h1Element = document.createElement("h1");
     h1Element.innerText = blog.title;

     const imgElement = document.createElement("img");
     imgElement.src = blog.image;
     imgElement.width = 700;
     imgElement.height = 394;
     imgElement.alt = blog.imageAlt;

     const pElement = document.createElement("p");
     pElement.innerText = blog.description;

     const linkElement = document.createElement("a");
     linkElement.innerHTML = "More Info:"
     linkElement.href = blog.slug + '.html';

     divElement.appendChild(h1Element);
     divElement.appendChild(imgElement);
     divElement.appendChild(pElement);
     divElement.appendChild(linkElement);
     blogContainer?.appendChild(divElement)



});
