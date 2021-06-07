import readlineSync from "readline-sync";

function TodoList() {
    let tasks = [];
    function renderList() {
        for (let i = 0; i <= tasks.length; i++) {
            console.log(tasks[i], "deu certo :D");
        }
    }

    while (true) {

        const options = ['add', 'list', 'remove'];
        let index = readlineSync.keyInSelect(options, 'Which?');
        if (index === 0) {
            const task = readlineSync.question('What do you want to do? ');
            tasks.push(`🔴 ${task}`);
            console.log(tasks);
        }
        if (index === 1) {
            renderList()
        }
        if (index === 2) {
            const check = readlineSync.keyInSelect(tasks, 'What to do do you want to check?');
            console.log(array[check]);
            array[check].splice(0, 1);
        }
        if (index === 3) {
            const remove = readlineSync.keyInSelect(tasks, 'What to do do you want to remove?');
            tasks.splice(remove, 1);

            renderList();
        }
    }
}

TodoList();