import { useState } from "react";
import { Folder } from "./components/Folder";
import explorer from "./data/folderData";
import { useTraverseTree } from "./hooks/useTraverseTree";
import "./styles.css";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, removeNode, editNode } = useTraverseTree();

  const handleInsertNode = (folderId, folderName, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, folderName, isFolder);
    setExplorerData(finalTree);
  };

  const handleEditNode = (folderId, folderName) => {
    const finalTree = editNode(explorerData, folderId, folderName);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (folderId) => {
    const finalTree = removeNode(explorerData, folderId);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        explorer={explorerData}
      />
    </div>
  );
}
