const show=()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("pass").value;
    const phone=document.getElementById("number").value;
    let gender="";
    const genders=document.getElementsByName("gender");
    for(let i=0;i<genders.length;i++){
        if (genders[i].checked){
            gender=genders[i].value;
            break;
    }
}
let qualifications=[];
const qualify=document.getElementsByClassName("qualification");
for(let i=0;i<qualify.length;i++){
    if(qualify[i].checked){
        qualifications.push(qualify[i].value);
    }
}
const dob=document.getElementById("dob").value;
let image = document.getElementById("img").files[0];
let imgname = image ? image.name : "No image chosen";
let imageURL = "";
if (image) {
    imageURL = URL.createObjectURL(image);
}
document.getElementById("result").innerHTML=
`
<h2>Student Details</h2>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Password:</b>${password}</p>
<p><b>Phone no:</b>${phone}</p>
<p><b>Gender:</b>${gender}</p>
<p><b>Qualification:</b>${qualifications.join(",")}</p>
<p><b>DOB:</b>${dob}</p>
<p><b>Image:</b>${imgname}</p>
<p><b>Image:</b></p>
<img src="${imageURL}" width="200" height="200">

`;
};