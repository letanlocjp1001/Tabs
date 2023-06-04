const tabs = document.querySelectorAll('.tab-item')
const tabLists = document.querySelectorAll('.tab-list')

const tabActive = document.querySelector('.tab-item.active')
const line = document.querySelector('.line')

requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + 'px'
  line.style.width = tabActive.offsetWidth + 'px'
})

tabs.forEach((tab, index) => {
  const list = tabLists[index]

  tab.addEventListener('click', function () {
    document.querySelector('.tab-item.active').classList.remove('active')
    document.querySelector('.tab-list.active').classList.remove('active')

    this.classList.add('active')
    list.classList.add('active')

    line.style.left = this.offsetLeft + 'px'
    line.style.width = this.offsetWidth + 'px'
  })
})
