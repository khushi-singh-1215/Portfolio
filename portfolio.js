const events = [
    {
        image: 'job.png',
        title: 'IWT Assignment',
        tech: 'HTML || CSS ||  Javascript',
        description: 'Assignments done in lab.'
    },

    {
        image: 'bank.png',
        title: 'Bank Management System',
        tech: 'Python || MySQL',
        description: 'Created a bank management system that manages the transaction of customers.'
    },
    // Add more events here...
    {
        image: 'hospital.png',
        title: 'Hospital Management System',
        tech: 'C++(OOPs)',
        description: 'Software to manage hospital data.'
    },

    {
        image: 'job.png',
        title: 'Job Finder App',
        tech: 'Android Studio || Flutter',
        description: 'Software to manage hospital data.'
    },

    
];

// Generate event cards dynamically
const eventContainer = document.getElementById('event-container');
events.forEach((event, index) => {
    const card = document.createElement('div');
    card.classList.add('event-card');

    const image = document.createElement('img');
    image.src = event.image;
    image.alt = event.title;
    image.classList.add('event-image');

    const title = document.createElement('h2');
    title.textContent = event.title;

    const tech = document.createElement('p');
    tech.textContent = event.tech;

    const description = document.createElement('p');
    description.textContent = event.description;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(tech);
    card.appendChild(description);

    // Check if it's the fourth card (index 3)
    if (index === 0) {
        const button = document.createElement('button');
        button.textContent = 'Click to open assignment';
        button.addEventListener('click', function() {
            
            window.open('https://github.com/khushi-singh-1215/labs', '_blank');
        });
        card.appendChild(button);
    }

    eventContainer.appendChild(card);
});
