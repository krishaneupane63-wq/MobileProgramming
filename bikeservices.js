$(function() {
  // Hamburger Menu
  $('#hamburger, #overlay').click(function() {
    $('#sideMenu, #overlay').toggleClass('active');
  });

  $('.nav-link').click(function() {
    $('#sideMenu, #overlay').removeClass('active');
  });

  // App Features
  $('#bookServiceBtn').click(function() {
    alert("Service booked (mock)!");
    $('#recentList').html("<li>Basic Service — Booked Today</li>");
  });

  $('#reminderBtn').click(function() {
    $(this).toggleClass('active');
    $(this).text($(this).hasClass('active') ? "Reminders: ON" : "Reminders");
  });

  $('#emergencyBtn').click(function() {
    alert("Calling emergency mechanic (mock)...");
  });

  $('#historyBtn').click(function() {
    alert("Showing service history (mock)");
  });

  $('#mechanicsBtn').click(function() {
    alert("Showing nearby mechanics (mock)");
  });
});
