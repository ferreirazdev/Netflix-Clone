const tableItems = document.querySelectorAll('.tab-item');
const tableContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    removeBorder();
    removeShow();

    this.classList.add('tab-border');

    const tabContentItem = document.querySelector(`#${this.id}-content`);

    tabContentItem.classList.add('show')
}

function removeBorder() {
    tableItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}


tableItems.forEach(item => item.addEventListener('click', selectItem));