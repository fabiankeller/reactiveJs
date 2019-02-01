module.exports = function map(transformFn) {
    const inputObservable = this;
    const outputObservable = createObservable(function subscribe(outputObserver) {
        inputObservable.subscribe({
            next: (x) => {
                try {
                    const result = transformFn(x);
                    outputObserver.next(result);
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