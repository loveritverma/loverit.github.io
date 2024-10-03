function openModal(type) {
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = ''; // Clear existing content

    let images;

    // Define images based on the type
    switch (type) {
        case 'varanasi':
            images = [
                'images/Varanasi-1.jpg',
                'images/Varanasi-2.jpg',
                'images/Varanasi-3.jpg',
                'images/Varanasi-4.jpg',
                'images/Varanasi-5.jpg',
                'images/Varanasi-6.jpg',
                'images/Varanasi-7.jpg',
                'images/Varanasi-8.jpg',
                'images/Varanasi-9.jpg',
            ];
            break;
        case 'roka':
            images = [
                'images/Roka-1.jpg',
                'images/Roka-2.jpg',
                'images/Roka-3.jpg',
                'images/Roka-4.jpg',
                'images/Roka-5.jpg',
                'images/Roka-6.jpg',
                'images/Roka-7.jpg',
                'images/Roka-8.jpg',
                'images/Roka-9.jpg',
                'images/Roka-10.jpg',
            ];
            break;
        case 'engagement':
            images = [
                'images/Roka-9.jpg',
                'images/Roka-10.jpg',
            ];
            break;
        // Add more cases for different types as needed
        default:
            images = [];
    }

    // Create image elements and add them to modal content
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = ''; // Add alt text as needed
        modalContent.appendChild(img);
    });

    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("modalContent").innerHTML = ''; // Clear modal content
}

// Close the modal when clicking anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}
