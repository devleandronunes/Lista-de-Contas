import createAccountItem from "./createAccountItem.js"

function takeInputValue() {
    const accountNameInput = document.getElementById('account-name')
    const accountValueInput = document.getElementById('account-value')
    const addAccount = document.getElementById('add-account')

    addAccount.addEventListener('click', (event) => {
        event.preventDefault()

        if(accountNameInput.value === '' || accountValueInput.value <= 0) {
            alert('Adicionar todos os campos')

            return
        }

        const accountName = accountNameInput.value
        const accountValue = accountValueInput.value

        createAccountItem(accountName, accountValue);

        console.log(accountName, accountValue);
        return {accountValue, accountName}
    })
}

export default takeInputValue