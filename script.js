$(".calculate").click(function() {
  let birthyear = $(".year").val();
  let name = $(".name").val();
  console.log("name = " + name);
  console.log("birthyear = " + birthyear);
  let age = 2020 - birthyear;
  console.log("age = " + age);
  $(".message").text(name + " is " + age + " years old.");
});