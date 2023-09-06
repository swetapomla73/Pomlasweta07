// target class/id  =  TopHeader
// perform = window 

window.addEventListener("scroll", function(){
    let TopHeader = this.document.getElementById("Topheader");
    let current = window.scrollY;
    if (current > 0) {
        Topheader.classlist.add("headerFixed")
    }else{
        topHeader.classList.remove("headerFixed")
    }  
})
