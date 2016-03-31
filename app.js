$(document).ready(function() {
  var wordCount = $('#wordCount')
  var numberLength = $('#numberLength')
  var generatedName = $('#generatedName')
  var manlyMode = $('#manlyMode')

  function generate() {
    try {
      var name = Namor.generate({
        words: wordCount.val(),
        numLen: numberLength.val(),
        manly: manlyMode.is(':checked')
      })

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
