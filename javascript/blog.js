
function newElement() {
  console.log('Jay, works')

  var Element = Save

  console.log(Element.BlogEntries[0].H1)

  for (var i = 0; i < Element.BlogEntries.length; i++) {
    // create the new Element
    var NewContent = document.createElement('div')
    NewContent.className = 'contentContainer'

    // create the source
    var title = document.createElement('h1')
    title.innerText = Element.BlogEntries[i].H1

    var text = document.createElement('p')
    text.innerHTML = Element.BlogEntries[i].Text

    // Put everything together
    NewContent.appendChild(title)
    NewContent.appendChild(text)

    // Add new Element
    var final = document.getElementsByClassName('contentPanel')
    final[0].appendChild(NewContent)
  }

  counter()
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
