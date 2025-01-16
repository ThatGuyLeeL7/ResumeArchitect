//Script for uploading resume
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const formData = new FormData();
    formData.append("file", file);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        alert(`File uploaded successfully: ${data.fileName}`);
      })
      .catch(error => {
        console.error("Error uploading file:", error);
        alert("Failed to upload file.");
      });
  }
}
///////////////////////////////////////////

