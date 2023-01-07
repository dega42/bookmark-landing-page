// --- Navigation Toggle
const menuButton = document.querySelector('.header-navigation-toggle');
const menu = document.querySelector('.header-navigation');
menuButton.addEventListener('click', function () {
    menu.classList.toggle('active');
    const footerSocialLinks = document.querySelector('.footer-social-links');
    footerSocialLinks.classList.toggle('to-header-navigation')
});

// --- Scroll 
window.addEventListener('scroll', function () {
    // --- Header Sticky
    const header = this.document.querySelector('header');
    header.classList.toggle('header-sticky', this.window.scrollY > 1);

    // --- To Top Button Toggle
    var topBtn = document.getElementById('js_topBtn');
    if (this.window.scrollY > 160) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

// --- To Top Button
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// --- Tab
const tabs = document.querySelector('.tab-wrapper');
const tabButton = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab-content');
tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        tabContent.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}

// --- Accordion
const accordionButton = document.querySelectorAll('.accordion-btn');
accordionButton.forEach((accordion) => {
    accordion.onclick = function () {
        this.classList.toggle("is-open");
        let content = this.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            console.log(content.style.maxHeight);
        }
    };
});

// --- Contact Us
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event);
});
