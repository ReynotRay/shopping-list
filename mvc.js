function Model() {
    this.listItems = [];
}

Model.prototype.returnData = function() {
    return this.listItems;
};

Model.prototype.addData = function(item) {
    this.listItems.push(item);
};

function View() {

}

View.prototype.append = function(data) {
    $('.list-input').keyup(function(event) {
  if (event.keyCode == 13) {
    checkValue();
  }
});
    $('.add').click(function() {
      checkValue();
});
    $('.list').on('click', 'li', function() {
  $(this).css('text-decoration', 'line-through');
});
$('.list').on('click', '#delete', function() {
  $(this).parent().remove();
});
};

function checkValue() {
  if ($('.list-input').val() === "") {
    alert('Please Type an Item ');
  } else {
    $('ul').append('<li class="item">' + $('.list-input').val() + '<i id="done" class="fa fa-check" aria-hidden="true"></i>' +'<i id="delete" class="fa fa-trash-o" aria-hidden="true"></i>');
    resetValue();
  }
}
function resetValue() {
  $('.list-input').val("");
}

View.prototype.value = function() {
    return $(".list-input").val();
};

function Controller(view, model) {
    this.view = view;
    this.model = model;
}

// Controller.prototype.onButtonClick = function() {
//     var self = this;
//     $('.add').click(function() {
//         self.model.addData(self.view.value());
//         self.view.append(self.model.listItems);
//     });
// };

var model = new Model();
var view = new View();
var controller = new Controller(view, model);
// controller.onButtonClick();
view.append();