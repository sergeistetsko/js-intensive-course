export const data = {
    todolist: {
        id: crypto.randomUUID(),
        title: 'Todolist',
        tasks: [
            {
                id: crypto.randomUUID(),
                title: 'Learn HTML'
            },
            {
                id: crypto.randomUUID(),
                title: 'Learn CSS'
            },
            {
                id: crypto.randomUUID(),
                title: 'Learn JS'
            },
            {
                id: crypto.randomUUID(),
                title: 'Learn React'
            }
        ]
    }
}

let changeDataCallback = () => {}

function setSubscriber(subscriber) {
    changeDataCallback = subscriber
}

export function deleteTask(taskId) {
    const tasks = data.todolist.tasks
    const filteredTasks = tasks.filter( t => t.id !== taskId)
    data.todolist.tasks = filteredTasks
    
    changeDataCallback()
}