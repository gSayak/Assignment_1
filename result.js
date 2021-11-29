window.addEventListener('load', () => {


    const name =localStorage.getItem('NAME');
    const designation = localStorage.getItem('Designation');
    const work = localStorage.getItem('Work');

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-designation').innerHTML = designation;
    document.getElementById('result-work').innerHTML = work;


})

const file = document.getElementById("up");
const btn = document.getElementById("realfile");
const txt=document.getElementById("text");
btn.addEventListener("click",function()
{
    file.click();
});
file.addEventListener("change",function()
{
    if(file.value)
    {
        txt.innerHTML=file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
});
function upload() {
    if (file.value) {
        alert("Uploaded Successfully!");
    }
    else{
        alert("No file is chosen yet!!");
    }
}
file.onchange = ({ target }) => {
    let f = target.files[0];
    if (f) {
        let name = f.name;
        console.log(name);
    }
}