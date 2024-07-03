

class Skills {

    constructor(name,level,image){

        this.name=name;
        this.level=level;
        this.image=image;

    }
}

const TechnicalComputerSkill=[]

TechnicalComputerSkill.push(  new Skills("javaScript","Good","download (5).png"),
new Skills("Android Studio","Good","download (6).png"),
new Skills("MySql","Fair","download (7).png"),
new Skills("HTML","Good","download (8).png"),
new Skills("Agile Methodology","Fair","download (9).png"),
new Skills("CSS","Good","download (10).png"),
new Skills("GitHub","Good","download (2).jpg"),
new Skills("Git","Good","download (1).jpg"))
  


$(function(){
    const rows = 2;
    const columns = 4;

    // Get the grid container element
    const gridContainer = $(".TechnicalSkillGrid");
    let count =0;
    // Create the grid dynamically
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        // Create a grid item element
        let test=`<div class="gridBoxTechnical">
      <div class="box box1"></div>
      <div class="box box2"></div>
      <div class="contentBox">
        <img class="skillImage" src="./res/${TechnicalComputerSkill[count].image}" alt="powerpoint">
        <hr>
        <h3 class="fontSkillCard"> ${TechnicalComputerSkill[count].name} </h3>
        <p>level : ${TechnicalComputerSkill[count].level}</p>
      </div>
    </div>`;
    count++;
        // Append the grid item to the grid container
        gridContainer.append(test);
    }
  }
   
})

$(function(){
    const year = new Date().getFullYear();
    $("#copyRight").text(`Made With Love By Surprise Mathonsi |  © ${year}`)
})





