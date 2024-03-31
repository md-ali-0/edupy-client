const getAllStudents = async () => {
    const response = await fetch("https://edupy-server.vercel.app/users");
    const result = await response.json();

    return result;
};


export default getAllStudents