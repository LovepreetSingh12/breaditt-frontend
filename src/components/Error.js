function Error({ message }) {
    return (
        <div className="bg-red-100 text-red-700 p-4 rounded">
            Error: {message}
        </div>
    );
}

export default Error;