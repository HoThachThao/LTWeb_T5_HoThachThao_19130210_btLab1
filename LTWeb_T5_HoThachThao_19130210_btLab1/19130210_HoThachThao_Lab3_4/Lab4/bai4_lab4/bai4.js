function  calculate(){
    let str = document.getElementById("B").value;
    let sub = document.getElementById("A").value;
    document.getElementById("result").innerHTML = (str.split(sub).length - 1);

}
