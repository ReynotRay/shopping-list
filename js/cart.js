$('.list-input').keyup(function(event) {
  if (event.keyCode == 13) {
    checkValue();
  }
});
$('.add').click(function() {
  if ($('.list-input').val().length) {
    $('ul').append('<li class="item">' + $('.list-input').val() + '<i id="done" class="fa fa-check" aria-hidden="true"></i>' + '<i id="delete" class="fa fa-trash-o" aria-hidden="true"></i>' +'</li>');
    resetValue();
  } else {
    alert('Please Type An Item');
  }
});
$('.list').on('click', 'li', function() {
  $(this).css('text-decoration', 'line-through');
});
$('.list').on('click', '#delete', function() {
  $(this).parent().remove();
});

function resetValue() {
  $('.list-input').val("");
}

function checkValue() {
  if ($('.list-input').val() === "") {
    alert('Please Type an Item ');
  } else {
    $('ul').append('<li class="item">' + $('.list-input').val() + '<i id="done" class="fa fa-check" aria-hidden="true"></i>' +'<i id="delete" class="fa fa-trash-o" aria-hidden="true"></i>');
    resetValue();
  }
}