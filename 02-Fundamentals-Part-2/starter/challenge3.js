/*
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    heigth: 1.69,

    calcBMI: function(){
        return this.BMI = this.mass / (this.heigth * this.heigth)
    },
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    heigth: 1.95,

    calcBMI: function(){
        return this.BMI = this.mass / (this.heigth * this.heigth)
    }
}

mark.calcBMI()
john.calcBMI()

if(mark.BMI > john.BMI){
    console.log(`${mark.fullName} has bigger BMI (${mark.BMI.toFixed(1)}) than ${john.fullName} BMI (${john.BMI.toFixed(1)})`)
} else{
    console.log(`${john.fullName} has bigger BMI (${john.BMI.toFixed(1)}) than ${mark.fullName} BMI (${mark.BMI.toFixed(1)})`)
}