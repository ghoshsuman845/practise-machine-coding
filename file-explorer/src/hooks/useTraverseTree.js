export const useTraverseTree = () => {
  function insertNode(tree, folderId, folderName, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: folderName,
        isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((item) => {
      console.log("item", item);
      return insertNode(item, folderId, folderName, isFolder);
    });
    return { ...tree, items: latestNode };
  }

  function removeNode(tree, folderId) {
    if (tree.id === folderId) {
      return null;
    }

    let latestNode = tree.items
      .map((item) => removeNode(item, folderId))
      .filter((item) => item !== null);
    return { ...tree, items: latestNode };
  }

  function editNode(tree, folderId, folderName) {
    if (tree.id === folderId) {
      return { ...tree, name: folderName };
    }
    let latestNode = tree.items.map((item) => {
      return editNode(item, folderId, folderName);
    });
    return { ...tree, items: latestNode };
  }

  return { insertNode, removeNode, editNode };
};
