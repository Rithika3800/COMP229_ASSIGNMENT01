function generateStory() {
    const name = userinput("name");
    const subject = userinput("subject");
    const animal = userinput("animal");
    const color = userinput("color");
    const furniture = userinput("furniture");
    const verb = userinput("verb ending in-ing");

    const storyContainer = document.getElementById("story-container");
    const story =`Once upon a time, there was a student at Centennial College named ${name}. One day, while studying ${subject}, a ${animal} ran into the classroom. The professor, who was wearing a ${color} tie, jumped onto his ${furniture} in surprise. The whole class, including ${name}, couldn’t stop ${verb}.`;
    storyContainer.innerHTML = story;
    document.body.style.backgroundColor = color;
    localStorage.setItem('background', color);
    localStorage.setItem('paragraph', story);


}

function userinput(lable)
{
    let enter;
    do{
        enter=prompt(`Enter a ${lable}: `);
        if (enter === null || enter.trim() ==="")
            {
                alert("You didn't enter anything.Try again.");
            }
    }while(enter === null || enter.trim() ==="");
    return enter.trim();
}

window.onload = function(){
    const previousbackground = localStorage.getItem('background');
    document.body.style.backgroundColor = previousbackground;
    const previouStory = localStorage.getItem('paragraph');
    document.getElementById("story-container").innerHTML = previouStory;

}