window.addEventListener('load' , () => {
    const editor = document.getElementById('editor');
    const title = document.getElementById('title');
    const tle = document.getElementById('tle');
    editor.value = "";
    editor.focus();
    //

    editor.addEventListener('mousemove' , () => {
        editor.style.width = "95%";
        editor.style.height = "700px";
    });

    function setTitle(){
        text = "Notepad  :  " + tle.innerHTML;
        title.innerHTML = text.replaceAll("<br>","");
    };
    setTitle();

    tle.addEventListener('keyup' , () => {setTitle()});

    tle.addEventListener('keypress' , ev => {
        setTitle();
        if(ev.key == "Enter"){
            setTitle();
            editor.focus();
        }
    });
})