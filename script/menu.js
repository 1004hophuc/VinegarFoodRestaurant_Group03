// Js for menu
/**
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}
*/
const tabs = document.querySelectorAll('#tab');

tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach((item) => {
        item.classList.remove('active')
    })
        e.target.classList.add('active');
    })
})


//Js for responsive menu

let toggle = document.querySelector('.toggle');
let sideNav = document.querySelector('#nav_links');
let btn_close = document.querySelector('#btn_close');
let btn_open = document.querySelector('#btn_open');

sideNav.style.right = '-250px';

toggle.onclick = function() {
    if(sideNav.style.right == '-250px') {
        sideNav.style.right = '0';
        btn_open.style.display = 'none';
        btn_close.style.display = 'block';
    } else {
        sideNav.style.right = '-250px';
        btn_open.style.display = 'block';
        btn_close.style.display = 'none';
    }
}




