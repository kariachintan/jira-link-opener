$(document).ready(function(){
  //handle update
  $(".urlbutton").click(function(){
      var story = $(".urlinput").val()
      var newURL = "https://clearlink.atlassian.net/browse/"+ story;
      chrome.tabs.create({ url: newURL });
    window.close();
  });

  //allow update when enter is pressed
  $('input').keypress(function (e) {
    if (e.which == 13) {
      $(".urlbutton").click();
      return false;
    }
  });

});
