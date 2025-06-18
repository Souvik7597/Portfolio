// Back to Top Button Code 

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
});

toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behaviour: "smooth" })
});

// ===============================================================================


// Toggle Side Menubar 

const openSideBar = document.querySelector(".side-menu-icon")
const closeSideBar = document.querySelector(".close-side-menu-icon")
const sideMenu = document.querySelector(".side-menu-bar")

openSideBar.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = sideMenu.classList.contains("active")
    if (!isActive) {
        sideMenu.classList.add("active")
    }
})
closeSideBar.addEventListener("click", () => {
    sideMenu.classList.remove("active")
})

document.addEventListener("click", function (e) {
    e.stopPropagation();
    if (!e.target.classList.contains(".side-menu-bar")) {
        sideMenu.classList.remove("active");
    }
})


// About Me Section Code 

const allLinks = document.querySelectorAll('.tab-links')

allLinks.forEach((link, i) => {

    link.addEventListener("click", () => {
        const allContents = document.querySelectorAll('.tab-contents')

        allLinks.forEach(btn => {
            btn.classList.remove("active")
        })

        link.classList.add("active")

        allContents.forEach(ctn => {
            ctn.classList.remove("active-tab")
        })

        allContents[i].classList.add('active-tab')
    })
})

// =============================================================


// Read More Text Code 

const dots = document.querySelector('.dots')
const moretext = document.querySelector('.read-more')
const button = document.querySelector('.show-more-btn')

button.addEventListener("click", () => {
    if(dots.classList.contains("active")){
        moretext.classList.add("active")
        dots.classList.remove("active")
        button.innerHTML = 'Show Less'
    }else{
        moretext.classList.remove("active")
        dots.classList.add("active")
        button.innerHTML = 'Show More'
    }

})

// =============================================================

// Active Navbutton on click and scroll 

const allNavBtn = document.querySelectorAll(".active-nav")

const allNavLinks = document.querySelectorAll("header .nav-item a")

const sectionObserve = new IntersectionObserver((nIcon) => {
    nIcon.forEach((entry) => {

        if (entry.isIntersecting) {
            const { target } = entry.target.dataset
            if (target) {
                document.querySelectorAll("header .nav-item a").forEach((a) => {
                    a.classList.remove("active")
                })
                if (target) {

                    document.getElementById(target).classList.add("active")
                }
            }

            console.log(target);
        };
    });
}, { threshold: .4 });

allNavBtn.forEach(s => sectionObserve.observe(s))


allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelectorAll("header .nav-item a").forEach((a) => {
            a.classList.remove("active")
        })
        link.classList.add("active")
    })
})


