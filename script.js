function showItem(){
    var para = document.getElementById("nav-show");
    para.classList.toggle("nav-class");
}

function hide(){
    // document.getElementById("nav-show").style.display='none';
    var para = document.getElementById("nav-show");
    para.classList.toggle("nav-class");
}

const demo = document.getElementById('demoClass');
demo.addEventListener('click', function(){
    location.href="https://www.youtube.com/results?search_query=team+naach";
})