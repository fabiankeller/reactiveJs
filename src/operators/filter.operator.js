module.exports = function filter(filterFn) {
    const inputObservable = this;
    const outputObservable = createObservable(function subscribe(outputObserver) {
        inputObservable.subscribe({
            next: (x) => {
                try {
                    if (filterFn(x)) {
                        outputObserver.next(x);
                    }
                } catch (err) {
                    outputObserver.error(err);
                }
            },
            error: e => outputObserver.error(e),
            complete: () => outputObserver.complete(),
        });
    });
    return outputObservable;
}