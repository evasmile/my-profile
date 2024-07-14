

class Skills {

    constructor(name,level,image){

        this.name=name;
        this.level=level;
        this.image=image;

    }
}

const BasicComputerSkill=[]
const TechnicalComputerSkill=[]

BasicComputerSkill.push(
  new Skills("Word","Good","download (1).png"),
  new Skills("Visio","Fair","download (4).png"),
  new Skills("PowerPoint","Good","download (2).png"),
  new Skills("Excel","Good","download (3).png")
)

TechnicalComputerSkill.push(  new Skills("javaScript","Good","download (5).png"),
new Skills("MySql","Fair","download (7).png"),
new Skills("HTML","Good","download (8).png"),
new Skills("CSS","Good","download (10).png"),
new Skills("GitHub","Good","download (2).jpg"),
new Skills("Git","Good","download (1).jpg"))
  

$(function(){

const flexContainer = $(".basicComputerSkill")

  for( let skill in BasicComputerSkill){

    let card = `
    <div class="gridBox">
      <div class="box box1"></div>
      <div class="box box2"></div>
      <div class="contentBox">
        <img class="skillImage" src="./res/${BasicComputerSkill[skill].image}" alt="powerpoint">
        <hr class="hrMargin">
        <h3 class="fontSkillCard">${BasicComputerSkill[skill].name}</h3>
        <p>level : ${BasicComputerSkill[skill].level}</p>
      </div>
    </div>
    `;

    flexContainer.append(card);
  }

})


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
        <hr class="hrMargin">
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


$(function () {
  $('.emailContactPic').click(function (event) {
    var email = 'sample@gmail.com';
    var subject = 'Test';
    var emailBody = 'Hi Sample,';
    var attach = 'path';
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
        "?attach="+attach;
  });
});




$(function(){
    const year = new Date().getFullYear();
    $("#copyRight").text(`Made With Love By Surprise Mathonsi |  © ${year}`)
})





