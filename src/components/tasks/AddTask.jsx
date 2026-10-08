import { Plus } from "lucide-react";
import { useState } from "react";

function AddTask({ onAdd }) {

  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAdd(trimmedTitle);

    setTitle("");
  }

  return (
    <form
      className="add-task-bar"
      onSubmit={handleSubmit}
    >

      <button
        type="submit"
        className="add-task-icon"
        aria-label="Add task"
      >
        <Plus size={17} />
      </button>

      <input
        type="text"
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
        placeholder="Add New Task"
      />

    </form>
  );
}

export default AddTask;