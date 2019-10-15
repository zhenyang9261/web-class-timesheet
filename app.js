
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAq-FSedSgC4FWDb89cL7NXMMET8g2765g",
    authDomain: "app-database-test2.firebaseapp.com",
    databaseURL: "https://app-database-test2.firebaseio.com",
    projectId: "app-database-test2",
    storstartDayBucket: "app-database-test2.appspot.com",
    messagingSenderId: "703981146713",
    appId: "1:703981146713:web:f6b1ca64f11e7a66169748",
    measurementId: "G-54LSHE6QVG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var name = "";
var role = "";
var startDay;
var monthlyRate;

// Capture Button Click
$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

  // Grabbed values from text boxes
  name = $("#employee-name-input").val().trim();
  role = $("#role-input").val().trim();
  startDay = $("#start-input").val().trim();
  monthlyRate = $("#rate-input").val().trim();

  // Code for handling the push
  database.ref().push({
    name: name,
    role: role,
    startDay: startDay,
    monthlyRate: monthlyRate
    // dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});

// Firebase watcher .on("child_added"
database.ref().on("child_added", function(snapshot) {
  // storing the snapshot.val() in a variable for convenience
  var sv = snapshot.val();

  // Console.loging the last user's data
  console.log(sv.name);
  console.log(sv.role);
  console.log(sv.startDay);
  console.log(sv.monthlyRate);

  var nameTd = $("<td>").text(sv.name);
  var roleTd = $("<td>").text(sv.role);
  var startDayTd = $("<td>").text(sv.startDay);
  var monthlyRateTd = $("<td>").text(sv.monthlyRate);
  var test = $("<td>").text("");
  var test2 = $("<td>").text("");

  var tr = $("<tr>");

  tr.append(nameTd, roleTd, startDay, test, monthlyRateTd, test2);

  $("#employee-table").append(tr);

  // Change the HTML to reflect
//   $("#name-display").text(sv.name);
//   $("#role-display").text(sv.role);
//   $("#startDay-display").text(sv.startDay);
  //$("#monthlyRate-display").text(sv.monthlyRate);

  // Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
