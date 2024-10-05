import { useState } from "react";

export const Folder = ({
  explorer,
  handleInsertNode,
  handleDeleteNode,
  handleEditNode,
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(explorer.name);

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

  const onAddFolder = (e, isFolder) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, isFolder);
      setShowInput({
        ...showInput,
        isVisible: false,
      });
    }
  };

  const deleteFolder = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorer.id);
  };

  const editFolder = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const onEditFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleEditNode(explorer.id, e.target.value);
      setIsEditing(false);
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div onClick={() => setExpand(!expand)} className="folder">
          {isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={onEditFolder}
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
          ) : (
            <span>📁 {explorer.name}</span>
          )}
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            <button onClick={editFolder}>Edit</button>
            <button onClick={deleteFolder}>Delete</button>
          </div>
        </div>
        <div
          style={{
            display: `${expand ? "block" : "none"}`,
            paddingLeft: "25px",
          }}
          className="inputContainer"
        >
          {showInput.isVisible ? (
            <div>
              <span style={{ marginRight: "6px" }}>
                {showInput.isFolder ? "📁" : "📄"}
              </span>
              <input
                type="text"
                onKeyDown={(e) => onAddFolder(e, showInput.isFolder)}
                onBlur={() =>
                  setShowInput({
                    ...showInput,
                    isVisible: false,
                  })
                }
                className="inputContainer__input"
                autoFocus
              />
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: `${expand ? "block" : "none"}`,
            paddingLeft: "25px",
          }}
        >
          {explorer.items?.map((file) => (
            <Folder
              key={file?.id}
              explorer={file}
              handleInsertNode={handleInsertNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
};
