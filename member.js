function skillsMember() {
    var skills = ['html', 'css', 'js', 'php', 'mysql'];
    var member = {
        name: 'John',
        age: 25,
        skills: skills,
        showSkills: function () {
            console.log(this.skills);
        }
    };
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    console.log(member.showSkills());
}