function createContactInfo(contactDetails, contactDetailIcons) {
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
 
  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Entre em contato conosco";
  contactInfo.appendChild(contactTitle);
 
  contactDetails.forEach((contact) => {
    const detailDiv = document.createElement("div");
    detailDiv.classList.add("contact-detail");
 
    const newDiv = document.createElement("div");

    // Create the icon and append it to the new div
    const detailIcon = document.createElement("i");
    detailIcon.className = "fa " + contactDetailIcons[contact.type];
    newDiv.appendChild(detailIcon);
    newDiv.classList.add("h-wrapper");
    
    // Create the type and append it to the new div
    const detailType = document.createElement("h3");
    detailType.textContent = contact.type;
    newDiv.appendChild(detailType); 
    detailDiv.appendChild(newDiv);
 
    const detailInfo = document.createElement("p");
    detailInfo.textContent = contact.info;
    detailDiv.appendChild(detailInfo);
 
    contactInfo.appendChild(detailDiv);
  });
 
  return contactInfo;
 }
 

function createContactForm() {

  const contactForm = document.createElement("form");
  contactForm.classList.add("contact-form");

  const formHeading = document.createElement("h3");
  formHeading.textContent = "Envie sua mensagem";
  contactForm.appendChild(formHeading);
  

  const nameLabel = createLabelAndInput("Nome", "text");
  const emailLabel = createLabelAndInput("Email", "email");
  const messageLabel = createLabelAndTextarea("Mensagem");

  const submitButton = document.createElement("button");
  submitButton.textContent = "Enviar";

  contactForm.appendChild(nameLabel);
  contactForm.appendChild(emailLabel);
  contactForm.appendChild(messageLabel);
  contactForm.appendChild(submitButton);

  return contactForm;
}

function createLabelAndInput(labelText, inputType) {
  const label = document.createElement("label");
  label.textContent = labelText;
  const input = document.createElement("input");
  input.setAttribute("type", inputType);
  label.appendChild(input);
  return label;
}

function createLabelAndTextarea(labelText) {
  const label = document.createElement("label");
  label.textContent = labelText;
  const textarea = document.createElement("textarea");
  textarea.setAttribute("rows", "4");
  label.appendChild(textarea);
  return label;
}

function createContactContent() {
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact");

  const contactDetails = [
    { type: "Endereço", info: "123 Rua Rual, Belo Horizonte, Minas Gerais" },
    { type: "Telefone", info: "+55 (31) 77070-7070" },
    { type: "Email", info: "email@email.com" },
  ];

  const contactDetailIcons = {
    "Endereço": "fa-home",
    "Telefone": "fa-phone",
    "Email": "fa-envelope"
   };

  const contactInfo = createContactInfo(contactDetails, contactDetailIcons);
  const contactForm = createContactForm();

  contactSection.appendChild(contactInfo);
  contactSection.appendChild(contactForm);

  return contactSection;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContactContent());
}

export default loadContact;
