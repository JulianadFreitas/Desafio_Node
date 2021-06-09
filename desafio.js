import readlineSync from "readline-sync";

    
    let tasks = [];
    const options = ['add', 'list', 'check', 'remove'];
    let index = readlineSync.keyInSelect(options, 'Type your comand?');
    while (index !== -1){
        if (index === 0) {
            const task = readlineSync.question('What do you want to do? ');
            const todoo = {text: task, done: false};
            tasks.push(todoo);
        }
        if (index === 1) {
            console.log("===========================");
            if(tasks.length === 0)(console.log("nenhuma tarefa"));
            tasks.forEach((item) => {
            const emoji = item.done ? '🟢' : '🔴';
            console.log(`${emoji} ${item.text}`)
        });
            console.log("===========================");
        }else if (index === 2) {
            const optionsCheck = tasks.map((item) => {
               const emoji = item.done ? '🟢' : '🔴';
               return `${emoji} ${item.text}`
            });
            
            const IndexToCheck = readlineSync.keyInSelect(optionsCheck , 'What to do do you want to check?');
            if (IndexToCheck  !== -1){
                const todo = tasks[IndexToCheck];
                todo.done = !todo.done;
            } 
        }else if (index === 3) {
            const optionsCheck = tasks.map((item) => {
               const emoji = item.done ? '🟢' : '🔴';
               return `${emoji} ${item.text}`
            });
            
            const IndexToRemove = readlineSync.keyInSelect(optionsCheck , 'What to do do you want to remove?');

            
             tasks.splice(IndexToRemove, 1)
        }

        index = readlineSync.keyInSelect(options, 'Type your comand?');
    } 
    console.log('fim');


