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
                    result: '93%'
                },
                {
                    date: 'Nov 21',
                    title: 'Exam 2',
                    result: '86%'
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
                    date: 'Dec 6',
                    title: 'HW 1'
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
            percentage: '50%'
        },
        'HW': {
            percentage: '25%'
        },
        'Final': {
            percentage: '25%'
        }
    }
]

export const myCourses = [
    {
        department: 'EECS',
        number: 581,
        displayString: 'EECS 581',
        term: 'Fall',
        year: 2017,
        id: 1
    },
    {
        department: 'EECS',
        number: 662,
        displayString: 'EECS 662',
        term: 'Fall',
        year: 2017,
        id: 2
    },
    {
        department: 'PHSX',
        number: 511,
        displayString: 'PHSX 511',
        term: 'Fall',
        year: 2017,
        id: 3
    },
    {
        department: 'EECS',
        number: 101,
        displayString: 'EECS 101',
        term: 'Spring',
        year: 2016,
        id: 4
    }
]