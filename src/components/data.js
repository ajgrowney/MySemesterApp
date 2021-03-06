export const mySyllabus = [
    {
        id: 1,
        components: ['Exam', 'HW', 'Final'],
        'Exam': {
            percentage: '40%',
            scores: [
                {
                    date: 'Oct 10',
                    title: 'Exam 1',
                    result: 100
                },
                {
                    date: 'Nov 21',
                    title: 'Exam 2',
                    result: 100
                },
                {
                    date: 'Dec 9',
                    title: 'Exam 3',
                    result: 88
                }
            ]
        },
        'HW': {
            percentage: '30%',
            scores: [
                {
                    date: 'Oct 1',
                    title: 'HW 1',
                    result: 100
                },
                {
                    date: 'Oct 16',
                    title: 'HW 2',
                    result: 100
                },
                {
                    date: 'Oct 30',
                    title: 'HW 3',
                    result: 100
                },
                {
                    date: 'Nov 6',
                    title: 'HW 4'
                },
                {
                    date: 'Dec 6',
                    title: 'HW 5',
                    result: 65
                }
            ]
        },
        'Final': {
            percentage: '30%',
            scores: [
                {
                    date: 'Dec 13',
                    title: 'Final Exam',
                    result: 80
                }
            ]
        }
    },
    {
        id: 2,
        components: ['Exam', 'HW', 'Final'],
        'Exam': {
            percentage: '50%',
            scores: [
                {
                    date: 'Aug 30',
                    title: 'Exam 1',
                    result: 88
                }
            ]
        },
        'HW': {
            percentage: '25%',
            scores: [

            ]
        },
        'Final': {
            percentage: '25%',
            scores: [
                {
                    date: 'Dec 14',
                    title: 'Final Exam'
                }
            ]
        }
    },
    {
        id: 3,
        components: ['Exam', 'Lab', 'HW', 'Final'],
        'Exam': {
            percentage: '25%',
            scores: [
                {
                    date: 'Sep 10',
                    title: 'Exam 1',
                    result: 91
                }
            ]
        },
        'Lab' : {
            percentage: '15%',
            scores: [
                {
                    date: 'Sep 30',
                    title: 'Lab 1',
                    result: 68
                }
            ]
        },
        'HW': {
            percentage: '30%',
            scores: [
                {
                    date: 'Sep 15',
                    title: 'HW 1',
                    result: 83
                }
            ]
        },
        'Final': {
            percentage: '30%',
            scores: [
                {
                    date: 'Dec 19',
                    title: 'Final Exam'
                }
            ]
        }
    },
    {
        id: 4,
        components: ["Attendance"],
        'Attendance': {
            percentage: '100%',
            scores:[
                {
                    title: 'General Attendance',
                    result: 100
                }
            ]
        }
    }
]

export const myCourses = [
    {
        id: 1,
        year: 2017,
        term: 'Fall',
        department: 'EECS',
        number: 581,
        displayString: 'EECS 581',
        creditHours: 3
    },
    {
        id: 2,
        year: 2017,
        term: 'Fall',
        department: 'EECS',
        number: 662,
        displayString: 'EECS 662',
        creditHours: 4
    },
    {
        id: 3,
        year: 2017,
        term: 'Fall',
        department: 'PHSX',
        number: 511,
        displayString: 'PHSX 511',
        creditHours: 3
    },
    {
        id: 4,
        year: 2016,
        term: 'Spring',
        department: 'EECS',
        number: 101,
        displayString: 'EECS 101',
        creditHours: 1
    }
]
export const mySemesters = [
    {
        id: 1,
        key: 'sp_2016',
        term: 'Spring',
        year: 2016,
        displayString: 'Spring 2016'
    },
    {
        id: 2,
        key: 'fa_2017',
        term: 'Fall',
        year: 2017,
        displayString: 'Fall 2017'
    }
]