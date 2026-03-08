const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.15 });

reveals.forEach(reveal => observer.observe(reveal));

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link-custom");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

function loadModalContent(modalId, url) {
    const contentContainer = document.querySelector(`#${modalId} .modal-body`);
    if (!contentContainer) return;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            contentContainer.innerHTML = "<p class='text-danger'>Failed to load content.</p>";
        });
}

document.querySelectorAll('.modal').forEach(modal => {

    modal.addEventListener('show.bs.modal', () => {
        document.body.classList.add('modal-open-blur');
    });

    modal.addEventListener('hidden.bs.modal', () => {
        document.body.classList.remove('modal-open-blur');
    });

});


const calendarModal = new bootstrap.Modal(document.getElementById('calendarModal'), {
    backdrop: 'static',
    keyboard: false
});

const dataEntryModal = new bootstrap.Modal(document.getElementById('dataEntryModal'), {
    backdrop: 'static',
    keyboard: false
});

const emailManagementModal = new bootstrap.Modal(document.getElementById('emailManagementModal'), {
    backdrop: 'static',
    keyboard: false
});

const fileManagementModal = new bootstrap.Modal(document.getElementById('fileManagementModal'), {
    backdrop: 'static',
    keyboard: false
});

const onlineResearchModal = new bootstrap.Modal(document.getElementById('onlineResearchModal'), {
    backdrop: 'static',
    keyboard: false
});

const graphicContentModal = new bootstrap.Modal(document.getElementById('graphicContentModal'), {
    backdrop: 'static',
    keyboard: false
});