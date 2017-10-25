
window.addEventListener('load', function() {
    connect();
});

function connect() {
    console.log("in connect!")
    if (typeof web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
        if (web3.eth.accounts.length > 0) {
            let event = new Event("accountLoaded");
            console.log(web3.eth.accounts)
            dispatchEvent(event);
        } else {
            setTimeout(connect, 3000);
        }
    }
}