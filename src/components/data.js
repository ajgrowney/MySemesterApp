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
                    title: 'Exam 3'
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
                    date: 'Nov 6',
                    title: 'HW 2',
                    result: 92
                },
                {
                    date: 'Dec 6',
                    title: 'HW 3',
                    result: 68
                }
            ]
        },
        'Final': {
            percentage: '30%',
            scores: [
                {
                    date: 'Dec 13',
                    title: 'Final Exam'
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
    }
]

export const myCourses = [
    {
        id: 1,
        year: 2017,
        term: 'Fall',
        department: 'EECS',
        number: 581,
        displayString: 'EECS 581'
    },
    {
        id: 2,
        year: 2017,
        term: 'Fall',
        department: 'EECS',
        number: 662,
        displayString: 'EECS 662'
    },
    {
        id: 3,
        year: 2017,
        term: 'Fall',
        department: 'PHSX',
        number: 511,
        displayString: 'PHSX 511'
    },
    {
        id: 4,
        year: 2016,
        term: 'Spring',
        department: 'EECS',
        number: 101,
        displayString: 'EECS 101'
    }
]