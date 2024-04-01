import React from "react";

export enum DialogType {
    Alert = "alert",
    Success = "success",
    Error = "error",
    Question = "question",
    Choice = "choice",
    Loading = "Loading"
}

export interface PopupDialogProps {
    dialogType: DialogType;
    dialogText: string;
    isOpen: boolean;
    onClose: () => void;
    onYes?: () => void;
    onNo?: () => void;
    choice1Text?: string;
    choice2Text?: string
    onChoice1?: () => void;
    onChoice2?: ()=> void;
}

const Backdrop: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50" onClick={onClick}></div>
);

const SuccessDialog: React.FC<{ dialogText: string; onClose: () => void }> = ({ dialogText, onClose }) => (
    <dialog open className="custom-dialog success-dialog">
        <p>{dialogText}</p>
        <button onClick={onClose}>Close</button>
    </dialog>
);

const ErrorDialog: React.FC<{ dialogText: string; onClose: () => void }> = ({ dialogText, onClose }) => (
    <dialog open className="custom-dialog error-dialog">
        <p>{dialogText}</p>
        <button onClick={onClose}>Close</button>
    </dialog>
);


export const PopupDialog: React.FC<PopupDialogProps> = ({ dialogText, dialogType,
                                                            isOpen, onClose, onYes, onNo
                                                            , choice1Text, choice2Text,
                                                            onChoice1, onChoice2,
                                                        }) => {
    let DialogComponent: React.FC<{ dialogText: string; onClose: () => void; onYes?: () => void; onNo?: () => void;
        onChoice1?: () => void; onChoice2?: ()=> void; choice1Text?: string; choice2Text?: string }>;



    switch (dialogType) {
        case DialogType.Success:
            DialogComponent = SuccessDialog;
            break;
        case DialogType.Error:
            DialogComponent = ErrorDialog;
            break;
        default:
            DialogComponent = SuccessDialog;
    }

    return (
        <>
            {isOpen && (
                <>
                    <Backdrop onClick={onClose} />
                    <DialogComponent dialogText={dialogText}
                                     onClose={onClose}
                                     onYes={onYes}
                                     onNo={onNo}
                                     choice1Text={choice1Text}
                                     choice2Text={choice2Text}
                                     onChoice1={onChoice1}
                                     onChoice2={onChoice2}
                    />
                </>
            )}
        </>
    );
};
