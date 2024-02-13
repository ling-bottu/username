document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    
    const products = [
        
            { 
                name: "Product 1", 
                price: {
                    mine: "Php 150",
                    steal: "Php 170",
                    grab: "Php 200"
                },
                image: "product1.jpg"
            },
            { 
                name: "Product 2", 
                price: {
                    mine: "Php 150",
                    steal: "Php 170",
                    grab: "Php 200"
                },
                image: "product2.jpg"
            },
            { 
                name: "Product 3", 
                price: {
                    mine: "Php 150",
                    steal: "Php 170",
                    grab: "Php 200"
                },
                image: "product3.jpg"
            },
            { 
                name: "Product 4", 
                price: {
                    mine: "Php 150",
                    steal: "Php 170",
                    grab: "Php 200"
                },
                image: "product4.jpg"
            },
            { 
                name: "Product 5", 
                price: {
                    mine: "Php 150",
                    steal: "Php 170",
                    grab: "Php 200"
                },
                image: "product5.jpg"
            },
            { 
                name: "Product 6", 
                price: {
                    mine: "Php 150",
                    steal: "Php 170",
                    grab: "Php 200"
                },
                image: "product6.jpg"
            },
            { 
                name: "Product 7", 
                price: {
                    mine: "Php 150",
                    steal: "Php 170",
                    grab: "Php 200"
                },
                image: "product7.jpg"
            },
            { 
                name: "Product 8", 
                price: {
                    mine: "Php 150",
                    steal: "Php 170",
                    grab: "Php 200"
                },
                image: "product8.jpg"
            },
            { 
                name: "Product 9", 
                price: {
                    mine: "Php 150",
                    steal: "Php 170",
                    grab: "Php 200"
                },
                image: "product9.jpg"
            },
            { 
                name: "Product 10", 
                price: {
                    mine: "Php 150",
                    steal: "Php 170",
                    grab: "Php 200"
                },
                image: "product10.jpg"
            }
        ];
        

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const image = document.createElement("img");
        image.src = product.image;
        productDiv.appendChild(image);

        const name = document.createElement("h2");
        name.textContent = product.name;
        productDiv.appendChild(name);

        // Create paragraphs for each price
        Object.values(product.price).forEach(price => {
            const priceParagraph = document.createElement("p");
            priceParagraph.textContent = price;
            productDiv.appendChild(priceParagraph);
        });

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const mineButton = createButton("Mine");
        const stealButton = createButton("Steal");
        const grabButton = createButton("Grab");

        // Add spacing between buttons
        mineButton.style.marginRight = "10px";
        stealButton.style.marginRight = "10px";
        grabButton.style.marginRight = "10px";

        // Add event listeners to buttons
        mineButton.addEventListener("click", () => {
            sendUserAction("Mine", product.name);
            alert(`You have mined ${product.name}.`);
        });

        stealButton.addEventListener("click", () => {
            sendUserAction("Steal", product.name);
            alert(`You have stolen ${product.name}.`);
        });

        grabButton.addEventListener("click", () => {
            sendUserAction("Grab", product.name);
            alert(`You have grabbed ${product.name}.`);
        });

        buttonContainer.appendChild(mineButton);
        buttonContainer.appendChild(stealButton);
        buttonContainer.appendChild(grabButton);

        productDiv.appendChild(buttonContainer);

        productList.appendChild(productDiv);
    });

    function createButton(text) {
        const button = document.createElement("button");
        button.textContent = text;
        button.classList.add("custom-button"); // Add custom button class
        return button;
    }

    function sendUserAction(action, productName) {
        // Send POST request to backend server
        fetch('/track-action', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action, productName }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('User action sent successfully');
        })
        .catch(error => {
            console.error('Error sending user action:', error);
        });
    }
    
});
