import { useLocation } from "react-router-dom";
import useBookData from "./hook/useBookData";


function Breadcrumb() {

    const location = useLocation();
    const path = location.pathname.split("/").pop();

    if (path !== "books" && path !== "about" && path !== "home") {

        const [loading, error, book] = useBookData(path)

        return (
            <div>
                <span> / </span>
                {book.title}
            </div>
        )
    }

    else {
        return;
    }


}

export default Breadcrumb;