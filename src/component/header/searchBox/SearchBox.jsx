import { IoIosSearch } from "react-icons/io";
import { Button } from "@mui/material";
const SearchBox = () => {
  return (
    
      <div className="headersearch">
                <input type="text" placeholder="Search product" />
                <Button> <IoIosSearch/> </Button>
     </div>
    
  )
}

export default SearchBox
