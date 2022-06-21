exports.errorHandler = (err, req, res, next) => {
    const status = err.status || 404;
    const errorMessage = err.message || 'Somethong went wrong :(';

    res.status(status).render('404', { error: errorMessage })
}