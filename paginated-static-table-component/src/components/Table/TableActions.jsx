const TableActions = ({ onFilter, onSearch, otherActions }) => {
  return (
    <div>
      <div className="table-actions">
        {onSearch ? (
          <div className="table-actions__search">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => onSearch(e)}
            />
          </div>
        ) : null}

        {otherActions ? (
          <div className="table-actions__other">{otherActions}</div>
        ) : null}
      </div>
    </div>
  );
};

export default TableActions;
