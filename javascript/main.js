const timres = document.querySelectorAll('.timer'),
    item = document.querySelector('.section__item')
window.addEventListener('scroll', function scroll() {
    console.log(item.offsetTop);
if (this.scrollY > item.offsetTop - item.clientHeight * 3.5) {
    timres.forEach(timer => {
        let son = +timer.getAttribute('son')
        function rec(k = 0) {
            timer.innerHTML = k
            if (timer.innerHTML < son) {
                setTimeout(() => {
                    k++
                    rec(k)
                }, 150);
            }
        }
        rec()
    })
    window.removeEventListener('scroll' , scroll)
}
 })











const lang = document.querySelectorAll('.lang-item')
const span = document.querySelector('span')
const bodyy = document.querySelector('body')

lang.forEach(function (el) {
    el.addEventListener('click', function (e) {
        if (el.innerHTML === 'UZ') {
            span.style.left = '0'
        } else if (el.innerHTML === 'EN') {
            span.style.left = '50%'
        }
    })
});


