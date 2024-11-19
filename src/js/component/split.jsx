import { useState } from "react"


export const Split = () => {
    const [values, setValues] = useState([]);
    console.log(values);
    return (
        <div>
            <ul>

                {values.map(item => (
                    <li key={item}>
                        <p>{item}</p>
                    </li>))
}

            </ul>
        </div>)
}
