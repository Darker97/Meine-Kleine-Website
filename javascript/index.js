function Birthday() {

  var Message = 'It\'s my Birthday <i class="fas fa-birthday-cake"></i>'

  var MessageContainer = document.createElement('p')
  MessageContainer.innerHTML = Message

  console.log('Birthday')
  var footer = document.getElementsByClassName('Birthday')
  footer[0].appendChild(MessageContainer)
}
