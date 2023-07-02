let navlink = document.querySelectorAll('.nav-link')

windowpathname = window.location.pathname;
navlink.forEach(navlinkel =>{
const navlinkPathname = new URL(navlinkel.href).pathname;
if((windowpathname === navlinkPathname)||(windowpathname ==='/index.html' && navlinkPathname ==='/'))
{
navlinkel.classList.add('active')
}
})
