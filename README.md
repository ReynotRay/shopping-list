
prototype inheritance

move files through the terminal to create a js folder to store the file

limit your to do lis items


Improvements made
delete button for each item
refactored
alert when nothing is typed


questions for Aleks
why does this work
  $('.slist').on('click', '#delete', function() {
  $(this).parent().remove();
  });

 & not

 $('#delete').click(function() {
 $(this).parent().remove();
 });

 $('.item').click(function() {
  console.log("clicked here");
});


can we consolidate the appends??

    //when you click submit it will append the value length into the slist
    //$('.slist-add').bind('click keyup', function(event){ 