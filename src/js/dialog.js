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
            alert("Sukces");
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
    const modalDialog = createDialogElement("div", "modal-dialog")
    document.getElementById("main-container").appendChild(modalDialog);
    const modalContent = createDialogElement("div", "modal-content");
    document.querySelector(".modal-dialog").appendChild(modalContent);
    const modalHeader = createDialogElement("div", "modal-header");
    document.querySelector(".modal-content").appendChild(modalHeader);
    const modalTitle = createDialogElement("h5", "modal-title");
    document.querySelector(".modal-header").appendChild(modalTitle);
    document.querySelector(".modal-title").innerText = "Modal title";
    const modalHeaderButtonClose = createDialogElement("button", "modal-header-button-close");
    document.querySelector(".modal-header").appendChild(modalHeaderButtonClose);
    document.querySelector(".modal-header-button-close").setAttribute("data-dismiss", "modal");
    document.querySelector(".modal-header-button-close").setAttribute("aria-label", "Close");
    const modalBody = createDialogElement("div", "modal-body");
    document.querySelector(".modal-header").appendChild(modalBody);
    document.querySelector(".modal-body").innerHTML = "<p>Modal body text goes here.</p>";
    const modalFooter = createDialogElement("div", "modal-footer");
    document.querySelector(".modal-content").appendChild(modalFooter);
    const modalFooterButtonClose = createDialogElement("button", "modal-footer-button-close");
    document.querySelector(".modal-footer").appendChild(modalFooterButtonClose);
    document.querySelector(".modal-footer-button-close").innerHTML = "close";
    document.querySelector(".modal-footer-button-close").setAttribute("data-dismiss", "modal");
    const modalFooterButtonSave = createDialogElement("button", "modal-footer-button-save");
    document.querySelector(".modal-footer").appendChild(modalFooterButtonSave);
    document.querySelector(".modal-footer-button-save").innerHTML = "Save changes";
}







