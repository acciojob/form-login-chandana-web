function getFormvalue() {
    //Write your code here

  const first = document.getElementsByName("fname")[0].value;
  const last = document.getElementsByName("lname")[0].value;

  alert(`${first}`+" " +`${last}`);
  return false;
}
