

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
new Skills("GitHub","Good","Good"),
new Skills("Git","Good","download (1).jpg"))
  


$(function(){
   let grid= $(".TechnicalSkill")
    for(let skill in TechnicalComputerSkill){
       $("#name").append(TechnicalComputerSkill[skill].name)

          console.log(TechnicalComputerSkill[skill].name)
    }
   
})





