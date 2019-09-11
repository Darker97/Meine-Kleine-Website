
function newElement(JsonText) {
  console.log('Jay, works')

  var Element = JSON.parse($.load('./JSON/blog.json'))

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
}
