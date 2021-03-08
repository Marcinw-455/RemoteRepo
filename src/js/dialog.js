export default function initDialog () {
    const dialogButton = document.getElementById('dialog-button');
    dialogButton.onclick = function () {
        createDialogWindow();
        saveButton();
        closeButtons();
    };
}

const saveButton = function () {
    document.querySelector(".modal-footer-button-save").addEventListener('click', function () {
        alert("Success!");
    });
};

const closeButtons = function () {
    document.querySelector(".modal-footer-button-close").addEventListener('click', function () {
        document.querySelector(".modal-dialog").classList.add("d-none");
    });
};

const createDialogElement = function (type, classList){
    const element = document.createElement(type);
    element.classList = classList;
    return element;
}

const createDialogWindow = function () {
    const mainContainer = document.getElementById('main-container');
    const modalDialog = createDialogElement("div", "modal-dialog")
    mainContainer.appendChild(modalDialog);
    const modalContent = createDialogElement("div", "modal-content");
    modalDialog.appendChild(modalContent);
    const modalHeader = createDialogElement("div", "modal-header");
    modalContent.appendChild(modalHeader);
    const modalTitle = createDialogElement("h5", "modal-title");
    modalTitle.innerText = "Modal title";
    modalHeader.appendChild(modalTitle);
    const modalHeaderButtonClose = createDialogElement("button", "modal-header-button-close");
    modalHeaderButtonClose.setAttribute("data-dismiss", "modal");
    modalHeaderButtonClose.setAttribute("aria-label", "Close");
    modalHeader.appendChild(modalHeaderButtonClose);
    const modalBody = createDialogElement("div", "modal-body");
    modalBody.innerHTML = "<p>Modal body text goes here.</p>";
    modalHeader.appendChild(modalBody);
    const modalFooter = createDialogElement("div", "modal-footer");
    modalContent.appendChild(modalFooter);
    const modalFooterButtonClose = createDialogElement("button", "modal-footer-button-close");
    modalFooterButtonClose.innerHTML = "close";
    modalFooterButtonClose.setAttribute("data-dismiss", "modal");
    modalFooter.appendChild(modalFooterButtonClose);
    const modalFooterButtonSave = createDialogElement("button", "modal-footer-button-save");
    modalFooterButtonSave.innerHTML = "Save changes";
    modalFooter.appendChild(modalFooterButtonSave);
}