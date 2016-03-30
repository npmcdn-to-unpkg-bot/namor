$(document).ready(function() {
  var wordCount = $('#wordCount')
  var numberLength = $('#numberLength')
  var generatedName = $('#generatedName')

  function generate() {
    try {
      var name = Namor.generate(wordCount.val(), numberLength.val())
      generatedName.val(name)
    } catch (err) {
      alert(err)
    }
  }

  generate()
  $('#regenerate').on('click', function(e) {
    e.preventDefault()
    generate()
  })
})
