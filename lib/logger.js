
const log = (str) => console.log(str);

const incoming = ({path , method, ...rest}) => {
    const time = new Date();
    const msg = `Incoming ${method} request at ${time.toString()} routed to ${path}`;
    log(msg);
}

const logger = {
    incoming,
    log
};

export default logger;
