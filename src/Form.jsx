import {useForm} from "react-hook-form";



export const Form = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = () => {
        console.log("Hello World")
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First Name..."{...register("first Name")} />
            <input type="text" placeholder="Last Name..."{...register("last Name")}  />
            <input type="text" placeholder="Email..."{...register("email")}  />
            <input type="text" placeholder="Age..."{...register("age")}  />
            <input type="text" placeholder="Password..."{...register("password")}  />
            <input type="text" placeholder="Confirm Password..."{...register("password")}  />
            <input type="submit"/>
                
        </form>
    );
};