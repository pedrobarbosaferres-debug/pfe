let date = new Date();
console.log(getDate());

function getDate() {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}