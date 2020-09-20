let counter = 0;
document.querySelector('button').addEventListener('click', function () {
    counter++;
    document.querySelector('h2').innerHTML = counter;
})
