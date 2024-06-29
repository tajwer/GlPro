import React from "react";

const User=(props)=>{
    const {data} =props
return (
<div>
    <h1> {data.name}</h1>
    <h3> {data.qualification}</h3>
</div>
)
}
export default User