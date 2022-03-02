let codes = document.getElementById("codes");
let remove = document.getElementById("remove");
let play = document.getElementById("play");
let result = document.getElementById("result");

play.addEventListener("click", () => {
    result.innerHTML = codes.value;
    localStorage.setItem("ES", codes.value);

})
remove.addEventListener("click", () => {
  result.innerHTML = '';
  localStorage.removeItem("ES");
});
onload = () => {
    codes.value = localStorage.getItem("ES");
    result.innerHTML = codes.value;

}