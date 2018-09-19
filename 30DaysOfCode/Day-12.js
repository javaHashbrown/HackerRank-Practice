class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
        constructor(firstName, lastName, identification, scores){
            super(firstName, lastName, identification);
            this._socres = scores;
        }
        get scores(){
            return this._socres;
        }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
        calculate(){
            const numSubjects = this.scores.length;
            const sumScores = this.scores.reduce((acc,cur)=>acc+cur,0);
            const avg = sumScores/numSubjects;
            return this.getGrade(avg);
        }
        getGrade(avg){
            if(avg<40){
                return 'T';
            }else if(avg<55){
                return 'D';
            }else if(avg<70){
                return 'P';
            }else if(avg<80){
                return 'A';
            }else if(avg<90){
                return 'E';
            }else if(avg<=100){
                return 'O';
            }
        }
}