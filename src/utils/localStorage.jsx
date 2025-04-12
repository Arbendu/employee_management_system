//localStorage.clear()
const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare Sales Report",
                "description": "Compile monthly sales data and analyze trends.",
                "date": "2025-02-14",
                "category": "Reports",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Meeting",
                "description": "Discuss project requirements with new client.",
                "date": "2025-02-15",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Youtube Clone",
                "description": "Using ReactJs and AWS.",
                "date": "2025-02-15",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Rohit",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Fix Website Bugs",
                "description": "Identify and resolve UI/UX issues on the company portal.",
                "date": "2025-02-13",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Security Audit",
                "description": "Check for vulnerabilities in the system.",
                "date": "2025-02-17",
                "category": "IT Security",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Priya",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Write Blog Post",
                "description": "Create an article on emerging tech trends.",
                "date": "2025-02-16",
                "category": "Content",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Collaboration",
                "description": "Coordinate with the team for next sprint planning.",
                "date": "2025-02-18",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Social Media Analysis",
                "description": "Review engagement metrics for marketing campaign.",
                "date": "2025-02-19",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Create a chatBot",
                "description": "Create the chat bot using ReactJs, for backend use AWS.",
                "date": "2025-02-25",
                "category": "Devlopment",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Suresh",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Data Entry",
                "description": "Update the CRM database with latest client info.",
                "date": "2025-02-20",
                "category": "Administration",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Expense Report",
                "description": "Prepare a detailed company expense report.",
                "date": "2025-02-21",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Neha",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Software Update",
                "description": "Deploy the latest software patch on internal systems.",
                "date": "2025-02-22",
                "category": "IT",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Follow-up",
                "description": "Reach out to existing clients for feedback.",
                "date": "2025-02-23",
                "category": "Customer Relations",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Product Testing",
                "description": "Test the new product features before release.",
                "date": "2025-02-24",
                "category": "Quality Assurance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    }
];

//console.log(employees);


const admin = [
    {
        "id": 1,
        "firstName": "Admin",
        "email": "admin@me.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
}