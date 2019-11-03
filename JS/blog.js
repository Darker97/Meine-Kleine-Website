/**
 * The link to the normal page
 */
//const normallAddress = 'https://darker97.github.io/Meine-Kleine-Website/'
const normallAddress = 'http://127.0.0.1:5500'
const separator = '-1234567-'

function newElement () {
  console.log('Blog load - Start')
  const BlogPoint = document.createElement('div')

  fetch(normallAddress + '/JSON/blog.txt')
    .then((resp) => resp.text())
    .then(function (resp) {
      let arr = resp
      arr = arr.split(separator, 100)
      arr.forEach(element => {
        addArticle(element, BlogPoint)
      })
    })

  counter()
}

function addArticle (link, test) {
  test.id = 'BlogPost'
  const BlogHeader = document.createElement('h1')
  BlogHeader.textContent = link
  test.appendChild(BlogHeader)
  const inhalt = document.createElement('inhalt')

  document.getElementById('BlogentryProgram').appendChild(test)
  const newLink = normallAddress + '/BLOG/' + link + '.html'

  fetch(newLink)
    .then((resp) => resp.text())
    .then(function (resp) {
      inhalt.innerHTML = resp.text
      test.appendChild(inhalt)
    })
}

function counter () {
  var count = 0

  if (document.cookie.length < 3) {
    count = 0
  } else {
    var cookies = document.cookie

    cookies = cookies.split(';')

    for (var i = 0; i < cookies.length; i++) {
      count = cookies[i].split('=')[1]
    }
  }
  count++
  console.log(count)

  var footerElement = document.getElementsByClassName('counter')
  footerElement[0].textContent = 'This is your ' + count + ' visit'
  document.cookie = 'save=' + count
}
