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
    const modalHeaderButtonClose = createDialogElement("button", "close", ` <span aria-hidden="true">&times;</span>`);
    const modalBody = createDialogElement("div", "modal-body", "<p>Modal body text goes here.</p>");
    const modalFooter = createDialogElement("div", "modal-footer", "");
    const modalFooterButtonClose = createDialogElement("button", "btn btn-secondary", "close");
    const modalFooterButtonSave = createDialogElement("button", "btn btn-primary", "Save changes");

    modalHeaderButtonClose.setAttribute("type", "button");
    modalHeaderButtonClose.setAttribute("data-dismiss", "modal");
    modalHeaderButtonClose.setAttribute("aria-label", "Close");
    modalFooterButtonClose.setAttribute("data-dismiss", "modal", "");
    modalHeader.append(modalTitle, modalHeaderButtonClose);
    modalFooter.append(modalFooterButtonClose, modalFooterButtonSave);
    modalContent.append(modalHeader, modalBody,modalFooter);
    modalDialog.append(modalContent);
    mainContainer.append(modalDialog);
}
