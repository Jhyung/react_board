const contents = [
    {
        id: "1",
        title: "Careless Mistakes",
        content: "This is very disappointing.",
        author: "Pat J Ryll",
        date: "2014/04/13"
    },
    {
        id: "2",
        title: "Hindered by many, many mistakes",
        content: "2",
        author: "Joshua Cunningham",
        date: "2014/06/03"
    },
    {
        id: "3",
        title: "like CS 101 with JS",
        content: "3",
        author: "R. Friesel Jr.",
        date: "2014/03/30"
    },
    {
        id: "4",
        title: "Incomplete",
        content: "4",
        author: "Audioeye",
        date: "2015/03/30"
    },
    {
        id: "5",
        title: "5",
        content: "5",
        author: "5",
        date: "5/5/5"
    }
]

export default class boardApi {
    static getAllContents() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], contents));
        });
    }

    static saveContent(content) {
        content = Object.assign({}, content);
        return new Promise((resolve, reject) => {
            const minLength = 1;
            content.id = parseInt(contents[contents.length - 1].id) + 1;
            content.date = new Date().toLocaleDateString().replace(/(\s*)/g,"").split('.').slice(0,3).join('/');
            contents.push(content);

            resolve(content);
        });
    }

    static updateContent(content) {
        content = Object.assign({}, content);
        return new Promise((resolve, reject) => {
            let targetIndex = contents.findIndex(a => a.id === content.id);

            content.date = new Date()
                                .toLocaleDateString()
                                .replace(/(\s*)/g,"")
                                .split('.')
                                .slice(0,3)
                                .join('/');

            resolve(content);
        });
    }

    static deleteContent(boardId) {
        return new Promise((resolve, reject) => {
            let targetIndex = contents.findIndex(a => a.id === boardId);
            contents.slice(targetIndex, 1);
            contents.map((v,i) => { v.id = String(i + 1); });
            resolve(contents);
        });
    }
}
