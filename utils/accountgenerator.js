const accountStarter = '64'

const accountGenerator = () => {
    let accountEnd = Math.floor(Math.random() * 999999999999999)
    let accountNumber = accountStarter + accountEnd
    return accountNumber.toString()
}

// console.log(accountGenerator())

module.exports = accountGenerator