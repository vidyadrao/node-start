module.exports = (arrayOfPromises) => {
    let array = arrayOfPromises.map(
                                    prom => {
                                        return prom.then((data) => ({value : data, status: 'resolved'}))
                                                .catch((data) =>  ({value : data, status: 'rejected'}))
                                    }
                                );
    
    return Promise.all(array);
}