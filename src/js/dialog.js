export default function () {
    const dialogButton = document.getElementById('dialog-button');
    dialogButton.onclick = () =>{
        createDialogWindow();
        saveButton();
        closeButtons();
    };
}

const saveButton = () => {
    document.querySelector(".modal-footer-button-save").addEventListener('click', () => {
        alert("Success!");
    });
};

const closeButtons = () => {
    document.querySelector(".modal-footer-button-close").addEventListener('click', () => {
        document.querySelector(".modal-dialog").classList.add("d-none");
    });
};

const createDialogElement = (type, classList = "default", text = "") => {
    const element = document.createElement(type);
    element.classList = classList;
    element.innerHTML = text;
    return element;
}

const createDialogWindow = () => {
    const mainContainer = document.getElementById('main-container');
    const modalDialog = createDialogElement("div","modal-dialog", "")
    const modalContent = createDialogElement("div", "modal-content", "");
    const modalHeader = createDialogElement("div", "modal-header", "");
    const modalTitle = createDialogElement("h5", "modal-title", "Modal title");
    const modalHeaderButtonClose = createDialogElement("button", "modal-header-button-close", "");
    const modalBody = createDialogElement("div", "modal-body", "<p>Modal body text goes here.</p>");
    const modalFooter = createDialogElement("div", "modal-footer", "");
    const modalFooterButtonClose = createDialogElement("button", "modal-footer-button-close", "close");
    const modalFooterButtonSave = createDialogElement("button", "modal-footer-button-save", "Save changes");
    mainContainer.appendChild(modalDialog);
    modalDialog.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalHeaderButtonClose.setAttribute("data-dismiss", "modal");
    modalHeaderButtonClose.setAttribute("aria-label", "Close");
    modalHeader.appendChild(modalHeaderButtonClose);
    modalHeader.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalFooterButtonClose.setAttribute("data-dismiss", "modal", "");
    modalFooter.appendChild(modalFooterButtonClose);
    modalFooter.appendChild(modalFooterButtonSave);
}
