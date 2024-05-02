document.getElementByClassName("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    const firstName = document.getElementByClassName("firstName").value;
    const lastName = document.getElementByClassName("lastName").value;
    const address = document.getElementByClassName("address").value;
    const gender = document.getElementByClassName("gender").value;
    const phoneNumber = document.getElementByClassName("phoneNumber").value;
    const message = document.getElementByClassName("message").value;

    // Display form information
    const output = document.getElementByClassName("output");
    output.innerHTML = `
      <p>First name: ${firstName}</p>
      <p>Last name: ${lastName}</p>
      <p>Address: ${address}</p>
      <p>Gender: ${gender}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Message: ${message}</p>
    `;
  });