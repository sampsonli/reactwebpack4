export default ({ pastDelay, timedOut, error }) => {
    if (pastDelay) {
        return <div>loading</div>;
    } if (timedOut) {
        return <div>Taking a long time...</div>;
    } if (error) {
        return <div>Error!</div>;
    }
    return null;
};
