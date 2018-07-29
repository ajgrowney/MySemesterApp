import { mySyllabus } from '../../data'

const calculateAverage = (course) => {
    let course_syllabus = mySyllabus.find( syllabus => syllabus.id === course.id);

    // Calculate Averages
    let averages = course_syllabus.components.reduce((total, object) => {
        let running = 0;
        let counter = 0;
        course_syllabus[object].scores.forEach((obj) => {
            if (obj.result !== undefined) { running += obj.result; counter++; }
        });
        let avg_result = running / counter;
        let avg_object = { [object]: avg_result }
        total.push(avg_object);
        return total;
    }, []);
    //Determine Grade Percentage based off averages
    let totalGrade = 0;
    let totalPercentage = 0;
    averages.map(element => {
        let selected_key = (Object.keys(element)[0]);
        let course_comp_percentage = parseFloat(course_syllabus[selected_key].percentage) / 100.0;
        if (!isNaN(element[selected_key])) {
            totalPercentage += course_comp_percentage;
            totalGrade += element[selected_key] * course_comp_percentage;
        }
    })
    totalGrade = Math.round(((totalGrade / totalPercentage) * 10) / 10);    
    return totalGrade;
}

export default calculateAverage;