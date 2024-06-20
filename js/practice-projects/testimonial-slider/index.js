const testimonials = [
    {
        name: "Emily Thompson",
        photoURL: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I couldn't be happier with the unique and handmade wedding items I received from SzelFesh Creative. Their attention to detail truly captured the love and essence of our special day."
    },
    
    {
        name: "Emily Stevens",
        photoURL: "https://images.unsplash.com/photo-1488846343176-08e05ab9a2a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZGUlMjBzcXVhcmUlMjBpbWFnZXxlbnwwfDF8MHx8fDA%3D",
        text: "SzelFesh Creative's unique handcraft products added a touch of love to our wedding day. The handmade items were beautifully crafted and contributed to the perfect wedding ambiance. We are so grateful to have found such a special company for our big day."
    },

    {
        name: "Sophie Adams",
        photoURL: "https://images.unsplash.com/photo-1481068164146-e8beb686f4d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyaWRlJTIwc3F1YXJlJTIwaW1hZ2V8ZW58MHwxfDB8fHww",
        text: "I absolutely love the unique handmade items from SzelFesh Creative. Their products are perfect for adding a special touch to weddings, filled with love and charm. Highly recommend for anyone looking for beautiful wedding decorations!"
    },

    {
        name: "Emily Johnson",
        photoURL: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJyaWRlJTIwc3F1YXJlJTIwaW1hZ2V8ZW58MHwxfDB8fHww",
        text: "I am absolutely in love with the unique handcraft products from SzelFesh Creative. Their attention to detail and craftsmanship truly adds a special touch to weddings. I highly recommend their products for anyone looking to add a personal and handmade element to their special day."
    },

    {
        name: "Ava Johnson",
        photoURL: "https://images.unsplash.com/photo-1433771572141-987289196c14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGJyaWRlJTIwc3F1YXJlJTIwaW1hZ2V8ZW58MHwxfDB8fHww",
        text: "I can't thank SzelFesh Creative enough for adding a unique touch to our special day with their handmade wedding products. Their attention to detail truly reflects the love and care they put into each item. We couldn't have asked for better decorations to enhance our wedding celebration."
    },
];

const imgElement = document.querySelector("img");
const textElement = document.querySelector(".text");
const userName = document.querySelector(".username");

let idx = 0;

updateTestimonials();

function updateTestimonials(){
    const{name, photoURL, text} = testimonials[idx];
    imgElement.src = photoURL;
    textElement.innerText = text;
    userName.innerText = name;
    idx++;

    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonials();
    }, 1000);
}
