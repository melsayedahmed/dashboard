const btnToggle = document.querySelectorAll('.btn-toggle')

btnToggle.forEach(btn =>
{
    btn.addEventListener('click', () => btn.classList.toggle('active'))
})

const inputs = document.querySelectorAll('.social-info .social-box input')

inputs.forEach(input =>
{
    input.addEventListener('focus', () =>
    {
        inputs.forEach(input => input.parentElement.children[0].style.fill = '#999')
        input.parentElement.children[0].style.fill = '#000'
    })
        input.addEventListener('focusout', () => inputs.forEach(input => input.parentElement.children[0].style.fill = '#999'))
})

const plans = document.querySelectorAll('.plans .plan')

plans.forEach(plan =>
{
    plan.addEventListener('click', () =>
    {
        plans.forEach(plan => plan.classList.remove('active'))
        plan.classList.add('active')
    })
})

const activePage = window.location.pathname
const navLinks = document.querySelectorAll('aside nav a')

navLinks.forEach(link =>
{
    if (link.href.includes(activePage))
    {
        link.classList.add('active')
    }
})