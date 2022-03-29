const bill = document.querySelector('.form-input')
const numOfPeople = document.querySelector('.numOfPeople')
const tipBtns = document.querySelectorAll('.tip-btn')
const resetBtn = document.querySelector('.reset-btn')
const amountPerPerson = document.querySelector('.tip-amount .value')
const totalTip = document.querySelector('.tip-total .value')
const alert = document.querySelector('.alert')

// tip = percentTip * amount
tipBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const value = Number(bill.value)
        const numberOfpeople = Number(numOfPeople.value)
        if(!value) return 
        if(!numberOfpeople) {
            return alert.textContent = `Can't be zero`
        }
        alert.textContent = ''
        const percent = Number(e.currentTarget.textContent)
        const tipPerPerson = (percent/100) * value
        const total = tipPerPerson * numberOfpeople
        if(isNaN(tipPerPerson) || isNaN(numberOfpeople)) return 
        // display amount
        amountPerPerson.textContent = `$${tipPerPerson}`
        totalTip.textContent = `$${total}`
    })
})

resetBtn.addEventListener('click', () => {
    bill.value = ''
    numOfPeople.value = ''
    amountPerPerson.textContent = '$00.00'
    totalTip.textContent = '$00.00'
})