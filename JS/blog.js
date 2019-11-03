/**
 * The link to the normal page
 */
const normallAddress = 'https://darker97.github.io/Meine-Kleine-Website/'
const separator = '-1234567-'

/**
 * Creates new Articles and loads them
 */
function newElement () {
  console.log('Blog load - Start')
  const BlogPoint = document.createElement('div')

  fetch(normallAddress + '/JSON/blog.txt')
    .then((resp) => resp.text())
    .then(function (resp) {
      let arr = resp
      arr = arr.split(separator, 100)

      for (let i = arr.length-1; i >= 0; i--) {
        addArticle(arr[i], BlogPoint)
      }
    })

  counter()
}

function addArticle (link, test) {
  const article = document.createElement('article')
  test.appendChild(article)

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
      const TempText = resp
      article.appendChild(BlogHeader)
      inhalt.innerHTML = TempText
      article.appendChild(inhalt)
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
