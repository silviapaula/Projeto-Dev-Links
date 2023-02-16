function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }

  if (html.classList.contains('light')) {
    img.setAtribute('src', './assets/avatar-light.png')
  } else {
    img.setAtribute("src", "./assets/avatar.png")
  }


}