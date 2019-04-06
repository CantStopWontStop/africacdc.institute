var $form = $('form#form'),
    url = 'https://script.google.com/macros/s/AKfycbxDo2xK64UEvXdWq-eRg1ms3Dsp95MVwii4X9IGUB7wWnFF8LsS/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
