const bill = document.querySelector('.form-input')
const numOfPeople = document.querySelector('.numOfPeople')
const tipBtns = document.querySelectorAll('.tip-btn')
const resetBtn = document.querySelector('.reset-btn')
const amountPerPerson = document.querySelector('.tip-amount .value')
const totalTip = document.querySelector('.tip-total .value')

// tip = percentTip * amount
tipBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const value = Number(bill.value)
        let percent = Number(e.currentTarget.textContent)
        const tipPerPerson = (percent/100) * value
        const numberOfpeople = Number(numOfPeople.value)
        const total = tipPerPerson * numberOfpeople
        if(isNaN(tipPerPerson) || isNaN(numberOfpeople)) return 
        // display amount
        amountPerPerson.textContent = tipPerPerson
        totalTip.textContent = total || tipPerPerson
    })
})