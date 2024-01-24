"use client"
import { useEffect, useState } from "react";
import style from "./dogs.module.css";
import Image from "next/image";
function Dog(){
    const [dog, setDog] = useState("/vercel.svg");
    const url = "https://images.dog.ceo/breeds/setter-irish/n02100877_4506.jpg";
    useEffect(()=> {
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setDog(data.message)})
    },[])

    return(
        <div className={style.box}>
            <h1>Dogs</h1>
            <Image src={dog} alt="dog" width={500} height={500}/>
        </div>
    )
}

export default Dog;