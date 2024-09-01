function addingPost(){
    console.log("hdfjh");
    var title = document.getElementById("postTitle");
    var descript = document.getElementById("postDescription");
    var post = document.getElementById("postOutput");
console.log(title.value, descript.value)
if (title.value && descript.value){
    post.innerHTML += `<div class="card mt-3">
    <div class="card-header fontStyle">
        @Post
    </div>
    <div class="card-body">
        <h5 class="card title fontStyle">${title.value}</h5>
        <p class="card-text fontStyle">${descript.value}</p>
    </div>
    <div class="d-flex p-3 gap-2">
        <button type="button" class="btn btn-success" onclick = "editPost()">Edit</button>
        <button type="button" class="btn btn-danger" onclick = "deletepost(event)">Delete</button>
    </div>
</div>`
}
else{
    Swal.fire("Title and description are required!");
}


title.value = "";
descript.value = "";
}

function deletepost(event){
    event.target.parentNode.parentNode.remove();
}

// async function editPost(){
//     const { value: formValues } = await Swal.fire({
//         title: "Multiple inputs",
//         html: `
//           <input id="updatedTitle" class="swal2-input">
//           <input id="updatedDescription" class="swal2-input">
//         `,
//         focusConfirm: false,
//         preConfirm: () => {
//           return [
//             document.getElementById("updatedTitle").value,
//             document.getElementById("updatedDescription").value
//           ];
//         }
//       });
//       if (formValues) {
//         Swal.fire(JSON.stringify(formValues));
//       }
//       var updatedPostTitle = document.getElementById("updatedTitle");
//       var updatedPostDescription = document.getElementById("updatedDescription");
// }


async function editPost() {
    const { value: formValues } = await Swal.fire({
        title: "Multiple inputs",
        html: `
          <input id="updatedTitle" class="swal2-input">
          <input id="updatedDescription" class="swal2-input">
        `,
        focusConfirm: false,
        preConfirm: () => {
          const updatedTitle = document.getElementById("updatedTitle").value;
          const updatedDescription = document.getElementById("updatedDescription").value;
          return [updatedTitle, updatedDescription];
        }
    });

    if (formValues) {
        // Process the form values
        const [updatedTitle, updatedDescription] = formValues;
        Swal.fire(`Title: ${updatedTitle}, \n Description: ${updatedDescription}`);
    }
}
