function takeInputValue() {
    const accountNameInput = document.getElementById('account-name')
    const accountValueInput = document.getElementById('account-value')
    const addAccount = document.getElementById('add-account')

    addAccount.addEventListener('click', (event) => {
        event.preventDefault()

        const accountName = accountNameInput.value
        const accountValue = accountValueInput.value

        console.log(accountValue, accountName);
    })
}

export default takeInputValue