import toast from "react-hot-toast";

const DEFAULT_MESSAGE = "Save sucessful";

export function notify(message = DEFAULT_MESSAGE, status: "error" | "success" = "success") {
    if (status === "error") return toast.error(message);

    return toast.success(message, {
        duration: 2000,
    });
}
