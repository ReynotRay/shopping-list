       
     $('.list').mouseenter(function() {
        console.log('enter list correct');
        $('#delete').children().show();

        });         


         //var ShoppingListApp = function() {};
        $('.list-input').keyup(function(event) {
            if (event.keyCode == 13) {
                checkValue();
            }
        });
        //ShoppingListApp.prototype.addItem = function(){
        $('.add').click(function() {
            if ($('.list-input').val().length) {
                $('.list').append('<li class="item">' + $('.list-input').val()+'<i id="done" class="fa fa-check" aria-hidden="true"></i>' +'<i id="delete" class="fa fa-trash-o" aria-hidden="true"></i>' +'</li>');
            resetValue();
            } else {
                alert('Please Type An Item');
            }
        });

        //ShoppingListApp.prototype.lineThrough = function(){
        $('.list').on('click', 'li', function() {
            $(this).css('text-decoration', 'line-through');
        });
        //ShoppingListApp.prototype.removeItem = function(){
        $('.list').on('click', '#delete', function() {
            $(this).parent().remove();
        });
         //ShoppingListApp.prototype.
        function resetValue() {
                $('.list-input').val("");
            }

        function checkValue() {
                if ($('.list-input').val() === "") {
                alert('Please Type an Item ');
                } else {
                $('.list').append('<li class="item">' + $('.list-input').val()+'<i id="done" class="fa fa-check" aria-hidden="true"></i>' +'<i id="delete" class="fa fa-trash-o" aria-hidden="true"></i>');
                resetValue();
                }
            }
            // var app = new ShoppingListApp();
            //ShoppingListApp();



    $('.item').mouseenter(function() {
        console.log('hover');
  // $('#delete').fadeIn(100);
  // $('#delete').fadeOut(500);
});




