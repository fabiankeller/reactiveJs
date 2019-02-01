const createObservable = require('./observer/createObservable.js');

const arrayObservable = createObservable((observer) => {
    [10, 20, 30].forEach(observer.next);
    observer.complete();
});

const observer = {
    next: (data) => {
        console.log(data);
    },
    error: (err) => {
        console.error(err);
    },
    complete: () => {
        console.log('done');
    }
}

arrayObservable
    .map(x => x / 10)
    .filter(x => x !== 2)
    .subscribe(observer);