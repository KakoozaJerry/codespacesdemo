let validation = () => {
  var name = document.tuesday.field1;
  var email = document.tuesday.field2;
  var telephone = document.tuesday.field3;
  var regarding = document.tuesday.field4;
  var message = document.tuesday.field5;

  if (name.value == ''){
      name.style.border = '2px solid red';
  }
  let min = 3;
  if(name.value.length < min){
      alert("Name should be beyond 3 characters")
      name.style.border = "2px solid red"
      return false
  }
};

