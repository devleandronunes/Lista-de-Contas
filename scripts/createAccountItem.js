function createAccountItem(account, value) {
  const accountsList = document.getElementById("accounts-list");
  const accountItem = document.createElement("li");
  accountItem.classList.add('account-item')
  const accountInfo = document.createElement('div')
  accountInfo.classList.add('account-info')
  const accountNamee = document.createElement('div')
  const accountValuee = document.createElement('div')
  accountNamee.classList.add('account-name');
  accountValuee.classList.add('account-balance');
  accountValuee.classList.add('negative')

  accountsList.appendChild(accountItem)
  accountItem.appendChild(accountInfo)
  accountInfo.appendChild(accountNamee)
  accountInfo.appendChild(accountValuee)

  accountNamee.innerText = account
  accountValuee.innerText = `-R$ ${value}`;
}

export default createAccountItem