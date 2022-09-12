const ErrorMessage = ({children}) =>{
    return(
        <div
        style={{
            width:"100%",
            marginBottom:10,
            borderRadius: 4,
            color: "red",
            padding: 10,
            textTransform: "capitalize",
            }}
            >
                {children}
            </div>
    );
};

export default ErrorMessage;