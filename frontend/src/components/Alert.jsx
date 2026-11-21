import { alertMsg, confirmMsg } from "../utils/alert";

function Alert() {

  const handleDelete = async () => {
    if( await confirmMsg("Want to delete this", "This can't be undone")) {
      alertMsg("Deleted", "Item was removed");
    }
  }
  return(
    <>
      <button onClick={() => handleDelete()} className="bg-gray-400 p-2">Delete</button>
    </>
  );
}

export default Alert