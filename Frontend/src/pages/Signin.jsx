import { useState } from "react"
import { Heading } from "../components/Heading"
import { Inputbox } from "../components/Inputbox"
import { SubHeading } from "../components/SubHeading"
import { Warning } from "../components/warning"





export const Signin = () =>{

    const username = useState("");
    
    return<>
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div  className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"sign in"}/>
                <SubHeading label={"Enter your details to login to your account"}/>
                <Inputbox  label={"username"} placeholder={"username(email)"}/>
                <Inputbox label={"Password"} placeholder={"Password"}/>
                <Warning label={"do not have an account ?"} buttonname={"sign up"} to={"/Signup"}/>
            </div>
        </div>
    </div>
    </>
}

