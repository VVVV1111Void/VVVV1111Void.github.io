// Modified from bootstrap example

class navbar_handler {
    isShowingnavbar = false;
    navbar = document.querySelector('#navbar');
    set_navbar_visibility(boolean) {
        this.isShowingnavbar = boolean;
    }

    get_navbar_visiblity() {
        return this.isShowingnavbar;
    }

    hide_navbar() {
        this.navbar.classList.toggle('transparent');
        this.set_navbar_visibility(false);
    }

    show_navbar() {
        this.navbar.classList.toggle('transparent');
        this.set_navbar_visibility(true);
    }
}
const state = new navbar_handler;

document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open');
})

window.addEventListener("scroll", () => {
    const navbar_visibility = state.get_navbar_visiblity();
    const offset = window.innerHeight * 0.10; // offset to show the navbar earlier
    const isBelow = (window.innerHeight - offset) < window.scrollY; // If true, means user is below sect. 1
    if (isBelow) {
        if (!navbar_visibility) {
            state.show_navbar();
        }
    }
    else {
        if (navbar_visibility) { // visible at section 1
            state.hide_navbar();
        }
    }
});

