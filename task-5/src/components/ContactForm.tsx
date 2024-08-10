import "../styles/ContactForm.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormData = {
    name: string;
    email: string;
    message: string;
};
const ContactForm = () => {
    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    const form = useForm<FormData>(
        {
            defaultValues: {
                name: "",
                email: "",
                message: "",
            },
        }
    );
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    return (
        <div className="container">
            <h2>Contact Us</h2>
            <div className="form-control">
                <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-control">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", {
                            required: { value: true, message: "Name is required" },
                        })}
                    />
                    <p className="error">{errors.name?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                        },
                    })} />
                    <p className="error">{errors.email?.message}</p>
                </div>
                <div className="form-control">
                <label htmlFor="message">Message:</label>
                    <textarea id="message" {...register("message", {
                        required: {
                            value: true,
                            message: "Message is required",
                        },
                    })} />
                    <p className="error">{errors.message?.message}</p>
                </div>
                    
                    {/* <br /> */}
                    <button type="submit">Send</button>
                </form>
            </div>
            <DevTool control={control} />
        </div>
    );
};

export default ContactForm;
