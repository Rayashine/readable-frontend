const homepath = 'http://localhost:3001'

// 获取全部类别
export function getAllCategories(fn) {
    const url = `${homepath}/categories`;
    console.log('fetching from url', url);
    fetch(url, {headers: {'Authorization': 'xuejiaQian'}})
        .then((res) => {
            return (res.json())
        })
        .then((data) => {
            fn(data)
        });
}
// 获取所有帖子
export function getAllNotes(fn) {
    const url = `${homepath}/posts`;
    console.log('fetching from url', url);
    fetch(url, {headers: {'Authorization': 'xuejiaQian'}})
        .then((res) => {
            return (res.json())
        })
        .then((data) => {
            fn(data)
        });
}
// 获取指定类别下的所有帖子
export function getAllNotesByCategory(category, fn) {
    const url = `${homepath}/` + category + `/posts`;
    console.log('fetching from url', url);
    fetch(url, {headers: {'Authorization': 'xuejiaQian'}})
        .then((res) => {
            return (res.json())
        })
        .then((data) => {
            fn(data)
        });
}

